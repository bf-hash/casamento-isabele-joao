import { getSupabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

const ABACATE_API = "https://api.abacatepay.com/v1";

function siteOrigin(request: Request) {
  // Preferimos a env pública; caímos para a origem da requisição.
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    request.headers.get("origin") ||
    new URL(request.url).origin
  );
}

export async function POST(request: Request) {
  const body = await request.json();
  const supabase = getSupabase();

  // 1) Registra a contribuição como "pending".
  const { data: row, error: insertError } = await supabase
    .from("gift_contributions")
    .insert({
      gift_id: body.giftId,
      gift_name: body.giftName,
      amount: body.amount,
      name: body.name,
      note: body.note,
      payment_method: body.method ?? null,
      status: "pending",
    })
    .select("id")
    .single();

  if (insertError) {
    return NextResponse.json({ error: insertError.message }, { status: 500 });
  }

  // 2) Cria a cobrança no AbacatePay (checkout hospedado: PIX + cartão).
  const origin = siteOrigin(request);
  const abacateRes = await fetch(`${ABACATE_API}/billing/create`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.ABACATEPAY_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      frequency: "ONE_TIME",
      methods: ["PIX", "CARD"],
      products: [
        {
          externalId: body.giftId,
          name: body.giftName,
          quantity: 1,
          // AbacatePay usa centavos: R$ 1.000 -> 100000
          price: Math.round(Number(body.amount) * 100),
        },
      ],
      // externalId nos ajuda a correlacionar o pagamento com a nossa linha.
      externalId: row.id,
      returnUrl: `${origin}/#gifts`,
      completionUrl: `${origin}/presente/obrigado`,
    }),
  });

  const abacateJson = await abacateRes.json();

  if (!abacateRes.ok || abacateJson.error) {
    const message =
      abacateJson?.error?.message || abacateJson?.error || "Falha ao criar a cobrança";
    return NextResponse.json({ error: message }, { status: 502 });
  }

  const billing = abacateJson.data;

  // 3) Guarda o id da cobrança para o webhook conseguir marcar como paga.
  await supabase
    .from("gift_contributions")
    .update({ provider_billing_id: billing.id })
    .eq("id", row.id);

  return NextResponse.json({ id: row.id, checkoutUrl: billing.url });
}

export async function GET() {
  const { data, error } = await getSupabase()
    .from("gift_contributions")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

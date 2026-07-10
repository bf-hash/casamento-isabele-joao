import { getSupabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

// O AbacatePay chama esta URL quando o pagamento muda de estado.
// No painel deles, você cadastra a URL do webhook com um secret na query:
//   https://seusite.com/api/gifts/webhook?webhookSecret=SEU_SECRET
// e define ABACATEPAY_WEBHOOK_SECRET com o mesmo valor.
export async function POST(request: Request) {
  const url = new URL(request.url);
  const secret = url.searchParams.get("webhookSecret");

  if (
    !process.env.ABACATEPAY_WEBHOOK_SECRET ||
    secret !== process.env.ABACATEPAY_WEBHOOK_SECRET
  ) {
    return NextResponse.json({ error: "invalid secret" }, { status: 401 });
  }

  const payload = await request.json();

  // Evento de pagamento confirmado.
  if (payload?.event === "billing.paid") {
    const billing = payload?.data?.billing ?? payload?.data;
    const billingId = billing?.id;

    if (billingId) {
      await getSupabase()
        .from("gift_contributions")
        .update({ status: "paid", paid_at: new Date().toISOString() })
        .eq("provider_billing_id", billingId);
    }
  }

  // Sempre responde 200 para o AbacatePay não reenviar indefinidamente.
  return NextResponse.json({ received: true });
}

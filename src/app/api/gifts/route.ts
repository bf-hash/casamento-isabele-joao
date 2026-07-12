import { getSupabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const supabase = getSupabase();

  // Registra a intenção de presente como "pending". O pagamento em si acontece
  // no link hospedado do Mercado Pago; aqui guardamos apenas quem presenteou,
  // o valor e o bilhete para os noivos acompanharem.
  const { data: row, error: insertError } = await supabase
    .from("gift_contributions")
    .insert({
      gift_id: body.giftId,
      gift_name: body.giftName,
      amount: body.amount,
      name: body.name,
      note: body.note,
      payment_method: "mercado_pago",
      status: "pending",
    })
    .select("id")
    .single();

  if (insertError) {
    return NextResponse.json({ error: insertError.message }, { status: 500 });
  }

  return NextResponse.json({ id: row.id });
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

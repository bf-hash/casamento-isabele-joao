import { getSql } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // Registra a intenção de presente como "pending". O pagamento em si acontece
  // no link hospedado do Mercado Pago; aqui guardamos apenas quem presenteou,
  // o valor e o bilhete para os noivos acompanharem.
  try {
    const rows = (await getSql()`
      insert into gift_contributions (gift_id, gift_name, amount, name, note, payment_method, status)
      values (
        ${body.giftId},
        ${body.giftName},
        ${body.amount},
        ${body.name},
        ${body.note ?? null},
        'mercado_pago',
        'pending'
      )
      returning id
    `) as Array<{ id: string }>;

    return NextResponse.json({ id: rows[0].id });
  } catch (error) {
    const message = error instanceof Error ? error.message : "erro ao registrar presente";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const rows = await getSql()`
      select * from gift_contributions
      order by created_at desc
    `;
    return NextResponse.json(rows);
  } catch (error) {
    const message = error instanceof Error ? error.message : "erro ao ler presentes";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

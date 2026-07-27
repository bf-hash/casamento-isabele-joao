import { getSql } from "@/lib/db";
import { sendWhatsAppMessage } from "@/lib/kapso";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let guests: Array<{ name: string; phone: string }>;
  try {
    guests = (await getSql()`
      select * from guests
      where rsvp_confirmed = false and phone is not null
    `) as Array<{ name: string; phone: string }>;
  } catch (error) {
    const message = error instanceof Error ? error.message : "erro ao ler convidados";
    return NextResponse.json({ error: message }, { status: 500 });
  }

  const results = [];

  for (const guest of guests || []) {
    try {
      await sendWhatsAppMessage(
        guest.phone,
        `Oi ${guest.name}! 🌿 Ainda não recebemos sua confirmação para o casamento da Isabele & João na Costa Brava. Confirme sua presença em: https://isabeleejoao.com/#rsvp`
      );
      results.push({ name: guest.name, sent: true });
    } catch {
      results.push({ name: guest.name, sent: false });
    }
  }

  return NextResponse.json({ sent: results.length, results });
}

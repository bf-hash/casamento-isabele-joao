import { supabase } from "@/lib/supabase";
import { sendWhatsAppMessage } from "@/lib/kapso";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { data: guests, error } = await supabase
    .from("guests")
    .select("*")
    .eq("rsvp_confirmed", false)
    .not("phone", "is", null);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
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

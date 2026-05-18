import { supabase } from "@/lib/supabase";
import { sendWhatsAppMessage } from "@/lib/kapso";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const message = body.message;
  if (!message || message.kapso?.direction !== "inbound") {
    return NextResponse.json({ ok: true });
  }

  const from = message.from;
  const text = (message.text?.body || message.kapso?.content || "").toLowerCase();
  const contactName = body.conversation?.kapso?.contact_name || "";

  const salonKeywords = ["salao", "salão", "hair", "make", "cabelo", "maquiagem", "escova", "penteado"];
  const isSalonRequest = salonKeywords.some((kw) => text.includes(kw));

  if (isSalonRequest) {
    await supabase.from("salon_requests").insert({
      phone: from,
      name: contactName,
      message: text,
    });

    await sendWhatsAppMessage(
      from,
      "Obrigada! Em breve confirmaremos seu horário ✨"
    );
  }

  return NextResponse.json({ ok: true });
}

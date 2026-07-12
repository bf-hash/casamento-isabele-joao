import { getSupabase } from "@/lib/supabase";
import { runKapsoWorkflow } from "@/lib/kapso";
import { NextResponse } from "next/server";

// Endpoint de execução do workflow do Kapso que envia o WhatsApp de
// confirmação. Pode ser sobrescrito por env; o padrão é o workflow gerado.
const KAPSO_RSVP_WORKFLOW_URL =
  process.env.KAPSO_RSVP_WORKFLOW_URL ||
  "https://api.kapso.ai/platform/v1/workflows/bb919c43-f7f2-45e5-9a97-404c53e52aeb/executions";

// Normaliza o telefone para só dígitos com código do país (ex.: "5511999999999").
function toWhatsAppNumber(phone: string | undefined | null) {
  return (phone || "").replace(/\D/g, "");
}

export async function POST(request: Request) {
  const body = await request.json();

  const { data, error } = await getSupabase().from("rsvps").insert({
    name: body.name,
    phone: body.phone,
    attending: body.attending,
    guest_count: body.guestCount,
    guests: body.guests,
    own_dietary: body.ownDietary,
    message: body.message,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Quando a pessoa confirma presença, disparamos o workflow do Kapso para
  // enviar um WhatsApp de confirmação ao número informado. É best-effort:
  // uma falha aqui não deve impedir o registro do RSVP.
  const whatsappNumber = toWhatsAppNumber(body.phone);
  if (body.attending && whatsappNumber.length >= 10) {
    const firstName = String(body.name || "").trim().split(" ")[0];
    try {
      await runKapsoWorkflow(KAPSO_RSVP_WORKFLOW_URL, {
        phone_number: `+${whatsappNumber}`,
        // Variáveis disponíveis para o workflow personalizar a mensagem.
        variables: {
          name: body.name,
          first_name: firstName,
        },
      });
    } catch {
      // ignora — o RSVP já foi registrado
    }
  }

  return NextResponse.json({ success: true });
}

export async function GET() {
  const { data, error } = await getSupabase()
    .from("rsvps")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

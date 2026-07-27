import { getSql } from "@/lib/db";
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

  try {
    await getSql()`
      insert into rsvps (name, phone, attending, guest_count, guests, own_dietary, message)
      values (
        ${body.name},
        ${body.phone},
        ${body.attending},
        ${body.guestCount ?? 0},
        ${JSON.stringify(body.guests ?? [])}::jsonb,
        ${body.ownDietary},
        ${body.message}
      )
    `;
  } catch (error) {
    const message = error instanceof Error ? error.message : "erro ao gravar RSVP";
    return NextResponse.json({ error: message }, { status: 500 });
  }

  // Quando a pessoa confirma presença, disparamos o workflow do Kapso para
  // enviar um WhatsApp de confirmação ao número informado. É best-effort:
  // uma falha aqui não deve impedir o registro do RSVP.
  const whatsappNumber = toWhatsAppNumber(body.phone);
  if (body.attending && whatsappNumber.length >= 10) {
    const firstName = String(body.name || "").trim().split(" ")[0];
    try {
      const result = await runKapsoWorkflow(KAPSO_RSVP_WORKFLOW_URL, {
        phone_number: `+${whatsappNumber}`,
        // Variáveis disponíveis para o workflow personalizar a mensagem.
        variables: {
          name: body.name,
          first_name: firstName,
        },
      });
      console.log("[kapso] disparo do workflow de RSVP", {
        ok: result.ok,
        status: result.status,
        to: `+${whatsappNumber}`,
        response: result.data,
      });
    } catch (e) {
      console.error("[kapso] erro ao disparar o workflow de RSVP", e);
      // não relança — o RSVP já foi registrado
    }
  }

  return NextResponse.json({ success: true });
}

export async function GET() {
  try {
    const rows = await getSql()`
      select * from rsvps
      order by created_at desc
    `;
    return NextResponse.json(rows);
  } catch (error) {
    const message = error instanceof Error ? error.message : "erro ao ler RSVPs";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

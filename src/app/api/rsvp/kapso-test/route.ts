import { runKapsoWorkflow } from "@/lib/kapso";
import { NextResponse } from "next/server";

// Endpoint TEMPORÁRIO de diagnóstico do disparo do workflow do Kapso.
// Abra no navegador:
//   /api/rsvp/kapso-test?phone=+5511999999999
// e veja exatamente o que o Kapso responde (status + corpo). Serve para
// descobrir por que a mensagem não chega. REMOVER depois de diagnosticar.

const KAPSO_RSVP_WORKFLOW_URL =
  process.env.KAPSO_RSVP_WORKFLOW_URL ||
  "https://api.kapso.ai/platform/v1/workflows/bb919c43-f7f2-45e5-9a97-404c53e52aeb/executions";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const phone = (searchParams.get("phone") || "").replace(/\D/g, "");

  if (phone.length < 10) {
    return NextResponse.json(
      { error: "Passe ?phone=+55DDDNUMERO (ex.: ?phone=+5511999999999)" },
      { status: 400 }
    );
  }

  const result = await runKapsoWorkflow(KAPSO_RSVP_WORKFLOW_URL, {
    phone_number: `+${phone}`,
    variables: { name: "Teste Diagnóstico", first_name: "Teste" },
  });

  return NextResponse.json({
    workflow_url: KAPSO_RSVP_WORKFLOW_URL,
    has_api_key: Boolean(process.env.KAPSO_API_KEY),
    sent_to: `+${phone}`,
    kapso_status: result.status, // 200/201 = ok · 401 = chave · 404 = endpoint/id · 422/400 = corpo
    kapso_ok: result.ok,
    kapso_response: result.data,
  });
}

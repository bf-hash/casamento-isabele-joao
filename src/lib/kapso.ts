const KAPSO_API_KEY = process.env.KAPSO_API_KEY!;
const KAPSO_BASE = "https://api.kapso.ai/meta/whatsapp/v24.0";
const PHONE_NUMBER_ID = process.env.KAPSO_PHONE_NUMBER_ID!;

export async function sendWhatsAppMessage(to: string, body: string) {
  const res = await fetch(`${KAPSO_BASE}/${PHONE_NUMBER_ID}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": KAPSO_API_KEY,
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to,
      type: "text",
      text: { body },
    }),
  });

  return res.json();
}

// Dispara a execução de um workflow do Kapso (endpoint /platform/v1/workflows/
// {id}/executions). Quem monta e envia a mensagem de WhatsApp é o workflow,
// configurado no painel do Kapso — aqui só passamos o telefone e as variáveis.
// A API espera os parâmetros embrulhados num objeto "workflow_execution".
export async function runKapsoWorkflow(
  executionsUrl: string,
  workflowExecution: Record<string, unknown>
) {
  if (!KAPSO_API_KEY) {
    console.error("[kapso] KAPSO_API_KEY ausente — o disparo do workflow vai falhar.");
  }

  const res = await fetch(executionsUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": KAPSO_API_KEY,
    },
    body: JSON.stringify({ workflow_execution: workflowExecution }),
  });

  const raw = await res.text();
  let data: unknown = raw;
  try {
    data = JSON.parse(raw);
  } catch {
    // resposta não-JSON: mantém o texto cru
  }

  if (!res.ok) {
    console.error("[kapso] workflow execution falhou", res.status, raw);
  }

  return { ok: res.ok, status: res.status, data };
}

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
export async function runKapsoWorkflow(
  executionsUrl: string,
  payload: Record<string, unknown>
) {
  const res = await fetch(executionsUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": KAPSO_API_KEY,
    },
    body: JSON.stringify(payload),
  });

  return res.json();
}

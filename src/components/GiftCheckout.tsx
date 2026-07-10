"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { type Gift, formatBRL } from "@/lib/gifts";

// TODO: Substituir pela chave PIX real dos noivos
const PIX_KEY = "email@exemplo.com";
const PIX_NAME = "Isabele & João";

type Step = "name" | "note" | "pay" | "done";
type Method = "pix" | "card";

export default function GiftCheckout({ gift }: { gift: Gift }) {
  const [step, setStep] = useState<Step>("name");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [method, setMethod] = useState<Method>("pix");
  const [copied, setCopied] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PIX_KEY);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback silencioso */
    }
  };

  const handlePay = async () => {
    setProcessing(true);

    // Registra a contribuição no Supabase (tabela gift_contributions).
    // Fica com status "pending"; quando o checkout de pagamento for
    // integrado (Mercado Pago / Pagar.me / Asaas / Stripe), o webhook do
    // provedor atualiza o status para "paid".
    try {
      await fetch("/api/gifts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          giftId: gift.id,
          giftName: gift.name,
          amount: gift.price,
          method,
          name,
          note,
        }),
      });
    } catch {
      // não bloqueia o usuário se o registro falhar
    }

    // ------------------------------------------------------------------
    // TODO: PLACEHOLDER DE CHECKOUT
    // Próximo passo — gerar a cobrança no provedor de pagamento:
    //   - method === "pix"  -> QR Code / copia-e-cola dinâmico
    //   - method === "card" -> sessão de checkout / link de cartão
    // O provedor devolve os dados e, via webhook, marca o status "paid".
    // ------------------------------------------------------------------

    setProcessing(false);
    setStep("done");
  };

  const stepOrder: Step[] = ["name", "note", "pay"];

  return (
    <section className="ij-section ij-section-warm ij-checkout-section">
      <div className="ij-checkout-inner">
        {/* Resumo do presente */}
        <aside className="ij-checkout-summary">
          {gift.image ? (
            <div className="ij-checkout-summary-image">
              <Image src={gift.image} alt={gift.name} width={520} height={520} />
            </div>
          ) : (
            <div className="ij-checkout-summary-emoji">{gift.emoji}</div>
          )}
          <span className="ij-checkout-summary-eyebrow">Presente escolhido</span>
          <h1 className="ij-checkout-summary-name">{gift.name}</h1>
          <p className="ij-checkout-summary-price">{formatBRL(gift.price)}</p>
        </aside>

        {/* Fluxo */}
        <div className="ij-checkout-form">
          {step !== "done" && (
            <div className="ij-rsvp-progress ij-checkout-progress">
              {stepOrder.map((s, i) => (
                <div
                  key={s}
                  className={`ij-rsvp-progress-dot ${
                    stepOrder.indexOf(step) >= i ? "is-active" : ""
                  }`}
                />
              ))}
            </div>
          )}

          {/* Passo 1: Nome */}
          {step === "name" && (
            <div className="ij-rsvp-step">
              <h3 className="ij-rsvp-step-title">Qual o seu nome?</h3>
              <p className="ij-rsvp-step-desc">
                Para os noivos saberem de quem veio esse carinho.
              </p>
              <input
                type="text"
                className="ij-rsvp-input"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && name.trim()) setStep("note");
                }}
                autoFocus
              />
              <button
                className="ij-rsvp-btn"
                disabled={!name.trim()}
                onClick={() => setStep("note")}
              >
                Continuar
              </button>
              <Link href="/#gifts" className="ij-rsvp-back">
                Voltar aos presentes
              </Link>
            </div>
          )}

          {/* Passo 2: Bilhete */}
          {step === "note" && (
            <div className="ij-rsvp-step">
              <h3 className="ij-rsvp-step-title">Deixe um bilhete</h3>
              <p className="ij-rsvp-step-desc">
                Uma mensagem carinhosa para <em className="ij-brand-name">{PIX_NAME}</em> (opcional).
              </p>
              <textarea
                className="ij-rsvp-textarea"
                placeholder="Escreva aqui..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={4}
                autoFocus
              />
              <button className="ij-rsvp-btn" onClick={() => setStep("pay")}>
                Continuar para o pagamento
              </button>
              <button className="ij-rsvp-back" onClick={() => setStep("name")}>
                Voltar
              </button>
            </div>
          )}

          {/* Passo 3: Pagamento (placeholder) */}
          {step === "pay" && (
            <div className="ij-rsvp-step">
              <h3 className="ij-rsvp-step-title">Pagamento</h3>
              <p className="ij-rsvp-step-desc">
                <em className="ij-brand-name">{name}</em>, você está presenteando{" "}
                {gift.name} — {formatBRL(gift.price)}.
              </p>

              <div className="ij-pay-methods">
                <button
                  type="button"
                  className={`ij-pay-method ${method === "pix" ? "is-active" : ""}`}
                  onClick={() => setMethod("pix")}
                >
                  <span className="ij-pay-method-icon">◆</span>
                  PIX
                </button>
                <button
                  type="button"
                  className={`ij-pay-method ${method === "card" ? "is-active" : ""}`}
                  onClick={() => setMethod("card")}
                >
                  <span className="ij-pay-method-icon">▭</span>
                  Cartão
                </button>
              </div>

              {method === "pix" && (
                <div className="ij-pay-panel">
                  <span className="ij-pay-panel-label">Chave PIX</span>
                  <div className="ij-pay-panel-key">
                    <code>{PIX_KEY}</code>
                    <button onClick={handleCopy} className="ij-pay-copy">
                      {copied ? "Copiado!" : "Copiar"}
                    </button>
                  </div>
                  <span className="ij-pay-panel-name">{PIX_NAME}</span>
                  <p className="ij-pay-panel-soon">
                    Em breve: QR Code gerado automaticamente para este presente.
                  </p>
                </div>
              )}

              {method === "card" && (
                <div className="ij-pay-panel">
                  <p className="ij-pay-panel-soon">
                    O pagamento com cartão será processado por um checkout seguro.
                    Integração em breve.
                  </p>
                </div>
              )}

              <button
                className="ij-rsvp-btn"
                disabled={processing}
                onClick={handlePay}
              >
                {processing
                  ? "Processando..."
                  : `Finalizar — ${formatBRL(gift.price)}`}
              </button>
              <button className="ij-rsvp-back" onClick={() => setStep("note")}>
                Voltar
              </button>
            </div>
          )}

          {/* Concluído */}
          {step === "done" && (
            <div className="ij-rsvp-step ij-rsvp-step--done">
              <div className="ij-rsvp-done-icon">&#10003;</div>
              <h3 className="ij-rsvp-step-title">Obrigado de coração!</h3>
              <p className="ij-rsvp-step-desc">
                <em className="ij-brand-name">{name}</em>, recebemos o seu carinho com{" "}
                {gift.name}. Assim que o checkout estiver integrado, você poderá
                concluir o pagamento por aqui {"❤️"}
              </p>
              <Link href="/#gifts" className="ij-rsvp-back" style={{ marginTop: 16 }}>
                Voltar aos presentes
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

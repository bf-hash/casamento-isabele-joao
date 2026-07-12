"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { type Gift, formatBRL } from "@/lib/gifts";

const COUPLE_NAME = "Isabele & João";

type Step = "amount" | "name" | "note" | "pay";

export default function GiftCheckout({ gift }: { gift: Gift }) {
  const [step, setStep] = useState<Step>(gift.custom ? "amount" : "name");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");

  // Presentes fixos usam o preço da lista; o customizado usa o valor digitado.
  const amount = gift.custom ? Number(amountInput) || 0 : gift.price;

  const handlePay = async () => {
    setProcessing(true);
    setError("");

    try {
      // Registra a contribuição (status "pending") e cria a cobrança no
      // AbacatePay. A rota devolve a URL do checkout hospedado (PIX + cartão);
      // o webhook marca "paid" quando o pagamento for confirmado.
      const res = await fetch("/api/gifts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          giftId: gift.id,
          giftName: gift.name,
          amount,
          name,
          note,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.checkoutUrl) {
        throw new Error(data.error || "Não foi possível iniciar o pagamento.");
      }

      // Redireciona para o checkout seguro do AbacatePay.
      window.location.href = data.checkoutUrl;
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "Não foi possível iniciar o pagamento."
      );
      setProcessing(false);
    }
  };

  const stepOrder: Step[] = gift.custom
    ? ["amount", "name", "note", "pay"]
    : ["name", "note", "pay"];

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
          <p className="ij-checkout-summary-price">
            {gift.custom && amount <= 0
              ? "Escolha o valor"
              : formatBRL(amount)}
          </p>
        </aside>

        {/* Fluxo */}
        <div className="ij-checkout-form">
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

          {/* Passo 0 (só no customizado): Valor */}
          {step === "amount" && (
            <div className="ij-rsvp-step">
              <h3 className="ij-rsvp-step-title">Qual valor você quer presentear?</h3>
              <p className="ij-rsvp-step-desc">
                Você escolhe quanto quer contribuir com este presente.
              </p>
              <input
                type="number"
                inputMode="decimal"
                min={1}
                step="1"
                className="ij-rsvp-input"
                placeholder="Ex.: 200"
                value={amountInput}
                onChange={(e) => setAmountInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && amount >= 1) setStep("name");
                }}
                autoFocus
              />
              <button
                className="ij-rsvp-btn"
                disabled={amount < 1}
                onClick={() => setStep("name")}
              >
                Continuar
              </button>
              <Link href="/#gifts" className="ij-rsvp-back">
                Voltar aos presentes
              </Link>
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
              {gift.custom ? (
                <button className="ij-rsvp-back" onClick={() => setStep("amount")}>
                  Voltar
                </button>
              ) : (
                <Link href="/#gifts" className="ij-rsvp-back">
                  Voltar aos presentes
                </Link>
              )}
            </div>
          )}

          {/* Passo 2: Bilhete */}
          {step === "note" && (
            <div className="ij-rsvp-step">
              <h3 className="ij-rsvp-step-title">Deixe um bilhete</h3>
              <p className="ij-rsvp-step-desc">
                Uma mensagem carinhosa para{" "}
                <em className="ij-brand-name">{COUPLE_NAME}</em> (opcional).
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

          {/* Passo 3: Pagamento */}
          {step === "pay" && (
            <div className="ij-rsvp-step">
              <h3 className="ij-rsvp-step-title">Pagamento</h3>
              <p className="ij-rsvp-step-desc">
                <em className="ij-brand-name">{name}</em>, você está presenteando{" "}
                {gift.name} — {formatBRL(amount)}.
              </p>

              <div className="ij-pay-panel">
                <p className="ij-pay-panel-soon">
                  Ao continuar, você vai para um checkout seguro onde pode pagar
                  com <strong>PIX</strong> ou <strong>cartão de crédito</strong>.
                </p>
              </div>

              {error && <p className="ij-pay-error">{error}</p>}

              <button
                className="ij-rsvp-btn"
                disabled={processing}
                onClick={handlePay}
              >
                {processing
                  ? "Redirecionando..."
                  : `Ir para o pagamento — ${formatBRL(amount)}`}
              </button>
              <button
                className="ij-rsvp-back"
                onClick={() => setStep("note")}
                disabled={processing}
              >
                Voltar
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

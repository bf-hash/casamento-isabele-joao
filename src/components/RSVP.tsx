"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

type Step = "name" | "confirm" | "guests" | "dietary" | "message" | "done" | "declined" | "declined_done" | "already_confirmed";

interface Guest {
  name: string;
  dietary: string;
}

export default function RSVP() {
  const [step, setStep] = useState<Step>("name");
  const [name, setName] = useState("");
  const [guestCount, setGuestCount] = useState(0);
  const [guests, setGuests] = useState<Guest[]>([]);
  const [ownDietary, setOwnDietary] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [checking, setChecking] = useState(false);

  const handleNameContinue = async () => {
    setChecking(true);
    try {
      const res = await fetch(`/api/rsvp/check?name=${encodeURIComponent(name.trim())}`);
      const data = await res.json();
      if (data.exists && data.attending) {
        setStep("already_confirmed");
        setChecking(false);
        return;
      }
    } catch {
      // if check fails, proceed normally
    }
    setChecking(false);
    setStep("confirm");
  };

  const handleConfirm = (attending: boolean) => {
    if (attending) {
      setStep("guests");
    } else {
      setStep("declined");
    }
  };

  const handleGuestCountChange = (count: number) => {
    setGuestCount(count);
    setGuests(
      Array.from({ length: count }, (_, i) => guests[i] || { name: "", dietary: "" })
    );
  };

  const updateGuest = (index: number, field: keyof Guest, value: string) => {
    setGuests((prev) => prev.map((g, i) => (i === index ? { ...g, [field]: value } : g)));
  };

  const handleSubmit = async (attending: boolean) => {
    setSubmitting(true);

    try {
      await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          attending,
          guestCount: attending ? guestCount : 0,
          guests: attending ? guests : [],
          ownDietary: attending ? ownDietary : "",
          message,
        }),
      });
    } catch {
      // submit silently — don't block the user
    }

    setSubmitting(false);
    setStep(attending ? "done" : "declined_done");
  };

  const canProceedGuests =
    guests.length === 0 || guests.every((g) => g.name.trim().length > 0);

  return (
    <section id="rsvp" className="ij-section ij-section-warm">
      <div className="ij-center">
        <ScrollReveal delay={1}>
          <div className="ij-section-header">
            <span className="ij-section-eyebrow ij-section-eyebrow--centered">Confirmação</span>
            <h2>
              Confirme
              <br />
              sua presença
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <div className="ij-rsvp-form-wrap">
            <div className="ij-rsvp-form-inner">
              {/* Progress */}
              {step !== "done" && step !== "declined_done" && step !== "already_confirmed" && (
                <div className="ij-rsvp-progress">
                  {["name", "confirm", "guests", "dietary", "message"].map(
                    (s, i) => (
                      <div
                        key={s}
                        className={`ij-rsvp-progress-dot ${
                          ["name", "confirm", "guests", "dietary", "message"].indexOf(step) >= i
                            ? "is-active"
                            : ""
                        }`}
                      />
                    )
                  )}
                </div>
              )}

              {/* Step: Name */}
              {step === "name" && (
                <div className="ij-rsvp-step">
                  <h3 className="ij-rsvp-step-title">{"Qual o seu nome?"}</h3>
                  <p className="ij-rsvp-step-desc">
                    {"Informe o nome como está no convite."}
                  </p>
                  <input
                    type="text"
                    className="ij-rsvp-input"
                    placeholder="Nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && name.trim()) handleNameContinue();
                    }}
                  />
                  <button
                    className="ij-rsvp-btn"
                    disabled={!name.trim() || checking}
                    onClick={handleNameContinue}
                  >
                    {checking ? "Verificando..." : "Continuar"}
                  </button>
                </div>
              )}

              {/* Step: Confirm */}
              {step === "confirm" && (
                <div className="ij-rsvp-step">
                  <h3 className="ij-rsvp-step-title">
                    {"Você confirma presença?"}
                  </h3>
                  <p className="ij-rsvp-step-desc">
                    <em className="ij-brand-name">{name}</em>, {"você poderá estar conosco na Costa Brava?"}
                  </p>
                  <div className="ij-rsvp-choice">
                    <button
                      className="ij-rsvp-btn ij-rsvp-btn--yes"
                      onClick={() => handleConfirm(true)}
                    >
                      {"Sim, estarei lá!"}
                    </button>
                    <button
                      className="ij-rsvp-btn ij-rsvp-btn--no"
                      onClick={() => handleConfirm(false)}
                    >
                      {"Infelizmente não poderei"}
                    </button>
                  </div>
                  <button
                    className="ij-rsvp-back"
                    onClick={() => setStep("name")}
                  >
                    Voltar
                  </button>
                </div>
              )}

              {/* Step: Guests */}
              {step === "guests" && (
                <div className="ij-rsvp-step">
                  <h3 className="ij-rsvp-step-title">Acompanhantes</h3>
                  <p className="ij-rsvp-step-desc">
                    {"Além de você, quantas pessoas virão?"}
                  </p>
                  <div className="ij-rsvp-counter">
                    <button
                      className="ij-rsvp-counter-btn"
                      onClick={() =>
                        handleGuestCountChange(Math.max(0, guestCount - 1))
                      }
                      disabled={guestCount === 0}
                    >
                      -
                    </button>
                    <span className="ij-rsvp-counter-val">{guestCount}</span>
                    <button
                      className="ij-rsvp-counter-btn"
                      onClick={() =>
                        handleGuestCountChange(Math.min(10, guestCount + 1))
                      }
                    >
                      +
                    </button>
                  </div>

                  {guests.map((g, i) => (
                    <input
                      key={i}
                      type="text"
                      className="ij-rsvp-input ij-rsvp-input--guest"
                      placeholder={`Nome do acompanhante ${i + 1}`}
                      value={g.name}
                      onChange={(e) => updateGuest(i, "name", e.target.value)}
                    />
                  ))}

                  <button
                    className="ij-rsvp-btn"
                    disabled={!canProceedGuests}
                    onClick={() => setStep("dietary")}
                  >
                    Continuar
                  </button>
                  <button
                    className="ij-rsvp-back"
                    onClick={() => setStep("confirm")}
                  >
                    Voltar
                  </button>
                </div>
              )}

              {/* Step: Dietary */}
              {step === "dietary" && (
                <div className="ij-rsvp-step">
                  <h3 className="ij-rsvp-step-title">{"Restrições alimentares"}</h3>
                  <p className="ij-rsvp-step-desc">
                    {"Alguém tem alergia, intolerância ou restrição alimentar? (vegetariano, vegano, sem glúten, etc.)"}
                  </p>

                  <div className="ij-rsvp-dietary-group">
                    <label className="ij-rsvp-dietary-label">{name}</label>
                    <input
                      type="text"
                      className="ij-rsvp-input"
                      placeholder="Nenhuma restrição"
                      value={ownDietary}
                      onChange={(e) => setOwnDietary(e.target.value)}
                    />
                  </div>

                  {guests.map((g, i) => (
                    <div key={i} className="ij-rsvp-dietary-group">
                      <label className="ij-rsvp-dietary-label">{g.name}</label>
                      <input
                        type="text"
                        className="ij-rsvp-input"
                        placeholder="Nenhuma restrição"
                        value={g.dietary}
                        onChange={(e) =>
                          updateGuest(i, "dietary", e.target.value)
                        }
                      />
                    </div>
                  ))}

                  <button
                    className="ij-rsvp-btn"
                    onClick={() => setStep("message")}
                  >
                    Continuar
                  </button>
                  <button
                    className="ij-rsvp-back"
                    onClick={() => setStep("guests")}
                  >
                    Voltar
                  </button>
                </div>
              )}

              {/* Step: Message */}
              {step === "message" && (
                <div className="ij-rsvp-step">
                  <h3 className="ij-rsvp-step-title">Recadinho para os noivos</h3>
                  <p className="ij-rsvp-step-desc"> </p>
                  <textarea
                    className="ij-rsvp-textarea"
                    placeholder="Escreva aqui..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                  />
                  <button
                    className="ij-rsvp-btn"
                    disabled={submitting}
                    onClick={() => handleSubmit(true)}
                  >
                    {submitting ? "Enviando..." : "Confirmar presença"}
                  </button>
                  <button
                    className="ij-rsvp-back"
                    onClick={() => setStep("dietary")}
                  >
                    Voltar
                  </button>
                </div>
              )}

              {/* Step: Declined */}
              {step === "declined" && (
                <div className="ij-rsvp-step">
                  <h3 className="ij-rsvp-step-title">Sentiremos sua falta!</h3>
                  <p className="ij-rsvp-step-desc">
                    Quer deixar uma mensagem para os noivos?
                  </p>
                  <textarea
                    className="ij-rsvp-textarea"
                    placeholder="Escreva aqui..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                  />
                  <button
                    className="ij-rsvp-btn"
                    disabled={submitting}
                    onClick={() => handleSubmit(false)}
                  >
                    {submitting ? "Enviando..." : "Enviar"}
                  </button>
                  <button
                    className="ij-rsvp-back"
                    onClick={() => setStep("confirm")}
                  >
                    Voltar
                  </button>
                </div>
              )}

              {/* Step: Done */}
              {step === "done" && (
                <div className="ij-rsvp-step ij-rsvp-step--done">
                  <div className="ij-rsvp-done-icon">&#10003;</div>
                  <h3 className="ij-rsvp-step-title">{"Presença confirmada!"}</h3>
                  <p className="ij-rsvp-step-desc">
                    {"Obrigado, "}<em className="ij-brand-name">{name}</em>{"! Mal podemos esperar para celebrar com você"}
                    {guestCount > 0 && " e seus acompanhantes"} na Costa Brava.
                  </p>
                </div>
              )}

              {/* Step: Already Confirmed */}
              {step === "already_confirmed" && (
                <div className="ij-rsvp-step ij-rsvp-step--done">
                  <div className="ij-rsvp-done-icon">&#10003;</div>
                  <h3 className="ij-rsvp-step-title">{"Presença já confirmada!"}</h3>
                  <p className="ij-rsvp-step-desc">
                    <em className="ij-brand-name">{name}</em>{", sua presença já foi confirmada. Obrigado!"}
                  </p>
                  <button
                    className="ij-rsvp-back"
                    style={{ marginTop: 16 }}
                    onClick={() => { setName(""); setStep("name"); }}
                  >
                    Confirmar outro nome
                  </button>
                </div>
              )}

              {/* Step: Declined Done */}
              {step === "declined_done" && (
                <div className="ij-rsvp-step ij-rsvp-step--done">
                  <h3 className="ij-rsvp-step-title">{"Sentiremos sua falta!"}</h3>
                  <p className="ij-rsvp-step-desc">
                    {"Obrigado pela mensagem, "}<em className="ij-brand-name">{name}</em>{". Esperamos que possamos nos encontrar em breve!"}
                  </p>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

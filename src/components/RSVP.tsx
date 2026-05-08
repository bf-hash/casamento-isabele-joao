import { GravuraEnvelope } from "./Illustrations";

const WHATSAPP_URL = `https://wa.me/5511999999999?text=${encodeURIComponent(
  "Olá! Confirmo minha presença no casamento de Isabele e João."
)}`;

export default function RSVP() {
  return (
    <section id="rsvp" className="ij-section ij-section-warm">
      <div className="ij-center">
        <GravuraEnvelope size={90} />
        <div style={{ height: 28 }} />
        <div className="ij-section-header">
          <span className="ij-section-eyebrow">Confirmação</span>
          <h2>Confirme sua presença</h2>
        </div>
        <div className="ij-caixa" style={{ maxWidth: 520 }}>
          <p className="ij-prose" style={{ margin: "0 auto 28px" }}>
            Por favor, confirme sua presença através do WhatsApp. Clique no
            botão abaixo para enviar uma mensagem.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ij-rsvp-cta"
          >
            Confirmar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

import { GravuraEnvelope } from "./Illustrations";
import ScrollReveal from "./ScrollReveal";

const WHATSAPP_URL = `https://wa.me/5511999999999?text=${encodeURIComponent(
  "Olá! Confirmo minha presença no casamento de Isabele e João."
)}`;

export default function RSVP() {
  return (
    <section id="rsvp" className="ij-section ij-section-warm">
      <div className="ij-center">
        <ScrollReveal>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <GravuraEnvelope size={90} />
          </div>
        </ScrollReveal>
        <div style={{ height: 16 }} />
        <ScrollReveal delay={1}>
          <div className="ij-section-header">
            <span className="ij-section-eyebrow ij-section-eyebrow--sun">Confirmação</span>
            <h2>Confirme sua presença</h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <div className="ij-caixa" style={{ maxWidth: 520 }}>
            <p className="ij-prose" style={{ margin: "0 auto 28px" }}>
              Conte-nos se podemos contar com vocês. Basta clicar no botão
              abaixo para nos enviar uma mensagem pelo WhatsApp.
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
        </ScrollReveal>
      </div>
    </section>
  );
}

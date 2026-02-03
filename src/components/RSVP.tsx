"use client";

const WHATSAPP_NUMBER = "5511999999999";
const RSVP_MESSAGE =
  "Olá! Confirmo minha presença no casamento de Isabele e João.";

export default function RSVP() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(RSVP_MESSAGE)}`;

  return (
    <section className="px-6 py-24 md:py-32 bg-charcoal text-marfim">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-16 h-px bg-marfim/40 mx-auto mb-8" />
        <h2 className="font-display font-medium text-2xl sm:text-3xl uppercase tracking-[0.2em] text-marfim mb-12">
          Confirme sua presença
        </h2>
        <p className="font-serif font-light text-lg text-marfim/90 leading-relaxed mb-10">
          Por favor, confirme sua presença através do WhatsApp. Clique no botão
          abaixo para enviar uma mensagem.
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-serif font-light text-sm uppercase tracking-[0.12em] hover:bg-[#20BD5A] transition-colors"
        >
          Confirmar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}

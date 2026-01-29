"use client";

const WHATSAPP_NUMBER = "5511999999999"; // Substitua pelo número real
const RSVP_MESSAGE =
  "Olá! Confirmo minha presença no casamento de Isabele e João.";

export default function RSVP() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(RSVP_MESSAGE)}`;

  return (
    <section className="px-6 py-20 md:py-28 bg-charcoal text-cream">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-6">
          Confirme sua presença
        </h2>
        <p className="text-cream/85 leading-relaxed mb-8">
          Por favor, confirme sua presença através do WhatsApp. Clique no botão
          abaixo para enviar uma mensagem.
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-medium hover:bg-[#20BD5A] transition-colors"
        >
          Confirmar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}

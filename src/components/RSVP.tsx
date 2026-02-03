"use client";

import { IconMessage } from "./Icons";

const WHATSAPP_NUMBER = "5511999999999"; // Substitua pelo número real
const RSVP_MESSAGE =
  "Olá! Confirmo minha presença no casamento de Isabele e João.";

export default function RSVP() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(RSVP_MESSAGE)}`;

  return (
    <section className="px-6 py-20 md:py-28 bg-verde-oliva text-marfim">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex flex-col items-center gap-3 mb-6">
          <IconMessage className="w-6 h-6 text-marfim/90" />
          <h2 className="font-display font-medium text-base sm:text-lg uppercase tracking-[0.2em]">
            Confirme sua presença
          </h2>
        </div>
        <p className="font-serif font-light text-sm text-marfim/90 leading-relaxed mb-6">
          Por favor, confirme sua presença através do WhatsApp. Clique no botão
          abaixo para enviar uma mensagem.
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white font-serif font-light text-sm uppercase tracking-[0.1em] hover:bg-[#20BD5A] transition-colors"
        >
          Confirmar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const GIFTS = [
  {
    id: "museu",
    emoji: "🏛️",
    image: "/fotos/presentes/museu.jpeg",
    name: "Visita ao museu",
    price: 150,
    cardLink: "",
  },
  {
    id: "degustacao",
    emoji: "🥃",
    image: "/fotos/presentes/degustacao.jpeg",
    name: "Degustação de vinhos",
    price: 250,
    cardLink: "",
  },
  {
    id: "pasta",
    emoji: "🍝",
    image: "/fotos/presentes/pasta.jpeg",
    name: "Pasta con la nona",
    price: 300,
    cardLink: "",
  },
  {
    id: "queijos",
    emoji: "🧀",
    image: "/fotos/presentes/queijos.jpeg",
    name: "Queijos e vinhos",
    price: 320,
    cardLink: "",
  },
  {
    id: "jantar",
    emoji: "🍽️",
    image: "/fotos/presentes/jantar.jpeg",
    name: "Jantar na lua de mel",
    price: 350,
    cardLink: "",
  },
  {
    id: "oyster",
    emoji: "🦪",
    image: "/fotos/presentes/ostras.jpeg",
    name: "Oyster and Champagne",
    price: 350,
    cardLink: "",
  },
  {
    id: "barranco",
    emoji: "🏖️",
    image: "/fotos/presentes/barranco.jpeg",
    name: "Dia no Barranco",
    price: 400,
    cardLink: "",
  },
  {
    id: "festival",
    emoji: "🎶",
    image: "/fotos/presentes/festival.jpeg",
    name: "Festival em Barcelona",
    price: 450,
    cardLink: "",
  },
  {
    id: "marimekko",
    emoji: "🏠",
    image: "/fotos/presentes/marimekko.webp",
    name: "Casa dos sonhos Marimekko",
    price: 500,
    cardLink: "",
  },
  {
    id: "jamon",
    emoji: "🍖",
    image: "/fotos/presentes/jamon.jpeg",
    name: "Pata de Jamon",
    price: 600,
    cardLink: "",
  },
  {
    id: "barco",
    emoji: "⛵",
    image: "/fotos/presentes/barco.jpeg",
    name: "Passeio de barco",
    price: 1000,
    cardLink: "",
  },
  {
    id: "hotel",
    emoji: "🏨",
    image: "/fotos/presentes/hotel.jpeg",
    name: "Noite em hotel boutique",
    price: 1200,
    cardLink: "",
  },
  {
    id: "executiva",
    emoji: "✈️",
    image: "/fotos/presentes/executiva.jpeg",
    name: "Passagem",
    price: 2000,
    cardLink: "",
  },
];

// TODO: Substituir pela chave PIX real
const PIX_KEY = "email@exemplo.com";
const PIX_NAME = "Isabele & João";

function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function PixModal({
  gift,
  onClose,
}: {
  gift: (typeof GIFTS)[number];
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PIX_KEY);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback: prompt */
    }
  };

  return (
    <div className="ij-gift-overlay" onClick={onClose}>
      <div className="ij-gift-modal" onClick={(e) => e.stopPropagation()}>
        <button className="ij-gift-modal-close" onClick={onClose}>
          &times;
        </button>
        {gift.image ? (
          <div className="ij-gift-modal-image">
            <Image src={gift.image} alt={gift.name} width={400} height={200} />
          </div>
        ) : (
          <div className="ij-gift-modal-emoji">{gift.emoji}</div>
        )}
        <h3 className="ij-gift-modal-title">{gift.name}</h3>
        <p className="ij-gift-modal-price">{formatBRL(gift.price)}</p>

        <div className="ij-gift-modal-pix">
          <span className="ij-gift-modal-pix-label">Chave PIX</span>
          <div className="ij-gift-modal-pix-key">
            <code>{PIX_KEY}</code>
            <button onClick={handleCopy} className="ij-gift-modal-copy">
              {copied ? "Copiado!" : "Copiar"}
            </button>
          </div>
          <span className="ij-gift-modal-pix-name">{PIX_NAME}</span>
        </div>

        <p className="ij-gift-modal-hint">
          Após o PIX, envie o comprovante pelo WhatsApp para confirmarmos
          seu presente {"❤️"}
        </p>
      </div>
    </div>
  );
}

export default function Gifts() {
  const [pixGift, setPixGift] = useState<(typeof GIFTS)[number] | null>(null);

  return (
    <section id="gifts" className="ij-section ij-section-paper">
      <ScrollReveal asChild>
        <header className="ij-gifts-head">
          <div>
            <h2>Presentes</h2>
          </div>
          <p className="ij-gifts-intro">
            A presença de vocês já é o melhor presente do mundo. Mas caso queiram dar algo, escolhemos uma lista só
            com o que somos melhor fazendo (comer, beber e viajar).
          </p>
        </header>
      </ScrollReveal>

      <ScrollReveal className="ij-gifts-grid">
        {GIFTS.map((gift) => (
          <div className="ij-gift-card" key={gift.id}>
            {gift.image ? (
              <div className="ij-gift-card-image">
                <Image src={gift.image} alt={gift.name} width={300} height={300} />
              </div>
            ) : (
              <div className="ij-gift-card-emoji">{gift.emoji}</div>
            )}
            <div className="ij-gift-card-body">
              <h3 className="ij-gift-card-name">{gift.name}</h3>
              <p className="ij-gift-card-price">{formatBRL(gift.price)}</p>
              <div className="ij-gift-card-actions">
                <button className="ij-gift-btn ij-gift-btn--pix" onClick={() => setPixGift(gift)}>
                  PIX
                </button>
                {gift.cardLink ? (
                  <a
                    href={gift.cardLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ij-gift-btn ij-gift-btn--card"
                  >
                    Cartão
                  </a>
                ) : (
                  <span className="ij-gift-btn ij-gift-btn--card ij-gift-btn--soon" title="Link de pagamento em breve">
                    Cartão
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </ScrollReveal>

      {pixGift && <PixModal gift={pixGift} onClose={() => setPixGift(null)} />}
    </section>
  );
}

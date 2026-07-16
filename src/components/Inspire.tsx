"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

// Fotos da Costa Brava para inspirar a viagem
const INSPIRE = [
  { src: "/fotos/inspiracao/sa-tuna.jpg", name: "Sa Tuna" },
  { src: "/fotos/inspiracao/cadaques-baia.jpg", name: "Cadaqués" },
  { src: "/fotos/inspiracao/aiguablava.jpg", name: "Aiguablava" },
  { src: "/fotos/inspiracao/begur.jpg", name: "Begur" },
  { src: "/fotos/inspiracao/el-golfet.jpg", name: "El Golfet" },
  { src: "/fotos/inspiracao/pals.jpg", name: "Pals" },
  { src: "/fotos/inspiracao/llafranc.jpg", name: "Llafranc" },
  { src: "/fotos/inspiracao/cadaques-flores.jpg", name: "Cadaqués" },
  { src: "/fotos/inspiracao/calella.jpg", name: "Calella de Palafrugell" },
  { src: "/fotos/inspiracao/castell-begur.jpg", name: "Begur" },
  { src: "/fotos/inspiracao/perelada.jpg", name: "Perelada" },
  { src: "/fotos/inspiracao/cadaques-rua.jpg", name: "Cadaqués" },
  { src: "/fotos/inspiracao/begur-rua.jpg", name: "Begur" },
];

export default function Inspire() {
  return (
    <section id="inspire" className="ij-section ij-section-warm ij-inspire">
      <ScrollReveal asChild>
        <div className="ij-inspire-head">
          <span className="ij-section-eyebrow ij-section-eyebrow--centered">Costa Brava</span>
          <h2>Para se inspirar</h2>
        </div>
      </ScrollReveal>

      <div className="ij-inspire-marquee">
        <ul className="ij-inspire-track">
          {[...INSPIRE, ...INSPIRE].map((place, i) => (
            <li
              className="ij-inspire-card"
              key={`${place.src}-${i}`}
              aria-hidden={i >= INSPIRE.length}
            >
              <div className="ij-inspire-img">
                <Image
                  src={place.src}
                  alt={place.name}
                  width={500}
                  height={625}
                  sizes="(max-width: 640px) 62vw, 250px"
                />
              </div>
              <span className="ij-inspire-name">{place.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <ScrollReveal asChild>
        <div className="ij-inspire-guide-wrap">
          <Link href="/guia-costa-brava" className="ij-inspire-guide">
            <span className="ij-inspire-guide-k">Slow travel guide</span>
            <span className="ij-inspire-guide-title">Nosso guia da Costa Brava</span>
            <span className="ij-inspire-guide-desc">
              Praias favoritas, hotéis, restaurantes e a rota do vinho no Empordà
            </span>
            <span className="ij-inspire-guide-go">Ver o guia →</span>
          </Link>
        </div>
      </ScrollReveal>

      <ScrollReveal asChild>
        <div className="ij-inspire-ig-wrap">
          <a
            className="ij-inspire-ig"
            href="https://www.instagram.com/ilovecostabrava"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ij-inspire-ig-icon" aria-hidden>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </span>
            <span className="ij-inspire-ig-text">
              <strong>@ilovecostabrava</strong>
              aqui tem mais dicas de praias, hotéis e regiões para conhecer
            </span>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}

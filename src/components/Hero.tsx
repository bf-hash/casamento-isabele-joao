"use client";

import Countdown from "./Countdown";

// Ajuste para a data real do casamento
const WEDDING_DATE = new Date("2026-12-06T15:30:00");

// Imagem do hero: coloque em /public/fotos/hero.jpg e altere para "/fotos/hero.jpg"
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Foto de fundo: troque HERO_IMAGE por "/fotos/hero.jpg" quando tiver a foto */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div className="absolute inset-0 bg-cream/90" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-charcoal/70 mb-4">
          Casamento
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-charcoal mb-4">
          Isabele & João
        </h1>
        <p className="text-xl sm:text-2xl text-charcoal/80 font-serif mb-12">
          06 . 12 . 2026
        </p>

        <div className="mb-12">
          <Countdown date={WEDDING_DATE} />
        </div>

        <p className="text-sm uppercase tracking-widest text-charcoal/60">
          #isabeleejoao
        </p>
      </div>
    </section>
  );
}

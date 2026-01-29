"use client";

import Countdown from "./Countdown";

const WEDDING_DATE = new Date("2027-07-01T15:00:00");

const HERO_IMAGE = "/fotos/hero.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div className="absolute inset-0 bg-cream/92" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <p className="text-sm uppercase tracking-[0.35em] text-charcoal/60 mb-3">
          Casamento
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-charcoal mb-3">
          Isabele & João
        </h1>
        <p className="text-xl sm:text-2xl text-charcoal/80 font-serif mb-14">
          01 . 07 . 2027
        </p>
        <p className="text-sm text-charcoal/70 mb-8">Convent de Blanes, Espanha</p>

        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-charcoal/60 mb-4">
            Faltam
          </p>
          <Countdown date={WEDDING_DATE} />
        </div>

        <p className="text-sm uppercase tracking-widest text-charcoal/50">
          #isabeleejoao
        </p>
      </div>
    </section>
  );
}

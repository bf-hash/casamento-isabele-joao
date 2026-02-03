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
      <div className="absolute inset-0 bg-marfim/92" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <p className="font-serif font-light text-sm uppercase tracking-[0.3em] text-charcoal/60 mb-4">
          Casamento
        </p>
        <h1 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4 tracking-[0.1em] leading-tight">
          <span className="block">ISABELE</span>
          <span className="font-script text-2xl sm:text-3xl font-normal normal-case tracking-normal text-charcoal/90">
            &amp;
          </span>
          <span className="block">JOÃO</span>
        </h1>
        <p className="font-serif font-light text-sm uppercase tracking-[0.25em] text-charcoal/75 mb-4">
          01 . 07 . 2027
        </p>
        <p className="font-serif font-light text-sm uppercase tracking-[0.2em] text-charcoal/65 mb-8">
          Convent de Blanes, Espanha
        </p>

        <div className="mb-12">
          <p className="font-serif font-light text-xs uppercase tracking-[0.25em] text-charcoal/55 mb-4">
            Faltam
          </p>
          <Countdown date={WEDDING_DATE} />
        </div>
      </div>
    </section>
  );
}

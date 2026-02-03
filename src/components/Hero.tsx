"use client";

import Countdown from "./Countdown";

const WEDDING_DATE = new Date("2027-07-01T15:00:00");
const HERO_IMAGE = "/fotos/hero.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-marfim/95" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <p className="font-serif font-light text-xs uppercase tracking-[0.4em] text-white/90 mb-6">
          Casamento
        </p>
        <h1 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-2 tracking-[0.15em] leading-[1.1] drop-shadow-lg">
          <span className="block">ISABELE</span>
          <span className="font-script text-3xl sm:text-4xl md:text-5xl font-normal normal-case tracking-normal text-white/95 block my-1">
            &amp;
          </span>
          <span className="block">JOÃO</span>
        </h1>
        <div className="w-12 h-px bg-white/60 mx-auto my-8" />
        <p className="font-serif font-light text-base uppercase tracking-[0.3em] text-white/90 mb-2">
          01 . 07 . 2027
        </p>
        <p className="font-serif font-light text-sm uppercase tracking-[0.2em] text-white/80 mb-12">
          Convent de Blanes · Costa Brava, Espanha
        </p>

        <Countdown date={WEDDING_DATE} />
      </div>
    </section>
  );
}

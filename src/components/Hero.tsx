import Countdown from "./Countdown";
import { GravuraCitrusDivider } from "./Illustrations";

export default function Hero() {
  return (
    <section id="top" className="ij-hero">
      <div className="ij-hero-body">
        <div className="ij-hero-ornament-top">
          <GravuraCitrusDivider width={280} />
        </div>
        <h1 className="ij-hero-name">
          Isabele <em className="amp">&amp;</em> João
        </h1>
        <div className="ij-hero-date">30 · 06 a 03 · 07 · 2027</div>
        <div className="ij-hero-place">Costa Brava — Espanha</div>
        <Countdown />
        <div className="ij-hero-ornament-bottom">
          <GravuraCitrusDivider width={280} />
        </div>
      </div>
    </section>
  );
}

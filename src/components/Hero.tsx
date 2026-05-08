import Image from "next/image";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section id="top" className="ij-hero">
      <div className="ij-hero-body">
        <h1 className="ij-hero-name">
          Isabele <em className="amp">&amp;</em> João
        </h1>
        <div className="ij-hero-date">30|06 A 03|07|2027</div>
        <div className="ij-hero-place">Costa Brava — Espanha</div>
        <Countdown />
      </div>
      <div className="ij-hero-art">
        <Image
          src="/assets/el-convent-watercolor.png"
          alt="El Convent de Blanes — Costa Brava"
          width={1400}
          height={700}
          priority
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
    </section>
  );
}

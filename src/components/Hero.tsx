import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section id="top" className="ij-hero">
      <div className="ij-hero-copy">
        <p className="ij-hero-dates">30 de junho a 3 de julho de 2027</p>
        <h1 className="ij-hero-name">
          <span className="ij-hero-name-ln">ISABELE</span>
          <span className="ij-hero-name-ln">
            <em className="amp">&amp;</em> JOÃO
          </span>
        </h1>
        <p className="ij-hero-place">Costa Brava, Espanha</p>
        <p className="ij-hero-meta">
          Quatro dias de mar, vinho e celebração no litoral mediterrâneo da Catalunha. Reservem o coração e a mala
          leve.
        </p>
        <Countdown />
        <a href="#rsvp" className="ij-hero-cta-mobile">
          Confirmar presença
        </a>
      </div>
    </section>
  );
}

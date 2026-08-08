export default function Hero() {
  return (
    <section id="top" className="ij-hero">
      <div className="ij-hero-copy">
        <img
          className="ij-hero-monogram"
          src="/assets/convite-monograma.png"
          alt=""
          aria-hidden="true"
        />
        <h1 className="ij-hero-name">
          <img src="/assets/convite-nome.png" alt="Isabele & João" />
        </h1>
        <p className="ij-hero-dates">01 . 07 . 2027&ensp;|&ensp;17:00</p>
        <p className="ij-hero-place">El Convent de Blanes · Espanha</p>
      </div>
      <div className="ij-hero-art" aria-hidden="true" />
    </section>
  );
}

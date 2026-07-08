import ScrollReveal from "./ScrollReveal";

export default function Welcome() {
  return (
    <section id="welcome" className="ij-section ij-section-paper">
      <div className="ij-center">
        <ScrollReveal>
          <div className="ij-section-header">
            <span className="ij-section-eyebrow ij-section-eyebrow--centered">Sejam muito bem-vindos</span>
            <h2>
              Um brinde ao
              <br />
              <span className="ij-serif-it">sul da Europa</span>
            </h2>
          </div>
          <p className="ij-prose">
            Estamos muito felizes em convidá-los para nosso casamento na Costa Brava, Espanha. Esse é um dos lugares
            onde nos sentimos mais em casa e passamos momentos muito especiais com amigos e família ao longo dos
            nossos 8 anos juntos.
          </p>
          <p className="ij-prose ij-prose-strong">Vamos fazer muita festa, comer bem e beber muito vinho juntos!</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

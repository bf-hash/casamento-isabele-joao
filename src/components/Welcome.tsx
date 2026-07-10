import ScrollReveal from "./ScrollReveal";

export default function Welcome() {
  return (
    <section id="welcome" className="ij-section ij-section-paper ij-welcome">
      <div className="ij-center">
        <ScrollReveal>
          <div className="ij-section-header">
            <h2>Sejam muito bem-vindos</h2>
          </div>
          <p className="ij-prose">
            Estamos muito felizes em convidá-los para nosso casamento na Costa Brava, Espanha. Esse é um lugar onde
            passamos momentos muito especiais com amigos e família ao longo dos nossos 8 anos juntos.
          </p>
          <p className="ij-prose ij-prose-strong">Vamos festejar, comer e beber bem juntos!</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

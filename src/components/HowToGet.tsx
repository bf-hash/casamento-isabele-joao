import ScrollReveal from "./ScrollReveal";

export default function HowToGet() {
  return (
    <section id="howtoget" className="ij-section ij-section-paper">
      <div className="ij-arrive">
        <ScrollReveal className="ij-arrive-map">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/mapa-costa-brava.svg" alt="Mapa ilustrado Costa Brava" />
        </ScrollReveal>
        <ScrollReveal>
          <h2>Como chegar</h2>
          <div className="ij-howto-block">
            <h4>De avião</h4>
            <h3 className="ij-howto-block-title">Barcelona ou Girona</h3>
            <p>
              Do Brasil, a <strong>LATAM</strong> opera voo direto de São Paulo (GRU) para Barcelona; também há
              opções com conexão em Lisboa, Madrid ou outras capitais europeias.
            </p>
            <p>
              De Barcelona até o casamento: cerca de 1h30 (~90 km). De Girona, aproximadamente 45 minutos (~45 km).
              Estradas tranquilas e vistas que valem a viagem, além de liberdade para explorar a região.
            </p>
          </div>
          <div className="ij-howto-block">
            <h4>Até a Costa Brava</h4>
            <h3 className="ij-howto-block-title">Recomendamos alugar um carro</h3>
            <p>
              De Barcelona até Tossa de Mar: cerca de 1h30 (~90 km). De Girona, aproximadamente 45 minutos (~45 km).
              Estradas tranquilas e vistas que valem a viagem, além de liberdade para explorar a região.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

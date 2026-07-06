import ScrollReveal from "./ScrollReveal";

export default function HowToGet() {
  return (
    <section id="howtoget" className="ij-section ij-section-paper">
      <div className="ij-arrive">
        <ScrollReveal className="ij-arrive-map">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/mapa-costa-brava.svg" alt="Mapa ilustrado Costa Brava" />
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <span className="ij-section-eyebrow">Como chegar</span>
          <h2>
            A caminho
            <br />
            do mar
          </h2>
          <div className="ij-howto-block">
            <h4>De avião</h4>
            <p>
              A rota mais prática é voar até o <strong>Aeroporto de Barcelona-El Prat (BCN)</strong> ou o{" "}
              <strong>Aeroporto de Girona-Costa Brava (GRO)</strong>. Do Brasil, a <strong>LATAM</strong> opera voo
              direto de São Paulo (GRU) para Barcelona; também há opções com conexão em Lisboa, Madrid ou outras
              capitais europeias.
            </p>
          </div>
          <div className="ij-howto-block">
            <h4>Até a Costa Brava</h4>
            <p>
              <strong>Barcelona → Tossa de Mar:</strong> ~90 km. O mais prático é alugar carro ou usar transfer.
            </p>
            <p>
              <strong>Girona → Tossa de Mar:</strong> ~45 km. O aeroporto de Girona fica mais perto; alugar carro ou
              transfer.
            </p>
            <p>
              Recomendamos alugar um carro para explorar a região com liberdade, principalmente entre Tossa de Mar e
              Begur / Palafrugell.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

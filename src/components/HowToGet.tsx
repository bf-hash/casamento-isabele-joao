import { GravuraAviao } from "./Illustrations";
import ScrollReveal from "./ScrollReveal";

export default function HowToGet() {
  return (
    <section id="howtoget" className="ij-section ij-section-paper">
      <div className="ij-center">
        <ScrollReveal>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <GravuraAviao size={100} />
          </div>
        </ScrollReveal>
        <div style={{ height: 16 }} />
        <ScrollReveal delay={1}>
          <div className="ij-section-header">
            <h2>Como chegar</h2>
          </div>
        </ScrollReveal>
      </div>
      <ScrollReveal delay={2}>
        <div className="ij-howto-content">
          <div className="ij-howto-block">
            <h4>De avião</h4>
            <p>
              A rota mais prática é voar até o{" "}
              <strong>Aeroporto de Barcelona-El Prat (BCN)</strong> ou o{" "}
              <strong>Aeroporto de Girona-Costa Brava (GRO)</strong>. Saindo do
              Brasil, os voos costumam ter conexão em Lisboa, Madrid ou outras
              capitais europeias.
            </p>
            <p
              style={{
                fontSize: 14,
                fontStyle: "italic",
                color: "var(--ink-quiet)",
                marginTop: 8,
              }}
            >
              Dica: se passarem por Valência, provem as laranjas — as melhores
              do Mediterrâneo.
            </p>
          </div>
          <div className="ij-howto-block">
            <h4>Até a Costa Brava</h4>
            <p>
              <strong>Barcelona → Tossa de Mar:</strong> ~90 km. O mais prático
              é alugar carro ou pegar um transfer.
            </p>
            <p>
              <strong>Girona → Tossa de Mar:</strong> ~45 km. Girona é o
              aeroporto mais próximo — também dá para chegar de carro alugado ou
              transfer.
            </p>
          </div>
          <div className="ij-recommendation">
            <p className="ij-recommendation-label">Recomendação</p>
            <p>
              Vale a pena alugar um carro para explorar a região com liberdade,
              principalmente no trecho entre Tossa de Mar e Begur / Palafrugell.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

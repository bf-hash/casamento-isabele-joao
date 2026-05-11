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
              <strong>Aeroporto de Girona-Costa Brava (GRO)</strong>. Do Brasil,
              há voos com conexão em Lisboa, Madrid ou outras capitais europeias.
            </p>
            <p
              style={{
                fontSize: 14,
                fontStyle: "italic",
                color: "var(--ink-quiet)",
                marginTop: 8,
              }}
            >
              Dica: se pararem em Valência, aproveitem as laranjas — as melhores
              do Mediterrâneo.
            </p>
          </div>
          <div className="ij-howto-block">
            <h4>Até a Costa Brava</h4>
            <p>
              <strong>Barcelona → Tossa de Mar:</strong> ~90 km. O mais prático é
              alugar carro ou usar transfer.
            </p>
            <p>
              <strong>Girona → Tossa de Mar:</strong> ~45 km. O aeroporto de
              Girona fica mais perto; alugar carro ou transfer.
            </p>
          </div>
          <div className="ij-recommendation">
            <p className="ij-recommendation-label">Recomendação</p>
            <p>
              Recomendamos alugar um carro para explorar a região com liberdade,
              principalmente entre Tossa de Mar e Begur / Palafrugell.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

import {
  GravuraSun,
  GravuraAlliance,
  GravuraPool,
  GravuraWine,
} from "./Illustrations";
import ScrollReveal from "./ScrollReveal";
import type { ComponentType } from "react";

interface EventData {
  date: string;
  title: string;
  time?: string;
  venue?: string;
  address?: string;
  description?: string;
  note?: string;
  mapsUrl?: string;
  venueUrl?: string;
  transportNote?: string;
  illustration: string;
  accentColor: string;
}

const EVENTS: EventData[] = [
  {
    date: "30 . 06 . 27",
    title: "Pré-wedding",
    address: "Detalhes em breve",
    illustration: "sun",
    accentColor: "#f1722e",
  },
  {
    date: "01 . 07 . 27",
    title: "Casamento",
    time: "A partir das 18h",
    venue: "Convent de Blanes",
    address: "Passeig de Carles Faust, 4, 17300 Blanes, Girona",
    mapsUrl:
      "https://maps.google.com/?q=El+Convent+de+Blanes+Passeig+Carles+Faust+4",
    venueUrl: "https://elconventblanes.com/en/",
    transportNote:
      "No dia do casamento, teremos vans saindo de Tossa de Mar e do Hotel Santa Marta (Lloret de Mar).",
    illustration: "alliance",
    accentColor: "#EE7170",
  },
  {
    date: "02 . 07 . 27",
    title: "Dia de recuperação",
    time: "Dia livre",
    description:
      "Sabemos que todos vão estar exaustos depois da festa, então deixamos o dia livre. Para os sobreviventes, estaremos na piscina do Hotel Santa Marta no fim da tarde, tomando bons drinks.",
    illustration: "pool",
    accentColor: "#92AAC3",
  },
  {
    date: "03 . 07 . 27",
    title: "Vinícola & jantar",
    description:
      "Passeio pela vinícola Perelada seguido de um jantar de despedida na região de Begur.",
    illustration: "wine",
    accentColor: "#8EA83A",
  },
];

const ILLUS_MAP: Record<string, ComponentType<{ size?: number }>> = {
  sun: GravuraSun,
  alliance: GravuraAlliance,
  pool: GravuraPool,
  wine: GravuraWine,
};

export default function Program() {
  return (
    <section id="program" className="ij-section ij-section-warm">
      <ScrollReveal>
        <div className="ij-section-header">
          <h2>Programação</h2>
          <p className="ij-section-sub">Costa Brava, Espanha</p>
        </div>
      </ScrollReveal>
      <div className="ij-program-grid">
        {EVENTS.map((e, i) => {
          const Illus = ILLUS_MAP[e.illustration];
          return (
            <ScrollReveal key={i} delay={i > 0 ? 1 : 0}>
              <div>
                {i > 0 && <div className="ij-program-star">✦</div>}
                <article className="ij-event">
                  {Illus && (
                    <div className="ij-event-illus">
                      <Illus size={90} />
                    </div>
                  )}
                  <p className="ij-event-date" style={{ color: e.accentColor }}>{e.date}</p>
                  <h3>{e.title}</h3>
                  {e.time && <p className="ij-event-time">{e.time}</p>}
                  {e.venue && <p className="ij-event-venue">{e.venue}</p>}
                  {e.address && <p className="ij-event-address">{e.address}</p>}
                  {e.description && (
                    <p className="ij-event-desc">{e.description}</p>
                  )}
                  {e.note && <p className="ij-event-note">{e.note}</p>}
                  {(e.mapsUrl || e.venueUrl) && (
                    <div className="ij-event-actions">
                      {e.mapsUrl && (
                        <a
                          href={e.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ver no mapa
                        </a>
                      )}
                      {e.venueUrl && (
                        <a
                          href={e.venueUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Site do local
                        </a>
                      )}
                    </div>
                  )}
                  {e.transportNote && (
                    <div className="ij-event-meta">
                      <p className="ij-event-meta-label">Transporte</p>
                      <p>{e.transportNote}</p>
                    </div>
                  )}
                </article>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}

import ScrollReveal from "./ScrollReveal";

interface EventData {
  day: string;
  weekday: string;
  title: string;
  time?: string;
  venue?: string;
  address?: string;
  description?: string;
  mapsUrl?: string;
  venueUrl?: string;
  transportNote?: string;
  art: string;
}

const EVENTS: EventData[] = [
  {
    day: "30·06",
    weekday: "Quarta-feira",
    title: "Pré-wedding",
    address: "Detalhes em breve",
    art: "/fotos/programacao/pre-wedding.webp",
  },
  {
    day: "01·07",
    weekday: "Quinta-feira",
    title: "Casamento",
    time: "A partir das 18h",
    venue: "Convent de Blanes",
    address: "Passeig de Carles Faust, 4, 17300 Blanes, Girona",
    mapsUrl: "https://maps.google.com/?q=El+Convent+de+Blanes+Passeig+Carles+Faust+4",
    venueUrl: "https://elconventblanes.com/en/",
    transportNote:
      "Teremos vans que buscarão em Tossa de Mar e no Hotel Santa Marta (Lloret de Mar) no dia do casamento.",
    art: "/fotos/programacao/casamento.webp",
  },
  {
    day: "02·07",
    weekday: "Sexta-feira",
    title: "Dia de recuperação",
    time: "Dia livre",
    description:
      "Sabemos que todos estarão acabados da festa, então deixamos esse dia livre. Para os sobreviventes, estaremos na piscina do hotel Santa Marta no fim do dia tomando bons drinks.",
    art: "/fotos/programacao/recuperacao.webp",
  },
  {
    day: "03·07",
    weekday: "Sábado",
    title: "Vinícola & jantar",
    description: "Passeio na vinícola Perelada com um jantar para fechar com chave de ouro na região de Begur.",
    art: "/fotos/programacao/vinicola.webp",
  },
];

export default function Program() {
  return (
    <section id="program" className="ij-section ij-section-warm">
      <ScrollReveal>
        <div className="ij-section-header">
          <span className="ij-section-eyebrow">Programação</span>
          <h2>
            Quatro dias
            <br />
            à beira-mar
          </h2>
          <p className="ij-section-sub">Costa Brava, Espanha</p>
        </div>
      </ScrollReveal>
      <div className="ij-timeline">
        {EVENTS.map((e, i) => (
          <ScrollReveal key={e.title} delay={Math.min(i, 2)}>
            <article className="ij-event">
              <div className="ij-event-date">
                <div className="ij-event-date-num">{e.day}</div>
                <div className="ij-event-date-full">{e.weekday}</div>
                <span className="ij-event-date-dot" />
              </div>
              <div className="ij-event-body">
                <h3>{e.title}</h3>
                {(e.time || e.venue) && (
                  <p className="ij-event-meta-line">
                    {e.time && <b>{e.time}</b>}
                    {e.time && e.venue && " · "}
                    {e.venue}
                  </p>
                )}
                {e.address && <p className="ij-event-address">{e.address}</p>}
                {e.description && <p className="ij-event-desc">{e.description}</p>}
                {(e.mapsUrl || e.venueUrl) && (
                  <div className="ij-event-actions">
                    {e.mapsUrl && (
                      <a href={e.mapsUrl} target="_blank" rel="noopener noreferrer">
                        Ver no mapa
                      </a>
                    )}
                    {e.venueUrl && (
                      <a href={e.venueUrl} target="_blank" rel="noopener noreferrer">
                        Site do local
                      </a>
                    )}
                  </div>
                )}
                {e.transportNote && (
                  <div className="ij-event-transport">
                    <span className="ij-event-transport-label">Transporte</span>
                    <p>{e.transportNote}</p>
                  </div>
                )}
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={e.art} alt="" className="ij-event-art" />
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

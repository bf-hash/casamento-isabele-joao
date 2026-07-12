import type { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

interface EventData {
  day: string;
  weekday: string;
  title: string;
  time?: string;
  venue?: string;
  address?: string;
  description?: ReactNode;
  mapsUrl?: string;
  venueUrl?: string;
  transportNote?: string;
  art: string;
}

const BOAT_TOUR_WHATSAPP = `https://wa.me/12028603255?text=${encodeURIComponent(
  "Oi! Tenho interesse em fazer o passeio de barco",
)}`;

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
      "Sabemos que todos estarão acabados da festa, então deixamos esse dia livre.",
    art: "/fotos/programacao/recuperacao.webp",
  },
  {
    day: "03·07",
    weekday: "Sábado",
    title: "Barco e jantar",
    description: (
      <>
        Estamos organizando um passeio de barco nas calas e praias da região de
        Begur e um jantar para fechar com chave de ouro. Se tiver interesse,{" "}
        <a
          href={BOAT_TOUR_WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="ij-inline-link"
        >
          mande uma mensagem aqui
        </a>
        .
      </>
    ),
    art: "/fotos/programacao/vinicola.webp",
  },
];

export default function Program() {
  return (
    <section id="program" className="ij-section ij-section-warm">
      <ScrollReveal asChild>
        <header className="ij-prog-head">
          <h2>Programação</h2>
        </header>
      </ScrollReveal>
      <div className="ij-timeline">
        {EVENTS.map((e) => (
          <ScrollReveal key={e.title} asChild>
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

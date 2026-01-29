import Link from "next/link";

const EVENTS = [
  {
    date: "30 . 06 . 27",
    title: "Jantar de boas-vindas",
    time: "À noite",
    venue: "L'Espai",
    address: "Plaça de l'Església, 2B, Tossa de Mar",
    mapsUrl: "https://maps.google.com/?q=Plaça+Església+2B+Tossa+de+Mar",
    dressCode: null,
    dressNote: null,
  },
  {
    date: "01 . 07 . 27",
    title: "Casamento",
    time: "Cerimônia e festa",
    venue: "Convent de Blanes",
    address: "Passeig de Carles Faust, 4, 17300 Blanes, Girona",
    mapsUrl: "https://maps.google.com/?q=El+Convent+de+Blanes+Passeig+Carles+Faust+4",
    dressCode: "Passeio completo / Social",
    dressNote:
      "A cerimônia será em espaço ao ar livre. Recomendamos saltos grossos, plataformas ou sapatos sem salto; evitem saltos finos ou agulha.",
  },
  {
    date: "02 . 07 . 27",
    title: "Hangover party",
    time: "À tarde / noite",
    venue: "Hotel Santa Marta",
    address: "Tossa de Mar",
    mapsUrl: "https://maps.google.com/?q=Hotel+Santa+Marta+Tossa+de+Mar",
    dressCode: null,
    dressNote: null,
  },
  {
    date: "03 . 07 . 27",
    title: "Wine tasting e jantar",
    time: "16h — Wine tasting · Noite — Jantar",
    venue: "Celler Perelada · Cidade medieval",
    address: "Segunda etapa: Begur / Palafrugell",
    mapsUrl: "https://maps.google.com/?q=Celler+Perelada+Peralada",
    dressCode: null,
    dressNote: null,
  },
  {
    date: "04 . 07 . 27",
    title: "Passeio de barco",
    time: "Durante o dia",
    venue: "Costa Brava",
    address: "Begur / Palafrugell",
    mapsUrl: "https://maps.google.com/?q=Palafrugell+Costa+Brava",
    dressCode: null,
    dressNote: null,
  },
];

export default function Program() {
  return (
    <section className="px-6 py-20 md:py-28 bg-sand/50">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal text-center mb-14">
          Programação
        </h2>

        <div className="space-y-16">
          {EVENTS.map((event, i) => (
            <article
              key={i}
              className="border-b border-charcoal/10 pb-12 last:border-0"
            >
              <p className="text-sm uppercase tracking-widest text-charcoal/60 mb-2">
                {event.date}
              </p>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-charcoal mb-2">
                {event.title}
              </h3>
              <p className="text-charcoal/80 mb-2">{event.time}</p>
              <p className="font-medium text-charcoal mb-1">{event.venue}</p>
              <p className="text-sm text-charcoal/70 mb-4">{event.address}</p>
              <Link
                href={event.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm uppercase tracking-wider text-terracotta hover:underline mb-4"
              >
                Ver no mapa
              </Link>
              {event.dressCode && (
                <div className="mt-4 pt-4 border-t border-charcoal/10">
                  <p className="text-sm font-medium text-charcoal/80 mb-1">
                    Dress code
                  </p>
                  <p className="text-charcoal/80">{event.dressCode}</p>
                  {event.dressNote && (
                    <p className="text-sm text-charcoal/60 mt-2">
                      {event.dressNote}
                    </p>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

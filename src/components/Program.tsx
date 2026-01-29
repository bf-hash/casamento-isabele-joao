import Image from "next/image";
import Link from "next/link";

const PARTE_1_EVENTS = [
  {
    date: "30 . 06 . 27",
    title: "Jantar de boas-vindas",
    time: "À noite",
    venue: "L'Espai",
    address: "Plaça de l'Església, 2B, Tossa de Mar",
    mapsUrl: "https://maps.google.com/?q=Plaça+Església+2B+Tossa+de+Mar",
    dressCode: null,
    dressNote: null,
    transportNote: null,
    image: "/fotos/lespai.jpg",
  },
  {
    date: "01 . 07 . 27",
    title: "Casamento",
    time: "Cerimônia e festa",
    venue: "Convent de Blanes",
    address: "Passeig de Carles Faust, 4, 17300 Blanes, Girona",
    mapsUrl:
      "https://maps.google.com/?q=El+Convent+de+Blanes+Passeig+Carles+Faust+4",
    dressCode: "Passeio completo / Social",
    dressNote:
      "A cerimônia será em espaço ao ar livre. Recomendamos saltos grossos, plataformas ou sapatos sem salto; evitem saltos finos ou agulha.",
    transportNote:
      "Teremos vans que buscarão em Tossa de Mar e no Hotel Santa Marta (Lloret de Mar) no dia do casamento.",
    image: "/fotos/casamento.png",
  },
  {
    date: "02 . 07 . 27",
    title: "Hangover party",
    time: "À tarde / noite",
    venue: "Hotel Santa Marta",
    address: "Lloret de Mar · hotelsantamarta.es",
    mapsUrl: "https://www.google.com/maps/search/Hotel+Santa+Marta+Lloret+de+Mar",
    dressCode: null,
    dressNote: null,
    transportNote: null,
    image: "/fotos/hotel-santa-marta.webp",
  },
];

const PARTE_2_EVENTS = [
  {
    date: "03 . 07 . 27",
    title: "Wine tasting e jantar",
    time: "16h — Wine tasting · Noite — Jantar",
    venue: "Celler Perelada · Cidade medieval",
    address: "Segunda etapa: Begur / Palafrugell",
    mapsUrl: "https://maps.google.com/?q=Celler+Perelada+Peralada",
    dressCode: null,
    dressNote: null,
    transportNote: null,
    image: "/fotos/cellar-perelada.jpg",
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
    transportNote: null,
    image:
      "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=800&q=80",
  },
];

function EventCard({
  date,
  title,
  time,
  venue,
  address,
  mapsUrl,
  dressCode,
  dressNote,
  transportNote,
  image,
}: {
  date: string;
  title: string;
  time: string;
  venue: string;
  address: string;
  mapsUrl: string;
  dressCode: string | null;
  dressNote: string | null;
  transportNote: string | null;
  image: string;
}) {
  return (
    <article className="rounded-xl overflow-hidden border border-charcoal/10 bg-cream shadow-sm">
      <div className="aspect-[4/3] relative bg-sand/50">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 600px"
        />
      </div>
      <div className="p-5 sm:p-6">
        <p className="font-serif font-light text-xs uppercase tracking-[0.15em] text-charcoal/60 mb-1">
          {date}
        </p>
        <h3 className="font-serif font-medium text-xl sm:text-2xl text-charcoal mb-2 tracking-wide">
          {title}
        </h3>
        <p className="text-charcoal/80 mb-2">{time}</p>
        <p className="font-medium text-charcoal mb-1">{venue}</p>
        <p className="text-sm text-charcoal/70 mb-4">{address}</p>
        <Link
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
            className="font-serif font-light inline-block text-sm uppercase tracking-[0.1em] text-terracotta hover:underline mb-4"
        >
          Ver no mapa
        </Link>
        {transportNote && (
          <div className="mt-4 pt-4 border-t border-charcoal/10">
            <p className="text-sm font-medium text-charcoal/80 mb-1">
              Transporte
            </p>
            <p className="text-sm text-charcoal/80">{transportNote}</p>
          </div>
        )}
        {dressCode && (
          <div className="mt-4 pt-4 border-t border-charcoal/10">
            <p className="text-sm font-medium text-charcoal/80 mb-1">
              Dress code
            </p>
            <p className="text-charcoal/80">{dressCode}</p>
            {dressNote && (
              <p className="text-sm text-charcoal/60 mt-2">{dressNote}</p>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function ParteSection({
  label,
  events,
}: {
  label: string;
  events: typeof PARTE_1_EVENTS;
}) {
  return (
    <div>
      <h3 className="font-serif font-light text-sm sm:text-base uppercase tracking-[0.15em] text-charcoal/80 mb-6 pb-2 border-b border-charcoal/15">
        {label}
      </h3>
      <div className="space-y-10">
        {events.map((e, i) => (
          <EventCard key={i} {...e} />
        ))}
      </div>
    </div>
  );
}

export default function Program() {
  return (
    <section className="px-6 py-20 md:py-28 bg-sand/50" id="program">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif font-light text-xl sm:text-2xl uppercase tracking-[0.2em] text-charcoal text-center mb-16">
          Programação
        </h2>

        <div className="space-y-16">
          <ParteSection
            label="Parte 1 — Pré-wedding, casamento e pós · Dias 30/6, 1/07 e 02/07"
            events={PARTE_1_EVENTS}
          />
          <ParteSection
            label="Parte 2 — Dias 3/07 e 04/07"
            events={PARTE_2_EVENTS}
          />
        </div>
      </div>
    </section>
  );
}

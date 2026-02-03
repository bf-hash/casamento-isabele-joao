import Image from "next/image";
import Link from "next/link";

const PARTE_1_EVENTS = [
  {
    date: "30 . 06 . 27",
    title: "Pré-wedding",
    time: "À tarde / noite",
    venue: "Hotel Santa Marta",
    address: "Lloret de Mar · hotelsantamarta.es",
    mapsUrl: "https://www.google.com/maps/search/Hotel+Santa+Marta+Lloret+de+Mar",
    venueUrl: null,
    dressCode: null,
    dressNote: null,
    transportNote: null,
    extraNote: null,
    image: "/fotos/hotel-santa-marta.webp",
  },
  {
    date: "01 . 07 . 27",
    title: "Casamento",
    time: "Cerimônia e festa",
    venue: "Convent de Blanes",
    address: "Passeig de Carles Faust, 4, 17300 Blanes, Girona",
    mapsUrl:
      "https://maps.google.com/?q=El+Convent+de+Blanes+Passeig+Carles+Faust+4",
    venueUrl: "https://elconventblanes.com/en/",
    dressCode: "Passeio completo / Social",
    dressNote:
      "A cerimônia será em espaço ao ar livre. Recomendamos saltos grossos, plataformas ou sapatos sem salto; evitem saltos finos ou agulha.",
    transportNote:
      "Teremos vans que buscarão em Tossa de Mar e no Hotel Santa Marta (Lloret de Mar) no dia do casamento.",
    extraNote: null,
    image: "/fotos/casamento.png",
  },
  {
    date: "02 . 07 . 27",
    title: "Jantar de boas-vindas",
    time: "À noite",
    venue: "L'Espai",
    address: "Plaça de l'Església, 2B, Tossa de Mar",
    mapsUrl: "https://maps.google.com/?q=Plaça+Església+2B+Tossa+de+Mar",
    venueUrl: null,
    dressCode: null,
    dressNote: null,
    transportNote: null,
    extraNote: null,
    image: "/fotos/lespai.jpg",
  },
];

function EventCard({
  date,
  title,
  time,
  venue,
  address,
  mapsUrl,
  venueUrl,
  dressCode,
  dressNote,
  transportNote,
  extraNote,
  image,
}: {
  date: string;
  title: string;
  time: string;
  venue: string;
  address: string;
  mapsUrl: string;
  venueUrl: string | null;
  dressCode: string | null;
  dressNote: string | null;
  transportNote: string | null;
  extraNote: string | null;
  image: string;
}) {
  return (
    <article className="overflow-hidden bg-white rounded-2xl shadow-[0_4px_24px_-4px_rgba(44,44,44,0.08)]">
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 600px"
        />
      </div>
      <div className="p-6 sm:p-8">
        <p className="font-serif font-light text-xs uppercase tracking-[0.15em] text-terracotta/80 mb-2">
          {date}
        </p>
        <h3 className="font-display font-semibold text-xl sm:text-2xl text-charcoal mb-2 tracking-[0.03em]">
          {title}
        </h3>
        <p className="font-serif font-light text-sm text-charcoal/80 mb-2">{time}</p>
        <p className="font-serif font-medium text-sm text-charcoal mb-1">{venue}</p>
        <p className="font-serif font-light text-sm text-charcoal/70 mb-4">{address}</p>
        <div className="flex flex-wrap gap-4 gap-y-1 mb-4">
          <Link
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif font-medium text-sm uppercase tracking-[0.1em] text-terracotta hover:text-coral transition-colors"
          >
            Ver no mapa
          </Link>
          {venueUrl && (
            <Link
              href={venueUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif font-medium text-sm uppercase tracking-[0.1em] text-terracotta hover:text-coral transition-colors"
            >
              Site do local
            </Link>
          )}
        </div>
        {transportNote && (
          <div className="mt-4 pt-4 border-t border-charcoal/10">
            <p className="font-serif font-medium text-xs uppercase tracking-[0.08em] text-charcoal/80 mb-1">
              Transporte
            </p>
            <p className="text-sm text-charcoal/80">{transportNote}</p>
          </div>
        )}
        {dressCode && (
          <div className="mt-4 pt-4 border-t border-charcoal/10">
            <p className="font-serif font-medium text-xs uppercase tracking-[0.08em] text-charcoal/80 mb-1">
              Dress code
            </p>
            <p className="text-charcoal/80">{dressCode}</p>
            {dressNote && (
              <p className="text-sm text-charcoal/60 mt-2">{dressNote}</p>
            )}
          </div>
        )}
        {extraNote && (
          <div className="mt-4 pt-4 border-t border-charcoal/10">
            <p className="text-sm text-charcoal/80">{extraNote}</p>
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
      <h3 className="font-serif font-light text-sm uppercase tracking-[0.12em] text-charcoal/70 mb-8">
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
    <section className="px-6 py-24 md:py-32 bg-[#f5f0e8]" id="program">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-px bg-terracotta/40 mx-auto mb-8" />
          <h2 className="font-display font-medium text-2xl sm:text-3xl uppercase tracking-[0.2em] text-charcoal">
            Programação
          </h2>
        </div>

        <div className="space-y-16">
          <ParteSection
            label="Pré-wedding, casamento e pós · Dias 30/6, 1/07 e 02/07"
            events={PARTE_1_EVENTS}
          />
          <div className="rounded-2xl bg-white p-8 sm:p-10 shadow-[0_4px_24px_-4px_rgba(44,44,44,0.06)]">
            <p className="font-serif font-light text-sm sm:text-base text-charcoal/85 leading-relaxed">
              Para quem quiser estender a celebração, seguiremos por mais dois
              dias com muito vinho e praia, um pouco ao norte da Costa Brava.
              Enviaremos mais informações em breve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

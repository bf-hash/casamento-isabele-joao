import Link from "next/link";

const EVENTS = [
  {
    date: "DD . MM . 26",
    title: "Casamento",
    time: "Às 15h30",
    venue: "Nome do local",
    address: "Endereço completo do local",
    mapsUrl: "https://maps.google.com",
    dressCode: "Passeio completo / Social",
    dressNote:
      "A cerimônia acontecerá em gramado; recomendamos saltos grossos ou sapatos sem salto.",
  },
  // Adicione mais eventos (pré-wedding, coquetel etc.) seguindo o mesmo formato
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
            <article key={i} className="border-b border-charcoal/10 pb-12 last:border-0">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

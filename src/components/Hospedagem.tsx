import Link from "next/link";

const TOSSA_HOTELS = [
  { name: "Mana Mana Youth Hostel", price: "$" as const, note: "Hostel, avaliação 9,2" },
  { name: "Hotel Miami", price: "$" as const, note: "Próximo à praia" },
  { name: "Hotel Don Juan Tossa", price: "$" as const, note: "Boa relação custo-benefício" },
  { name: "Hotel Diana", price: "$$" as const, note: "4★, centro histórico, na praia" },
  { name: "Hotel Santa Marta", price: "$$" as const, note: "Onde será a hangover party" },
  { name: "GHT Costa Brava & Spa", price: "$$" as const, note: "4★ Sup, spa" },
  { name: "Hotel Delfín 4 Sup", price: "$$" as const, note: "2 min da Platja Gran" },
  { name: "Mamma Mia Hotel Boutique", price: "$$$" as const, note: "Only Adults, 3 min da praia" },
  { name: "Elisabeth By The Sea", price: "$$$" as const, note: "5★, spa, praia privada" },
  { name: "Golden Mar Menuda", price: "$$$" as const, note: "Junto à praia" },
];

const BEGUR_PALAFRUGELL_HOTELS = [
  { name: "Hotel Llafranc", price: "$" as const, note: "Llafranc, 3★" },
  { name: "Hotel Alga", price: "$$" as const, note: "4★, Calella de Palafrugell, 200 m da praia" },
  { name: "Hotel Sa Punta", price: "$$" as const, note: "Begur, zona tranquila" },
  { name: "Hotel Eetu Begur (Meliá)", price: "$$$" as const, note: "Baía de Aiguablava, Only Adults, spa" },
];

function HotelCard({
  name,
  price,
  note,
}: {
  name: string;
  price: "$" | "$$" | "$$$";
  note: string;
}) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-2 py-3 border-b border-charcoal/10 last:border-0">
      <div>
        <p className="font-medium text-charcoal">{name}</p>
        <p className="text-sm text-charcoal/70 mt-0.5">{note}</p>
      </div>
      <span
        className={`text-sm font-medium tabular-nums ${
          price === "$"
            ? "text-charcoal/70"
            : price === "$$"
            ? "text-terracotta"
            : "text-charcoal"
        }`}
      >
        {price}
      </span>
    </div>
  );
}

export default function Hospedagem() {
  return (
    <section className="px-6 py-20 md:py-28 bg-cream" id="hospedagem">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal text-center mb-4">
          Hospedagem
        </h2>
        <p className="text-center text-charcoal/75 text-sm mb-12">
          <span className="font-medium">$</span> econômico ·{" "}
          <span className="font-medium">$$</span> médio ·{" "}
          <span className="font-medium">$$$</span> upscale
        </p>

        <div className="space-y-12">
          <div>
            <h3 className="font-serif text-lg font-semibold text-charcoal mb-1">
              Tossa de Mar
            </h3>
            <p className="text-sm text-charcoal/70 mb-6">
              30 de junho — 2 de julho · Para o jantar, casamento e hangover
            </p>
            <div className="divide-y divide-charcoal/10 rounded-lg border border-charcoal/10 bg-sand/30 p-4">
              {TOSSA_HOTELS.map((h) => (
                <HotelCard key={h.name} {...h} />
              ))}
            </div>
            <Link
              href="https://www.booking.com/searchresults.html?ss=Tossa+de+Mar&checkin=2027-06-30&checkout=2027-07-03"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm uppercase tracking-wider text-terracotta hover:underline"
            >
              Ver ofertas na Booking
            </Link>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-charcoal mb-1">
              Begur & Palafrugell
            </h3>
            <p className="text-sm text-charcoal/70 mb-6">
              2 — 5 de julho · Segunda etapa: wine tasting, jantar medieval e
              passeio de barco
            </p>
            <div className="divide-y divide-charcoal/10 rounded-lg border border-charcoal/10 bg-sand/30 p-4">
              {BEGUR_PALAFRUGELL_HOTELS.map((h) => (
                <HotelCard key={h.name} {...h} />
              ))}
            </div>
            <Link
              href="https://www.booking.com/searchresults.html?ss=Palafrugell%2C+Begur&checkin=2027-07-02&checkout=2027-07-06"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm uppercase tracking-wider text-terracotta hover:underline"
            >
              Ver ofertas na Booking
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

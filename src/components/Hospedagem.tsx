import Link from "next/link";
import { IconHotel } from "./Icons";

const gTravel = (q: string) =>
  `https://www.google.com/travel/search?q=${encodeURIComponent(q)}`;

const TOSSA_GOOGLE_ALL =
  "https://www.google.com/travel/search?q=TOSSA+DE+MAR+HOTELS&g2lb=4965990%2C72248050%2C72248051%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764%2C73249150%2C121522132&hl=en-BR&gl=br&ssta=1&ts=CAESCgoCCAMKAggDEAAaVQo3EjUyJTB4MTJiYjFhYTdhYzExYWFhMToweGEyNjE0ZjRhZWM4MzM0Y2Q6DFRvc3NhIERlIE1hchIaEhQKBwjqDxABGB4SBwjqDxABGB8YATICEAAqBwoFOgNCUkw&qs=CAEyKENob0l0NUNhaHJQdTZLX29BUm9OTDJjdk1URm9NR013WWpGdWNCQUI4BkIJEVJxFhfHvi_gQgkRSG2P-aY2eWVCCRFKKBVCOWNl2lpNMkuqAUgQASoKIgZob3RlbHMoDDIfEAEiG0QJuo7eWNzpfH4xysmxBCQvuZS_e5vUiR1iPDIXEAIiE3Rvc3NhIGRlIG1hciBob3RlbHM&ap=aAE&ictx=111&ved=2ahUKEwirtNukzrGSAxUYNbkGHUZhEV0QyvcEegQIAxBI";

type Price = "$" | "$$" | "$$$";

const TOSSA_HOTELS: {
  name: string;
  price: Price;
  note: string;
  url: string;
}[] = [
  {
    name: "Hotel Diana",
    price: "$$",
    note: "4★, centro histórico, na praia",
    url: gTravel("Hotel Diana Tossa de Mar"),
  },
  {
    name: "GHT Costa Brava & Spa",
    price: "$$",
    note: "4★ Sup, spa",
    url: gTravel("GHT Costa Brava Spa Tossa de Mar"),
  },
  {
    name: "Hotel Delfín 4 Sup",
    price: "$$",
    note: "2 min da Platja Gran",
    url: gTravel("Hotel Delfín 4 Sup Tossa de Mar"),
  },
  {
    name: "Hostal Boutique Es Menut",
    price: "$$",
    note: "4★, Vila Vella",
    url: gTravel("Hostal Boutique Es Menut Tossa de Mar"),
  },
  {
    name: "Hostal Boutique Sa Nansa",
    price: "$$",
    note: "Centro, frente à igreja",
    url: gTravel("Hostal Boutique Sa Nansa Tossa de Mar"),
  },
  {
    name: "Hotel Santa Marta",
    price: "$$$",
    note: "Lloret de Mar · Hangover party (hotelsantamarta.es)",
    url: gTravel("Hotel Santa Marta Lloret de Mar"),
  },
  {
    name: "Mamma Mia Hotel Boutique",
    price: "$$$",
    note: "Only Adults, 3 min da praia",
    url: gTravel("Mamma Mia Hotel Boutique Tossa de Mar"),
  },
  {
    name: "Elisabeth By The Sea",
    price: "$$$",
    note: "5★, spa, praia privada",
    url: gTravel("Elisabeth By The Sea Tossa de Mar"),
  },
  {
    name: "Golden Mar Menuda",
    price: "$$$",
    note: "Junto à praia",
    url: gTravel("Golden Mar Menuda Tossa de Mar"),
  },
  {
    name: "Zel Costa Brava",
    price: "$$$",
    note: "Resort à beira-mar, Cala Giverola (Meliá)",
    url: gTravel("Zel Costa Brava Meliá Tossa de Mar"),
  },
];

function HotelCard({
  name,
  price,
  note,
  url,
}: {
  name: string;
  price: Price;
  note: string;
  url: string;
}) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-2 py-3 border-b border-charcoal/10 last:border-0">
      <div>
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-serif font-medium text-sm text-terracotta hover:underline"
        >
          {name}
        </Link>
        <p className="font-serif font-light text-sm text-charcoal/70 mt-0.5">{note}</p>
      </div>
      <span
        className={`font-serif text-sm font-medium tabular-nums ${
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
    <section className="px-6 py-20 md:py-28 bg-bege-areia/50" id="hospedagem">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col items-center gap-3 mb-4">
          <IconHotel className="w-6 h-6 text-navy/70" />
          <h2 className="font-display font-medium text-base sm:text-lg uppercase tracking-[0.2em] text-charcoal text-center">
            Onde ficar
          </h2>
        </div>
        <p className="font-serif font-light text-center text-charcoal/70 text-xs mb-10 uppercase tracking-[0.1em]">
          <span className="font-medium">$</span> econômico ·{" "}
          <span className="font-medium">$$</span> médio ·{" "}
          <span className="font-medium">$$$</span> upscale
        </p>

        <div>
          <h3 className="font-display font-medium text-xs uppercase tracking-[0.1em] text-charcoal mb-1">
            Tossa de Mar
          </h3>
          <p className="font-serif font-light text-sm text-charcoal/70 mb-6">
            30 de junho — 2 de julho
          </p>
            <div className="divide-y divide-charcoal/10 rounded-lg border border-verde-salvia/30 bg-marfim/60 p-4">
              {TOSSA_HOTELS.map((h) => (
                <HotelCard key={h.name} {...h} />
              ))}
            </div>
          <Link
            href={TOSSA_GOOGLE_ALL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif font-light mt-4 inline-block text-sm uppercase tracking-[0.1em] text-terracotta hover:underline"
          >
            Ver todos os hotéis em Tossa (Google Travel)
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

const TOSSA_HOTELS = [
  {
    name: "Hotel Diana",
    price: "$$" as const,
    note: "4★, centro histórico, na praia",
    url: "https://www.booking.com/?checkin=2027-06-30&checkout=2027-07-03&room1=A,A,&no_rooms=1&group_adults=2&group_children=0&req_adults=2&req_children=0&aid=898224&app_hotel_id=5061547&label=hotel_details&from_sn=ios",
  },
  {
    name: "Hotel Santa Marta",
    price: "$$$" as const,
    note: "Lloret de Mar · Onde será a hangover party (hotelsantamarta.es)",
    url: "https://hotelsantamarta.es/en/",
  },
  {
    name: "GHT Costa Brava & Spa",
    price: "$$" as const,
    note: "4★ Sup, spa",
    url: "https://www.booking.com/?checkin=2027-06-30&checkout=2027-07-03&room1=A,A,&no_rooms=1&group_adults=2&group_children=0&req_adults=2&req_children=0&aid=898224&app_hotel_id=11735546&label=hotel_details&from_sn=ios",
  },
  {
    name: "Hotel Delfín 4 Sup",
    price: "$$" as const,
    note: "2 min da Platja Gran",
    url: "https://www.booking.com/?checkin=2027-06-30&checkout=2027-07-03&room1=A,A,&no_rooms=1&group_adults=2&group_children=0&req_adults=2&req_children=0&aid=898224&app_hotel_id=9499085&label=hotel_details&from_sn=ios",
  },
  {
    name: "Mamma Mia Hotel Boutique",
    price: "$$$" as const,
    note: "Only Adults, 3 min da praia",
  },
  {
    name: "Elisabeth By The Sea",
    price: "$$$" as const,
    note: "5★, spa, praia privada",
  },
  {
    name: "Golden Mar Menuda",
    price: "$$$" as const,
    note: "Junto à praia",
  },
  {
    name: "Hostal Boutique Es Menut",
    price: "$$" as const,
    note: "4★, Vila Vella, hostalesmenut.com",
    url: "https://www.hostalesmenut.com/",
  },
  {
    name: "Zel Costa Brava",
    price: "$$$" as const,
    note: "Resort à beira-mar, Cala Giverola (Meliá)",
    url: "https://www.melia.com/en/hotels/spain/costa-brava/zel-costa-brava",
  },
  {
    name: "Hostal Boutique Sa Nansa",
    price: "$$" as const,
    note: "Centro, frente à igreja, hostalsanansa.com",
    url: "https://hostalsanansa.com/en/",
  },
];

const BEGUR_PALAFRUGELL_LINKS = [
  { name: "La Bionda Begur", url: "https://www.instagram.com/labiondabegur?igsh=MWl2b3ZlYXdxOW8wdg==" },
  { name: "La Bionda", url: "https://www.booking.com/hotel/es/la-bionda.en.html?aid=1765178&no_rooms=1&group_adults=2" },
  { name: "Aiguaclara", url: "https://www.booking.com/hotel/es/aiguaclara.en.html?aid=1765178&no_rooms=1&group_adults=2" },
  { name: "Can Vilobi", url: "https://www.instagram.com/canvilobi?igsh=cDVrOTM4YzF4ajY0" },
  { name: "Encís d'Empordà", url: "https://www.instagram.com/encisdemporda?igsh=MWRta2l2Zm8wMTAxZg==" },
  { name: "Mas Valentí 1511", url: "https://www.booking.com/hotel/es/mas-valenti-1511.en.html?aid=1765178&no_rooms=1&group_adults=2" },
  { name: "El Far Sant Sebastià", url: "https://www.instagram.com/elfarsantsebastia?igsh=MWE4cDdjcTV5bXlsMQ==" },
  { name: "Casa Peya Hotel", url: "https://www.instagram.com/casapeyahotel?igsh=MTFzeW9wbDlwNjI0Zw==" },
  { name: "Castell d'Empordà", url: "https://hotelcastellemporda.com/en/" },
  { name: "Can Mascort", url: "https://canmascortecohotel.com/en/" },
];

function HotelCard({
  name,
  price,
  note,
  url,
}: {
  name: string;
  price: "$" | "$$" | "$$$";
  note: string;
  url?: string;
}) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-2 py-3 border-b border-charcoal/10 last:border-0">
      <div>
        {url ? (
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-terracotta hover:underline"
          >
            {name}
          </Link>
        ) : (
          <p className="font-medium text-charcoal">{name}</p>
        )}
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

function LinkRow({ name, url }: { name: string; url: string }) {
  return (
    <div className="py-3 border-b border-charcoal/10 last:border-0">
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-terracotta hover:underline"
      >
        {name}
      </Link>
    </div>
  );
}

export default function Hospedagem() {
  return (
    <section className="px-6 py-20 md:py-28 bg-cream" id="hospedagem">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif font-light text-xl sm:text-2xl uppercase tracking-[0.2em] text-charcoal text-center mb-4">
          Onde ficar
        </h2>
        <p className="font-serif font-light text-center text-charcoal/75 text-sm mb-12 tracking-wide">
          <span className="font-medium">$</span> econômico ·{" "}
          <span className="font-medium">$$</span> médio ·{" "}
          <span className="font-medium">$$$</span> upscale
        </p>

        <div className="space-y-12">
          <div>
            <h3 className="font-serif font-light text-sm uppercase tracking-[0.12em] text-charcoal/90 mb-1">
              Parte 1 — Tossa de Mar
            </h3>
            <p className="text-sm text-charcoal/70 mb-6">
              30 de junho — 2 de julho · Jantar, casamento e hangover. Incluímos
              o Hotel Santa Marta em Lloret de Mar (onde será a festa do dia 2).
            </p>
            <div className="divide-y divide-charcoal/10 rounded-lg border border-charcoal/10 bg-sand/30 p-4">
              {TOSSA_HOTELS.map((h) => (
                <HotelCard key={h.name} {...h} />
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-4 gap-y-1">
              <Link
                href="https://www.booking.com/searchresults.html?ss=Tossa+de+Mar&checkin=2027-06-30&checkout=2027-07-03"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif font-light inline-block text-sm uppercase tracking-[0.1em] text-terracotta hover:underline"
              >
                Ver todos os hotéis em Tossa (Booking)
              </Link>
              <Link
                href="https://www.google.com/travel/search?q=TOSSA%20DE%20MAR%20HOTELS&g2lb=4965990%2C72248050%2C72248051%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764%2C73249150%2C121522132&hl=en-BR&gl=br&ssta=1&ts=CAESCgoCCAMKAggDEAAaVQo3EjUyJTB4MTJiYjFhYTdhYzExYWFhMToweGEyNjE0ZjRhZWM4MzM0Y2Q6DFRvc3NhIERlIE1hchIaEhQKBwjqDxABGB4SBwjqDxABGB8YATICEAAqBwoFOgNCUkw&qs=CAEyKENob0l0NUNhaHJQdTZLX29BUm9OTDJjdk1URm9NR013WWpGdWNCQUI4BkIJEVJxFhfHvi_gQgkRSG2P-aY2eWVCCRFKKBVCOWNl2lpNMkuqAUgQASoKIgZob3RlbHMoDDIfEAEiG0QJuo7eWNzpfH4xysmxBCQvuZS_e5vUiR1iPDIXEAIiE3Rvc3NhIGRlIG1hciBob3RlbHM&ap=aAE&ictx=111&ved=2ahUKEwirtNukzrGSAxUYNbkGHUZhEV0QyvcEegQIAxBI"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif font-light inline-block text-sm uppercase tracking-[0.1em] text-terracotta hover:underline"
              >
                Hotéis em Tossa (Google Travel)
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-light text-sm uppercase tracking-[0.12em] text-charcoal/90 mb-1">
              Parte 2 — Begur & Palafrugell
            </h3>
            <p className="text-sm text-charcoal/70 mb-6">
              2 — 5 de julho · Wine tasting, jantar medieval e passeio de barco
            </p>
            <div className="divide-y divide-charcoal/10 rounded-lg border border-charcoal/10 bg-sand/30 p-4">
              {BEGUR_PALAFRUGELL_LINKS.map((item) => (
                <LinkRow key={item.url} name={item.name} url={item.url} />
              ))}
            </div>
            <Link
              href="https://www.booking.com/searchresults.html?ss=Palafrugell%2C+Begur&checkin=2027-07-02&checkout=2027-07-06"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif font-light inline-block mt-4 text-sm uppercase tracking-[0.1em] text-terracotta hover:underline"
            >
              Ver todos os hotéis em Begur e Palafrugell (Booking)
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

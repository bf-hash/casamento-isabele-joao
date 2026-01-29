import Link from "next/link";

const TIPS = [
  { label: "Hospedagem", href: "#hospedagem" },
  { label: "Beleza (cabelo e make)", href: "#tips" },
  { label: "Restaurantes", href: "#tips" },
  { label: "Passeios", href: "#tips" },
];

export default function Tips() {
  return (
    <section className="px-6 py-20 md:py-28 bg-cream" id="tips">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal text-center mb-12">
          Dicas
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {TIPS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="px-5 py-2.5 border border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-cream transition-colors text-sm uppercase tracking-wider"
            >
              {label}
            </Link>
          ))}
        </div>
        <p className="text-center text-charcoal/60 text-sm mt-8 max-w-md mx-auto">
          A <strong>Hospedagem</strong> tem sugestões de hotéis em Tossa de Mar
          (30/06–02/07) e em Begur / Palafrugell (02–05/07). Em breve, mais
          dicas de beleza, restaurantes e passeios na Costa Brava.
        </p>
      </div>
    </section>
  );
}

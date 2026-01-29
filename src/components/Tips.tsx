import Link from "next/link";

const TIPS = [
  { label: "Hospedagem", href: "#" },
  { label: "Beleza (cabelo e make)", href: "#" },
  { label: "Restaurantes", href: "#" },
  { label: "Passeios", href: "#" },
];

export default function Tips() {
  return (
    <section className="px-6 py-20 md:py-28 bg-sand/50">
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
        <p className="text-center text-charcoal/60 text-sm mt-6">
          Os links acima podem apontar para páginas internas ou externas. Crie
          seções específicas se quiser.
        </p>
      </div>
    </section>
  );
}

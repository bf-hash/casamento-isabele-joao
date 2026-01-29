import Link from "next/link";

const MAPS_URL = "https://maps.google.com"; // Substitua pelo link real

export default function HowToGet() {
  return (
    <section className="px-6 py-20 md:py-28 bg-cream">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal text-center mb-10">
          Como chegar
        </h2>
        <p className="text-charcoal/85 leading-relaxed mb-6">
          [Descreva aqui as melhores formas de chegar: aeroporto mais próximo,
          transfer, Uber, carro, transporte público etc. Use os exemplos dos
          sites que você mandou como referência.]
        </p>
        <Link
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-charcoal text-cream text-sm uppercase tracking-wider hover:bg-charcoal/90 transition-colors"
        >
          Ver no Google Maps
        </Link>
      </div>
    </section>
  );
}

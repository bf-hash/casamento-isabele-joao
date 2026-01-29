import Link from "next/link";

const LISTA_VIRTUAL_URL = "https://noivos.casar.com"; // Substitua pelo link da lista

export default function Gifts() {
  return (
    <section className="px-6 py-20 md:py-28 bg-cream">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal mb-6">
          Presentes
        </h2>
        <p className="text-charcoal/85 leading-relaxed mb-6">
          A sua presença é o nosso maior presente. Caso deseje nos presentear,
          deixamos abaixo o link da nossa lista virtual.
        </p>
        <Link
          href={LISTA_VIRTUAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-terracotta text-white text-sm uppercase tracking-wider hover:bg-terracotta/90 transition-colors"
        >
          Lista virtual
        </Link>
      </div>
    </section>
  );
}

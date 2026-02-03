import Link from "next/link";

const LISTA_VIRTUAL_URL = "https://noivos.casar.com";

export default function Gifts() {
  return (
    <section className="px-6 py-24 md:py-32 bg-marfim">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-16 h-px bg-terracotta/40 mx-auto mb-8" />
        <h2 className="font-display font-medium text-2xl sm:text-3xl uppercase tracking-[0.2em] text-charcoal mb-12">
          Presentes
        </h2>
        <p className="font-serif font-light text-lg text-charcoal/90 leading-relaxed mb-10">
          A sua presença é o nosso maior presente. Caso deseje nos presentear,
          deixamos abaixo o link da nossa lista virtual.
        </p>
        <Link
          href={LISTA_VIRTUAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-charcoal text-marfim font-serif font-light text-sm uppercase tracking-[0.15em] hover:bg-terracotta transition-colors"
        >
          Lista virtual
        </Link>
      </div>
    </section>
  );
}

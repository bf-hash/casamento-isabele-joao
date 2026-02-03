import Link from "next/link";
import { IconGift } from "./Icons";

const LISTA_VIRTUAL_URL = "https://noivos.casar.com"; // Substitua pelo link da lista

export default function Gifts() {
  return (
    <section className="px-6 py-20 md:py-28 bg-bege-areia/50">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex flex-col items-center gap-3 mb-6">
          <IconGift className="w-6 h-6 text-navy/70" />
          <h2 className="font-display font-medium text-base sm:text-lg uppercase tracking-[0.2em] text-charcoal">
            Presentes
          </h2>
        </div>
        <p className="font-serif font-light text-sm text-charcoal/85 leading-relaxed mb-6">
          A sua presença é o nosso maior presente. Caso deseje nos presentear,
          deixamos abaixo o link da nossa lista virtual.
        </p>
        <Link
          href={LISTA_VIRTUAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-serif font-light inline-block px-5 py-2.5 bg-terracotta text-marfim text-xs uppercase tracking-[0.1em] hover:bg-coral transition-colors"
        >
          Lista virtual
        </Link>
      </div>
    </section>
  );
}

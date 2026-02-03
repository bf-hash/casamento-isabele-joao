import Link from "next/link";
import { IconGift } from "./Icons";

const LISTA_VIRTUAL_URL = "https://noivos.casar.com"; // Substitua pelo link da lista

export default function Gifts() {
  return (
    <section className="px-6 py-20 md:py-28 bg-bege-areia/40">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex flex-col items-center gap-3 mb-6">
          <IconGift className="w-8 h-8 text-navy/80" />
          <h2 className="font-serif font-light text-xl sm:text-2xl uppercase tracking-[0.2em] text-charcoal">
            Presentes
          </h2>
        </div>
        <p className="font-serif font-light text-charcoal/85 leading-relaxed mb-6">
          A sua presença é o nosso maior presente. Caso deseje nos presentear,
          deixamos abaixo o link da nossa lista virtual.
        </p>
        <Link
          href={LISTA_VIRTUAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-serif font-light inline-block px-6 py-3 bg-terracotta text-marfim text-sm uppercase tracking-[0.1em] hover:bg-coral transition-colors"
        >
          Lista virtual
        </Link>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

const TIPS = [
  { label: "Onde ficar", href: "#hospedagem" },
  { label: "Dress code", href: "#dresscode" },
  { label: "Beleza (cabelo e make)", href: "#tips" },
  { label: "Restaurantes", href: "#tips" },
  { label: "Passeios", href: "#tips" },
];

const DRESSCODE_IMAGES = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
  "https://images.unsplash.com/photo-1529634801-b267fcfd36ce?w=600&q=80",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
];

export default function Tips() {
  return (
    <section className="px-6 py-20 md:py-28 bg-cream" id="tips">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif font-light text-xl sm:text-2xl uppercase tracking-[0.2em] text-charcoal text-center mb-12">
          Dicas
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {TIPS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="font-serif font-light px-5 py-2.5 border border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-cream transition-colors text-sm uppercase tracking-[0.12em]"
            >
              {label}
            </Link>
          ))}
        </div>

        <p className="font-serif font-light text-center text-charcoal/60 text-sm mt-8 max-w-md mx-auto">
          <strong>Onde ficar</strong> tem sugestões para Parte 1 (Tossa de Mar,
          30/06–02/07) e Parte 2 (Begur / Palafrugell, 02–05/07).{" "}
          <strong>Dress code</strong> traz ideias para o casamento. Em breve,
          mais dicas de beleza, restaurantes e passeios na Costa Brava.
        </p>

        <div
          className="mt-16 pt-16 border-t border-charcoal/10"
          id="dresscode"
        >
          <h3 className="font-serif font-light text-lg sm:text-xl uppercase tracking-[0.15em] text-charcoal text-center mb-6">
            Dress code
          </h3>
          <p className="font-serif font-light text-charcoal/85 leading-relaxed mb-6">
            Nosso casamento será no Convent de Blanes, à beira-mar na Costa
            Brava. A cerimônia acontece em espaço ao ar livre, com vibe leve e
            praia. O dress code é <strong>passeio completo / social</strong>:
            elegante, mas confortável para o verão mediterrâneo.
          </p>

          <div className="space-y-4 font-serif font-light text-charcoal/85 leading-relaxed text-sm">
            <p>
              <strong>Ideias:</strong> vestidos fluidos, midi ou longos;
              ternos em tecidos leves (linen, algodão); cores claras, neutros ou
              tons mediterrânicos. Evitem roupas muito formais ou pesadas.
            </p>
            <p>
              <strong>Calçado:</strong> a cerimônia será em gramado. Recomendamos
              saltos grossos, plataformas ou sapatos sem salto. Evitem saltos
              finos ou agulha, que podem afundar.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3">
            {DRESSCODE_IMAGES.map((src, i) => (
              <div
                key={i}
                className="aspect-[3/4] relative rounded-lg overflow-hidden border border-charcoal/10"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 200px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

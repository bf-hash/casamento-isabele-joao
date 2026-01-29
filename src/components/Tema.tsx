export default function Tema() {
  return (
    <section
      className="px-6 py-20 md:py-28 bg-sand/30 relative overflow-hidden"
      id="tema"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-olive/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-terracotta/30 to-transparent" />
      <div className="max-w-2xl mx-auto text-center relative">
        <p className="text-xs uppercase tracking-[0.25em] text-olive mb-2">
          Estética
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal mb-2">
          Jardim Mediterrâneo
        </h2>
        <p className="text-charcoal/70 text-sm mb-10">
          Limão siciliano, rosa, verde oliva, terracotta e laranja (assentos)
        </p>

        <div className="space-y-5 text-charcoal/85 leading-relaxed text-left">
          <p>
            Nosso casamento terá como inspiração o verão mediterrâneo da Costa
            Brava: uma estética leve, natural e elegante, em harmonia com a
            arquitetura histórica do Convent de Blanes. A paleta combina amarelo
            limão siciliano, rosa e verde oliva/ervas, terracotta e laranja nos
            assentos, sobre tons neutros como off‑white, areia e pedra.
          </p>
          <p>
            A decoração traz folhagens mediterrâneas — principalmente ramos de
            oliveira — e ervas aromáticas como tomilho e alecrim, dando textura
            e perfume. As flores seguem a paleta em tons claros e frescos, com
            pontos de amarelo e rosa. Limões naturais aparecem como detalhe em
            mesas e aparadores, reforçando o conceito citrus do verão.
          </p>
          <p>
            O resultado é um ambiente solar, perfumado e romântico, com
            referências discretas ao Mediterrâneo e à Catalunha — sem elementos
            temáticos óbvios, priorizando um visual atemporal e sofisticado.
          </p>
        </div>
      </div>
    </section>
  );
}

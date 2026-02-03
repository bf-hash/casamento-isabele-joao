export default function Welcome() {
  return (
    <section className="px-6 py-24 md:py-32 bg-marfim" id="welcome">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-px bg-terracotta/40 mx-auto mb-8" />
          <h2 className="font-display font-medium text-2xl sm:text-3xl uppercase tracking-[0.2em] text-charcoal">
            Sejam muito bem-vindos
          </h2>
        </div>

        <div className="space-y-6 font-serif font-light text-lg text-charcoal/90 leading-[1.9]">
          <p>
            Estamos muito felizes em convidá-los para nosso casamento na Costa
            Brava, Espanha. Esse é um dos lugares onde nos sentimos mais em casa
            e passamos momentos muito especiais com amigos e família ao longo dos
            nossos 7 anos juntos.
          </p>
          <p className="font-medium text-charcoal">
            Vamos fazer muita festa, comer bem e beber muito vinho juntos!
          </p>
        </div>
      </div>
    </section>
  );
}

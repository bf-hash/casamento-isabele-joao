export default function Welcome() {
  return (
    <section className="px-6 py-20 md:py-28 bg-marfim" id="welcome">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-script text-2xl sm:text-3xl text-charcoal mb-2">
          Sejam muito bem-vindos ao
        </p>
        <h2 className="font-serif font-light text-lg sm:text-xl uppercase tracking-[0.2em] text-charcoal mb-10">
          nosso site de casamento
        </h2>

        <div className="space-y-5 font-serif font-light text-charcoal/85 leading-relaxed text-left">
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

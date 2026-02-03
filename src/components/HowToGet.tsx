export default function HowToGet() {
  return (
    <section className="px-6 py-24 md:py-32 bg-marfim">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-px bg-terracotta/40 mx-auto mb-8" />
          <h2 className="font-display font-medium text-2xl sm:text-3xl uppercase tracking-[0.2em] text-charcoal">
            Como chegar
          </h2>
        </div>
        <p className="font-serif font-light text-charcoal/60 text-sm text-center mb-12 tracking-[0.1em] uppercase">
          Costa Brava · Blanes, Tossa de Mar, Begur e Palafrugell
        </p>

        <div className="space-y-8 font-serif font-light text-base text-charcoal/90 leading-relaxed">
          <div>
            <h3 className="font-display font-medium text-sm uppercase tracking-[0.1em] text-terracotta/90 mb-3">De avião</h3>
            <p>
              A rota mais prática é voar até o{" "}
              <strong>Aeroporto de Barcelona-El Prat (BCN)</strong> ou o{" "}
              <strong>Aeroporto de Girona-Costa Brava (GRO)</strong>. Do Brasil,
              há voos com conexão em Lisboa, Madrid ou outras capitais europeias.
            </p>
          </div>

          <div>
            <h3 className="font-display font-medium text-sm uppercase tracking-[0.1em] text-terracotta/90 mb-3">
              Até Tossa de Mar (Parte 1)
            </h3>
            <p>
              <strong>Barcelona → Tossa de Mar:</strong> ~90 km. O mais prático
              é alugar carro ou usar transfer.
            </p>
            <p className="mt-2">
              <strong>Girona → Tossa de Mar:</strong> ~45 km. O aeroporto de
              Girona fica mais perto; o mais prático é alugar carro ou usar
              transfer.
            </p>
          </div>

          <div className="rounded-2xl bg-white/80 p-6 border-l-4 border-terracotta/50">
            <p className="font-display font-medium text-xs uppercase tracking-[0.1em] text-charcoal mb-2">Recomendação</p>
            <p className="font-serif font-light text-base text-charcoal/90 leading-relaxed">
              Recomendamos alugar um carro para explorar a região com liberdade,
              principalmente entre Tossa de Mar e Begur / Palafrugell.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

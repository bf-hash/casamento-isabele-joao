export default function HowToGet() {
  return (
    <section className="px-6 py-20 md:py-28 bg-sand/50">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif font-light text-xl sm:text-2xl uppercase tracking-[0.2em] text-charcoal text-center mb-6">
          Como chegar
        </h2>
        <p className="font-serif font-light text-charcoal/60 text-sm text-center mb-10 tracking-wide">
          Costa Brava · Blanes, Tossa de Mar, Begur e Palafrugell
        </p>

        <div className="space-y-8 font-serif font-light text-charcoal/85 leading-relaxed">
          <div>
            <h3 className="font-semibold text-charcoal mb-2">De avião</h3>
            <p>
              A rota mais prática é voar até o{" "}
              <strong>Aeroporto de Barcelona-El Prat (BCN)</strong> ou o{" "}
              <strong>Aeroporto de Girona-Costa Brava (GRO)</strong>. Do Brasil,
              há voos com conexão em Lisboa, Madrid ou outras capitais europeias.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-charcoal mb-2">
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

          <div>
            <h3 className="font-semibold text-charcoal mb-2">
              De Tossa de Mar até Begur / Palafrugell (Parte 2)
            </h3>
            <p>
              ~50 km. As cidades são bem conectadas por estrada. Para a segunda
              etapa (dias 3 e 4), o carro facilita muito o deslocamento.
            </p>
          </div>

          <div className="rounded-lg border border-charcoal/15 bg-cream/80 p-4">
            <p className="text-charcoal font-medium mb-1">Recomendação</p>
            <p className="text-charcoal/85 text-sm">
              Recomendamos alugar um carro para explorar a região com liberdade,
              principalmente entre Tossa de Mar e Begur / Palafrugell.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

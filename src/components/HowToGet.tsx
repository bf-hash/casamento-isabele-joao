import { IconMapPin, IconPlane } from "./Icons";

export default function HowToGet() {
  return (
    <section className="px-6 py-20 md:py-28 bg-marfim">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col items-center gap-3 mb-6">
          <div className="flex items-center gap-3">
            <IconPlane className="w-6 h-6 text-navy/70" />
            <IconMapPin className="w-6 h-6 text-navy/70" />
          </div>
          <h2 className="font-display font-medium text-base sm:text-lg uppercase tracking-[0.2em] text-charcoal text-center">
            Como chegar
          </h2>
        </div>
        <p className="font-serif font-light text-charcoal/60 text-xs text-center mb-8 tracking-[0.1em] uppercase">
          Costa Brava · Blanes, Tossa de Mar, Begur e Palafrugell
        </p>

        <div className="space-y-6 font-serif font-light text-sm text-charcoal/85 leading-relaxed">
          <div>
            <h3 className="font-display font-medium text-sm uppercase tracking-[0.1em] text-charcoal mb-2">De avião</h3>
            <p>
              A rota mais prática é voar até o{" "}
              <strong>Aeroporto de Barcelona-El Prat (BCN)</strong> ou o{" "}
              <strong>Aeroporto de Girona-Costa Brava (GRO)</strong>. Do Brasil,
              há voos com conexão em Lisboa, Madrid ou outras capitais europeias.
            </p>
          </div>

          <div>
            <h3 className="font-display font-medium text-sm uppercase tracking-[0.1em] text-charcoal mb-2">
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

          <div className="rounded-lg border border-verde-salvia/40 bg-marfim/90 p-4">
            <p className="font-display font-medium text-xs uppercase tracking-[0.1em] text-charcoal mb-1">Recomendação</p>
            <p className="font-serif font-light text-sm text-charcoal/85 leading-relaxed">
              Recomendamos alugar um carro para explorar a região com liberdade,
              principalmente entre Tossa de Mar e Begur / Palafrugell.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

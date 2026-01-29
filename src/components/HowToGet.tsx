import Link from "next/link";

const CONVENT_MAPS =
  "https://www.google.com/maps/place/El+Convent+de+Blanes/@41.6742564,2.7903136,17z";
const BLANES_TURISM = "https://www.blanescostabrava.cat";

export default function HowToGet() {
  return (
    <section className="px-6 py-20 md:py-28 bg-sand/50">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal text-center mb-6">
          Como chegar
        </h2>
        <p className="text-charcoal/60 text-sm text-center mb-10">
          Costa Brava · Blanes, Tossa de Mar, Begur e Palafrugell
        </p>

        <div className="space-y-8 text-charcoal/85 leading-relaxed">
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
              Barcelona → Blanes / Tossa de Mar
            </h3>
            <p>
              <strong>Trem:</strong> R2 Nord do aeroporto até Barcelona Sants,
              depois trem até Blanes (cerca de 1h40, a partir de €8). De Blanes,
              há ônibus ou táxi para Tossa de Mar.
            </p>
            <p className="mt-2">
              <strong>Ônibus:</strong> A Sagales opera ônibus do aeroporto de
              Barcelona até Blanes e paradas na Costa Brava.
            </p>
            <p className="mt-2">
              <strong>Carro:</strong> Aluguel no aeroporto. Blanes fica a ~70 km
              de Barcelona; Tossa de Mar a ~90 km. Ótima opção para explorar a
              região.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-charcoal mb-2">
              Girona → Blanes / Tossa / Begur
            </h3>
            <p>
              O aeroporto de Girona fica mais perto da Costa Brava. De lá, o
              mais prático é alugar carro ou usar transfer. Girona → Blanes ~45
              km; → Begur / Palafrugell ~50 km.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-charcoal mb-2">Entre as cidades</h3>
            <p>
              Blanes, Tossa de Mar, Begur e Palafrugell são bem conectadas por
              estrada. Para a segunda etapa (Begur / Palafrugell), o carro
              facilita muito. Também há ônibus regionais entre as localidades.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link
            href={CONVENT_MAPS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-charcoal text-cream text-sm uppercase tracking-wider hover:bg-charcoal/90 transition-colors"
          >
            Convent de Blanes no Google Maps
          </Link>
          <Link
            href={BLANES_TURISM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-charcoal/30 text-charcoal text-sm uppercase tracking-wider hover:bg-charcoal/5 transition-colors"
          >
            Turismo Blanes
          </Link>
        </div>
      </div>
    </section>
  );
}

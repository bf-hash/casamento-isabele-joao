"use client";

import { useState } from "react";
import { GravuraLaranja } from "./Illustrations";

const TIP_TABS = [
  "Dress code",
  "Onde ficar",
  "Hair & Make",
  "Dicas Barcelona",
  "Passeios Costa Brava",
];

interface Hotel {
  name: string;
  price: string;
  url: string;
  featured?: boolean;
}

const TOSSA_HOTELS: Hotel[] = [
  {
    name: "Hotel Diana",
    price: "$$",
    url: "https://www.hotelesdante.com/en/home/hotel-diana/",
  },
  {
    name: "Hotel Delfín",
    price: "$$",
    url: "https://www.hotelesdante.com/en/home/hotel-delfin/",
  },
  {
    name: "Hostal Boutique Es Menut",
    price: "$$",
    url: "https://www.google.com/maps/search/Hostal+Boutique+Es+Menut+Tossa+de+Mar",
  },
  {
    name: "Hostal Boutique Sa Nansa",
    price: "$$",
    url: "https://www.google.com/maps/search/Hostal+Boutique+Sa+Nansa+Tossa+de+Mar",
  },
  {
    name: "Casa Granados",
    price: "$$$",
    url: "https://www.google.com/maps/search/Casa+Granados+Tossa+de+Mar",
  },
  {
    name: "Mamma Mia Hotel Boutique",
    price: "$$$",
    url: "https://www.google.com/maps/search/Mamma+Mia+Hotel+Boutique+Tossa+de+Mar",
  },
  {
    name: "Elisabeth By The Sea",
    price: "$$$",
    url: "https://www.google.com/maps/search/Elisabeth+By+The+Sea+Tossa+de+Mar",
  },
  {
    name: "Hotel Santa Marta",
    price: "$$$",
    url: "https://hotelsantamarta.es/",
    featured: true,
  },
  {
    name: "Zel Costa Brava",
    price: "$$$",
    url: "https://www.zelhotels.com/",
  },
];

const BEGUR_HOTELS: Hotel[] = [
  {
    name: "Alta House",
    price: "$$$",
    url: "https://www.google.com/maps/search/Alta+House+Begur",
  },
  {
    name: "Aiguablava",
    price: "$$$",
    url: "https://www.google.com/maps/search/Hotel+Aiguablava+Begur",
  },
  {
    name: "Can Macot",
    price: "$$$",
    url: "https://www.google.com/maps/search/Can+Macot+Begur",
  },
  {
    name: "Finca Vitoria",
    price: "$$$",
    url: "https://www.google.com/maps/search/Finca+Vitoria+Begur",
  },
];

interface ListItem {
  name: string;
  note: string;
}

const BCN_HOTELS: ListItem[] = [
  { name: "Hotel Casa Bonay", note: "Boutique no Eixample · rooftop bar" },
  { name: "Yurbban Passage", note: "Design hotel · Gótico, perto de tudo" },
  {
    name: "Hotel Neri Relais & Châteaux",
    note: "5★ · Barri Gòtic",
  },
  {
    name: "The Serras",
    note: "5★ · Port Vell, terraço com vista pro mar",
  },
];

const BCN_RESTAURANTS: ListItem[] = [
  { name: "Cal Pep", note: "Tapas clássicas · Born" },
  { name: "Bar Cañete", note: "Balcão de frutos do mar · Raval" },
  { name: "Cervecería Catalana", note: "Tapas no Eixample" },
  {
    name: "Compartir Barcelona",
    note: "Dos chefs do Celler de Can Roca",
  },
  { name: "La Boqueria", note: "Mercado · ideal pra almoço informal" },
];

const COSTA_TOSSA_RESTAURANTS: ListItem[] = [
  {
    name: "La Cuina de Can Simon",
    note: "Cozinha catalã refinada · Vila Vella",
  },
  { name: "Es Molí", note: "Frutos do mar com vista · Tossa" },
  { name: "Restaurante Bahia", note: "Na praia · paella e peixe grelhado" },
];

const COSTA_BEGUR_RESTAURANTS: ListItem[] = [
  {
    name: "Restaurant Sa Punta",
    note: "Elegante · vista pra Platja de Pals",
  },
  { name: "Tragamar", note: "Calella de Palafrugell · pé na água" },
  { name: "Mas Lazuli", note: "Hotel-restaurante com horta própria" },
  { name: "Bar La Riera", note: "Tapas em Begur · vinho natural" },
];

const BEACHES: ListItem[] = [
  {
    name: "Cala Giverola",
    note: "Perto de Tossa · cercada por pinheiros, água turquesa",
  },
  {
    name: "Platja Gran",
    note: "Praia principal de Tossa · muralha medieval ao fundo",
  },
  {
    name: "Cala Pola",
    note: "Pequena e escondida entre Tossa e Lloret",
  },
  {
    name: "Cala Sa Boadella",
    note: "Lloret · mais tranquila, acesso a pé",
  },
  {
    name: "Platja de Sa Tuna",
    note: "Begur · casas de pescadores, perfeita",
  },
  {
    name: "Cala Aiguablava",
    note: "Begur · água incrivelmente azul",
  },
  {
    name: "Platja del Castell",
    note: "Palamós · uma das últimas virgens da Costa Brava",
  },
  {
    name: "Calella de Palafrugell",
    note: "Vilarejo com calas pequenas lado a lado",
  },
];

function HotelList({ hotels }: { hotels: Hotel[] }) {
  return (
    <ul className="ij-hotel-list">
      {hotels.map((h) => (
        <li key={h.name} className={h.featured ? "ij-hotel-featured" : ""}>
          <div>
            <a
              href={h.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ij-hotel-name"
            >
              {h.name}
            </a>
            {h.featured && (
              <span className="ij-hotel-badge">Onde ficaremos</span>
            )}
          </div>
          <span
            className={`ij-hotel-price ij-hotel-price-${h.price.length}`}
          >
            {h.price}
          </span>
        </li>
      ))}
    </ul>
  );
}

function SimpleList({ items }: { items: ListItem[] }) {
  return (
    <ul className="ij-hotel-list">
      {items.map((h) => (
        <li key={h.name}>
          <div>
            <span className="ij-hotel-name" style={{ cursor: "default" }}>
              {h.name}
            </span>
            <p className="ij-hotel-note">{h.note}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Tips() {
  const [tab, setTab] = useState<string | null>(null);

  return (
    <section id="tips" className="ij-section ij-section-paper">
      <div className="ij-center">
        <GravuraLaranja size={90} />
        <div style={{ height: 16 }} />
        <div className="ij-section-header">
          <span className="ij-section-eyebrow ij-section-eyebrow--coral">Dicas</span>
          <h2>O que é bom saber</h2>
        </div>
      </div>

      <div className="ij-tips-tabs">
        {TIP_TABS.map((t) => (
          <button
            key={t}
            className={`ij-pill ${tab === t ? "is-active" : ""}`}
            onClick={() => setTab(tab === t ? null : t)}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "Dress code" && (
        <div className="ij-tips-panel">
          <div className="ij-tips-panel-head">
            <h3>Dress code</h3>
            <button className="ij-tips-close" onClick={() => setTab(null)}>
              Fechar
            </button>
          </div>
          <p style={{ textAlign: "center", marginBottom: 24 }}>
            <strong>Passeio completo / Social</strong>
            <br />
            Elegante, mas confortável para o verão mediterrâneo.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              marginBottom: 28,
            }}
          >
            {[
              "vestido fluido midi ou longo, cores claras ou mediterrânicas",
              "terno em tecido leve, sem gravata",
              "sapatos confortáveis — plataforma, rasteirinha elegante, salto bloco",
              "Convent de Blanes — convento histórico com chão irregular e vista mar",
            ].map((desc) => (
              <div
                key={desc}
                style={{
                  background: "var(--olive-tint)",
                  aspectRatio: "3/4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: 6,
                  padding: 16,
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "var(--olive-soft)",
                  }}
                >
                  foto
                </span>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 10,
                    color: "var(--ink-quiet)",
                    lineHeight: 1.4,
                  }}
                >
                  {desc}
                </span>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 14 }}>
            <strong>Para elas:</strong> vestidos fluidos, midi ou longos. Cores
            claras, neutros ou tons mediterrânicos.
          </p>
          <p style={{ fontSize: 14 }}>
            <strong>Para eles:</strong> terno em tecido leve. Gravata não é
            necessária.
          </p>
          <p
            style={{
              fontSize: 14,
              fontStyle: "italic",
              color: "var(--ink-quiet)",
            }}
          >
            A cerimônia será em um convento histórico com chão irregular. Evitem
            saltos finos ou agulha — recomendamos saltos grossos, plataformas ou
            sapatos sem salto.
          </p>
        </div>
      )}

      {tab === "Onde ficar" && (
        <div className="ij-tips-panel">
          <div className="ij-tips-panel-head">
            <h3>Onde ficar</h3>
            <button className="ij-tips-close" onClick={() => setTab(null)}>
              Fechar
            </button>
          </div>
          <p className="ij-tips-legend">
            <strong>$</strong> econômico · <strong>$$</strong> médio ·{" "}
            <strong>$$$</strong> upscale
          </p>
          <p className="ij-tips-region">
            Tossa de Mar · 30 de junho — 2 de julho
          </p>
          <HotelList hotels={TOSSA_HOTELS} />
          <div className="ij-tips-divider" />
          <p className="ij-tips-region">
            Begur &amp; Palafrugell · 2 — 3 de julho
          </p>
          <p className="ij-tips-region-note">
            A Costa Brava é comprida — as atividades dos últimos dois dias serão
            mais ao norte, na região de Begur e Palafrugell (~1h–1h30 de carro
            de Tossa).
          </p>
          <HotelList hotels={BEGUR_HOTELS} />
        </div>
      )}

      {tab === "Hair & Make" && (
        <div className="ij-tips-panel">
          <div className="ij-tips-panel-head">
            <h3>Hair &amp; Make</h3>
            <button className="ij-tips-close" onClick={() => setTab(null)}>
              Fechar
            </button>
          </div>
          <p>
            Organizamos um salão que irá atender no dia do casamento no{" "}
            <strong>Hotel Santa Marta</strong> (Lloret de Mar).
          </p>
          <p>
            Todos que quiserem agendar um horário podem mandar uma mensagem para{" "}
            <strong>xxx</strong>.
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: 20,
            }}
          >
            <div
              style={{
                border: "1px solid var(--hairline-strong)",
                padding: "20px 28px",
                textAlign: "center",
                flex: "0 1 200px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: "var(--olive)",
                  margin: "0 0 8px",
                  fontWeight: 500,
                }}
              >
                Cabelo
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 24,
                  fontWeight: 500,
                  color: "var(--olive)",
                  margin: 0,
                }}
              >
                €150
              </p>
            </div>
            <div
              style={{
                border: "1px solid var(--hairline-strong)",
                padding: "20px 28px",
                textAlign: "center",
                flex: "0 1 200px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: "var(--olive)",
                  margin: "0 0 8px",
                  fontWeight: 500,
                }}
              >
                Maquiagem
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 24,
                  fontWeight: 500,
                  color: "var(--olive)",
                  margin: 0,
                }}
              >
                €150
              </p>
            </div>
          </div>
        </div>
      )}

      {tab === "Dicas Barcelona" && (
        <div className="ij-tips-panel">
          <div className="ij-tips-panel-head">
            <h3>Dias em Barcelona</h3>
            <button className="ij-tips-close" onClick={() => setTab(null)}>
              Fechar
            </button>
          </div>
          <p>
            Muitos voos do Brasil fazem conexão ou chegam em Barcelona. Se
            puderem, aproveitem para passar uns dias na cidade antes ou depois do
            casamento.
          </p>
          <p className="ij-tips-region" style={{ marginTop: 20 }}>
            Onde ficar
          </p>
          <SimpleList items={BCN_HOTELS} />
          <p className="ij-tips-region" style={{ marginTop: 20 }}>
            Onde comer
          </p>
          <SimpleList items={BCN_RESTAURANTS} />
          <p className="ij-tips-region" style={{ marginTop: 20 }}>
            O que fazer
          </p>
          <p>
            Sagrada Família, Parc Güell, bairro Gótico, passeio pela
            Barceloneta, El Born para compras e bares. Reserve ingressos com
            antecedência para a Sagrada Família.
          </p>
        </div>
      )}

      {tab === "Passeios Costa Brava" && (
        <div className="ij-tips-panel">
          <div className="ij-tips-panel-head">
            <h3>Passeios Costa Brava</h3>
            <button className="ij-tips-close" onClick={() => setTab(null)}>
              Fechar
            </button>
          </div>

          <p className="ij-tips-region">Restaurantes</p>
          <p>
            A região tem gastronomia catalã incrível — de chiringuitos na praia a
            restaurantes estrelados.
          </p>
          <p className="ij-tips-region" style={{ marginTop: 20 }}>
            Tossa de Mar &amp; arredores
          </p>
          <SimpleList items={COSTA_TOSSA_RESTAURANTS} />
          <p className="ij-tips-region" style={{ marginTop: 20 }}>
            Begur &amp; Palafrugell
          </p>
          <SimpleList items={COSTA_BEGUR_RESTAURANTS} />

          <div className="ij-tips-divider" />

          <p className="ij-tips-region">Praias</p>
          <p>
            A Costa Brava tem algumas das praias mais bonitas da Europa. Água
            cristalina, falésias e calas escondidas.
          </p>
          <SimpleList items={BEACHES} />
          <p
            style={{
              marginTop: 16,
              fontStyle: "italic",
              fontSize: 13,
              color: "var(--ink-quiet)",
            }}
          >
            Dica: alugue um carro para explorar as calas. Muitas são acessíveis
            só de carro + caminhada curta.
          </p>
        </div>
      )}
    </section>
  );
}

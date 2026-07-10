"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const TABS = [
  { id: "dress", label: "Dress Code" },
  { id: "ficar", label: "Onde Ficar" },
  { id: "hair", label: "Hair & Make" },
  { id: "barcelona", label: "Barcelona" },
  { id: "costa-brava", label: "Costa Brava" },
] as const;

type TabId = (typeof TABS)[number]["id"];

interface Hotel {
  name: string;
  price: string;
  url: string;
  featured?: boolean;
}

// ---- Destination guide model (Barcelona / Costa Brava tabs) ----
interface Place {
  name: string;
  note?: string;
  tier?: string;
  url: string;
}

interface Group {
  label?: string;
  intro?: string;
  variant?: "grid" | "list";
  places: Place[];
  outro?: string;
}

interface Area {
  title: string;
  note?: string;
  groups: Group[];
}

interface Dest {
  intro: string;
  areas: Area[];
}

function maps(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

const COSTA_BRAVA: Dest = {
  intro:
    "A costa é longa e vai de Tossa de Mar até Cadaqués. Vamos compartilhar os destaques de cada lugar — se tiverem tempo, cheguem antes ou fiquem mais uns dias: são praias e cidades medievais lindas.",
  areas: [
    {
      title: "Begur",
      note: "Muito central — pertinho das praias e das cidades medievais.",
      groups: [
        {
          label: "Onde ficar",
          variant: "list",
          places: [
            { name: "La Bionda", tier: "$$$", url: maps("La Bionda Begur") },
            { name: "Alta House Begur", tier: "$$", url: maps("Alta House Begur") },
            {
              name: "Bypillow Begur Centro",
              tier: "$$",
              note: "Além do hotel, também têm vários apartamentos",
              url: maps("Bypillow Begur Centro"),
            },
            { name: "Finca Vitòria", tier: "$$$", url: maps("Finca Vitoria Begur") },
            { name: "Aiguaclara", tier: "$$$", url: maps("Aiguaclara Begur") },
          ],
        },
        {
          label: "Praias",
          places: [
            {
              name: "Cala Sa Tuna",
              note: "Vila de pescadores muito fofa, com praia de água transparente e bares de frente para a praia",
              url: maps("Cala Sa Tuna Begur"),
            },
            {
              name: "Platja d'Aiguablava",
              note: "Praia paradisíaca com um dos melhores restaurantes à beira-mar que já fomos (Toc al Mar)",
              url: maps("Platja Aiguablava Begur"),
            },
            { name: "Platja Fonda", url: maps("Platja Fonda Begur") },
            {
              name: "El Golfet",
              note: "Praia paradisíaca com uma trilha linda e bem fácil (5 min de caminhada), o Camí de Ronda — dá para percorrer toda a Costa Brava por ela",
              url: maps("El Golfet Calella de Palafrugell"),
            },
            {
              name: "Llafranc",
              note: "Praia de areia linda. Chegamos fazendo o Camí de Ronda desde Calella de Palafrugell. Para comer, o Isabella's é ótimo, com bons vinhos e de frente para a praia",
              url: maps("Llafranc Palafrugell"),
            },
          ],
        },
        {
          label: "Onde comer e beber",
          places: [
            { name: "Clara Restaurant", note: "Ambiente moderno e comida incrível", url: maps("Clara Restaurant Begur") },
            { name: "Begurió", url: maps("Begurio Begur") },
            { name: "Ocasia", note: "Bar de vinhos fofo num rooftop", url: maps("Ocasia Begur") },
            { name: "Can Kai", note: "Sushi", url: maps("Can Kai Begur") },
            {
              name: "360 Rooftop by Gerard Ruiz",
              note: "Drinks com a melhor vista de Begur",
              url: maps("360 Rooftop Begur"),
            },
          ],
        },
        {
          label: "Cidades por perto",
          places: [
            {
              name: "Pals",
              note: "Cidade medieval preservada e charmosa",
              url: maps("Pals Girona"),
            },
            {
              name: "Calella de Palafrugell",
              note: "Parece a Grécia. Praia bonita e vila para almoçar e ver as lojinhas. Recomendamos o restaurante Margarita",
              url: maps("Calella de Palafrugell"),
            },
          ],
        },
      ],
    },
    {
      title: "Cadaqués",
      note: "Cidade do Salvador Dalí — conhecida pela arte, arquitetura, gastronomia e lojas de artesanato.",
      groups: [
        {
          label: "Onde dormir",
          places: [
            { name: "Carpe Cadaqués", url: maps("Carpe Cadaques") },
            { name: "Casa Marquina", url: maps("Casa Marquina Cadaques") },
            { name: "Riba Pitxot Apartments", url: maps("Riba Pitxot Cadaques") },
            { name: "La Casa Verda Cadaqués", url: maps("La Casa Verda Cadaques") },
          ],
        },
        {
          label: "Onde comer",
          places: [
            { name: "Narita", url: maps("Narita Cadaques") },
            { name: "Oli Bar", url: maps("Oli Bar Cadaques") },
            { name: "Casa Dionis", url: maps("Casa Dionis Cadaques") },
          ],
        },
      ],
    },
    {
      title: "Tossa de Mar",
      groups: [
        {
          label: "Onde comer",
          places: [
            {
              name: "L'Espai",
              note: "Restaurante incrível de uma ex-chef do Jubany, que fará o catering do casamento",
              url: maps("L'Espai Tossa de Mar"),
            },
          ],
        },
      ],
    },
  ],
};

const BARCELONA: Dest = {
  intro: "Se passarem por Barcelona, aqui vão algumas dicas para ajudar.",
  areas: [
    {
      title: "Onde ficar",
      note: "Gostamos de ficar no Eixample ou em Gràcia — as ruas Balmes e Enric Granados têm ótimos hotéis e muitos restaurantes bons por perto. É menos cheio e turístico que o Gòtic.",
      groups: [
        {
          variant: "list",
          places: [
            { name: "Ohla Eixample", tier: "$$$$", url: maps("Ohla Eixample Barcelona") },
            { name: "Eurostars Barcelona Central", tier: "$$$", url: maps("Eurostars Barcelona Central") },
            { name: "Hotel Granados 83", tier: "$$$", url: maps("Hotel Granados 83 Barcelona") },
            { name: "Hotel Casa Luz", tier: "$$$", url: maps("Hotel Casa Luz Barcelona") },
            { name: "Hotel Arconde", tier: "$$$", url: maps("Hotel Arconde Barcelona") },
            { name: "Hotel Balmes", tier: "$$$", url: maps("Hotel Balmes Barcelona") },
          ],
        },
      ],
    },
    {
      title: "Onde comer",
      groups: [
        {
          label: "Para tapas",
          places: [
            {
              name: "Quimet & Quimet",
              note: "Comida e drinks bons, em pé numa taberna bem espanhola",
              url: maps("Quimet i Quimet Barcelona"),
            },
            { name: "Cañete", note: "Clássico de tapas no Raval", url: maps("Bar Canete Barcelona") },
            {
              name: "La Vinya del Senyor",
              note: "Bons vinhos de frente para uma igreja medieval. Um dos nossos favoritos",
              url: maps("La Vinya del Senyor Barcelona"),
            },
            {
              name: "L'Ànima del Vi",
              note: "Ótimo à noite: seleção de vinhos naturais e bons tapas",
              url: maps("L'Anima del Vi Barcelona"),
            },
            {
              name: "Can Paixano (La Xampanyeria)",
              note: "O objetivo é democratizar a cava. Sem mesas — encoste no balcão para cavas por 3 euros e tapas nota 10",
              url: maps("Can Paixano Barcelona"),
            },
            { name: "Bar del Pla", note: "Também dá para almoçar ou jantar", url: maps("Bar del Pla Barcelona") },
            { name: "El Xampanyet", note: "Um clássico — mas chegue cedo!", url: maps("El Xampanyet Barcelona") },
          ],
        },
        {
          label: "Para comer e tomar vinho",
          places: [
            { name: "Nardí", note: "Boteco de frutos do mar", url: maps("Nardi Barcelona") },
            {
              name: "Monocrom",
              note: "Um dos favoritos: o melhor steak tartare que conheço e ótima seleção de vinhos naturais",
              url: maps("Monocrom Barcelona"),
            },
          ],
        },
        {
          label: "Para comer sushi e frutos do mar",
          places: [
            { name: "Shunka", note: "Nosso sushi preferido de Barcelona", url: maps("Shunka Barcelona") },
            { name: "Koy Shunka", note: "Ao lado do Shunka, é a versão omakase", url: maps("Koy Shunka Barcelona") },
            {
              name: "Sato i Tanka",
              note: "Preço bom e ótima variedade de peixes",
              url: maps("Sato i Tanaka Barcelona"),
            },
            {
              name: "Estimar",
              note: "Frutos do mar e peixe inteiro em ambiente refinado",
              url: maps("Estimar Barcelona"),
            },
          ],
        },
      ],
    },
    {
      title: "O que fazer",
      groups: [
        {
          places: [
            {
              name: "Museu Miró",
              note: "E aproveitar para passear por Montjuïc",
              url: maps("Fundacio Joan Miro Barcelona"),
            },
            { name: "Casa Batlló", note: "Arquitetura de Gaudí", url: maps("Casa Batllo Barcelona") },
            { name: "Casa Milà (La Pedrera)", note: "Arquitetura de Gaudí", url: maps("Casa Mila La Pedrera Barcelona") },
            { name: "Sagrada Família", note: "Arquitetura de Gaudí", url: maps("Sagrada Familia Barcelona") },
            {
              name: "Praia Nova Icária",
              note: "Se quiserem praia, é logo depois da Barceloneta",
              url: maps("Platja Nova Icaria Barcelona"),
            },
          ],
          outro:
            "E, claro: se perder pelo Eixample e tomar uma taça de vinho (ou um espresso) a cada esquina.",
        },
      ],
    },
  ],
};

function PlaceGrid({ places }: { places: Place[] }) {
  return (
    <div className="ij-rest-grid">
      {places.map((p) => (
        <div key={p.name} className="ij-rest-item">
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="ij-rest-name ij-rest-link">
            {p.name}
          </a>
          {p.note && <div className="ij-rest-desc">{p.note}</div>}
        </div>
      ))}
    </div>
  );
}

function PlaceList({ places }: { places: Place[] }) {
  return (
    <ul className="ij-hotel-list">
      {places.map((p) => (
        <li key={p.name}>
          <span>
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="ij-hotel-name">
              {p.name}
            </a>
            {p.note && <span className="ij-hotel-note-inline">{p.note}</span>}
          </span>
          {p.tier && <span className="ij-hotel-tier">{p.tier}</span>}
        </li>
      ))}
    </ul>
  );
}

function DestPanel({ dest }: { dest: Dest }) {
  return (
    <div className="ij-tips-panel ij-dest">
      <div className="ij-dest-head">
        <p className="ij-dest-intro">{dest.intro}</p>
      </div>
      {dest.areas.map((area) => (
        <div key={area.title} className="ij-rest-section">
          <div className="ij-tip-col-k">{area.title}</div>
          {area.note && <p className="ij-tip-text">{area.note}</p>}
          {area.groups.map((g, i) => (
            <div key={g.label ?? i} className="ij-dest-group">
              {g.label && <div className="ij-dest-group-label">{g.label}</div>}
              {g.intro && <p className="ij-tip-text">{g.intro}</p>}
              {g.variant === "list" ? <PlaceList places={g.places} /> : <PlaceGrid places={g.places} />}
              {g.outro && <p className="ij-tip-note">{g.outro}</p>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

const BEGUR_HOTELS: Hotel[] = [
  { name: "Alta House", price: "$$$", url: "https://www.google.com/maps/search/Alta+House+Begur" },
  { name: "Aiguablava", price: "$$$", url: "https://www.google.com/maps/search/Hotel+Aiguablava+Begur" },
  { name: "Can Macot", price: "$$$", url: "https://www.google.com/maps/search/Can+Macot+Begur" },
  { name: "Finca Vitoria", price: "$$$", url: "https://www.google.com/maps/search/Finca+Vitoria+Begur" },
];

// Opção alternativa: região histórica de Tossa de Mar
const TOSSA_ALT_HOTELS: Hotel[] = [
  { name: "Elisabeth By The Sea", price: "$$$", url: maps("Elisabeth By The Sea Tossa de Mar") },
  { name: "Hostal Boutique Sa Nansa", price: "$$", url: maps("Hostal Boutique Sa Nansa Tossa de Mar") },
  { name: "Casa Granados", price: "$$$", url: maps("Casa Granados Tossa de Mar") },
];

// WhatsApp para ajudar com quartos/hospedagem
const WA_HOSPEDAGEM = `https://wa.me/12028603255?text=${encodeURIComponent(
  "Olá! Gostaríamos de ajuda com a hospedagem para o casamento da Isabele & João 🏡",
)}`;

// Ponto de referência do Hotel Santa Marta
const SANTA_MARTA_MAPS = maps("Hotel Santa Marta Lloret de Mar");

// Mapa: Google Maps real (embed) com os círculos "à mão" das áreas recomendadas
// por cima. Sistema de coordenadas do overlay: (0,0) = centro do mapa = Hotel
// Santa Marta (q do embed), zoom 12. Offsets em pixels de tela calculados por
// Mercator (≈28,55 m/px nesta latitude), então os círculos caem na geografia certa.
const GMAP_SRC =
  "https://maps.google.com/maps?q=41.6928,2.8267&z=12&hl=pt&output=embed";
const GMAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=Hotel%20Santa%20Marta%20Lloret%20de%20Mar";
const CIRCLE_1 =
  "M25.5,10.8C24.9,13.3 25.0,21.5 21.8,25.4C18.6,29.2 12.0,32.4 6.3,33.9C0.7,35.4 -6.2,35.6 -11.9,34.4C-17.5,33.3 -23.4,30.5 -27.5,27.2C-31.5,23.8 -35.1,19.0 -36.2,14.5C-37.3,9.9 -36.2,4.5 -34.2,0.1C-32.2,-4.3 -28.7,-9.0 -24.2,-12.0C-19.7,-14.9 -13.0,-17.3 -7.3,-17.5C-1.6,-17.7 5.1,-15.7 10.0,-13.2C14.9,-10.8 19.2,-7.0 22.1,-3.0C25.1,1.0 28.0,6.3 27.8,11.0C27.5,15.6 24.3,21.0 20.6,24.7C17.0,28.3 8.3,31.3 5.8,32.6";
const CIRCLE_2 =
  "M262.7,-65.0C259.8,-62.4 253.0,-53.5 245.6,-49.7C238.2,-45.9 227.8,-42.8 218.2,-42.2C208.7,-41.6 196.4,-42.7 188.4,-45.9C180.3,-49.1 174.2,-55.7 169.9,-61.3C165.6,-67.0 161.8,-73.8 162.4,-79.8C163.0,-85.9 167.8,-92.9 173.6,-97.7C179.4,-102.6 188.4,-106.8 197.3,-109.1C206.2,-111.3 218.1,-112.7 227.0,-111.2C235.9,-109.7 244.2,-104.4 250.7,-99.9C257.2,-95.3 263.7,-89.7 265.9,-83.9C268.1,-78.0 267.3,-70.4 263.9,-64.7C260.5,-59.0 253.0,-53.5 245.4,-49.8C237.8,-46.2 222.7,-44.0 218.2,-42.8";
const CIRCLE_3 =
  "M298.0,-137.1C301.1,-137.0 311.2,-138.6 316.7,-136.6C322.1,-134.6 326.9,-129.7 330.6,-125.1C334.3,-120.6 338.4,-114.9 338.9,-109.4C339.3,-104.0 336.6,-97.3 333.3,-92.4C330.1,-87.6 324.9,-82.8 319.5,-80.4C314.0,-78.1 306.8,-77.6 300.8,-78.2C294.8,-78.8 288.3,-81.0 283.4,-84.3C278.5,-87.6 273.6,-92.7 271.7,-97.9C269.8,-103.0 270.3,-109.9 272.0,-115.2C273.6,-120.5 277.3,-125.6 281.6,-129.6C285.8,-133.6 291.7,-137.9 297.5,-139.1C303.4,-140.3 310.9,-138.8 316.7,-136.7C322.5,-134.6 329.9,-128.1 332.6,-126.4";

function StayMap() {
  return (
    <figure className="ij-stay-map">
      <div className="ij-gmap">
        <iframe
          className="ij-gmap-frame"
          src={GMAP_SRC}
          title="Mapa da região — Hotel Santa Marta e áreas recomendadas"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Overlay fixo (não escala) centrado no centro do mapa */}
        <svg className="ij-gmap-overlay" width="760" height="440" viewBox="-380 -220 760 440" aria-hidden>
          <g className="ij-gmap-circles">
            <path d={CIRCLE_1} />
            <path d={CIRCLE_2} />
            <path d={CIRCLE_3} />
          </g>
          <text className="ij-gmap-clbl" x="-5" y="52" textAnchor="middle">Sa Boadella · Sta. Cristina</text>
          <text className="ij-gmap-clbl" x="215" y="-32" textAnchor="middle">Cala Bona · Montgoda</text>
          <text className="ij-gmap-clbl" x="304" y="-66" textAnchor="middle">Tossa de Mar</text>
          {/* chip do hotel, logo acima do pin do Google (que fica no centro) */}
          <g transform="translate(-5,-58)">
            <rect x="-118" y="-13" width="236" height="26" rx="13" fill="#fff" />
            <text className="ij-gmap-hotel" x="0" y="4" textAnchor="middle">🏨 Hotel Santa Marta · vamos ficar aqui</text>
          </g>
        </svg>
      </div>

      <figcaption className="ij-map-legend">
        <span>
          <i className="ij-map-key ij-map-key--pin" aria-hidden />
          Hotel Santa Marta (onde ficaremos)
        </span>
        <span>
          <i className="ij-map-key ij-map-key--circle" aria-hidden />
          Áreas recomendadas
        </span>
        <a href={GMAP_LINK} target="_blank" rel="noopener noreferrer" className="ij-gmap-open">
          Abrir no Google Maps ↗
        </a>
      </figcaption>
    </figure>
  );
}


function HotelList({ hotels }: { hotels: Hotel[] }) {
  return (
    <ul className="ij-hotel-list">
      {hotels.map((h) => (
        <li key={h.name} className={h.featured ? "ij-hotel-featured" : ""}>
          <span>
            <a href={h.url} target="_blank" rel="noopener noreferrer" className="ij-hotel-name">
              {h.name}
            </a>
            {h.featured && <span className="ij-hotel-badge">onde ficaremos</span>}
          </span>
          <span className="ij-hotel-tier">{h.price}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Tips() {
  const [tab, setTab] = useState<TabId>("dress");

  return (
    <section id="tips" className="ij-section ij-section-warm">
      <ScrollReveal asChild>
        <div className="ij-section-header">
          <h2>Dicas</h2>
        </div>
      </ScrollReveal>

      <ScrollReveal asChild>
        <div className="ij-tips-tabs">
          {TABS.map((t) => (
            <button key={t.id} className={`ij-tab ${tab === t.id ? "is-active" : ""}`} onClick={() => setTab(t.id)}>
              {t.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {tab === "dress" && (
        <div className="ij-tips-panel">
          <div className="ij-dress-head">
            <div>
              <p className="ij-tips-sub">Esporte fino</p>
              <h3>Dress code</h3>
            </div>
            <p>
              Elegante, mas confortável para o verão mediterrâneo. Pensem em tecidos que respiram e em sapatos que
              aguentem chão irregular. Evitem saltos finos ou agulha, recomendamos saltos grossos, plataformas ou
              sapatos sem salto.
            </p>
          </div>

          <div className="ij-dress-boards">
            {[
              ["Para elas", "/fotos/dress-code/para-elas.jpg"],
              ["Para eles", "/fotos/dress-code/para-eles.jpg"],
            ].map(([label, src]) => (
              <figure key={label} className="ij-dress-board">
                <figcaption className="ij-dress-board-lbl">{label}</figcaption>
                <Image
                  src={src}
                  alt={label}
                  width={1152}
                  height={1480}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="ij-dress-board-img"
                />
              </figure>
            ))}
          </div>
        </div>
      )}

      {tab === "ficar" && (
        <div className="ij-tips-panel">
          <div className="ij-stay">
            <div className="ij-stay-lead">
              <span className="ij-section-eyebrow ij-section-eyebrow--centered">Onde ficar</span>
              <p className="ij-hotel-dates">30 de junho — 2 de julho</p>
              <p>
                Vamos ficar no{" "}
                <a href={SANTA_MARTA_MAPS} target="_blank" rel="noopener noreferrer" className="ij-prose-strong">
                  <strong>Hotel Santa Marta</strong>
                </a>{" "}
                e estamos organizando quartos para quem tiver interesse. Como a disponibilidade é difícil, quem
                quiser pode chamar no WhatsApp que a gente ajuda.
              </p>
              <a href={WA_HOSPEDAGEM} target="_blank" rel="noopener noreferrer" className="ij-btn-solid">
                Falar no WhatsApp
              </a>
            </div>

            <StayMap />

            <div className="ij-stay-note">
              <p>
                Não recomendamos ficar em <strong>Blanes</strong> ou <strong>Lloret de Mar</strong>. Circulamos no
                mapa algumas áreas que têm bons airbnbs e hotéis na região.
              </p>
              <p>
                Também há <strong>bastante Airbnb e apartamentos bons</strong> pela região para quem quiser. Dois
                exemplos que gostamos:
              </p>
              <div className="ij-stay-links">
                <a
                  href="https://www.booking.com/hotel/es/albamar-apartaments.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ij-stay-link"
                >
                  Albamar Apartaments
                </a>
                <a
                  href="https://www.booking.com/hotel/es/pretty-garden-apartment-next-to-a-charming-beach.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ij-stay-link"
                >
                  Pretty Garden Apartment · à beira da praia
                </a>
              </div>
            </div>

            <div className="ij-stay-alt">
              <div className="ij-stay-alt-head">
                <span className="ij-section-eyebrow ij-section-eyebrow--centered">Outra opção · Tossa de Mar</span>
              </div>
              <p>
                Para quem preferir, Tossa de Mar também é uma ótima opção — recomendamos ficar na região histórica
                (qualquer hotel por ali). Alguns favoritos:
              </p>
              <HotelList hotels={TOSSA_ALT_HOTELS} />
              <p className="ij-hotel-legend">$ econômico &nbsp;·&nbsp; $$ médio &nbsp;·&nbsp; $$$ upscale</p>
            </div>

            <div className="ij-stay-alt">
              <div className="ij-stay-alt-head">
                <span className="ij-section-eyebrow ij-section-eyebrow--centered">Depois · Begur &amp; Palafrugell</span>
                <p className="ij-hotel-dates">2 — 4 de julho</p>
              </div>
              <p>
                A Costa Brava é comprida — as atividades dos últimos dois dias serão mais ao norte, na região de
                Begur e Palafrugell (~1h–1h30 de carro de Tossa).
              </p>
              <HotelList hotels={BEGUR_HOTELS} />
            </div>
          </div>
        </div>
      )}

      {tab === "hair" && (
        <div className="ij-tips-panel">
          <div className="ij-hair-tab">
            <p>
              Organizamos um salão que irá atender no dia do casamento no <strong>Hotel Santa Marta</strong> (Lloret
              de Mar). Todos que quiserem agendar um horário podem mandar uma mensagem clicando no botão abaixo.
            </p>
            <a
              href="https://wa.me/12028603255?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20sal%C3%A3o%20para%20o%20casamento%20da%20Isabele%20%26%20Jo%C3%A3o%20%F0%9F%92%87%E2%80%8D%E2%99%80%EF%B8%8F"
              target="_blank"
              rel="noopener noreferrer"
              className="ij-btn-solid"
            >
              Agendar pelo WhatsApp
            </a>
            <div className="ij-hair-services">
              <div className="ij-service-row">
                <span>Cabelo</span>
                <span>€ 150</span>
              </div>
              <div className="ij-service-row">
                <span>Maquiagem</span>
                <span>€ 150</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === "barcelona" && <DestPanel dest={BARCELONA} />}

      {tab === "costa-brava" && <DestPanel dest={COSTA_BRAVA} />}
    </section>
  );
}

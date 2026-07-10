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
const WA_HOSPEDAGEM = `https://wa.me/56920403095?text=${encodeURIComponent(
  "Olá! Gostaríamos de ajuda com a hospedagem para o casamento da Isabele & João 🏡",
)}`;

// Ponto de referência do Hotel Santa Marta
const SANTA_MARTA_MAPS = maps("Hotel Santa Marta Lloret de Mar");

// Mapa estilo Google Maps da costa entre Blanes e Tossa de Mar.
// Contorno da costa (O → E): Blanes · Sta. Cristina/Sa Boadella · Lloret · Cala Bona · Tossa.
const COAST =
  "M0,470 C60,472 100,470 140,462 C185,453 205,486 250,484 C300,482 330,436 380,428 C430,420 458,452 508,444 C565,435 598,398 648,392 C712,384 742,420 800,404 C858,388 892,336 942,312 C968,300 986,250 1000,222";
const ROAD682 =
  "M0,452 C60,454 100,452 140,444 C185,435 205,468 250,466 C300,464 330,418 380,410 C430,402 458,434 508,426 C565,417 598,380 648,374 C712,366 742,402 800,386 C858,370 892,318 942,294 C968,282 986,232 1000,204";
const C63 = "M300,-5 C304,80 300,150 322,232 C342,304 372,360 380,410";
// Círculos "à mão" das áreas recomendadas (gerados deterministicamente).
const CIRCLE_1 =
  "M337.0,475.2C335.0,482.1 334.7,505.5 325.0,516.4C315.4,527.3 295.7,536.3 279.0,540.6C262.2,545.0 241.3,545.6 224.4,542.4C207.5,539.3 189.7,531.3 177.6,521.8C165.4,512.3 154.8,498.4 151.4,485.5C148.0,472.7 151.2,457.1 157.2,444.6C163.2,432.1 173.9,418.7 187.3,410.4C200.8,402.1 221.1,395.3 238.2,394.7C255.3,394.0 275.4,399.7 290.2,406.5C304.9,413.4 317.9,424.3 326.7,435.8C335.5,447.3 343.8,462.4 343.0,475.6C342.2,488.7 332.8,504.2 321.9,514.5C310.9,524.9 284.9,533.7 277.5,537.5";
const CIRCLE_2 =
  "M724.9,426.7C718.7,431.5 703.9,448.3 687.9,455.4C671.9,462.5 649.4,468.2 628.9,469.4C608.4,470.5 582.2,468.2 564.9,462.3C547.5,456.3 534.0,444.2 524.7,433.6C515.4,423.0 507.5,410.1 508.8,398.7C510.2,387.2 520.3,374.2 532.8,365.0C545.3,355.8 564.7,347.8 583.9,343.6C603.0,339.4 628.5,336.9 647.7,339.8C666.9,342.7 685.3,352.2 699.3,360.8C713.2,369.3 726.9,380.0 731.6,391.1C736.2,402.1 734.6,416.5 727.2,427.2C719.9,437.8 704.0,448.3 687.6,455.2C671.2,462.0 638.6,466.1 628.9,468.3";
const CIRCLE_3 =
  "M910.2,245.4C916.3,245.6 936.0,242.7 946.6,246.4C957.2,250.2 966.7,259.3 973.8,267.8C981.0,276.3 988.6,287.1 989.5,297.4C990.4,307.6 985.2,320.1 979.0,329.1C972.7,338.1 962.6,347.1 952.0,351.6C941.5,356.0 927.4,357.1 915.7,356.0C904.0,354.8 891.3,350.7 881.9,344.5C872.5,338.3 863.0,328.6 859.3,318.9C855.6,309.2 856.5,296.4 859.7,286.5C862.8,276.6 870.0,266.9 878.3,259.5C886.6,252.0 898.1,244.1 909.5,241.9C920.9,239.7 935.4,242.4 946.7,246.3C958.0,250.3 972.2,262.4 977.3,265.6";

function StayMap() {
  return (
    <figure className="ij-stay-map">
      <svg
        viewBox="0 0 1000 560"
        className="ij-stay-map-svg"
        role="img"
        aria-label="Mapa da costa entre Blanes e Tossa de Mar, com o Hotel Santa Marta e as áreas recomendadas"
      >
        <defs>
          <filter id="ij-map-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#000" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* terreno base + florestas */}
        <rect x="0" y="0" width="1000" height="560" fill="#DCEBC2" />
        <path d="M-20,60 C120,20 260,40 360,120 C420,170 380,240 300,250 C180,265 40,220 -20,150 Z" fill="#C8E29F" opacity="0.75" />
        <path d="M470,20 C620,0 820,30 980,10 L1000,0 L1000,180 C900,150 760,190 640,150 C540,120 470,90 470,20 Z" fill="#C8E29F" opacity="0.75" />
        <path d="M520,190 C640,175 760,210 840,270 C760,300 660,300 590,280 C540,266 500,230 520,190 Z" fill="#C8E29F" opacity="0.7" />
        <path d="M60,300 C160,285 250,300 290,350 C210,380 120,375 70,350 C48,335 45,315 60,300 Z" fill="#CADFA2" opacity="0.9" />

        {/* manchas urbanas */}
        <ellipse cx="112" cy="432" rx="70" ry="46" fill="#ECE6DA" />
        <ellipse cx="360" cy="398" rx="92" ry="58" fill="#ECE6DA" />
        <ellipse cx="470" cy="360" rx="55" ry="40" fill="#ECE6DA" opacity="0.8" />
        <ellipse cx="948" cy="258" rx="60" ry="44" fill="#ECE6DA" />

        {/* mar + areia + linha da costa */}
        <path d={`${COAST} L1000,560 L0,560 Z`} fill="#A7D4F1" />
        <path d="M205,486 C230,481 270,481 300,482 C285,494 235,495 210,492 Z" fill="#F1E3C4" />
        <path d="M742,420 C765,410 785,404 800,404 C792,416 762,424 745,426 Z" fill="#F1E3C4" />
        <path d={COAST} fill="none" stroke="#8FBFDF" strokeWidth="1.4" />

        {/* estradas */}
        <path d={C63} fill="none" stroke="#E8A24A" strokeWidth="8" strokeLinecap="round" />
        <path d={C63} fill="none" stroke="#F6B65B" strokeWidth="5" strokeLinecap="round" />
        <path d={ROAD682} fill="none" stroke="#E0A93E" strokeWidth="9" strokeLinecap="round" />
        <path d={ROAD682} fill="none" stroke="#F8CF62" strokeWidth="6" strokeLinecap="round" />
        <path d="M360,398 C430,364 540,346 660,318 C720,304 780,296 840,296" fill="none" stroke="#DCD5C6" strokeWidth="4" />
        <path d="M360,398 C430,364 540,346 660,318 C720,304 780,296 840,296" fill="none" stroke="#FFFFFF" strokeWidth="2.4" />
        <path d="M112,432 C150,400 200,380 250,360" fill="none" stroke="#DCD5C6" strokeWidth="3.5" />
        <path d="M112,432 C150,400 200,380 250,360" fill="none" stroke="#FFFFFF" strokeWidth="2" />

        {/* POIs */}
        <g transform="translate(300,300)">
          <circle r="9" fill="#63A15A" />
          <text x="0" y="4" textAnchor="middle" fontSize="11" fill="#fff">🌳</text>
        </g>
        <g transform="translate(770,342)">
          <circle r="9" fill="#63A15A" />
          <text x="0" y="4" textAnchor="middle" fontSize="10" fill="#fff">⛺</text>
        </g>

        {/* placas de estrada */}
        <g>
          <rect x="196" y="452" width="46" height="17" rx="4" fill="#F8CF62" stroke="#E0A93E" />
          <text x="219" y="464.5" textAnchor="middle" fontSize="11" fontWeight="700" fill="#5A4A1A">GI-682</text>
        </g>
        <g>
          <rect x="608" y="366" width="46" height="17" rx="4" fill="#F8CF62" stroke="#E0A93E" />
          <text x="631" y="378.5" textAnchor="middle" fontSize="11" fontWeight="700" fill="#5A4A1A">GI-682</text>
        </g>
        <g>
          <rect x="278" y="110" width="40" height="17" rx="4" fill="#E4694F" />
          <text x="298" y="122.5" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">C-63</text>
        </g>

        {/* rótulos */}
        <text x="112" y="430" textAnchor="middle" fontSize="15" fontWeight="500" fill="#5C584F">Blanes</text>
        <text x="392" y="392" textAnchor="middle" fontSize="17" fontWeight="500" fill="#4F4B43">Lloret de Mar</text>
        <text x="900" y="242" textAnchor="middle" fontSize="16" fontWeight="500" fill="#4F4B43">Tossa de Mar</text>
        <text x="300" y="330" textAnchor="middle" fontSize="10.5" fill="#5F7A44">Jardí Botànic Marimurtra</text>
        <text x="600" y="452" textAnchor="middle" fontSize="11" fill="#6B665C">La Montgoda</text>
        <text x="705" y="470" textAnchor="middle" fontSize="11" fill="#6B665C">Platja Brava</text>
        <text x="770" y="372" textAnchor="middle" fontSize="10.5" fill="#5F7A44">Camping Cala Llevado</text>
        <text x="742" y="536" textAnchor="middle" fontSize="13" letterSpacing="3" fill="#7BA6CD">MAR MEDITERRANI</text>

        {/* áreas recomendadas (círculo à mão) */}
        <path d={CIRCLE_1} fill="none" stroke="#1C1C1C" strokeWidth="3.4" strokeLinecap="round" />
        <path d={CIRCLE_2} fill="none" stroke="#1C1C1C" strokeWidth="3.4" strokeLinecap="round" />
        <path d={CIRCLE_3} fill="none" stroke="#1C1C1C" strokeWidth="3.4" strokeLinecap="round" />
        <text x="245" y="550" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#1C1C1C">Sa Boadella · Sta. Cristina</text>

        {/* Hotel Santa Marta */}
        <g transform="translate(250,484)" filter="url(#ij-map-shadow)">
          <path d="M0,0 C-9,-14 -14,-20 -14,-28 A14,14 0 1,1 14,-28 C14,-20 9,-14 0,0 Z" fill="#EA4335" />
          <circle cx="0" cy="-28" r="5.2" fill="#fff" />
        </g>
        <a href={SANTA_MARTA_MAPS} target="_blank" rel="noopener noreferrer">
          <rect x="150" y="392" width="200" height="40" rx="6" fill="#fff" filter="url(#ij-map-shadow)" />
          <text x="250" y="410" textAnchor="middle" fontSize="14" fontWeight="700" fill="#C0392B">Hotel Santa Marta</text>
          <text x="250" y="425" textAnchor="middle" fontSize="10.5" letterSpacing="1.5" fill="#6B665C">VAMOS FICAR AQUI</text>
        </a>
      </svg>

      <figcaption className="ij-map-legend">
        <span>
          <i className="ij-map-key ij-map-key--pin" aria-hidden />
          Onde ficaremos
        </span>
        <span>
          <i className="ij-map-key ij-map-key--circle" aria-hidden />
          Áreas recomendadas
        </span>
        <span>Blanes e Lloret de Mar: não recomendamos</span>
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
                <p className="ij-hotel-dates">2 — 3 de julho</p>
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
              href="https://wa.me/56920403095?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20sal%C3%A3o%20para%20o%20casamento%20da%20Isabele%20%26%20Jo%C3%A3o%20%F0%9F%92%87%E2%80%8D%E2%99%80%EF%B8%8F"
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

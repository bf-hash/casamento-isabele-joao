"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import CostaBravaPanel from "./CostaBravaPanel";

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
  { name: "La Bionda", price: "$$$", url: maps("La Bionda Begur") },
  { name: "Alta House Begur", price: "$$", url: maps("Alta House Begur") },
  { name: "Bypillow Begur Centro", price: "$$", url: maps("Bypillow Begur Centro") },
  { name: "Finca Vitòria", price: "$$$", url: maps("Finca Vitoria Begur") },
  { name: "Aiguaclara", price: "$$$", url: maps("Aiguaclara Begur") },
];

// Opção alternativa: região histórica de Tossa de Mar
const TOSSA_ALT_HOTELS: Hotel[] = [
  { name: "Elisabeth By The Sea", price: "$$$", url: maps("Elisabeth By The Sea Tossa de Mar") },
  { name: "Hostal Boutique Sa Nansa", price: "$$", url: maps("Hostal Boutique Sa Nansa Tossa de Mar") },
  { name: "Casa Granados", price: "$$$", url: maps("Casa Granados Tossa de Mar") },
];

// WhatsApp para ajudar com quartos/hospedagem
const WA_HOSPEDAGEM = `https://wa.me/12028603255?text=${encodeURIComponent(
  "Olá! Gostaríamos de ajuda com a hospedagem para o casamento da Isabele & João",
)}`;

// Ponto de referência do Hotel Santa Marta
const SANTA_MARTA_MAPS = maps("Hotel Santa Marta Lloret de Mar");

const GMAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=Hotel%20Santa%20Marta%20Lloret%20de%20Mar";

function StayMap() {
  return (
    <figure className="ij-stay-map">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="ij-stay-photo"
        src="/fotos/mapa-hospedagem.png"
        alt="Mapa da região: Hotel Santa Marta (onde vamos ficar) e o local do casamento"
      />
      <figcaption className="ij-stay-photo-cap">
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
              ["Para elas", "/fotos/dress-code/para-elas.png", 1152, 2048],
              ["Para eles", "/fotos/dress-code/para-eles.jpg", 1152, 1480],
            ].map(([label, src, w, h]) => (
              <figure key={label} className="ij-dress-board">
                <figcaption className="ij-dress-board-lbl">{label}</figcaption>
                <Image
                  src={src as string}
                  alt={label as string}
                  width={w as number}
                  height={h as number}
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
                Circulamos no mapa a região que mais gostamos próximo ao casamento, há{' '}
                <strong>bastante Airbnb e apartamentos bons</strong> pela região para quem quiser.
              </p>
            </div>

            <div className="ij-stay-alt">
              <div className="ij-stay-alt-head">
                <span className="ij-section-eyebrow ij-section-eyebrow--centered">
                  Airbnbs e Vilas que gostamos da região
                </span>
              </div>
              <ul className="ij-hotel-list ij-stay-examples">
                <li>
                  <span>
                    <a
                      href="https://maps.app.goo.gl/RbbxR2FxtyStiCxr8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ij-hotel-name"
                    >
                      Hotel Casa Coco
                    </a>
                    <span className="ij-hotel-badge">
                      Fica em Lloret del Mar, cidade mais universitária, mas a estrutura do hotel é ótima
                    </span>
                  </span>
                </li>
                <li>
                  <span>
                    <a
                      href="https://www.booking.com/hotel/es/albamar-apartaments.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ij-hotel-name"
                    >
                      Albamar Apartaments
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a
                      href="https://www.booking.com/hotel/es/can-terrats.pt-br.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ij-hotel-name"
                    >
                      Can Terrats
                    </a>
                    <span className="ij-hotel-badge">2 minutos do casamento e 6 de onde será o pre wedding</span>
                  </span>
                </li>
                <li>
                  <span>
                    <a
                      href="https://www.airbnb.com.br/rooms/53821739"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ij-hotel-name"
                    >
                      Vila de luxo
                    </a>
                    <span className="ij-hotel-badge">até 11 pessoas</span>
                  </span>
                </li>
                <li>
                  <span>
                    <a
                      href="https://www.airbnb.com.br/rooms/1062064961646738690"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ij-hotel-name"
                    >
                      Casa de praia
                    </a>
                    <span className="ij-hotel-badge">até 10 pessoas</span>
                  </span>
                </li>
                <li>
                  <span>
                    <a
                      href="https://www.airbnb.com.br/rooms/25061452"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ij-hotel-name"
                    >
                      Villa Sta. Cristina
                    </a>
                    <span className="ij-hotel-badge">
                      até 10 pessoas · em Santa Cristina (a praia do Hotel que ficaremos)
                    </span>
                  </span>
                </li>
                <li>
                  <span>
                    <a
                      href="https://www.airbnb.com.br/rooms/1709659091895782539"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ij-hotel-name"
                    >
                      Apartamento moderno
                    </a>
                    <span className="ij-hotel-badge">até 4 pessoas</span>
                  </span>
                </li>
                <li>
                  <span>
                    <a
                      href="https://www.airbnb.com.br/rooms/1708048142195235015"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ij-hotel-name"
                    >
                      Apartamento com terraço
                    </a>
                    <span className="ij-hotel-badge">até 4 pessoas</span>
                  </span>
                </li>
                <li>
                  <span>
                    <a
                      href="https://www.airbnb.com.br/rooms/11331129"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ij-hotel-name"
                    >
                      Apto Sta. Cristina
                    </a>
                    <span className="ij-hotel-badge">até 4 pessoas</span>
                  </span>
                </li>
                <li>
                  <span>
                    <a
                      href="https://www.roblesvillage.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ij-hotel-name"
                    >
                      Villa los Robles
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a
                      href="https://www.airbnb.com.br/rooms/24515640"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ij-hotel-name"
                    >
                      Airbnb na região
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a
                      href="https://www.airbnb.com.br/rooms/18651803"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ij-hotel-name"
                    >
                      Airbnb na região
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a
                      href="https://www.airbnb.com.br/rooms/7690343"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ij-hotel-name"
                    >
                      Airbnb na região
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a
                      href="https://www.airbnb.com.br/rooms/931962814468481823"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ij-hotel-name"
                    >
                      Airbnb na região
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a
                      href="https://www.airbnb.com.br/rooms/32839203"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ij-hotel-name"
                    >
                      Airbnb na região
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a
                      href="https://www.airbnb.com.br/rooms/1713699011626743053"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ij-hotel-name"
                    >
                      Airbnb na região
                    </a>
                  </span>
                </li>
              </ul>
              <p className="ij-stay-obs">
                <strong>Observação:</strong> não recomendamos Blanes ou o centro de Lloret de Mar — não é
                tão bonito quanto o resto da região.
              </p>
            </div>

            <div className="ij-stay-alt">
              <div className="ij-stay-alt-head">
                <span className="ij-section-eyebrow ij-section-eyebrow--centered">Outra opção · Tossa de Mar</span>
              </div>
              <p>
                Para quem preferir, Tossa de Mar também é uma ótima opção — recomendamos ficar na região histórica
                (qualquer hotel por ali). Fica um pouco mais longe do casamento que as outras opções (~30min).
                Alguns favoritos:
              </p>
              <HotelList hotels={TOSSA_ALT_HOTELS} />
              <ul className="ij-hotel-list ij-stay-examples">
                <li>
                  <span>
                    <a
                      href="https://www.airbnb.com.br/rooms/1451077485558202124"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ij-hotel-name"
                    >
                      Airbnb em Tossa de Mar
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a
                      href="https://www.airbnb.com.br/rooms/47589152"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ij-hotel-name"
                    >
                      Airbnb em Tossa de Mar
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a
                      href="https://www.airbnb.com.br/rooms/19564762"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ij-hotel-name"
                    >
                      Airbnb em Tossa de Mar
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a
                      href="https://www.airbnb.com.br/rooms/726143062595865225"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ij-hotel-name"
                    >
                      Airbnb em Tossa de Mar
                    </a>
                  </span>
                </li>
              </ul>
            </div>

            <div className="ij-stay-alt">
              <div className="ij-stay-alt-head">
                <span className="ij-section-eyebrow ij-section-eyebrow--centered">Depois · Begur</span>
                <p className="ij-hotel-dates">2 — 4 de julho</p>
              </div>
              <p>
                O rolê de sábado será mais ao norte, na região de Begur
                (~1h do Hotel Santa Marta). Para os que quiserem ficar com a gente e no norte entre sexta e domingo, algumas
                opções:
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
              Organizamos um salão que irá atender no dia do casamento no <strong>Hotel Santa Marta</strong>. Todos
              que quiserem agendar um horário podem mandar uma mensagem clicando no botão abaixo.
            </p>
            <a
              href="https://wa.me/12028603255?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20sal%C3%A3o%20para%20o%20casamento%20da%20Isabele%20%26%20Jo%C3%A3o"
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

      {tab === "costa-brava" && <CostaBravaPanel />}
    </section>
  );
}

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

interface ListItem {
  name: string;
  note: string;
}

const BCN_HOTELS: ListItem[] = [
  { name: "Hotel Casa Bonay", note: "Boutique no Eixample · rooftop bar" },
  { name: "Yurbban Passage", note: "Design hotel · Gótico, perto de tudo" },
  { name: "Hotel Neri Relais & Châteaux", note: "5★ · Barri Gòtic" },
  { name: "The Serras", note: "5★ · Port Vell, terraço com vista pro mar" },
];

const BCN_RESTAURANTS: ListItem[] = [
  { name: "Cal Pep", note: "Tapas clássicas · Born" },
  { name: "Bar Cañete", note: "Balcão de frutos do mar · Raval" },
  { name: "Cervecería Catalana", note: "Tapas no Eixample" },
  { name: "Compartir Barcelona", note: "Dos chefs do Celler de Can Roca" },
  { name: "La Boqueria", note: "Mercado · ideal pra almoço informal" },
];

const COSTA_TOSSA_RESTAURANTS: ListItem[] = [
  { name: "La Cuina de Can Simon", note: "Cozinha catalã refinada · Vila Vella" },
  { name: "Es Molí", note: "Frutos do mar com vista · Tossa" },
  { name: "Restaurante Bahia", note: "Na praia · paella e peixe grelhado" },
];

const COSTA_BEGUR_RESTAURANTS: ListItem[] = [
  { name: "Restaurant Sa Punta", note: "Elegante · vista pra Platja de Pals" },
  { name: "Tragamar", note: "Calella de Palafrugell · pé na água" },
  { name: "Mas Lazuli", note: "Hotel-restaurante com horta própria" },
  { name: "Bar La Riera", note: "Tapas em Begur · vinho natural" },
];

const BEACHES: ListItem[] = [
  { name: "Cala Giverola", note: "Perto de Tossa · cercada por pinheiros, água turquesa" },
  { name: "Platja Gran", note: "Praia principal de Tossa · muralha medieval ao fundo" },
  { name: "Cala Pola", note: "Pequena e escondida entre Tossa e Lloret" },
  { name: "Cala Sa Boadella", note: "Lloret · mais tranquila, acesso a pé" },
  { name: "Platja de Sa Tuna", note: "Begur · casas de pescadores, perfeita" },
  { name: "Cala Aiguablava", note: "Begur · água incrivelmente azul" },
  { name: "Platja del Castell", note: "Palamós · uma das últimas virgens da Costa Brava" },
  { name: "Calella de Palafrugell", note: "Vilarejo com calas pequenas lado a lado" },
];

function TipList({ items }: { items: ListItem[] }) {
  return (
    <ul className="ij-tip-list">
      {items.map((it) => (
        <li key={it.name}>
          <b>{it.name}</b>
          <small>{it.note}</small>
        </li>
      ))}
    </ul>
  );
}

function RestGrid({ items }: { items: ListItem[] }) {
  return (
    <div className="ij-rest-grid">
      {items.map((it) => (
        <div key={it.name} className="ij-rest-item">
          <div className="ij-rest-name">{it.name}</div>
          <div className="ij-rest-desc">{it.note}</div>
        </div>
      ))}
    </div>
  );
}

const TOSSA_HOTELS: Hotel[] = [
  { name: "Hotel Diana", price: "$$", url: "https://www.hotelesdante.com/en/home/hotel-diana/" },
  { name: "Hotel Delfín", price: "$$", url: "https://www.hotelesdante.com/en/home/hotel-delfin/" },
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
  { name: "Casa Granados", price: "$$$", url: "https://www.google.com/maps/search/Casa+Granados+Tossa+de+Mar" },
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
  { name: "Hotel Santa Marta", price: "$$$", url: "https://hotelsantamarta.es/", featured: true },
  { name: "Zel Costa Brava", price: "$$$", url: "https://www.zelhotels.com/" },
];

const BEGUR_HOTELS: Hotel[] = [
  { name: "Alta House", price: "$$$", url: "https://www.google.com/maps/search/Alta+House+Begur" },
  { name: "Aiguablava", price: "$$$", url: "https://www.google.com/maps/search/Hotel+Aiguablava+Begur" },
  { name: "Can Macot", price: "$$$", url: "https://www.google.com/maps/search/Can+Macot+Begur" },
  { name: "Finca Vitoria", price: "$$$", url: "https://www.google.com/maps/search/Finca+Vitoria+Begur" },
];

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
          <span className="ij-section-eyebrow ij-section-eyebrow--centered">Dicas</span>
          <h2>
            Para aproveitar
            <br />
            <span className="ij-serif-it">cada detalhe</span>
          </h2>
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
          <div className="ij-hotel-areas">
            <div className="ij-hotel-area">
              <div className="ij-hotel-area-head">
                <span className="ij-section-eyebrow">Tossa de Mar</span>
                <p className="ij-hotel-dates">30 de junho — 2 de julho</p>
              </div>
              <HotelList hotels={TOSSA_HOTELS} />
              <p className="ij-hotel-legend">$ econômico &nbsp;·&nbsp; $$ médio &nbsp;·&nbsp; $$$ upscale</p>
            </div>
            <div className="ij-hotel-area">
              <div className="ij-hotel-area-head">
                <span className="ij-section-eyebrow">Begur &amp; Palafrugell</span>
                <p className="ij-hotel-dates">2 — 3 de julho</p>
              </div>
              <p className="ij-hotel-note">
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

      {tab === "barcelona" && (
        <div className="ij-tips-panel ij-dest">
          <div className="ij-dest-head">
            <p className="ij-dest-intro">
              Muitos voos do Brasil fazem conexão ou chegam em Barcelona. Se puderem, aproveitem para passar uns
              dias na cidade — vale cada hora.
            </p>
          </div>

          <div className="ij-tip-cols">
            <div>
              <div className="ij-tip-col-k">Onde ficar</div>
              <TipList items={BCN_HOTELS} />
            </div>
            <div>
              <div className="ij-tip-col-k">Onde comer</div>
              <TipList items={BCN_RESTAURANTS} />
            </div>
            <div>
              <div className="ij-tip-col-k">O que fazer</div>
              <p className="ij-tip-text">
                Sagrada Família, Parc Güell, bairro Gótico, passeio pela Barceloneta, El Born para compras e bares.
              </p>
              <p className="ij-tip-text ij-tip-text--faint">
                Reserve os ingressos da Sagrada Família com antecedência.
              </p>
            </div>
          </div>
        </div>
      )}

      {tab === "costa-brava" && (
        <div className="ij-tips-panel ij-dest">
          <div className="ij-dest-head">
            <p className="ij-dest-intro">
              Entre Tossa de Mar, Begur e Palafrugell há mesas memoráveis e calas de água turquesa. Reservem um dia
              (ou dois) para se perder pelo litoral.
            </p>
          </div>

          <div className="ij-rest-section">
            <div className="ij-tip-col-k">Restaurantes — Tossa de Mar</div>
            <RestGrid items={COSTA_TOSSA_RESTAURANTS} />
          </div>
          <div className="ij-rest-section">
            <div className="ij-tip-col-k">Restaurantes — Begur &amp; Palafrugell</div>
            <RestGrid items={COSTA_BEGUR_RESTAURANTS} />
          </div>
          <div className="ij-beach-section">
            <div className="ij-tip-col-k">Praias</div>
            <div className="ij-beach-grid">
              {BEACHES.map((b) => (
                <div key={b.name} className="ij-beach-item">
                  <div className="ij-beach-name">{b.name}</div>
                  <div className="ij-beach-desc">{b.note}</div>
                </div>
              ))}
            </div>
            <p className="ij-tip-note">
              Alugue um carro para explorar as calas — muitas são acessíveis só de carro seguido de uma caminhada
              curta.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

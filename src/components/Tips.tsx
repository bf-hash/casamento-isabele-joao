"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const TABS = [
  { id: "dress", label: "Dress Code" },
  { id: "ficar", label: "Onde Ficar" },
  { id: "hair", label: "Hair & Make" },
] as const;

type TabId = (typeof TABS)[number]["id"];

interface Hotel {
  name: string;
  price: string;
  url: string;
  featured?: boolean;
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
              <p className="ij-tips-sub">Passeio completo / Social</p>
              <h3>Dress code</h3>
            </div>
            <p>
              Elegante, mas confortável para o verão mediterrâneo. Pensem em tecidos que respiram e em sapatos que
              aguentem caminhar.
            </p>
          </div>

          <div className="ij-dress-grid">
            {[
              ["vestido fluido", "Vestido fluido, midi ou longo — cores claras ou tons mediterrânicos."],
              ["terno leve", "Terno em tecido leve, sem gravata. Leveza acima de tudo."],
              ["sapatos", "Sapatos confortáveis: plataforma, rasteirinha elegante ou salto bloco."],
              ["o convento", "Convent de Blanes — convento histórico, chão irregular e vista mar."],
            ].map(([label, cap]) => (
              <div key={label} className="ij-dress-card">
                <div className="ij-ph">
                  <span className="ij-ph-label">{label}</span>
                </div>
                <p className="ij-dress-cap">{cap}</p>
              </div>
            ))}
          </div>

          <div className="ij-dress-foot">
            <div>
              <div className="ij-dress-foot-k">Para elas</div>
              <p>Vestidos fluidos, midi ou longos. Cores claras, neutros ou tons mediterrânicos.</p>
            </div>
            <div>
              <div className="ij-dress-foot-k">Para eles</div>
              <p>Terno em tecido leve. Gravata não é necessária.</p>
            </div>
          </div>

          <p className="ij-dress-note">
            A cerimônia será em um convento histórico com chão irregular. Evitem saltos finos ou agulha,
            recomendamos saltos grossos, plataformas ou sapatos sem salto.
          </p>
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

      <ScrollReveal asChild>
        <div className="ij-tips-more">
          <Link className="ij-tips-more-card" href="/roteiros">
            <span className="ij-tmc-k">Barcelona &amp; Costa Brava</span>
            <span className="ij-tmc-name">Roteiros</span>
            <span className="ij-tmc-desc">Para além do casamento — onde ficar, comer e explorar o litoral.</span>
            <span className="ij-tmc-go">Abrir página →</span>
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}

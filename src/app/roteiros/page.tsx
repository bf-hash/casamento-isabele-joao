import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Roteiros · Isabele & João",
  description: "Barcelona & Costa Brava — para além do casamento.",
};

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

export default function RoteirosPage() {
  return (
    <>
      <Header variant="roteiros" />

      <section className="ij-page-hero">
        <span className="ij-section-eyebrow ij-section-eyebrow--centered">Roteiros</span>
        <h1>
          Para além
          <br />
          do casamento
        </h1>
        <p className="ij-page-hero-sub">Barcelona &amp; Costa Brava</p>
        <p className="ij-page-hero-intro">
          Já que vocês vêm de tão longe, vale somar uns dias de viagem ao casamento. Reunimos aqui nossas
          recomendações favoritas — da cidade ao litoral.
        </p>
      </section>

      <SectionDivider />

      <section className="ij-section ij-section-paper ij-dest" id="barcelona">
        <ScrollReveal className="ij-dest-head">
          <span className="ij-section-eyebrow ij-section-eyebrow--centered">Destino 01</span>
          <h2>Barcelona</h2>
          <p className="ij-dest-sub">antes ou depois do casamento</p>
          <p className="ij-dest-intro">
            Muitos voos do Brasil fazem conexão ou chegam em Barcelona. Se puderem, aproveitem para passar uns dias
            na cidade — vale cada hora.
          </p>
        </ScrollReveal>

        <div className="ij-tip-cols">
          <ScrollReveal delay={1}>
            <div className="ij-tip-col-k">Onde ficar</div>
            <TipList items={BCN_HOTELS} />
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className="ij-tip-col-k">Onde comer</div>
            <TipList items={BCN_RESTAURANTS} />
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className="ij-tip-col-k">O que fazer</div>
            <p className="ij-tip-text">
              Sagrada Família, Parc Güell, bairro Gótico, passeio pela Barceloneta, El Born para compras e bares.
            </p>
            <p className="ij-tip-text ij-tip-text--faint">
              Reserve os ingressos da Sagrada Família com antecedência.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      <section className="ij-section ij-section-paper ij-dest" id="costa-brava">
        <ScrollReveal className="ij-dest-head">
          <span className="ij-section-eyebrow ij-section-eyebrow--centered">Destino 02</span>
          <h2>Costa Brava</h2>
          <p className="ij-dest-sub">durante a semana</p>
          <p className="ij-dest-intro">
            Entre Tossa de Mar, Begur e Palafrugell há mesas memoráveis e calas de água turquesa. Reservem um dia
            (ou dois) para se perder pelo litoral.
          </p>
        </ScrollReveal>

        <ScrollReveal className="ij-rest-section" delay={1}>
          <div className="ij-tip-col-k">Restaurantes — Tossa de Mar</div>
          <RestGrid items={COSTA_TOSSA_RESTAURANTS} />
        </ScrollReveal>
        <ScrollReveal className="ij-rest-section" delay={1}>
          <div className="ij-tip-col-k">Restaurantes — Begur &amp; Palafrugell</div>
          <RestGrid items={COSTA_BEGUR_RESTAURANTS} />
        </ScrollReveal>
        <ScrollReveal className="ij-beach-section" delay={2}>
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
        </ScrollReveal>
      </section>

      <Footer />
    </>
  );
}

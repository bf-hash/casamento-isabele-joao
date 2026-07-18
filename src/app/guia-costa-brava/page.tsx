import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Guia de viagem · Costa Brava · Isabele & João",
  description:
    "Nosso guia slow travel da Costa Brava: praias favoritas, hotéis, restaurantes e a rota do vinho no Empordà, organizados por região.",
};

function maps(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

// ── Modelo de dados ──
interface Place {
  name: string;
  city?: string;
  note?: string;
  tier?: string;
  url: string;
}

interface Group {
  label: string;
  intro?: string;
  variant?: "grid" | "list";
  places: Place[];
}

interface Region {
  id: string;
  kicker: string;
  name: string;
  note: string;
  photo: string;
  photoAlt: string;
  groups: Group[];
}

// ── Dicas para a alta temporada ──
const TIPS: string[] = [
  "Chegar à praia depois das 10h pode ser complicado — enche bastante.",
  "Sempre reserve mesa para o jantar, para não ficar na mão.",
  "As praias mais famosas ficam difíceis de acessar de carro entre 10h e 14h por causa do trânsito.",
  "Leve sapatilha aquática — algumas praias são de pedra.",
];

// ── Regiões (curadoria por região + guia, sem repetição) ──
const REGIONS: Region[] = [
  {
    id: "begur",
    kicker: "Costa Brava",
    name: "Begur",
    note:
      "Muito central — pertinho das praias e das cidades medievais do Baix Empordà. Uma boa base para explorar toda a região.",
    photo: "/fotos/guia/begur.jpg",
    photoAlt: "Vila medieval de Begur no alto da colina",
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
          {
            name: "Aiguaclara",
            tier: "$$$",
            note: "Casa do século XIX no centro histórico de Begur",
            url: maps("Aiguaclara Begur"),
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
          {
            name: "Fitzroy Café",
            note: "Café especial, de abril até o fim do verão",
            url: maps("Fitzroy Cafe Begur"),
          },
          {
            name: "Casa Juanita",
            note: "Peixe fresco no forno a lenha, tradição desde 1978",
            url: maps("Casa Juanita Begur"),
          },
          {
            name: "C-Roack",
            note: "Clima ao ar livre descolado para os drinks da noite",
            url: maps("C-Roack Begur"),
          },
          {
            name: "És! Carxofa",
            city: "Púbol",
            note: "Restaurante no campo, ideal para paella e petiscos variados",
            url: maps("Es Carxofa Pubol"),
          },
        ],
      },
      {
        label: "Praias e calas",
        places: [
          {
            name: "Cala Sa Tuna",
            note: "Vila de pescadores muito fofa, com água transparente e bares de frente para a praia",
            url: maps("Cala Sa Tuna Begur"),
          },
          {
            name: "Platja d'Aiguablava",
            note: "Praia paradisíaca com um dos melhores restaurantes à beira-mar que já fomos (Toc al Mar)",
            url: maps("Platja Aiguablava Begur"),
          },
          { name: "Platja Fonda", note: "Joia escondida entre falésias, longe das multidões", url: maps("Platja Fonda Begur") },
          { name: "Aiguafreda", note: "Pequena enseada reservada, protegida pela encosta", url: maps("Aiguafreda Begur") },
          {
            name: "Fornells",
            note: "Enseada linda, conectada às praias vizinhas pelo Camí de Ronda",
            url: maps("Fornells Begur"),
          },
        ],
      },
    ],
  },
  {
    id: "pals",
    kicker: "Costa Brava",
    name: "Pals",
    note:
      "Cidade medieval preservada e charmosa, entre os arrozais do Baix Empordà — a poucos minutos de Begur.",
    photo: "/fotos/inspiracao/pals.jpg",
    photoAlt: "Ruas de pedra da vila medieval de Pals",
    groups: [
      {
        label: "Onde ficar",
        variant: "list",
        places: [
          {
            name: "Arkhé Hotel Boutique",
            note: "Foco em bem-estar, tranquilo e elegante",
            url: maps("Arkhe Hotel Boutique Pals"),
          },
        ],
      },
      {
        label: "Onde comer e beber",
        places: [
          {
            name: "UM Pals",
            note: "Peixe e frutos do mar fresquíssimos, à beira-mar na Platja d'el Grau",
            url: maps("UM Pals Platja del Grau"),
          },
          {
            name: "Sol Blanc",
            note: "Casa de fazenda entre os arrozais, com jantar gastronômico",
            url: maps("Sol Blanc Pals"),
          },
          {
            name: "Funky Pizza",
            note: "Pizza de forno a lenha e vinhos naturais",
            url: maps("Funky Pizza Pals"),
          },
          { name: "Grava Pals", note: "Ótimo para café da manhã e café especial", url: maps("Grava Pals") },
        ],
      },
    ],
  },
  {
    id: "palafrugell",
    kicker: "Costa Brava",
    name: "Palafrugell",
    note:
      "Parece a Grécia: praias bonitas em Calella e Llafranc, vilas para almoçar e ver as lojinhas — tudo pertinho de Begur.",
    photo: "/fotos/inspiracao/calella.jpg",
    photoAlt: "Casas brancas à beira-mar em Calella de Palafrugell",
    groups: [
      {
        label: "Onde ficar",
        variant: "list",
        places: [
          {
            name: "Hotel Sant Roc",
            note: "Vistas incríveis sobre o Mediterrâneo",
            url: maps("Hotel Sant Roc Calella de Palafrugell"),
          },
          {
            name: "Can Mascot",
            note: "Hotel eco-friendly no coração de Palafrugell",
            url: maps("Can Mascot Palafrugell"),
          },
        ],
      },
      {
        label: "Onde comer e beber",
        places: [
          {
            name: "Margarita",
            note: "Lugar lindo na beira da praia. Para amantes de vinho e crudos",
            url: maps("Margarita Calella de Palafrugell"),
          },
          {
            name: "Sabana Café",
            note: "Café aconchegante para um brunch tardio",
            url: maps("Sabana Cafe Palafrugell"),
          },
          {
            name: "Sol i Mar",
            note: "Delícia à beira-mar para os amantes de frutos do mar",
            url: maps("Sol i Mar Calella de Palafrugell"),
          },
          {
            name: "Xurreria La Family",
            note: "Para churros deliciosos a qualquer hora",
            url: maps("Xurreria La Family Palafrugell"),
          },
        ],
      },
      {
        label: "Praias e calas",
        places: [
          {
            name: "El Golfet",
            note: "Praia paradisíaca com uma trilha linda e fácil (5 min), o Camí de Ronda — dá para percorrer toda a Costa Brava por ela",
            url: maps("El Golfet Calella de Palafrugell"),
          },
          {
            name: "Llafranc",
            note: "Areia linda em frente a uma vila encantadora. Chegamos pelo Camí de Ronda desde Calella. Para comer, o Isabella's é ótimo, com bons vinhos e de frente para a praia",
            url: maps("Llafranc Palafrugell"),
          },
          {
            name: "El Canadell",
            note: "Praia charmosa e familiar, a essência da Costa Brava",
            url: maps("El Canadell Calella de Palafrugell"),
          },
        ],
      },
    ],
  },
  {
    id: "cadaques",
    kicker: "Costa Brava",
    name: "Cadaqués",
    note:
      "Cidade do Salvador Dalí — conhecida pela arte, arquitetura, gastronomia e lojas de artesanato. Casas brancas encostadas no mar, ao norte da costa.",
    photo: "/fotos/inspiracao/cadaques-baia.jpg",
    photoAlt: "Baía de Cadaqués ao entardecer, com as casas brancas e a igreja no alto",
    groups: [
      {
        label: "Onde ficar",
        variant: "list",
        places: [
          { name: "Carpe Cadaqués", url: "https://www.carpediemcadaques.com/en/accommodation/" },
          { name: "Casa Marquina", url: "https://www.instagram.com/casamarquina/" },
          { name: "Riba Pitxot Apartments", url: "https://ribapitxot.com/en/cadaques-holiday-apartment/plusinfo-en.php" },
          { name: "La Casa Verda Cadaqués", url: "https://www.casaverdacadaques.com/" },
          { name: "Casa Talaia", note: "Casa de temporada espaçosa, perfeita para grupos", url: maps("Casa Talaia Cadaques") },
          { name: "Casa Nereta", note: "Boutique descolado, com clima descontraído", url: maps("Casa Nereta Cadaques") },
        ],
      },
      {
        label: "Onde comer e beber",
        places: [
          { name: "Narita", note: "Japão e o Mediterrâneo se encontram em Cadaqués, com uma carta simples, informal e fresca", url: maps("Narita Cadaques") },
          { name: "Oli Bar", note: "Bar de vinhos e petiscos, com clima descontraído à beira-mar", url: maps("Oli Bar Cadaques") },
          { name: "Casa Dionis", note: "Cozinha catalã clássica num casarão tradicional do centro", url: maps("Casa Dionis Cadaques") },
          {
            name: "Batalla",
            note: "Joia à beira-mar, frutos do mar fresquíssimos e tuna steak",
            url: maps("Batalla Cadaques"),
          },
          {
            name: "Bistro Nereta",
            note: "Fusão nipo-espanhola, com menu que muda o tempo todo",
            url: maps("Bistro Nereta Cadaques"),
          },
        ],
      },
    ],
  },
  {
    id: "tossa",
    kicker: "Costa Brava",
    name: "Tossa de Mar",
    note:
      "Vila murada à beira-mar, com um castelo medieval sobre o Mediterrâneo. Fica mais ao sul da costa, pertinho de onde vamos casar.",
    photo: "/fotos/guia/tossa.jpg",
    photoAlt: "Cala rochosa de águas transparentes na Costa Brava",
    groups: [
      {
        label: "Praias e calas",
        places: [
          { name: "Cala Bona", url: maps("Cala Bona Tossa de Mar") },
          { name: "Cala Pola", url: maps("Cala Pola Tossa de Mar") },
        ],
      },
      {
        label: "Onde comer e beber",
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
  {
    id: "outros",
    kicker: "Para esticar a viagem",
    name: "Outros locais",
    note:
      "Alguns lugares além da costa que valem a viagem — ótimos para esticar uns dias antes ou depois do casamento.",
    photo: "/fotos/guia/emporda-vinho.jpg",
    photoAlt: "Vinhedos e campo do Empordà ao entardecer",
    groups: [
      {
        label: "Rota do vinho · Empordà",
        intro:
          "Entre os Pirineus e o Mediterrâneo, o Empordà tem uma tradição vinícola única — vale reservar uma tarde de degustação.",
        places: [
          {
            name: "Celler Perelada",
            note: "Uma vinícola linda, com almoço incrível e um hotel ótimo para descansar depois do casamento",
            url: "https://perelada.com/en/home",
          },
          {
            name: "Finca Bell-lloc",
            note: "Degustação completa e experiência gastronômica, com opção de hospedagem · Baix Empordà",
            url: maps("Finca Bell-lloc Palamos"),
          },
          {
            name: "La Vinyeta",
            note: "Vinícola renomada, com ampla gama de degustações catalãs · Alt Empordà",
            url: maps("La Vinyeta Mollet de Peralada"),
          },
          {
            name: "Martin Faixó",
            note: "Família de Cadaqués com 15 ha de vinhedos; hospedagem no Mas Perafita",
            url: maps("Martin Faixo Cadaques"),
          },
          {
            name: "Eccocivi",
            note: "Vinícola jovem e eco-friendly, com degustações numa masia tradicional",
            url: maps("Eccocivi winery Emporda"),
          },
          {
            name: "Sota els Àngels",
            note: "Vinhos biodinâmicos de mínima intervenção, na serra de Les Gavarres",
            url: maps("Sota els Angels winery"),
          },
          {
            name: "Mas Comtal",
            note: "40 ha de vinhedos orgânicos — vinhos e espumantes artesanais",
            url: maps("Mas Comtal winery"),
          },
        ],
      },
      {
        label: "Girona",
        intro:
          "Cidade medieval linda, com o centro histórico super preservado, a catedral e as casas coloridas à beira do rio Onyar. Perfeita para um passeio de um dia.",
        places: [
          {
            name: "Safo Bar",
            note: "Comida orgânica e sazonal, com ótimos vinhos naturais — no centro de Girona",
            url: maps("Safo Bar Girona"),
          },
        ],
      },
      {
        label: "Calas mais escondidas",
        intro: "Para quem quiser fugir das multidões — o acesso costuma ser a pé, mas vale cada passo.",
        places: [
          { name: "Cala El Crit", note: "Enseada cheia de lendas — a beleza compensa o acesso desafiador", url: maps("Cala El Crit Costa Brava") },
          {
            name: "Cala Estreta",
            note: "Cercada de pinheiros e falésias; o acesso é a pé e vale a caminhada",
            url: maps("Cala Estreta Costa Brava"),
          },
          { name: "Cala Canyers", note: "Pequena praia reservada perto de Palamós", url: maps("Cala Canyers Palamos") },
          {
            name: "Platja del Pi",
            note: "Faixa de 250 m escondida numa enseada · Platja d'Aro",
            url: maps("Platja del Pi Platja d'Aro"),
          },
        ],
      },
    ],
  },
];

function PlaceGrid({ places }: { places: Place[] }) {
  return (
    <div className="ij-rest-grid">
      {places.map((p) => (
        <div key={p.name} className="ij-rest-item">
          {p.city && <span className="ij-guide-area">{p.city}</span>}
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
            {p.city && <span className="ij-guide-area">{p.city}</span>}
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

function RegionSection({ region, flip }: { region: Region; flip: boolean }) {
  return (
    <section id={region.id} className={`ij-section ij-guide-region${flip ? " ij-section-warm" : ""}`}>
      <ScrollReveal asChild>
        <div className={`ij-guide-region-head${flip ? " is-flip" : ""}`}>
          <figure className="ij-guide-region-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={region.photo} alt={region.photoAlt} loading="lazy" />
          </figure>
          <div className="ij-guide-region-intro">
            <span className="ij-section-eyebrow">{region.kicker}</span>
            <h2>{region.name}</h2>
            <p className="ij-guide-region-note">{region.note}</p>
          </div>
        </div>
      </ScrollReveal>

      <div className="ij-guide-region-groups">
        {region.groups.map((g) => (
          <ScrollReveal asChild key={g.label}>
            <div className="ij-dest-group">
              <div className="ij-dest-group-label">{g.label}</div>
              {g.intro && <p className="ij-tip-text">{g.intro}</p>}
              {g.places.length > 0 &&
                (g.variant === "list" ? <PlaceList places={g.places} /> : <PlaceGrid places={g.places} />)}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

export default function GuiaCostaBravaPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Header />
      <main>
        {/* ── Capa ── */}
        <section className="ij-guide-hero">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="ij-guide-hero-bg" src="/fotos/inspiracao/aiguablava.jpg" alt="Costa Brava" />
          <div className="ij-guide-hero-inner">
            <span className="ij-guide-hero-kicker">Slow travel guide</span>
            <h1 className="ij-guide-hero-title">
              Guia de viagem
              <em>Costa Brava</em>
            </h1>
          </div>
        </section>

        {/* ── Introdução ── */}
        <section className="ij-section">
          <ScrollReveal asChild>
            <div className="ij-guide-intro">
              <p>
                No nordeste da Catalunha, a Costa Brava é famosa pelo litoral acidentado, pelas praias escondidas e
                pelas vilas de pescadores encantadoras. Águas cristalinas, paisagens verdes e vilarejos medievais que
                convivem com o luxo tranquilo do Mediterrâneo.
              </p>
              <p>
                Este é o nosso passaporte para a região, organizado por lugar: as praias que amamos, hotéis lindos,
                restaurantes queridos e a rota do vinho no Empordà.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* ── Dicas para a alta temporada ── */}
        <section className="ij-section ij-section-warm">
          <div className="ij-guide-band">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/fotos/guia/alta-temporada.jpg" alt="Terraço ao sol na Costa Brava" loading="lazy" />
          </div>
          <ScrollReveal asChild>
            <div className="ij-guide-block-head">
              <span className="ij-section-eyebrow">Antes de sair</span>
              <h2>Dicas para a alta temporada</h2>
              <p className="ij-guide-block-intro">
                Julho é verão cheio na Costa Brava. Algumas dicas para aproveitar melhor cada dia:
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal asChild>
            <ul className="ij-guide-tips">
              {TIPS.map((t, i) => (
                <li key={i}>
                  <span className="ij-guide-tips-n">{String(i + 1).padStart(2, "0")}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </section>

        {/* ── Regiões ── */}
        {REGIONS.map((region, i) => (
          <RegionSection key={region.id} region={region} flip={i % 2 === 1} />
        ))}

        {/* ── Fecho (sem rodapé do site) ── */}
        <section className="ij-section">
          <ScrollReveal asChild>
            <div className="ij-guide-outro">
              <p className="ij-guide-outro-note">
                Todos os pontos abrem no Google Maps. Se tiverem tempo, cheguem antes ou fiquem mais uns dias — vale
                cada praia e cada vila medieval.
              </p>
              <div className="ij-guide-outro-links">
                <a
                  href="https://www.instagram.com/ilovecostabrava"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ij-stay-link"
                >
                  @ilovecostabrava
                </a>
              </div>
              <Link href="/" className="ij-guide-back">
                ← Voltar ao site do casamento
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </main>
    </div>
  );
}

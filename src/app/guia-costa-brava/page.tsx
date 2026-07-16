import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Guia de viagem · Costa Brava · Isabele & João",
  description:
    "Nosso guia slow travel da Costa Brava: praias favoritas, hotéis, restaurantes e a rota do vinho no Empordà.",
};

function maps(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

interface Place {
  name: string;
  area?: string;
  note: string;
  url: string;
}

// ── Dicas para a alta temporada (essential tips) ──
const TIPS: string[] = [
  "Chegar à praia depois das 10h pode ser complicado — enche bastante.",
  "Leve um lanche se for almoçar cedo, ou espere passar o pico do almoço para comer nos restaurantes.",
  "Mantenha-se hidratado — o verão mediterrâneo é quente.",
  "Não planeje demais. Deixe espaço no roteiro e seja flexível com os horários.",
  "Sempre reserve mesa para o jantar, para não ficar na mão.",
  "As praias mais famosas ficam difíceis de acessar de carro entre 10h e 14h por causa do trânsito.",
  "Boa paella não se encontra em qualquer lugar — vale procurar as indicadas.",
  "Visite as praias mais cheias no fim da tarde: sorvete e pôr do sol com bem menos gente.",
  "Alugar uma bike ou e-bike no verão facilita muito a locomoção entre as calas.",
];

// ── Onde ficar (stay) ──
const HOTELS: Place[] = [
  { name: "La Bionda", area: "Begur", note: "Boutique estiloso no coração de Begur.", url: maps("La Bionda Begur") },
  { name: "Can Bassa", area: "Begur", note: "Boutique restaurado com quartos charmosos.", url: maps("Can Bassa Begur") },
  { name: "Hotel Aiguaclara", area: "Begur", note: "Casa do século XIX no centro histórico de Begur.", url: maps("Hotel Aiguaclara Begur") },
  { name: "Hotel Sant Roc", area: "Calella de Palafrugell", note: "Vistas de tirar o fôlego sobre o Mediterrâneo.", url: maps("Hotel Sant Roc Calella de Palafrugell") },
  { name: "Can Mascot", area: "Palafrugell", note: "Hotel eco-friendly no coração de Palafrugell.", url: maps("Can Mascot Palafrugell") },
  { name: "Arkhé Hotel Boutique", area: "Pals", note: "Hotel com foco em bem-estar, tranquilo e elegante.", url: maps("Arkhe Hotel Boutique Pals") },
  { name: "Casa Talaia", area: "Cadaqués", note: "Casa de temporada espaçosa, perfeita para grupos.", url: maps("Casa Talaia Cadaques") },
  { name: "Casa Nereta", area: "Cadaqués", note: "Boutique descolado, com clima descontraído.", url: maps("Casa Nereta Cadaques") },
  { name: "Mas de Torrent", area: "Girona", note: "Refúgio de luxo no campo, entre vinhedos e oliveiras.", url: maps("Mas de Torrent Girona") },
];

// ── Onde comer e beber (eat) ──
const EATS: Place[] = [
  { name: "Margarita", area: "Calella de Palafrugell", note: "Comida incrível, cozinha inventiva e um interior lindo.", url: maps("Margarita Calella de Palafrugell") },
  { name: "Clara", area: "Begur", note: "Point descolado de Begur, sabores deliciosos e ambiente aconchegante.", url: maps("Clara Restaurant Begur") },
  { name: "Batalla", area: "Cadaqués", note: "Joia à beira-mar, frutos do mar fresquíssimos e tuna steak.", url: maps("Batalla Cadaques") },
  { name: "Bistro Nereta", area: "Cadaqués", note: "Fusão nipo-espanhola, com menu que muda o tempo todo.", url: maps("Bistro Nereta Cadaques") },
  { name: "Sol i Mar", note: "Uma delícia à beira-mar para os amantes de frutos do mar.", url: maps("Sol i Mar Costa Brava restaurant") },
  { name: "UM Pals", area: "Platja d'el Grau", note: "Restaurante charmoso à beira-mar, com peixe e frutos do mar fresquíssimos.", url: maps("UM Pals Platja del Grau") },
  { name: "Sol Blanc", area: "Pals", note: "Clima de casa de fazenda entre os arrozais de Pals, com jantar gastronômico.", url: maps("Sol Blanc Pals") },
  { name: "És! Carxofa", note: "Restaurante no campo, ideal para paella e petiscos variados.", url: maps("Es Carxofa Costa Brava") },
  { name: "Casa Juanita", note: "Sabores tradicionais e peixe na brasa.", url: maps("Casa Juanita Costa Brava") },
  { name: "Funky Pizza", area: "Pals", note: "Pizza de forno a lenha, vinhos naturais e café especial.", url: maps("Funky Pizza Pals") },
  { name: "Grava Pals", area: "Pals", note: "Perfeito para café da manhã e café especial.", url: maps("Grava Pals") },
  { name: "Safo Bar", note: "Comida orgânica e sazonal, com ótimos vinhos naturais.", url: maps("Safo Bar Costa Brava") },
  { name: "C-Roack", note: "Clima ao ar livre descolado para os drinks da noite.", url: maps("C-Roack Costa Brava") },
  { name: "Fitzroy Café", area: "Begur", note: "Café especial em Begur, aberto de abril até o fim do verão.", url: maps("Fitzroy Cafe Begur") },
  { name: "Sabana Café", area: "Palafrugell", note: "Café aconchegante, perfeito para um café da manhã tardio.", url: maps("Sabana Cafe Palafrugell") },
  { name: "Xurreria La Family", note: "Para churros deliciosos a qualquer hora.", url: maps("Xurreria La Family Costa Brava") },
];

// ── Praias (beaches) ──
const BEACHES: Place[] = [
  { name: "Aiguablava", area: "Begur", note: "Famosa pelas águas azul-turquesa — uma das joias da Costa Brava.", url: maps("Platja Aiguablava Begur") },
  { name: "Sa Tuna", area: "Begur", note: "Vila de pescadores encantadora, com água transparente e bares de frente para o mar.", url: maps("Cala Sa Tuna Begur") },
  { name: "Aiguafreda", area: "Begur", note: "Pequena enseada naturalmente reservada, protegida pela encosta.", url: maps("Aiguafreda Begur") },
  { name: "Platja Fonda", area: "Begur", note: "Joia escondida entre falésias rochosas, longe das multidões.", url: maps("Platja Fonda Begur") },
  { name: "El Canadell", area: "Calella de Palafrugell", note: "Praia charmosa e familiar, a verdadeira essência da Costa Brava.", url: maps("El Canadell Calella de Palafrugell") },
  { name: "Llafranc", area: "Palafrugell", note: "Areia macia em frente a uma vila encantadora, com águas cristalinas.", url: maps("Llafranc Palafrugell") },
  { name: "Fornells", area: "Begur", note: "Enseada linda, conectada às praias vizinhas pelo Camí de Ronda.", url: maps("Fornells Begur") },
  { name: "Cala Canyers", area: "Palamós", note: "Pequena praia reservada perto do vilarejo de Palamós.", url: maps("Cala Canyers Palamos") },
  { name: "Platja del Pi", area: "Platja d'Aro", note: "Faixa de 250 m escondida numa enseada entre rochas e vegetação exuberante.", url: maps("Platja del Pi Platja d'Aro") },
  { name: "Cala El Crit", note: "Enseada cheia de lendas — a beleza compensa o acesso desafiador.", url: maps("Cala El Crit Costa Brava") },
  { name: "Cala Estreta", note: "Praia reservada cercada de pinheiros e falésias; o acesso é a pé e vale a caminhada.", url: maps("Cala Estreta Costa Brava") },
];

// ── Rota do vinho · Empordà (wine route) ──
const WINE: Place[] = [
  { name: "Finca Bell-lloc", area: "Baix Empordà", note: "Degustação completa e experiência gastronômica, com opção de hospedagem.", url: maps("Finca Bell-lloc Palamos") },
  { name: "La Vinyeta", area: "Alt Empordà", note: "Vinícola renomada, com uma ampla gama de experiências de degustação catalãs.", url: maps("La Vinyeta Mollet de Peralada") },
  { name: "Martin Faixó", area: "Cadaqués", note: "Família de Cadaqués com 15 hectares de vinhedos; hospedagem no Mas Perafita.", url: maps("Martin Faixo Cadaques") },
  { name: "Eccocivi", note: "Vinícola jovem e eco-friendly, com degustações numa masia catalã tradicional.", url: maps("Eccocivi winery Emporda") },
  { name: "Sota els Àngels", note: "Vinhos biodinâmicos de mínima intervenção, na serra de Les Gavarres.", url: maps("Sota els Angels winery") },
  { name: "Mas Comtal", note: "Propriedade familiar com 40 hectares de vinhedos orgânicos — vinhos e espumantes artesanais.", url: maps("Mas Comtal winery") },
];

function PlaceGrid({ places }: { places: Place[] }) {
  return (
    <div className="ij-rest-grid">
      {places.map((p) => (
        <div key={p.name} className="ij-rest-item">
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="ij-rest-name ij-rest-link">
            {p.name}
          </a>
          {p.area && <span className="ij-guide-area">{p.area}</span>}
          <div className="ij-rest-desc">{p.note}</div>
        </div>
      ))}
    </div>
  );
}

function GuideSection({
  id,
  kicker,
  title,
  intro,
  places,
}: {
  id: string;
  kicker: string;
  title: string;
  intro: string;
  places: Place[];
}) {
  return (
    <ScrollReveal asChild>
      <section id={id} className="ij-guide-block">
        <div className="ij-guide-block-head">
          <span className="ij-section-eyebrow">{kicker}</span>
          <h2>{title}</h2>
          <p className="ij-guide-block-intro">{intro}</p>
        </div>
        <PlaceGrid places={places} />
      </section>
    </ScrollReveal>
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
            <p className="ij-guide-hero-sub">curadoria de Isabele <span className="amp">&amp;</span> João</p>
          </div>
        </section>

        {/* ── Introdução ── */}
        <section className="ij-section ij-section-warm">
          <ScrollReveal asChild>
            <div className="ij-guide-intro">
              <p>
                No nordeste da Catalunha, a Costa Brava é famosa pelo litoral acidentado, pelas praias escondidas e
                pelas vilas de pescadores encantadoras. É um convite a quem busca uma mistura de beleza natural,
                história e cultura — águas cristalinas, paisagens verdes e vilarejos medievais que convivem com o luxo
                tranquilo do Mediterrâneo.
              </p>
              <p>
                Este é o nosso passaporte para a região: as praias que amamos, hotéis lindos, restaurantes queridos e
                experiências de vinho no famoso Empordà. Vão com calma — a Costa Brava se descobre devagar.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* ── Dicas ── */}
        <section className="ij-section">
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

        <div className="ij-section-warm" style={{ paddingInline: "var(--pad-x)" }}>
          {/* ── Onde ficar ── */}
          <GuideSection
            id="ficar"
            kicker="Stay"
            title="Onde ficar"
            intro="Hotéis boutique e casas para todos os estilos, de Begur a Cadaqués."
            places={HOTELS}
          />
          {/* ── Onde comer ── */}
          <GuideSection
            id="comer"
            kicker="Eat"
            title="Onde comer e beber"
            intro="Dos frutos do mar à beira-mar aos vinhos naturais no fim da tarde."
            places={EATS}
          />
          {/* ── Praias ── */}
          <GuideSection
            id="praias"
            kicker="Beach"
            title="Praias e calas"
            intro="As enseadas que mais gostamos — algumas famosas, outras escondidas."
            places={BEACHES}
          />
          {/* ── Rota do vinho ── */}
          <GuideSection
            id="vinho"
            kicker="Wine route"
            title="Rota do vinho · Empordà"
            intro="Entre os Pirineus e o Mediterrâneo, a região do Empordà tem uma tradição vinícola única."
            places={WINE}
          />
        </div>

        {/* ── Rodapé do guia ── */}
        <section className="ij-section">
          <ScrollReveal asChild>
            <div className="ij-guide-outro">
              <p className="ij-guide-outro-note">
                Todos os pontos abrem no Google Maps. Se tiverem tempo, cheguem antes ou fiquem mais uns dias — vale
                cada praia e cada vila medieval.
              </p>
              <div className="ij-guide-outro-links">
                <Link href="/#tips" className="ij-btn-solid">
                  Ver as dicas do casamento
                </Link>
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
      <Footer />
    </div>
  );
}

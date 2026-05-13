import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Welcome() {
  return (
    <section id="welcome" className="ij-section ij-section-paper">
      <div className="ij-center">
        <ScrollReveal delay={1}>
          <div className="ij-section-header">
            <h2>Sejam muito bem-vindos</h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <p className="ij-prose">
            É com muita alegria que convidamos vocês para nosso casamento na
            Costa Brava, Espanha. É um dos lugares onde mais nos sentimos em
            casa — e onde vivemos momentos inesquecíveis com amigos e família ao
            longo dos nossos 8 anos juntos.
          </p>
          <p className="ij-prose ij-prose-strong">
            Vamos fazer festa, comer bem e beber muito vinho juntos!
          </p>
        </ScrollReveal>
        <Image
          src="/assets/monogram-olive.png"
          alt=""
          width={48}
          height={48}
          className="ij-mono-accent"
          style={{ marginTop: 32 }}
        />
      </div>
    </section>
  );
}

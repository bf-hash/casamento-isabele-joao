"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { GIFTS, formatBRL } from "@/lib/gifts";

export default function Gifts() {
  return (
    <section id="gifts" className="ij-section ij-section-paper">
      <ScrollReveal asChild>
        <header className="ij-gifts-head">
          <div>
            <h2>Presentes</h2>
          </div>
          <p className="ij-gifts-intro">
            A presença de vocês já é o melhor presente do mundo. Mas caso queiram dar algo, escolhemos uma lista só
            com o que somos melhor fazendo (comer, beber e viajar).
          </p>
        </header>
      </ScrollReveal>

      <ScrollReveal className="ij-gifts-grid">
        {GIFTS.map((gift) => (
          <div className="ij-gift-card" key={gift.id}>
            {gift.image ? (
              <div className="ij-gift-card-image">
                <Image src={gift.image} alt={gift.name} width={300} height={300} />
              </div>
            ) : (
              <div className="ij-gift-card-emoji">{gift.emoji}</div>
            )}
            <div className="ij-gift-card-body">
              <h3 className="ij-gift-card-name">{gift.name}</h3>
              <p className="ij-gift-card-price">
                {gift.custom ? "Escolha o valor" : formatBRL(gift.price)}
              </p>
              <div className="ij-gift-card-actions">
                <Link
                  href={`/presente/${gift.id}`}
                  className="ij-gift-btn ij-gift-btn--want"
                >
                  Eu quero
                </Link>
              </div>
            </div>
          </div>
        ))}
      </ScrollReveal>
    </section>
  );
}

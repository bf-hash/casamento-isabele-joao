import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Obrigado · Presentes · Isabele & João",
};

export default function GiftThankYouPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Header />
      <main>
        <section className="ij-section ij-section-warm ij-checkout-section">
          <div className="ij-checkout-form" style={{ margin: "0 auto" }}>
            <div className="ij-rsvp-step ij-rsvp-step--done">
              <div className="ij-rsvp-done-icon">&#10003;</div>
              <h3 className="ij-rsvp-step-title">Obrigado de coração!</h3>
              <p className="ij-rsvp-step-desc">
                Recebemos o seu carinho. Assim que o pagamento for confirmado,
                ele aparecerá para os noivos {"❤️"}
              </p>
              <Link href="/#gifts" className="ij-rsvp-back" style={{ marginTop: 16 }}>
                Voltar aos presentes
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

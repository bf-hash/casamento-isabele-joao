import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Program from "@/components/Program";
import HowToGet from "@/components/HowToGet";
import Tips from "@/components/Tips";
import Gifts from "@/components/Gifts";
import RSVP from "@/components/RSVP";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Header />
      <main>
        <div className="ij-hero-welcome">
          <div className="ij-hero-art" aria-hidden="true" />
          <Hero />
        </div>
        <Program />
        <HowToGet />
        <Tips />
        <Gifts />
        <RSVP />
      </main>
    </div>
  );
}

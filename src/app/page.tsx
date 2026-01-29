import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Convite from "@/components/Convite";
import Welcome from "@/components/Welcome";
import Tema from "@/components/Tema";
import Program from "@/components/Program";
import HowToGet from "@/components/HowToGet";
import Hospedagem from "@/components/Hospedagem";
import Tips from "@/components/Tips";
import Gifts from "@/components/Gifts";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <Convite />
        <section id="welcome">
          <Welcome />
        </section>
        <Tema />
        <section id="program">
          <Program />
        </section>
        <section id="howtoget">
          <HowToGet />
        </section>
        <Hospedagem />
        <section id="tips">
          <Tips />
        </section>
        <section id="gifts">
          <Gifts />
        </section>
        <section id="rsvp">
          <RSVP />
        </section>
      </main>
      <Footer />
    </>
  );
}

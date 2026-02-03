import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Program from "@/components/Program";
import HowToGet from "@/components/HowToGet";
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
        <section id="welcome">
          <Welcome />
        </section>
        <section id="program">
          <Program />
        </section>
        <section id="howtoget">
          <HowToGet />
        </section>
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

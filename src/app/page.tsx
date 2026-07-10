import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Program from "@/components/Program";
import HowToGet from "@/components/HowToGet";
import Tips from "@/components/Tips";
import Gifts from "@/components/Gifts";
import Inspire from "@/components/Inspire";
import RSVP from "@/components/RSVP";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Header />
      <main>
        <Hero />
        <Welcome />
        <Program />
        <HowToGet />
        <Tips />
        <Gifts />
        <Inspire />
        <RSVP />
      </main>
    </div>
  );
}

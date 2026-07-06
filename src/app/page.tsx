import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Program from "@/components/Program";
import HowToGet from "@/components/HowToGet";
import Tips from "@/components/Tips";
import Gifts from "@/components/Gifts";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Header />
      <main>
        <Hero />
        <SectionDivider />
        <Welcome />
        <SectionDivider />
        <Program />
        <HowToGet />
        <SectionDivider />
        <Tips />
        <Gifts />
        <RSVP />
      </main>
      <Footer />
    </div>
  );
}

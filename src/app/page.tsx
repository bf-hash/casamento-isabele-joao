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
    <div style={{ minHeight: "100vh", background: "#FFFFFF" }}>
      <Header />
      <main>
        <Hero />
        <Welcome />
        <Program />
        <HowToGet />
        <Tips />
        <Gifts />
        <RSVP />
      </main>
      <Footer />
    </div>
  );
}

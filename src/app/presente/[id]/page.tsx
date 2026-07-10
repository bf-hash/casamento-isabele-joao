import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GiftCheckout from "@/components/GiftCheckout";
import { GIFTS, getGift } from "@/lib/gifts";

export function generateStaticParams() {
  return GIFTS.map((gift) => ({ id: gift.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const gift = getGift(params.id);
  if (!gift) return { title: "Presente · Isabele & João" };
  return {
    title: `${gift.name} · Presentes · Isabele & João`,
    description: `Presenteie os noivos com ${gift.name}.`,
  };
}

export default function GiftPage({ params }: { params: { id: string } }) {
  const gift = getGift(params.id);
  if (!gift) notFound();

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Header />
      <main>
        <GiftCheckout gift={gift} />
      </main>
      <Footer />
    </div>
  );
}

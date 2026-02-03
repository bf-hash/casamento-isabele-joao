import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Italianno,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const italianno = Italianno({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Isabele & João | Casamento",
  description:
    "01.07.2027 — Convent de Blanes, Espanha. Costa Brava: Tossa de Mar, Begur e Palafrugell. Sejam muito bem-vindos!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${italianno.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen font-serif">{children}</body>
    </html>
  );
}

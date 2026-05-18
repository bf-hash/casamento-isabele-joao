import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Pinyon_Script } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Isabele & João | Casamento",
  description:
    "30|06 a 03|07|2027 — Convent de Blanes, Costa Brava, Espanha.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable} ${pinyon.variable}`}>
      <body className="min-h-screen font-display text-ink antialiased" style={{ background: "#FFFFFF" }}>
        {children}
      </body>
    </html>
  );
}

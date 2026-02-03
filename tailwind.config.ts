import type { Config } from "tailwindcss";

/**
 * Costa Brava Wedding Mood Board — Verão Mediterrâneo
 * Paleta: base mediterrânea com acentos de rosa, coral e lavanda.
 * Tons quentes (amarelos, laranjas) + românticos (rosas, pêssegos) + frescos (lavanda, verde sálvia).
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      colors: {
        // Neutros mediterrâneos (base)
        marfim: "#FEFAE0",    // Pantone 7499 C — fundo principal
        "bege-areia": "#E8C5A5", // Pantone 719 C — backgrounds alternados
        caramelo: "#D4A574",   // Pantone 728 C
        // Cores quentes
        "amarelo-sol": "#F5C842",   // Pantone 123 C
        "laranja-terracota": "#FF8C42", // Pantone 1495 C
        coral: "#FF6B6B",     // Pantone 178 C — acentos vibrantes
        terracotta: "#D4705B", // Pantone 7598 C — botões, links
        // Cores românticas
        "rosa-garden": "#E8A0A0",   // Pantone 693 C
        pessego: "#FFD4B8",   // Pantone 162 C
        // Cores frescas
        lavanda: "#B4A7D6",   // Pantone 2567 C
        "verde-oliva": "#7A9B76",   // Pantone 5625 C
        "verde-salvia": "#A8B89F",  // Pantone 5595 C
        // Texto e estrutura
        charcoal: "#2C2C2C",
        navy: "#192956", // Ícones hand-drawn (referência menu)
        // Legacy aliases (para compatibilidade)
        cream: "#FEFAE0",
        sand: "#E8C5A5",
        sage: "#A8B89F",
        olive: "#7A9B76",
      },
    },
  },
  plugins: [],
};
export default config;

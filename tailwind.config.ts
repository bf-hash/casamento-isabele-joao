import type { Config } from "tailwindcss";

/**
 * Summer Citrus Wedding Mood Board
 * Paleta: cítricos vibrantes — grapefruit, clementine, lemon drop, chartreuse.
 * Tons quentes e frescos sobre base creme suave.
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
        display: ["var(--font-display)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
      },
      colors: {
        // Summer Citrus — cores principais
        grapefruit: "#ED7169",
        clementine: "#F1722E",
        "lemon-drop": "#F1DE78",
        chartreuse: "#BCC41C",
        emberglow: "#E27A5F", // Pantone 17-1547 TCX

        // Neutros (base creme cítrica)
        marfim: "#FFF8E7",        // creme limão suave — fundo principal
        "bege-areia": "#F5E6CC",  // areia clara — backgrounds alternados
        caramelo: "#E8B976",
        pessego: "#FFD4B8",

        // Aliases mapeados para Summer Citrus (compatibilidade com componentes existentes)
        terracotta: "#F1722E",        // = clementine (links, botões, divisores)
        coral: "#ED7169",             // = grapefruit (acentos, hover)
        "amarelo-sol": "#F1DE78",     // = lemon drop
        "laranja-terracota": "#F1722E", // = clementine
        "rosa-garden": "#ED7169",     // = grapefruit
        lavanda: "#F1DE78",           // remapeado p/ lemon drop
        "verde-oliva": "#BCC41C",     // = chartreuse
        "verde-salvia": "#BCC41C",    // = chartreuse

        // Texto e estrutura
        charcoal: "#2C2C2C",
        navy: "#192956",

        // Legacy aliases
        cream: "#FFF8E7",
        sand: "#F5E6CC",
        sage: "#BCC41C",
        olive: "#BCC41C",
      },
    },
  },
  plugins: [],
};
export default config;

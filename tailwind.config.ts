import type { Config } from "tailwindcss";

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
        cream: "#F8F5F0",
        sand: "#E8E2D9",
        stone: "#C4BEB5",
        charcoal: "#2C2C2C",
        lemon: "#E5D44C",
        rose: "#C9A9A6",
        olive: "#7D8B5E",
        sage: "#9CAF88",
        terracotta: "#C17F59",
        orange: "#E07C4A",
      },
    },
  },
  plugins: [],
};
export default config;

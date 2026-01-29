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
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      colors: {
        cream: "#F8F5F0",
        sage: "#9CAF88",
        terracotta: "#C17F59",
        charcoal: "#2C2C2C",
        sand: "#E8E2D9",
      },
    },
  },
  plugins: [],
};
export default config;

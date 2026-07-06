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
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-jost)", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
      },
      colors: {
        bg: "#FAFAF8",
        cream: "#F3EFE7",
        coastal: "#5B86C6",
        "coastal-deep": "#3D6BAF",
        ink: "#34302B",
        "ink-soft": "#6E665C",
        "ink-quiet": "#A39A8D",
      },
      letterSpacing: {
        eyebrow: "0.28em",
        display: "0.18em",
        "display-tight": "0.06em",
      },
      borderRadius: {
        sm: "2px",
        md: "6px",
        lg: "12px",
        xl: "24px",
        pill: "999px",
      },
      boxShadow: {
        1: "0 1px 2px 0 rgb(60 50 30 / 0.06)",
        2: "0 8px 24px -8px rgb(60 50 30 / 0.12)",
        3: "0 20px 60px -20px rgb(60 50 30 / 0.20)",
      },
      maxWidth: {
        content: "1120px",
        narrow: "720px",
        prose: "600px",
      },
    },
  },
  plugins: [],
};
export default config;

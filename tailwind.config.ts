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
        display: ["var(--font-cormorant)", "EB Garamond", "Garamond", "serif"],
        body: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
      },
      colors: {
        olive: "#5C3D2E",
        "olive-deep": "#3E2518",
        "olive-soft": "#9B7A68",
        "olive-tint": "#F2EAE4",
        terracotta: "#D4743A",
        "terracotta-deep": "#B85A28",
        caramel: "#C4962A",
        sun: "#f1de78",
        sea: "#A2C2BD",
        sky: "#DDECEC",
        paper: "#F6F1E7",
        "paper-warm": "#EDE5D3",
        marfim: "#FBF8F1",
        ink: "#2A2A22",
        "ink-soft": "#5C5A4E",
        "ink-quiet": "#8C8A7E",
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

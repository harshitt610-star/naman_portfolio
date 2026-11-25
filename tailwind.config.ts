import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0B",
        surface: "#111114",
        card: "#060607",
        gold: {
          DEFAULT: "#E8A850",
          hover: "#F2BC6B",
          dark: "#A66D26",
          subtle: "rgba(232, 168, 80, 0.1)",
        },
        border: {
          DEFAULT: "#26262B",
          light: "#3A3A42",
        },
        body: "#A8A29A",
      },
      fontFamily: {
        serif: ["var(--font-marcellus)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.3em",
      },
      borderRadius: {
        DEFAULT: "2px",
        sm: "1px",
        md: "2px",
      },
    },
  },
  plugins: [],
};
export default config;

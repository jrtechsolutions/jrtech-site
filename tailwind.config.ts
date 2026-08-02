import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#EEF2F5",
        ink: {
          DEFAULT: "#16253D",
          2: "#3D4E63",
        },
        signal: "#E8720C",
        dimension: "#5A6B80",
        border: "#D4DCE3",
        connector: "#C7D3DD",
        success: "#1E7A46",
        error: "#C0392B",
        warning: "#B5860F",
        "cta-muted": "#B9C2CE",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        heading: ["var(--font-archivo-expanded)", "sans-serif"],
        subheading: ["var(--font-archivo)", "sans-serif"],
        body: ["var(--font-public-sans)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
        sans: ["var(--font-public-sans)", "sans-serif"],
      },
      maxWidth: {
        container: "1520px",
      },
    },
  },
  plugins: [],
};
export default config;

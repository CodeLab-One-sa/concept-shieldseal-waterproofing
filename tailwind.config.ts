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
        canvas:      "#FFFFFF",
        "canvas-s":  "#F3F5F7",
        dark:        "#0C0E12",
        "dark-s":    "#13161C",
        teal:        "#00AAC2",
        "teal-l":    "#00BED8",
        "teal-d":    "#007A8E",
        "on-teal":   "#062830",
        ink:         "#0C0E12",
        "ink-mid":   "#374151",
        muted:       "#6B7280",
        line:        "#E5E7EB",
        "line-d":    "#D1D5DB",
        "line-teal": "rgba(0,170,194,0.22)",
      },
      fontFamily: {
        // Inter: clean body text — contrasts intentionally with the geometric display font
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        // Exo 2: geometric, slightly condensed, technical — matches logo proportions
        display: ["var(--font-exo2)", "system-ui", "sans-serif"],
        // Courier New: monospace technical labels — precision aesthetic
        mono:    ["'Courier New'", "Courier", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;

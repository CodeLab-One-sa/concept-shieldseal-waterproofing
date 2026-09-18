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
        // Light backgrounds
        canvas:     "#FFFFFF",
        "canvas-s": "#F3F5F7",
        // Dark section (contact + footer)
        dark:       "#0C0E12",
        "dark-s":   "#13161C",
        // Brand
        teal:       "#00AAC2",
        "teal-l":   "#00BED8",
        "teal-d":   "#007A8E",
        "on-teal":  "#062830",
        // Text
        ink:        "#0C0E12",
        "ink-mid":  "#374151",
        muted:      "#6B7280",
        // Borders
        line:       "#E5E7EB",
        "line-d":   "#D1D5DB",
        "line-teal":"rgba(0,170,194,0.22)",
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-barlow)", "system-ui", "sans-serif"],
        mono:    ["'Courier New'", "Courier", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;

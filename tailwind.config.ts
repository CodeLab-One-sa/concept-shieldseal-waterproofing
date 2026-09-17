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
        ink:    "#090A0A",
        ink2:   "#131517",
        ink3:   "#1C2025",
        teal:   "#00AAC2",
        "teal-l": "#00BDDA",
        "teal-d": "#007A8E",
        "on-teal": "#062830",
        muted:  "#828D96",
        border: "rgba(0,170,194,0.14)",
        "border-s": "rgba(0,170,194,0.32)",
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

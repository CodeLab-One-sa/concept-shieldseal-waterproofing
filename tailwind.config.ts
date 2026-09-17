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
        charcoal:  "#1A1D22",
        surface:   "#22262D",
        surface2:  "#2A2F38",
        orange:    "#E06B1A",
        "orange-light": "#F07828",
        "orange-dark":  "#C45C10",
        warm:      "#F0EDE6",
        muted:     "#7A8296",
        border:    "rgba(255,255,255,0.07)",
      },
      fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"] },
      keyframes: {
        "fade-up": { from: { opacity: "0", transform: "translateY(16px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.3" } },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        blink: "blink 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;

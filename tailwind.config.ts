import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink:     "#0E1012",
        ink2:    "#171A1D",
        ink3:    "#1F2428",
        amber:   "#E07820",
        "amber-light": "#F08830",
        "amber-dark":  "#B85F10",
        cream:   "#F4F0E8",
        "cream-dark":  "#E8E2D6",
        stone:   "#6B6558",
        border:  "rgba(255,255,255,0.07)",
        "border-cream": "rgba(0,0,0,0.10)",
      },
      fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;

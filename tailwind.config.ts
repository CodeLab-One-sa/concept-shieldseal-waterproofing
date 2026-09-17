import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink:    "#0A0A0A",
        ink2:   "#111318",
        ink3:   "#181C24",
        cyan:   "#00B4C6",
        "cyan-l":"#00D4E8",
        "cyan-d":"#007A88",
        border: "rgba(0,180,198,0.14)",
        "border-s":"rgba(0,180,198,0.30)",
        muted:  "#5A6478",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["'Courier New'", "Courier", "monospace"],
      },
      keyframes: {
        "water-rise": {
          from: { clipPath: "inset(100% 0 0 0 round 50%)" },
          to:   { clipPath: "inset(42% 0 0 0 round 50%)" },
        },
        "fade-up": { from: { opacity:"0", transform:"translateY(14px)" }, to: { opacity:"1", transform:"none" } },
      },
      animation: {
        "water-rise": "water-rise 1.8s cubic-bezier(0.34,1.2,0.64,1) 0.4s both",
        "fade-up":    "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;

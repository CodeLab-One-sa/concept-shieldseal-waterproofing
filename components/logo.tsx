/**
 * ShieldSeal logo mark — SVG recreation from the ChatGPT-generated PNG.
 * Teal shield (#00AAC2), white left divider, white-outer/teal-inner water drop.
 * Works on any background colour.
 */
export function LogoMark({ size = 40, className = "" }: { size?: number; className?: string }) {
  const h = Math.round(size * 1.12);
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 88 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Teal shield body */}
      <path
        d="M44 96 C15 82 5 62 5 44 L5 20 C5 11 12 5 21 5 L67 5 C76 5 83 11 83 20 L83 44 C83 62 73 82 44 96 Z"
        fill="#00AAC2"
      />
      {/* White left divider bar — echoes the notch in the real logo */}
      <rect x="30" y="8" width="3.5" height="70" fill="white" rx="1.75" />
      {/* Water drop — white outer ring */}
      <path
        d="M57 23 C57 23 74 44 74 57 C74 67 66 75 57 75 C48 75 40 67 40 57 C40 44 57 23 57 23 Z"
        fill="white"
      />
      {/* Water drop — teal inner fill */}
      <path
        d="M57 31 C57 31 70 49 70 59 C70 67 64 73 57 73 C50 73 44 67 44 59 C44 49 57 31 57 31 Z"
        fill="#00AAC2"
      />
    </svg>
  );
}

interface LogoProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  onLight?: boolean;
  className?: string;
}

const SIZES = {
  xs: { mark: 24, name: 16, sub: 8,  gap: 8  },
  sm: { mark: 30, name: 20, sub: 9,  gap: 10 },
  md: { mark: 40, name: 26, sub: 11, gap: 13 },
  lg: { mark: 52, name: 34, sub: 13, gap: 16 },
  xl: { mark: 72, name: 46, sub: 16, gap: 20 },
};

export default function Logo({ size = "md", onLight = false, className = "" }: LogoProps) {
  const s = SIZES[size];
  const nameCol  = onLight ? "#090A0A" : "#FFFFFF";
  const subCol   = onLight ? "#828D96" : "rgba(255,255,255,0.40)";

  return (
    <div className={`inline-flex items-center ${className}`} style={{ gap: s.gap }}>
      <LogoMark size={s.mark} />
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline leading-none" style={{ gap: 0 }}>
          <span
            className="font-display font-black leading-none tracking-tight"
            style={{ fontSize: s.name, color: nameCol, letterSpacing: "-0.01em" }}
          >
            SHIELD
          </span>
          <span
            className="font-display font-black leading-none tracking-tight"
            style={{ fontSize: s.name, color: "#00AAC2", letterSpacing: "-0.01em" }}
          >
            SEAL
          </span>
        </div>
        <span
          className="font-mono tracking-[0.22em] uppercase"
          style={{ fontSize: s.sub, color: subCol, marginTop: "4px", fontWeight: 600 }}
        >
          Waterproofing
        </span>
      </div>
    </div>
  );
}

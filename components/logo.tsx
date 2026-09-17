"use client";
import { useEffect, useRef } from "react";

/* ─── The Dropshield mark ─────────────────────────────────────────────────
   A water droplet whose pointed base becomes a shield point.
   Inside: a wavy water-level line. Below it: water. Above: dry.
   The water fill animates up on mount — core brand moment.
─────────────────────────────────────────────────────────────────────────── */
export function LogoMark({ size = 40, animate = false, className = "" }: { size?: number; animate?: boolean; className?: string }) {
  const fillRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!animate || !fillRef.current) return;
    fillRef.current.style.clipPath = "inset(100% 0 0 0 round 50%)";
    const id = setTimeout(() => {
      if (fillRef.current) {
        fillRef.current.style.transition = "clip-path 1.8s cubic-bezier(0.34,1.2,0.64,1)";
        fillRef.current.style.clipPath = "inset(42% 0 0 0 round 50%)";
      }
    }, 300);
    return () => clearTimeout(id);
  }, [animate]);

  return (
    <svg width={size} height={Math.round(size * 1.3)} viewBox="0 0 56 72" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Outer shape — drop meets shield */}
      <path
        d="M28 3 C17 3 4 16 4 33 C4 52 14 65 28 69 C42 65 52 52 52 33 C52 16 39 3 28 3 Z"
        fill="rgba(0,180,198,0.06)"
        stroke="#00B4C6"
        strokeWidth="1.5"
      />
      {/* Water fill — the animated element */}
      <path
        ref={fillRef}
        d="M28 3 C17 3 4 16 4 33 C4 52 14 65 28 69 C42 65 52 52 52 33 C52 16 39 3 28 3 Z"
        fill="#00B4C6"
        fillOpacity="0.18"
        style={animate ? { clipPath: "inset(100% 0 0 0 round 50%)" } : { clipPath: "inset(42% 0 0 0 round 50%)" }}
      />
      {/* Water level — wavy line, the signature mark element */}
      <path
        d="M9 32 Q16 27 23 32 Q30 37 37 32 Q44 27 49 30"
        stroke="#00B4C6"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Inner drop / dry zone indicator — a small elongated diamond */}
      <path d="M28 11 L32 23 L28 28 L24 23 Z" fill="#00B4C6" fillOpacity="0.55" />
      {/* Shield point accent at bottom */}
      <path d="M23 62 L28 69 L33 62" stroke="#00B4C6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export default function Logo({ size = "md", animate = false, className = "" }: { size?: "sm"|"md"|"lg"|"xl"; animate?: boolean; className?: string }) {
  const s = {
    sm: { mark: 28, shield: 11, seal: 15, tag: 8.5, gap: 9 },
    md: { mark: 38, shield: 14, seal: 20, tag: 10,  gap: 11 },
    lg: { mark: 52, shield: 18, seal: 26, tag: 12,  gap: 14 },
    xl: { mark: 80, shield: 26, seal: 38, tag: 16,  gap: 18 },
  }[size];

  return (
    <div className={`flex items-center ${className}`} style={{ gap: s.gap }}>
      <LogoMark size={s.mark} animate={animate} />
      <div className="flex flex-col leading-none">
        <div style={{ display:"flex", alignItems:"baseline", gap: 1 }}>
          <span className="font-black text-white tracking-tight" style={{ fontSize: s.shield, letterSpacing:"-0.01em" }}>SHIELD</span>
          <span className="font-black tracking-tight" style={{ fontSize: s.seal, color:"#00B4C6", letterSpacing:"-0.01em" }}>SEAL</span>
        </div>
        <span className="label" style={{ marginTop: 3, color:"#5A6478" }}>Waterproofing</span>
      </div>
    </div>
  );
}

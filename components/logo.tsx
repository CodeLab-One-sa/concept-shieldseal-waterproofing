export function LogoMark({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={Math.round(size * 1.12)} viewBox="0 0 44 49" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Flat-top hexagon outer — reads as a quality seal */}
      <path d="M22 2L40 12V28C40 38 31.5 46.5 22 48C12.5 46.5 4 38 4 28V12L22 2Z" fill="rgba(224,107,26,0.12)" stroke="#E06B1A" strokeWidth="1.75" strokeLinejoin="round"/>
      {/* Inner refined hexagon */}
      <path d="M22 7L35 14.5V27C35 34 29 41 22 43C15 41 9 34 9 27V14.5L22 7Z" fill="rgba(224,107,26,0.06)" stroke="rgba(224,107,26,0.3)" strokeWidth="0.75" strokeLinejoin="round"/>
      {/* Shield body inside */}
      <path d="M22 14L31 18V26C31 31 27 35.5 22 37C17 35.5 13 31 13 26V18L22 14Z" fill="rgba(224,107,26,0.15)" stroke="rgba(224,107,26,0.5)" strokeWidth="1" strokeLinejoin="round"/>
      {/* Wave mark at the base of the inner shield — represents waterproofing */}
      <path d="M14.5 28.5 Q17 26.5 19.5 28.5 Q22 30.5 24.5 28.5 Q27 26.5 29.5 28.5" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeOpacity="0.85"/>
      {/* Drop above the wave */}
      <path d="M22 18 L24 22.5 Q24 25 22 25 Q20 25 20 22.5 Z" fill="white" fillOpacity="0.80"/>
    </svg>
  );
}

export default function Logo({ size = "md", className = "" }: { size?: "sm"|"md"|"lg"; className?: string }) {
  const s = { sm: { mark: 30, name: 13, tag: 9, gap: 9 }, md: { mark: 38, name: 15, tag: 10, gap: 11 }, lg: { mark: 52, name: 20, tag: 12, gap: 14 } }[size];
  return (
    <div className={`flex items-center ${className}`} style={{ gap: s.gap }}>
      <LogoMark size={s.mark} />
      <div className="flex flex-col leading-none">
        <span className="font-black text-white tracking-[0.08em]" style={{ fontSize: s.name }}>SHIELDSEAL</span>
        <span className="font-medium text-muted tracking-[0.18em]" style={{ fontSize: s.tag, marginTop: 2 }}>WATERPROOFING</span>
      </div>
    </div>
  );
}

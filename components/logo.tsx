export function LogoMark({ size = 36, onLight = false, className = "" }: { size?: number; onLight?: boolean; className?: string }) {
  const stroke = onLight ? "#B85F10" : "#E07820";
  const fill   = onLight ? "rgba(224,120,32,0.15)" : "rgba(224,120,32,0.12)";
  const inner  = onLight ? "rgba(224,120,32,0.25)" : "rgba(224,120,32,0.08)";
  const wave   = onLight ? "#B85F10" : "white";
  const drop   = onLight ? "#B85F10" : "white";
  return (
    <svg width={size} height={Math.round(size * 1.1)} viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Flat-top hexagon — quality seal */}
      <path d="M22 2L40 12V28C40 38 31.5 46 22 48C12.5 46 4 38 4 28V12L22 2Z" fill={fill} stroke={stroke} strokeWidth="2" strokeLinejoin="round"/>
      {/* Inner shield */}
      <path d="M22 9L34 15.5V27C34 33.5 28.5 39.5 22 41C15.5 39.5 10 33.5 10 27V15.5L22 9Z" fill={inner} stroke={stroke} strokeWidth="1" strokeLinejoin="round" strokeOpacity="0.5"/>
      {/* Water drop */}
      <path d="M22 17 L24.5 23 Q24.5 26 22 26 Q19.5 26 19.5 23 Z" fill={drop} fillOpacity="0.85"/>
      {/* Wave */}
      <path d="M12 31 Q15 28.5 18 31 Q21 33.5 24.5 31 Q28 28.5 31 31" stroke={wave} strokeWidth="1.75" strokeLinecap="round" fill="none" strokeOpacity="0.8"/>
    </svg>
  );
}

export default function Logo({ size = "md", onLight = false, className = "" }: { size?: "sm"|"md"|"lg"; onLight?: boolean; className?: string }) {
  const s = { sm: { mark: 28, name: 12, tag: 9, gap: 8 }, md: { mark: 36, name: 14, tag: 10, gap: 10 }, lg: { mark: 50, name: 19, tag: 12, gap: 13 } }[size];
  const nameCol = onLight ? "#1A1612" : "white";
  const tagCol  = onLight ? "#6B6558" : "#7A8296";
  return (
    <div className={`flex items-center ${className}`} style={{ gap: s.gap }}>
      <LogoMark size={s.mark} onLight={onLight} />
      <div className="flex flex-col leading-none">
        <span className="font-black tracking-[0.07em]" style={{ fontSize: s.name, color: nameCol }}>SHIELDSEAL</span>
        <span className="font-medium tracking-[0.17em]" style={{ fontSize: s.tag, color: tagCol, marginTop: 2 }}>WATERPROOFING</span>
      </div>
    </div>
  );
}

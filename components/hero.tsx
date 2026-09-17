import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { LogoMark } from "./logo";
import { COMPANY, STATS } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative min-h-[96vh] flex flex-col justify-center overflow-hidden bg-ink">

      {/* Photographic background — very subtle, gives texture not distraction */}
      <div className="absolute inset-0">
        <Image
          src="/images/roof-aerial.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          fetchPriority="high"
          quality={70}
        />
        {/* Deep dark overlay — image barely visible, adds depth */}
        <div className="absolute inset-0 bg-ink/92" />
        {/* Tech grid on top */}
        <div className="absolute inset-0 tech-grid" />
        {/* Teal radial glow behind the mark */}
        <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full"
          style={{ background:"radial-gradient(ellipse, rgba(0,180,198,0.09) 0%, transparent 65%)" }} aria-hidden="true" />
      </div>

      {/* Corner marks on the whole hero */}
      <div className="absolute inset-6 corner-marks pointer-events-none" aria-hidden="true" />

      {/* Horizontal scan line sweeping down */}
      <div className="scan-line" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 w-full py-28 lg:py-36">

        {/* Animated logo mark */}
        <div className="flex justify-center mb-10">
          <div className="teal-glow">
            <LogoMark size={104} animate />
          </div>
        </div>

        {/* Brand name — large centred */}
        <div className="text-center mb-8">
          <div className="flex items-baseline justify-center gap-0.5 mb-3">
            <span className="text-white font-black tracking-tighter" style={{ fontSize:"clamp(2.6rem, 5.5vw, 4.2rem)", lineHeight:1 }}>SHIELD</span>
            <span className="font-black tracking-tighter text-cyan" style={{ fontSize:"clamp(2.6rem, 5.5vw, 4.2rem)", lineHeight:1 }}>SEAL</span>
          </div>
          <p className="label" style={{ color:"rgba(255,255,255,0.35)" }}>Waterproofing Specialists · Johannesburg · NHBRC Registered</p>
        </div>

        <div className="rule-strong max-w-xs mx-auto mb-10" />

        {/* Headline */}
        <div className="text-center mb-12">
          <h1 className="text-[2.2rem] md:text-[3rem] lg:text-[3.6rem] font-black tracking-tight text-white mb-6 text-balance leading-[0.95]">
            Water stopped.<br /><span className="text-cyan">Guaranteed.</span>
          </h1>
          <p className="text-white/58 text-[16px] leading-relaxed max-w-[520px] mx-auto">
            NHBRC-registered waterproofing contractors since 2011. Flat roofs, rising damp, basements, and balconies. We find the source. We fix it. We back it in writing.
          </p>
        </div>

        {/* Stats grid */}
        <div className="max-w-3xl mx-auto mb-12 corner-marks">
          <div className="grid grid-cols-2 lg:grid-cols-4 border border-border-s">
            {STATS.map((s, i) => (
              <div key={s.label} className={`px-6 py-7 text-center ${i < STATS.length - 1 ? "border-r border-border-s" : ""}`}>
                <p className="font-mono text-cyan font-bold tabular-nums leading-none mb-2.5" style={{ fontSize:"2.1rem" }}>
                  {s.value}<span className="text-[1.2rem]">{s.unit}</span>
                </p>
                <p className="label-muted leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <a href="#contact"
            className="inline-flex items-center gap-2 bg-cyan hover:bg-cyan-l text-ink font-black text-[13px] px-9 py-4 uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5 shadow-[0_0_32px_rgba(0,180,198,0.28)]">
            Request a free inspection <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#calculator"
            className="inline-flex items-center gap-2 border border-border-s hover:border-cyan text-white/60 hover:text-white font-mono text-[11px] px-8 py-4 uppercase tracking-widest transition-all duration-200">
            Get a price estimate
          </a>
          <a href={`tel:${COMPANY.phone.replace(/\s/g,"")}`}
            className="text-cyan/65 hover:text-cyan font-mono text-[12px] uppercase tracking-widest transition-colors px-4 py-4">
            {COMPANY.phone}
          </a>
        </div>

        {/* Registration badges */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-4 border border-border px-6 py-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse" />
              <span className="label">{COMPANY.nhbrc}</span>
            </div>
            <div className="w-px h-3 bg-border-s" />
            <span className="label-muted">CETA Accredited</span>
            <div className="w-px h-3 bg-border-s" />
            <span className="label-muted">Since 2011</span>
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  );
}

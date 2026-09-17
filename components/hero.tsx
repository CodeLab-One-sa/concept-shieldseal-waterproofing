import { ArrowRight } from "lucide-react";
import { LogoMark } from "./logo";
import { COMPANY, STATS } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center bg-ink tech-grid overflow-hidden">
      {/* Teal radial glow — behind the mark */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background:"radial-gradient(ellipse, rgba(0,180,198,0.07) 0%, transparent 65%)" }} aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 w-full py-24">

        {/* Animated logo mark — centrepiece */}
        <div className="flex justify-center mb-10">
          <LogoMark size={88} animate className="drop-shadow-[0_0_32px_rgba(0,180,198,0.3)]" />
        </div>

        {/* Wordmark — large */}
        <div className="flex justify-center mb-6">
          <div className="text-center">
            <div className="flex items-baseline justify-center gap-0.5">
              <span className="text-white font-black tracking-tighter" style={{ fontSize:"clamp(2.8rem, 6vw, 4.5rem)", lineHeight:1 }}>SHIELD</span>
              <span className="font-black tracking-tighter text-cyan" style={{ fontSize:"clamp(2.8rem, 6vw, 4.5rem)", lineHeight:1 }}>SEAL</span>
            </div>
            <p className="label mt-2" style={{ color:"#5A6478" }}>Waterproofing Specialists — Johannesburg</p>
          </div>
        </div>

        <div className="rule-strong max-w-[320px] mx-auto mb-8" />

        <div className="text-center max-w-xl mx-auto mb-12">
          <h1 className="text-[2.4rem] md:text-[3.2rem] font-black tracking-tight text-white mb-5 text-balance leading-[0.95]">
            Water stopped.<br />
            <span className="text-cyan">Guaranteed.</span>
          </h1>
          <p className="text-white/50 text-[15px] leading-relaxed">
            NHBRC-registered waterproofing contractors since 2011. We diagnose the source, specify the correct system, and back every job with a 10-year guarantee in writing.
          </p>
        </div>

        {/* Stats row — monospace, teal */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 max-w-3xl mx-auto mb-12 border border-border-s">
          {STATS.map((s, i) => (
            <div key={s.label} className={`px-6 py-5 text-center ${i < STATS.length - 1 ? "border-r border-border-s" : ""}`}>
              <p className="font-mono text-cyan font-bold tabular-nums" style={{ fontSize:"1.9rem", lineHeight:1 }}>
                {s.value}<span className="text-lg">{s.unit}</span>
              </p>
              <p className="label-muted mt-1.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 bg-cyan hover:bg-cyan-l text-ink font-black text-[13px] px-8 py-4 uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5 shadow-[0_0_32px_rgba(0,180,198,0.3)]">
            Request a free inspection <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#calculator" className="inline-flex items-center gap-2 border border-border-s hover:border-cyan text-white/55 hover:text-white font-mono text-[12px] px-8 py-4 uppercase tracking-widest transition-all duration-200">
            Get a price estimate
          </a>
          <a href={`tel:${COMPANY.phone.replace(/\s/g,"")}`} className="inline-flex items-center gap-2 text-cyan/70 hover:text-cyan font-mono text-[12px] px-4 py-4 uppercase tracking-widest transition-colors">
            {COMPANY.phone}
          </a>
        </div>

        {/* NHBRC badge */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-3 border border-border px-5 py-2.5">
            <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse" />
            <span className="label">{COMPANY.nhbrc}</span>
            <div className="w-px h-3 bg-border-s" />
            <span className="label-muted">CETA Accredited</span>
          </div>
        </div>
      </div>
    </section>
  );
}

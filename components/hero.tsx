import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { COMPANY, STATS } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-roofing.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          fetchPriority="high"
          quality={88}
        />
        {/* Dark overlay — heavy enough so all white text is comfortably readable */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, rgba(12,14,18,0.82) 0%, rgba(12,14,18,0.75) 50%, rgba(12,14,18,0.88) 100%)" }}
        />
        {/* Subtle teal tint from the left — ties image to brand */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(0,170,194,0.06) 0%, transparent 60%)" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 w-full py-28 lg:py-36">
        <div className="flex flex-col items-center text-center">

          {/* Location / registration line */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1.5 h-1.5 bg-teal rounded-full animate-pulse" />
            <p className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-white/68">
              Johannesburg · NHBRC Registered · Est. 2011
            </p>
          </div>

          {/* Headline */}
          <h1
            className="font-display font-black text-white mb-6 text-balance leading-tight"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.2rem)", letterSpacing: "-0.02em" }}
          >
            Water stopped.<br />
            <span className="text-teal">Guaranteed.</span>
          </h1>

          <p className="text-white/70 text-[16px] leading-relaxed max-w-[500px] mb-12">
            NHBRC-registered waterproofing contractors since 2011. Flat roofs, rising damp, basements, and balconies. We find the source. We fix it. We back it with a 10-year written guarantee.
          </p>

          {/* Stats */}
          <div className="w-full max-w-[680px] mb-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 border border-white/20">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-5 py-7 text-center backdrop-blur-sm bg-white/[0.04] ${i < STATS.length - 1 ? "border-r border-white/20" : ""}`}
                >
                  <p className="font-mono font-bold text-teal leading-none mb-2.5 tabular-nums" style={{ fontSize: "2.1rem" }}>
                    {s.value}<span style={{ fontSize: "1.2rem" }}>{s.unit}</span>
                  </p>
                  <p className="font-mono text-[10px] font-600 tracking-[0.18em] uppercase text-white/65 leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-teal hover:bg-teal-l text-white font-display font-black text-[14px] px-10 py-4 uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(0,170,194,0.32)]"
            >
              Request a free inspection <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 border border-white/40 hover:border-white/70 text-white/72 hover:text-white font-mono text-[11px] px-8 py-4 uppercase tracking-widest transition-all duration-200 backdrop-blur-sm"
            >
              Get a price estimate
            </a>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="text-white/62 hover:text-white font-mono text-[12px] uppercase tracking-widest transition-colors px-4 py-4"
            >
              {COMPANY.phone}
            </a>
          </div>

          {/* NHBRC badge */}
          <div className="inline-flex items-center gap-3 border border-white/30 backdrop-blur-sm bg-white/[0.06] px-5 py-2.5">
            <span className="label">{COMPANY.nhbrc}</span>
            <div className="w-px h-3 bg-white/40" />
            <span className="font-mono text-[10px] font-600 tracking-[0.18em] uppercase text-white/62">CETA Accredited</span>
          </div>

        </div>
      </div>

      {/* Fade to next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
        style={{ background: "linear-gradient(to top, #FFFFFF, transparent)" }}
        aria-hidden="true"
      />
    </section>
  );
}

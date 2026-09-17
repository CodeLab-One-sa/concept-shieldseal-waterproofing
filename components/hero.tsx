import { ArrowRight } from "lucide-react";
import { LogoMark } from "./logo";
import { COMPANY, STATS } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative min-h-[96vh] flex flex-col justify-center overflow-hidden bg-ink dot-texture">

      {/* Teal radial glow — behind the mark, subtle */}
      <div
        className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,170,194,0.08) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      {/* Large background shield mark — barely visible, adds identity */}
      <div className="absolute right-[-8%] top-1/2 -translate-y-1/2 pointer-events-none select-none" aria-hidden="true">
        <LogoMark size={520} className="opacity-[0.028]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 w-full py-28 lg:py-36">
        <div className="flex flex-col items-center text-center">

          {/* Mark — centrepiece */}
          <div
            className="mb-10"
            style={{ filter: "drop-shadow(0 0 32px rgba(0,170,194,0.25))" }}
          >
            <LogoMark size={108} />
          </div>

          {/* Wordmark — large, Barlow Condensed */}
          <div className="mb-4">
            <div className="flex items-baseline justify-center">
              <span
                className="font-display font-black text-white"
                style={{ fontSize: "clamp(3.2rem, 8vw, 6rem)", lineHeight: 1, letterSpacing: "-0.02em" }}
              >
                SHIELD
              </span>
              <span
                className="font-display font-black text-teal"
                style={{ fontSize: "clamp(3.2rem, 8vw, 6rem)", lineHeight: 1, letterSpacing: "-0.02em" }}
              >
                SEAL
              </span>
            </div>
            <p className="label-dim mt-3">Waterproofing Specialists · Johannesburg · NHBRC Registered</p>
          </div>

          {/* Divider */}
          <div className="rule-s w-[280px] my-8" />

          {/* Tagline */}
          <h1 className="text-[1.9rem] md:text-[2.6rem] font-black tracking-tight text-white mb-5 text-balance leading-tight" style={{ fontFamily: "var(--font-barlow)" }}>
            Water stopped.<br />
            <span className="text-teal">Guaranteed.</span>
          </h1>
          <p className="text-white/52 text-[16px] leading-relaxed max-w-[500px] mb-12">
            NHBRC-registered waterproofing contractors since 2011. Flat roofs, rising damp, basements, and balconies. We find the source. We fix it. We back it with a 10-year written guarantee.
          </p>

          {/* Stats */}
          <div className="w-full max-w-[700px] mb-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 border border-border-s">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-5 py-6 text-center ${i < STATS.length - 1 ? "border-r border-border-s" : ""}`}
                >
                  <p
                    className="font-mono font-bold text-teal leading-none mb-2 tabular-nums"
                    style={{ fontSize: "2rem" }}
                  >
                    {s.value}<span style={{ fontSize: "1.2rem" }}>{s.unit}</span>
                  </p>
                  <p className="label-dim leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-teal hover:bg-teal-l text-ink font-display font-black text-[14px] px-10 py-4 uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5 shadow-[0_0_28px_rgba(0,170,194,0.25)]"
            >
              Request a free inspection <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 border border-border-s hover:border-teal text-white/55 hover:text-white font-mono text-[11px] px-8 py-4 uppercase tracking-widest transition-all duration-200"
            >
              Get a price estimate
            </a>
          </div>

          {/* NHBRC badge */}
          <div className="inline-flex items-center gap-3 border border-border px-5 py-2.5">
            <span className="w-1.5 h-1.5 bg-teal rounded-full animate-pulse" />
            <span className="label">{COMPANY.nhbrc}</span>
            <div className="w-px h-3 bg-border-s" />
            <span className="label-dim">CETA Accredited</span>
            <div className="w-px h-3 bg-border-s" />
            <span className="label-dim">Est. 2011</span>
          </div>
        </div>
      </div>

      {/* Gradient fade to first section */}
      <div
        className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to top, #090A0A, transparent)" }}
        aria-hidden="true"
      />
    </section>
  );
}

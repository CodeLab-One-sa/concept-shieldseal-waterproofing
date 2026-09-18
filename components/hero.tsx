import { ArrowRight } from "lucide-react";
import Logo from "./logo";
import { COMPANY, STATS } from "@/lib/content";

export default function Hero() {
  return (
    <section className="bg-canvas py-24 lg:py-32 border-b border-line">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">

          {/* Logo — the actual logo, clear on white */}
          <div className="mb-8">
            <Logo height={96} />
          </div>

          <p className="label-dim mb-8">Johannesburg · NHBRC Registered · Est. 2011</p>

          <div className="rule-teal w-[200px] mb-10" />

          <h1 className="font-display font-black text-ink mb-5 text-balance leading-tight"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)", letterSpacing: "-0.02em" }}>
            Water stopped.<br />
            <span className="text-teal">Guaranteed.</span>
          </h1>

          <p className="text-ink-mid text-[16px] leading-relaxed max-w-[500px] mb-12">
            NHBRC-registered waterproofing contractors since 2011. Flat roofs, rising damp, basements, and balconies. We find the source. We fix it. We back it with a 10-year written guarantee.
          </p>

          {/* Stats */}
          <div className="w-full max-w-[680px] mb-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 border border-line-teal">
              {STATS.map((s, i) => (
                <div key={s.label} className={`px-5 py-7 text-center ${i < STATS.length - 1 ? "border-r border-line-teal" : ""}`}>
                  <p className="font-mono font-bold text-teal leading-none mb-2.5 tabular-nums" style={{ fontSize: "2rem" }}>
                    {s.value}<span style={{ fontSize: "1.2rem" }}>{s.unit}</span>
                  </p>
                  <p className="label-dim leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <a href="#contact"
              className="inline-flex items-center gap-2 bg-teal hover:bg-teal-l text-white font-display font-black text-[14px] px-10 py-4 uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(0,170,194,0.28)]">
              Request a free inspection <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#calculator"
              className="inline-flex items-center gap-2 border border-line-d hover:border-teal text-muted hover:text-teal font-mono text-[11px] px-8 py-4 uppercase tracking-widest transition-all duration-200">
              Get a price estimate
            </a>
            <a href={`tel:${COMPANY.phone.replace(/\s/g,"")}`}
              className="text-muted hover:text-teal font-mono text-[12px] uppercase tracking-widest transition-colors px-4 py-4">
              {COMPANY.phone}
            </a>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-3 border border-line bg-canvas-s px-5 py-2.5">
            <span className="w-1.5 h-1.5 bg-teal rounded-full animate-pulse" />
            <span className="label">{COMPANY.nhbrc}</span>
            <div className="w-px h-3 bg-line-d" />
            <span className="label-dim">CETA Accredited</span>
          </div>
        </div>
      </div>
    </section>
  );
}

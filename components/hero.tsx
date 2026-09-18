import { ArrowRight, ShieldCheck } from "lucide-react";
import { COMPANY, STATS } from "@/lib/content";

export default function Hero() {
  return (
    <section
      className="parallax relative flex flex-col justify-center overflow-hidden"
      style={{
        minHeight: "92vh",
        backgroundImage: "url('/images/hero-waterproofing.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Uniform dark overlay — no gradient variation so text is readable everywhere */}
      <div className="absolute inset-0" style={{ background: "rgba(10,12,16,0.78)" }} />
      {/* Subtle teal wash from left */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,170,194,0.06) 0%, transparent 50%)" }} />

      <div className="relative z-10 w-full">

        {/* ── Main content ── */}
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-28 lg:py-32">
          <div className="flex flex-col items-center text-center">

            {/* Credential badge */}
            <div className="inline-flex items-center gap-2.5 border border-white/25 bg-white/[0.07] backdrop-blur-sm px-4 py-2 mb-10">
              <ShieldCheck className="w-4 h-4 text-teal shrink-0" />
              <span className="font-mono text-[11px] font-semibold tracking-[0.18em] uppercase text-white">
                {COMPANY.nhbrc} · CETA Accredited
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-black text-white mb-6 text-balance leading-none"
              style={{ fontSize: "clamp(3rem, 8vw, 5.8rem)", letterSpacing: "-0.02em" }}
            >
              Water stopped.<br />
              <span className="text-teal">Guaranteed.</span>
            </h1>

            <p className="text-white/88 text-[17px] font-medium leading-relaxed max-w-[520px] mb-10">
              NHBRC-registered waterproofing contractors since 2011. Flat roofs, rising damp, basements, and balconies. We find the source. We fix it. We back it with a 10-year written guarantee.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-teal hover:bg-teal-l text-white font-display font-black text-[15px] px-10 py-4 uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_24px_rgba(0,170,194,0.35)]"
              >
                Request a free inspection <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#calculator"
                className="inline-flex items-center gap-2 border border-white/50 hover:border-white/80 text-white/82 hover:text-white font-mono text-[12px] font-semibold px-8 py-4 uppercase tracking-widest transition-all duration-200"
              >
                Get a price estimate
              </a>
            </div>

            {/* Phone */}
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g,"")}`}
              className="font-mono text-[13px] font-semibold text-white/65 hover:text-white transition-colors tracking-widest"
            >
              {COMPANY.phone}
            </a>
          </div>
        </div>

        {/* ── Stats bar — full width, centred, uniform cells ── */}
        <div className="border-t border-white/15 bg-black/35 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-col items-center justify-center px-6 py-8 text-center
                    ${i < STATS.length - 1 ? "border-r border-white/15" : ""}
                    ${i >= 2 ? "border-t border-white/15 lg:border-t-0" : ""}`}
                >
                  <p className="font-mono font-bold text-teal tabular-nums mb-2.5" style={{ fontSize: "2rem", lineHeight: 1 }}>
                    {s.value}<span style={{ fontSize: "1.15rem" }}>{s.unit}</span>
                  </p>
                  <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-white/75 leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

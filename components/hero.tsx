import { ArrowRight, ShieldCheck } from "lucide-react";
import { COMPANY } from "@/lib/content";

export default function Hero() {
  return (
    <section
      className="parallax relative flex flex-col justify-center overflow-hidden"
      style={{
        minHeight: "88vh",
        backgroundImage: "url('/images/hero-waterproofing.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* Gradient overlay — darkens progressively toward bottom */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(10,12,16,0.60) 0%, rgba(10,12,16,0.78) 35%, rgba(10,12,16,0.92) 70%, rgba(10,12,16,0.96) 100%)" }}
      />
      {/* Subtle teal wash from left */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,170,194,0.06) 0%, transparent 50%)" }} />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 lg:px-10 py-24 lg:py-32">

        {/* NHBRC credential badge */}
        <div className="inline-flex items-center gap-2.5 border border-white/30 bg-white/[0.08] backdrop-blur-sm px-5 py-2.5 mb-10">
          <ShieldCheck className="w-4 h-4 text-teal shrink-0" />
          <span className="font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-white">
            {COMPANY.nhbrc} · CETA Accredited
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display font-black text-white text-balance leading-none mb-6"
          style={{ fontSize: "clamp(3rem, 8vw, 5.8rem)", letterSpacing: "-0.02em" }}
        >
          Water stopped.<br />
          <span className="text-teal">Guaranteed.</span>
        </h1>

        {/* Body */}
        <p className="text-white text-[17px] font-medium leading-relaxed max-w-[520px] mb-10" style={{ opacity: 0.90 }}>
          NHBRC-registered waterproofing contractors since 2011. Flat roofs, rising damp, basements, and balconies. We find the source. We fix it. We back it with a 10-year written guarantee.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-teal hover:bg-teal-l text-white font-display font-black text-[15px] px-10 py-4 uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_24px_rgba(0,170,194,0.35)]"
          >
            Request a free inspection <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#calculator"
            className="inline-flex items-center gap-2 border-2 border-white/70 hover:border-white text-white font-mono text-[12px] font-bold px-8 py-4 uppercase tracking-widest transition-all duration-200 hover:bg-white/[0.06]"
          >
            Get a price estimate
          </a>
        </div>

        <a
          href={`tel:${COMPANY.phone.replace(/\s/g,"")}`}
          className="font-mono text-[13px] font-semibold hover:text-white transition-colors tracking-widest"
          style={{ color: "rgba(255,255,255,0.70)" }}
        >
          {COMPANY.phone}
        </a>
      </div>
    </section>
  );
}

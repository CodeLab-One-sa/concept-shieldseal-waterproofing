import Image from "next/image";
import { ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";
import { STATS } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden bg-charcoal">
      {/* Hero image — right side, fades left */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] pointer-events-none">
        <Image src="/images/hero-roofing.jpg" alt="ShieldSeal waterproofing contractors at work on a Johannesburg flat roof" fill className="object-cover object-center img-fade-left" priority fetchPriority="high" quality={85} />
        <div className="absolute inset-0 bg-charcoal/25" />
        <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-charcoal to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal to-transparent" />
      </div>

      {/* Subtle orange glow */}
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(224,107,26,0.07) 0%, transparent 65%)" }} aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 w-full py-24 lg:py-32">
        <div className="max-w-[580px]">
          {/* Guarantee badge */}
          <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/25 text-orange text-xs font-bold px-3.5 py-1.5 rounded-full mb-7">
            <ShieldCheck className="w-3.5 h-3.5" />
            10-year workmanship guarantee
          </div>

          <h1 className="text-[3rem] md:text-[4.2rem] lg:text-[5rem] font-black leading-[0.93] tracking-tighter text-white mb-7 text-balance">
            Stop the leak.<br />
            <span className="text-orange">Fix it properly.</span>
          </h1>

          <p className="text-[17px] text-white/58 leading-relaxed mb-8 max-w-[500px]">
            Johannesburg&apos;s waterproofing specialists since 2011. Flat roofs, rising damp, basements, and balconies. NHBRC registered. We find the source of the problem and fix it, not just cover it up.
          </p>

          <ul className="flex flex-col gap-2.5 mb-10">
            {["Free site inspection. No call-out fee, no obligation.", "Written, itemised quote within 24 hours.", "NHBRC registered. 10-year workmanship guarantee in writing."].map(f => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-white/60">
                <CheckCircle className="w-4 h-4 text-orange shrink-0 mt-0.5" />{f}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-light text-white font-bold text-sm px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-[0_0_24px_rgba(224,107,26,0.22)]">
              Request a free inspection <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#calculator" className="inline-flex items-center justify-center gap-2 border border-white/[0.1] hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] text-white/70 hover:text-white font-semibold text-sm px-8 py-4 rounded-xl transition-all duration-200">
              Get a price estimate
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-white/[0.06] bg-surface/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-7">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map(s => (
              <div key={s.label}>
                <div className="text-3xl font-black text-orange leading-none mb-1 tabular-nums">{s.value}<span className="text-xl text-orange/65 ml-0.5">{s.unit}</span></div>
                <div className="text-[13px] text-white/45 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, CheckCircle } from "lucide-react";
import { COMPANY, STATS } from "@/lib/content";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col lg:flex-row">

      {/* LEFT — dark, text-forward */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-14 lg:px-20 py-20 lg:py-0 bg-ink relative">
        {/* Subtle amber line left edge */}
        <div className="absolute left-0 top-1/4 bottom-1/4 w-[3px] bg-amber/40 rounded-r" aria-hidden="true" />

        <p className="text-amber text-[11px] font-bold tracking-[0.2em] uppercase mb-6">Johannesburg waterproofing specialists</p>

        <h1 className="text-[3.2rem] md:text-[4.5rem] lg:text-[5rem] font-black leading-[0.9] tracking-tighter text-white mb-8 text-balance">
          Stop the leak.<br />Fix it<br />
          <span className="text-amber">properly.</span>
        </h1>

        <p className="text-[16px] text-white/55 leading-relaxed mb-8 max-w-md">
          NHBRC-registered waterproofing contractors since 2011. Flat roofs, rising damp, basements, and balconies. We find the source. We fix it. We back it in writing.
        </p>

        <ul className="space-y-3 mb-10">
          {[
            "Free site inspection. No call-out fee, no obligation.",
            "Written itemised quote within 24 hours.",
            "10-year workmanship guarantee, issued at sign-off.",
          ].map(f => (
            <li key={f} className="flex items-start gap-3 text-[14px] text-white/58">
              <CheckCircle className="w-4 h-4 text-amber shrink-0 mt-0.5" />{f}
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row gap-3">
          <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-light text-white font-bold text-[14px] px-8 py-4 rounded transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_24px_rgba(224,120,32,0.25)]">
            Request a free inspection <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#calculator" className="inline-flex items-center justify-center gap-2 border border-white/12 hover:border-white/22 text-white/65 hover:text-white font-semibold text-[14px] px-8 py-4 rounded transition-all duration-200">
            Get a price estimate
          </a>
        </div>
      </div>

      {/* RIGHT — solid amber panel with big stats */}
      <div className="w-full lg:w-[38%] bg-amber flex flex-col justify-center px-8 md:px-14 lg:px-12 py-16 lg:py-0 relative overflow-hidden">
        {/* Subtle texture lines */}
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 1px, transparent 1px, transparent 32px)" }} aria-hidden="true" />

        <div className="relative z-10 space-y-10">
          {STATS.map(s => (
            <div key={s.label} className="border-b border-white/15 pb-10 last:border-0 last:pb-0">
              <div className="text-[4.5rem] font-black text-white leading-none mb-1.5 tabular-nums">
                {s.value}<span className="text-3xl text-white/70 ml-1">{s.unit}</span>
              </div>
              <p className="text-white/75 text-[14px] font-medium leading-snug">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-10 pt-10 border-t border-white/15">
          <p className="text-white/60 text-[12px] font-semibold tracking-widest uppercase mb-2">Registered and compliant</p>
          <p className="text-white font-bold text-[14px]">{COMPANY.nhbrc}</p>
          <p className="text-white/60 text-[13px] mt-0.5">CETA Accredited Training Provider</p>
        </div>
      </div>
    </section>
  );
}

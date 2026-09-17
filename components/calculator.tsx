"use client";
import { useState } from "react";
import { QUOTE_SURFACES, COMPANY } from "@/lib/content";

export default function QuoteCalculator() {
  const [surface, setSurface] = useState("");
  const [area, setArea]       = useState("");
  const [result, setResult]   = useState<{ low: number; high: number; label: string } | null>(null);

  function calculate() {
    const s = QUOTE_SURFACES.find(x => x.id === surface);
    const a = parseFloat(area);
    if (!s || !a || a <= 0) return;
    setResult({
      low:   Math.round(s.low  * a / 100) * 100,
      high:  Math.round(s.high * a / 100) * 100,
      label: s.label,
    });
  }

  const fmt = (n: number) => "R\u00a0" + n.toLocaleString("en-ZA");

  return (
    <section id="calculator" className="py-28 bg-ink dot-texture">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="mb-16">
          <p className="label mb-5">Price Estimator</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <h2
              className="font-display font-black text-white text-balance leading-none"
              style={{ fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}
            >
              What will it cost?<br />
              <span className="text-teal">Find out now.</span>
            </h2>
            <p className="text-white/50 text-[15px] leading-relaxed self-end">
              Select a system and enter your area. The estimate is based on current market rates for supply and application. Actual cost depends on surface condition and access — your written quote confirms the exact figure.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Rate reference — clickable, acts as the select too */}
          <div>
            <p className="label-dim mb-4">Rate reference — per m² (supply and apply, excl. VAT)</p>
            <div className="border border-border">
              <div className="grid grid-cols-12 bg-ink2 px-5 py-3 border-b border-border">
                <span className="label-dim col-span-7">System</span>
                <span className="label-dim col-span-5 text-right">Rate / m²</span>
              </div>
              {QUOTE_SURFACES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => { setSurface(s.id); setResult(null); }}
                  className={`w-full grid grid-cols-12 px-5 py-4 text-left transition-colors ${
                    i < QUOTE_SURFACES.length - 1 ? "border-b border-border" : ""
                  } ${surface === s.id ? "bg-teal/[0.08]" : "hover:bg-ink2"}`}
                >
                  <span className={`col-span-7 text-[13px] flex items-center gap-2.5 ${surface === s.id ? "text-teal" : "text-white/55"}`}>
                    {surface === s.id && <span className="w-1.5 h-1.5 bg-teal rounded-full shrink-0" />}
                    {s.label}
                  </span>
                  <span className={`col-span-5 text-[12px] font-mono text-right tabular-nums ${surface === s.id ? "text-teal" : "text-white/32"}`}>
                    R{s.low} – R{s.high}
                  </span>
                </button>
              ))}
            </div>
            <p className="text-[11px] font-mono text-white/22 mt-3">
              Click a row to select the system. All rates exclude VAT.
            </p>
          </div>

          {/* Calculator */}
          <div>
            <p className="label-dim mb-4">Enter your area</p>
            <div className="border border-border bg-ink2/40 p-7 lg:p-8">
              <div className="space-y-5 mb-6">
                <div>
                  <label className="label-dim block mb-2.5">Waterproofing system</label>
                  <select
                    value={surface}
                    onChange={e => { setSurface(e.target.value); setResult(null); }}
                    className="w-full bg-ink border border-border focus:border-border-s px-4 py-3.5 text-[13px] text-white/70 focus:outline-none font-mono transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">-- Select system --</option>
                    {QUOTE_SURFACES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="label-dim block mb-2.5">Area in square metres</label>
                  <input
                    type="number" min="1" placeholder="e.g. 180"
                    value={area}
                    onChange={e => { setArea(e.target.value); setResult(null); }}
                    className="w-full bg-ink border border-border focus:border-border-s px-4 py-3.5 text-[13px] text-white placeholder-white/22 focus:outline-none font-mono transition-colors"
                  />
                </div>
                <button
                  onClick={calculate}
                  disabled={!surface || !area}
                  className="w-full bg-teal hover:bg-teal-l disabled:opacity-28 disabled:cursor-not-allowed text-ink font-display font-black text-[13px] py-4 uppercase tracking-wide transition-all duration-200 hover:-translate-y-px"
                >
                  Calculate estimate
                </button>
              </div>

              {result ? (
                <div className="border-t border-border pt-7">
                  <p className="label-dim mb-4">Estimate — {result.label}</p>
                  <p className="font-mono font-bold text-teal tabular-nums mb-2" style={{ fontSize: "3.2rem", lineHeight: 1 }}>
                    {fmt(result.low)}
                  </p>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-1 rule" />
                    <span className="font-mono text-[11px] text-white/28 uppercase">to</span>
                    <div className="flex-1 rule" />
                  </div>
                  <p className="font-mono font-bold tabular-nums mb-5" style={{ fontSize: "2rem", lineHeight: 1, color: "rgba(0,170,194,0.60)" }}>
                    {fmt(result.high)}
                  </p>
                  <p className="text-white/28 text-[11px] font-mono mb-5">
                    Excludes VAT. Supply and application only. Actual quote may vary based on site conditions.
                  </p>
                  <div className="rule mb-5" />
                  <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="label text-teal hover:text-teal-l transition-colors">
                    Confirm with a site-specific quote →
                  </a>
                </div>
              ) : (
                <div className="border-t border-border pt-7 text-center py-10">
                  <p className="text-white/20 text-[12px] font-mono leading-relaxed">
                    Select a system and enter the area<br />to see your price estimate.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

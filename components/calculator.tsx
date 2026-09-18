"use client";
import { useState } from "react";
import { QUOTE_SURFACES, COMPANY } from "@/lib/content";

export default function QuoteCalculator() {
  const [surface, setSurface] = useState("");
  const [area, setArea] = useState("");
  const [result, setResult] = useState<{ low: number; high: number; label: string } | null>(null);

  function calculate() {
    const s = QUOTE_SURFACES.find(x => x.id === surface);
    const a = parseFloat(area);
    if (!s || !a || a <= 0) return;
    setResult({ low: Math.round(s.low * a / 100) * 100, high: Math.round(s.high * a / 100) * 100, label: s.label });
  }

  const fmt = (n: number) => "R\u00a0" + n.toLocaleString("en-ZA");

  return (
    <section id="calculator" className="py-24 bg-canvas border-y border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="mb-14">
          <p className="label mb-4">Price Estimator</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <h2 className="font-display font-black text-ink text-balance leading-none"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", letterSpacing: "-0.02em" }}>
              What will it cost?<br />
              <span className="text-teal">Find out now.</span>
            </h2>
            <p className="text-ink-mid text-[15px] leading-relaxed self-end">
              Select a system and enter your area. Estimate based on current market rates. Your written quote confirms the exact figure after a site inspection.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Rate table */}
          <div>
            <p className="label-dim mb-4">Rate reference — per m² (supply and apply, excl. VAT)</p>
            <div className="border border-line">
              <div className="grid grid-cols-12 bg-canvas-s px-5 py-3 border-b border-line">
                <span className="label-dim col-span-7">System</span>
                <span className="label-dim col-span-5 text-right">Rate / m²</span>
              </div>
              {QUOTE_SURFACES.map((s, i) => (
                <button key={s.id} onClick={() => { setSurface(s.id); setResult(null); }}
                  className={`w-full grid grid-cols-12 px-5 py-4 text-left transition-colors ${i < QUOTE_SURFACES.length - 1 ? "border-b border-line" : ""} ${surface === s.id ? "bg-teal/[0.06]" : "hover:bg-canvas-s"}`}>
                  <span className={`col-span-7 text-[13px] flex items-center gap-2.5 ${surface === s.id ? "text-teal font-semibold" : "text-ink-mid"}`}>
                    {surface === s.id && <span className="w-1.5 h-1.5 bg-teal rounded-full shrink-0" />}
                    {s.label}
                  </span>
                  <span className={`col-span-5 text-[12px] font-mono text-right tabular-nums ${surface === s.id ? "text-teal" : "text-muted"}`}>
                    R{s.low} – R{s.high}
                  </span>
                </button>
              ))}
            </div>
            <p className="text-muted text-[11px] font-mono mt-3">Click a row to select. Rates exclude VAT.</p>
          </div>

          {/* Calculator form */}
          <div>
            <p className="label-dim mb-4">Enter your area</p>
            <div className="border border-line bg-canvas p-7">
              <div className="space-y-5 mb-6">
                <div>
                  <label className="label-dim block mb-2.5">Waterproofing system</label>
                  <select value={surface} onChange={e => { setSurface(e.target.value); setResult(null); }}
                    className="w-full bg-canvas-s border border-line focus:border-teal px-4 py-3.5 text-[13px] text-ink focus:outline-none font-mono transition-colors appearance-none cursor-pointer">
                    <option value="">-- Select system --</option>
                    {QUOTE_SURFACES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="label-dim block mb-2.5">Area in square metres</label>
                  <input type="number" min="1" placeholder="e.g. 180" value={area}
                    onChange={e => { setArea(e.target.value); setResult(null); }}
                    className="w-full bg-canvas-s border border-line focus:border-teal px-4 py-3.5 text-[13px] text-ink placeholder-muted focus:outline-none font-mono transition-colors" />
                </div>
                <button onClick={calculate} disabled={!surface || !area}
                  className="w-full bg-teal hover:bg-teal-l disabled:opacity-30 disabled:cursor-not-allowed text-white font-display font-black text-[13px] py-4 uppercase tracking-wide transition-all duration-200 hover:-translate-y-px">
                  Calculate estimate
                </button>
              </div>

              {result ? (
                <div className="border-t border-line pt-7">
                  <p className="label-dim mb-4">Estimate — {result.label}</p>
                  <p className="font-mono font-bold text-teal tabular-nums mb-2" style={{ fontSize: "3rem", lineHeight: 1 }}>{fmt(result.low)}</p>
                  <div className="flex items-center gap-3 my-3">
                    <div className="flex-1 rule" /><span className="text-muted text-[11px] font-mono uppercase">to</span><div className="flex-1 rule" />
                  </div>
                  <p className="font-mono font-bold tabular-nums mb-5" style={{ fontSize: "2rem", lineHeight: 1, color: "rgba(0,170,194,0.65)" }}>{fmt(result.high)}</p>
                  <p className="text-muted text-[11px] font-mono mb-5">Excludes VAT. Based on supply and application only.</p>
                  <div className="rule mb-5" />
                  <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="label hover:text-teal-l transition-colors">
                    Get a confirmed quote via WhatsApp →
                  </a>
                </div>
              ) : (
                <div className="border-t border-line pt-7 text-center py-8">
                  <p className="text-muted text-[12px] font-mono">Select a system and enter the area above.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

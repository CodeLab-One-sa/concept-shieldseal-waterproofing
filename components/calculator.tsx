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
    setResult({ low: Math.round(s.low * a / 100) * 100, high: Math.round(s.high * a / 100) * 100, label: s.label });
  }

  const fmt = (n: number) => "R\u00a0" + n.toLocaleString("en-ZA");

  return (
    <section id="calculator" className="py-28 bg-ink tech-grid">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-14">
          <div className="lg:col-span-7">
            <p className="label mb-5">Estimator — Price Guide</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white text-balance leading-[0.92]">
              How much will<br />it cost?
            </h2>
          </div>
          <div className="lg:col-span-5 lg:flex lg:items-end">
            <p className="text-white/50 text-[14px] leading-relaxed">
              Select your surface type and enter the area. We will give you a realistic price range based on current market rates. Your actual quote depends on surface condition and access.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Rate reference — clickable rows */}
          <div>
            <p className="label-muted mb-4">Rate reference — per m² (supply and apply, excl. VAT)</p>
            <div className="border border-border">
              <div className="grid grid-cols-12 border-b border-border bg-ink2 px-5 py-3">
                <span className="label-muted col-span-7">System</span>
                <span className="label-muted col-span-5 text-right">Rate / m²</span>
              </div>
              {QUOTE_SURFACES.map((s, i) => (
                <button key={s.id} onClick={() => { setSurface(s.id); setResult(null); }}
                  className={`w-full grid grid-cols-12 px-5 py-4 text-left transition-colors ${i < QUOTE_SURFACES.length - 1 ? "border-b border-border" : ""} ${surface === s.id ? "bg-cyan/[0.07]" : "hover:bg-ink2"}`}>
                  <span className={`col-span-7 text-[13px] flex items-center gap-2.5 ${surface === s.id ? "text-cyan" : "text-white/58"}`}>
                    {surface === s.id && <span className="w-1.5 h-1.5 bg-cyan rounded-full shrink-0" />}
                    {s.label}
                  </span>
                  <span className={`col-span-5 text-[12px] font-mono text-right tabular-nums ${surface === s.id ? "text-cyan" : "text-white/35"}`}>
                    R{s.low} – R{s.high}
                  </span>
                </button>
              ))}
            </div>
            <p className="text-white/28 text-[11px] font-mono mt-3">Click a row to select it. Rates include product and application.</p>
          </div>

          {/* Calculator */}
          <div>
            <p className="label-muted mb-4">Calculate your estimate</p>
            <div className="border border-border p-7 lg:p-8 bg-ink2/50">
              <div className="space-y-5 mb-6">
                <div>
                  <label className="label-muted block mb-2.5">Waterproofing system</label>
                  <select value={surface} onChange={e => { setSurface(e.target.value); setResult(null); }}
                    className="w-full bg-ink border border-border focus:border-border-s px-4 py-3.5 text-[13px] text-white/75 focus:outline-none font-mono transition-colors appearance-none cursor-pointer">
                    <option value="">-- Select system --</option>
                    {QUOTE_SURFACES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="label-muted block mb-2.5">Area in square metres</label>
                  <input type="number" min="1" placeholder="e.g. 150" value={area}
                    onChange={e => { setArea(e.target.value); setResult(null); }}
                    className="w-full bg-ink border border-border focus:border-border-s px-4 py-3.5 text-[13px] text-white placeholder-white/28 focus:outline-none font-mono transition-colors" />
                </div>
                <button onClick={calculate} disabled={!surface || !area}
                  className="w-full bg-cyan hover:bg-cyan-l disabled:opacity-30 disabled:cursor-not-allowed text-ink font-black text-[12px] py-4 uppercase tracking-widest transition-all duration-200 hover:-translate-y-px">
                  Calculate estimate
                </button>
              </div>

              {result ? (
                <div className="border-t border-border pt-7">
                  <p className="label-muted mb-4">Output — {result.label}</p>
                  <div className="mb-2">
                    <span className="font-mono text-cyan font-bold tabular-nums" style={{ fontSize:"3rem", lineHeight:1 }}>{fmt(result.low)}</span>
                  </div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex-1 h-px bg-border-s" />
                    <span className="text-white/30 text-[12px] font-mono uppercase">to</span>
                    <div className="flex-1 h-px bg-border-s" />
                  </div>
                  <div className="mb-5">
                    <span className="font-mono font-bold tabular-nums" style={{ fontSize:"2rem", lineHeight:1, color:"rgba(0,180,198,0.6)" }}>{fmt(result.high)}</span>
                  </div>
                  <p className="text-white/30 text-[11px] font-mono mb-6">Estimate excludes VAT. Based on supply and application only. Actual quote depends on site condition and access requirements.</p>
                  <div className="rule mb-5" />
                  <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer"
                    className="label text-cyan hover:text-cyan-l transition-colors">
                    Confirm with a site-specific quote via WhatsApp →
                  </a>
                </div>
              ) : (
                <div className="border-t border-border pt-7 text-center py-10">
                  <p className="text-white/22 text-[12px] font-mono">Select a system and enter the area<br />to see your price estimate here.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

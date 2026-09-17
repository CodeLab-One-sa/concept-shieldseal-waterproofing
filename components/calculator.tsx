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
    <section id="calculator" className="py-24 bg-ink tech-grid">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="label mb-4">Specification — Quote Estimator</p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white text-balance leading-tight max-w-xl mb-14">
          How much does it cost?<br />
          <span className="text-cyan">Find out now.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Rate table */}
          <div>
            <p className="label-muted mb-4">System rate reference — per m² (excl. VAT)</p>
            <div className="border border-border">
              <div className="grid grid-cols-2 border-b border-border bg-ink2 px-4 py-2.5">
                <span className="label-muted">System</span>
                <span className="label-muted text-right">Rate / m²</span>
              </div>
              {QUOTE_SURFACES.map((s, i) => (
                <button key={s.id} onClick={() => { setSurface(s.id); setResult(null); }}
                  className={`w-full grid grid-cols-2 px-4 py-3.5 text-left ${i < QUOTE_SURFACES.length - 1 ? "border-b border-border" : ""} ${surface === s.id ? "bg-cyan/8" : "hover:bg-ink2"} transition-colors`}>
                  <span className={`text-[13px] flex items-center gap-2 ${surface === s.id ? "text-cyan" : "text-white/60"}`}>
                    {surface === s.id && <span className="w-1.5 h-1.5 bg-cyan rounded-full shrink-0" />}
                    {s.label}
                  </span>
                  <span className="text-[12px] font-mono text-right tabular-nums" style={{ color: surface === s.id ? "#00B4C6" : "rgba(255,255,255,0.3)" }}>R{s.low} – R{s.high}</span>
                </button>
              ))}
            </div>
            <p className="text-[11px] text-white/20 font-mono mt-3">Select a system above or use the dropdown below.</p>
          </div>

          {/* Calculator form */}
          <div>
            <p className="label-muted mb-4">Input your area</p>
            <div className="border border-border p-7">
              <div className="space-y-5">
                <div>
                  <label className="label-muted block mb-2">Waterproofing system</label>
                  <select value={surface} onChange={e => { setSurface(e.target.value); setResult(null); }}
                    className="w-full bg-ink border border-border focus:border-border-s px-4 py-3 text-[13px] text-white/70 focus:outline-none font-mono transition-colors appearance-none">
                    <option value="">-- Select system --</option>
                    {QUOTE_SURFACES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="label-muted block mb-2">Surface area in m²</label>
                  <input type="number" min="1" placeholder="e.g. 150" value={area}
                    onChange={e => { setArea(e.target.value); setResult(null); }}
                    className="w-full bg-ink border border-border focus:border-border-s px-4 py-3 text-[13px] text-white placeholder-white/18 focus:outline-none font-mono transition-colors" />
                </div>
                <button onClick={calculate} disabled={!surface || !area}
                  className="w-full bg-cyan hover:bg-cyan-l disabled:opacity-30 disabled:cursor-not-allowed text-ink font-black text-[12px] py-3.5 uppercase tracking-widest transition-all duration-200 hover:-translate-y-px">
                  Calculate estimate
                </button>
              </div>

              {result && (
                <div className="mt-6 border-t border-border pt-6">
                  <p className="label-muted mb-3">Output — {result.label}</p>
                  <div className="mb-1">
                    <span className="font-mono text-cyan font-bold tabular-nums" style={{ fontSize:"2.6rem", lineHeight:1 }}>{fmt(result.low)}</span>
                    <span className="text-white/30 text-base font-mono mx-2">to</span>
                    <span className="font-mono font-bold tabular-nums" style={{ fontSize:"1.8rem", lineHeight:1, color:"rgba(0,180,198,0.65)" }}>{fmt(result.high)}</span>
                  </div>
                  <p className="text-[11px] text-white/25 font-mono mb-4">Excludes VAT. Actual quote subject to site inspection and condition.</p>
                  <div className="rule mb-4" />
                  <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="label text-cyan hover:text-cyan-l transition-colors">
                    Get a confirmed site quote via WhatsApp →
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

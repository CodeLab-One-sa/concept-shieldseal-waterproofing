"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { QUOTE_SURFACES, COMPANY } from "@/lib/content";

export default function QuoteCalculator() {
  const [surface, setSurface] = useState("");
  const [area, setArea] = useState("");
  const [result, setResult] = useState<{ low: number; high: number } | null>(null);

  function calculate() {
    const s = QUOTE_SURFACES.find(x => x.id === surface);
    const a = parseFloat(area);
    if (!s || !a || a <= 0) return;
    setResult({ low: Math.round(s.low * a / 100) * 100, high: Math.round(s.high * a / 100) * 100 });
  }

  const fmt = (n: number) => "R\u00a0" + n.toLocaleString("en-ZA");

  return (
    <section id="calculator" className="py-24 bg-ink2">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div className="lg:sticky lg:top-28">
            <p className="text-amber text-[11px] font-bold tracking-[0.2em] uppercase mb-5">Instant price guide</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6 text-balance leading-tight">How much does waterproofing cost?</h2>
            <p className="text-white/50 text-[15px] leading-relaxed mb-6">Select your surface type, enter the area in square metres, and we give you a realistic Rand estimate. Your actual quote depends on the existing condition and access.</p>

            {/* Per-m price table */}
            <div className="border border-border rounded overflow-hidden">
              <div className="bg-ink3 px-4 py-2.5 border-b border-border">
                <p className="text-[11px] font-bold text-white/40 tracking-widest uppercase">Rate per square metre (supply and apply)</p>
              </div>
              {QUOTE_SURFACES.map(s => (
                <div key={s.id} className="flex items-center justify-between px-4 py-3 border-b border-border/50 last:border-0 hover:bg-white/[0.02] transition-colors">
                  <span className="text-[13px] text-white/65">{s.label}</span>
                  <span className="text-[13px] font-bold text-white tabular-nums">R{s.low} - R{s.high}/m</span>
                </div>
              ))}
            </div>
            <p className="text-[12px] text-white/25 mt-3">Excludes VAT. Planning guide only, not a formal quote.</p>
          </div>

          <div>
            <div className="bg-ink border border-border rounded p-7 mb-5">
              <h3 className="text-[16px] font-bold text-white mb-5">Calculate your estimate</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-[11px] text-white/40 mb-1.5 tracking-wide">Surface type</label>
                  <select value={surface} onChange={e => { setSurface(e.target.value); setResult(null); }}
                    className="w-full bg-ink2 border border-border focus:border-amber/40 rounded px-3.5 py-3 text-[13px] text-white/70 focus:outline-none transition-colors appearance-none">
                    <option value="">Select surface...</option>
                    {QUOTE_SURFACES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] text-white/40 mb-1.5 tracking-wide">Area in square metres</label>
                  <input type="number" min="1" placeholder="e.g. 120" value={area}
                    onChange={e => { setArea(e.target.value); setResult(null); }}
                    className="w-full bg-ink2 border border-border focus:border-amber/40 rounded px-3.5 py-3 text-[13px] text-white placeholder-white/20 focus:outline-none transition-colors" />
                </div>
                <button onClick={calculate} disabled={!surface || !area}
                  className="w-full flex items-center justify-center gap-2 bg-amber hover:bg-amber-light disabled:opacity-35 disabled:cursor-not-allowed text-white font-bold text-[14px] py-3.5 rounded transition-all duration-200 hover:-translate-y-px disabled:hover:translate-y-0">
                  Calculate <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {result && (
              <div className="bg-amber p-7 rounded">
                <p className="text-white/70 text-[11px] font-bold tracking-widest uppercase mb-3">Your price estimate</p>
                <p className="text-5xl font-black text-white mb-1 tabular-nums leading-none">{fmt(result.low)}</p>
                <p className="text-white/60 text-lg font-semibold mb-1">to {fmt(result.high)}</p>
                <p className="text-white/50 text-[12px] mb-5">Excludes VAT. Based on supply and application only.</p>
                <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-amber-dark font-bold text-[13px] px-5 py-3 rounded transition-all duration-200 hover:bg-white/90">
                  Get an accurate quote via WhatsApp <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

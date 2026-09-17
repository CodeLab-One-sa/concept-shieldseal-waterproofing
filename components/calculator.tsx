"use client";
import { useState } from "react";
import { Calculator, ArrowRight } from "lucide-react";
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

  function fmt(n: number) {
    return "R\u00a0" + n.toLocaleString("en-ZA");
  }

  return (
    <section id="calculator" className="py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-orange text-sm font-semibold mb-3">Instant price guide</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-5 text-balance leading-tight">Get a rough idea<br />of what it will cost.</h2>
            <p className="text-white/50 text-[15px] leading-relaxed mb-8">Select your surface type, enter the area in square metres, and we will give you a realistic price range. Your actual quote may vary based on existing condition, access, and repairs required.</p>
            <p className="text-white/30 text-sm">Prices shown are per square metre and exclude VAT. Use this as a planning guide, not a formal quote.</p>
          </div>

          <div className="bg-charcoal border border-white/[0.08] rounded-2xl p-8 shadow-[0_24px_64px_rgba(0,0,0,0.4)]">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-xl bg-orange/12 border border-orange/25 flex items-center justify-center">
                <Calculator className="w-4 h-4 text-orange" />
              </div>
              <h3 className="text-[17px] font-bold text-white">Quote calculator</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-[11px] text-muted mb-1.5">Surface type</label>
                <select value={surface} onChange={e => { setSurface(e.target.value); setResult(null); }}
                  className="w-full bg-surface border border-white/[0.08] focus:border-orange/30 rounded-xl px-3.5 py-3 text-[13px] text-white/75 focus:outline-none transition-colors appearance-none">
                  <option value="">Select surface type...</option>
                  {QUOTE_SURFACES.map(s => <option key={s.id} value={s.id}>{s.label} (R{s.low} - R{s.high}/m)</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[11px] text-muted mb-1.5">Total area (square metres)</label>
                <input type="number" min="1" placeholder="e.g. 120" value={area}
                  onChange={e => { setArea(e.target.value); setResult(null); }}
                  className="w-full bg-surface border border-white/[0.08] focus:border-orange/30 rounded-xl px-3.5 py-3 text-[13px] text-white placeholder-muted/40 focus:outline-none transition-colors" />
              </div>

              <button onClick={calculate} disabled={!surface || !area}
                className="w-full flex items-center justify-center gap-2 bg-orange hover:bg-orange-light disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-[14px] py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-px disabled:hover:translate-y-0">
                Calculate estimate <ArrowRight className="w-4 h-4" />
              </button>

              {result && (
                <div className="mt-2 bg-orange/8 border border-orange/20 rounded-xl p-5">
                  <p className="text-[11px] text-orange/70 font-semibold mb-2 tracking-widest uppercase">Estimated price range</p>
                  <p className="text-3xl font-black text-white mb-1 tabular-nums">{fmt(result.low)} <span className="text-white/40 text-xl">to</span> {fmt(result.high)}</p>
                  <p className="text-[12px] text-white/40 mt-2">Excludes VAT. Based on supply and application only. Site inspection may reveal additional prep or repair requirements.</p>
                  <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-orange text-[13px] font-semibold hover:text-orange-light transition-colors">
                    Get an accurate quote via WhatsApp <ArrowRight className="w-3.5 h-3.5" />
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

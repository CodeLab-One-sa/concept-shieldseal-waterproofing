"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import AnimateIn from "./animate-in";
import { FAQS } from "@/lib/content";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const schema = { "@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({ "@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a} })) };
  return (
    <section id="faq" className="py-24 bg-ink2">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <AnimateIn className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <p className="text-amber text-[11px] font-bold tracking-[0.2em] uppercase mb-3">Questions</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white text-balance leading-tight">Before you call,<br />read these first.</h2>
            </div>
            <p className="text-white/40 text-[14px] max-w-xs lg:mb-2">Anything not here, call <a href="tel:0113456700" className="text-amber hover:text-amber-light transition-colors">011 345 6700</a> or WhatsApp.</p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {FAQS.map((faq, i) => (
            <AnimateIn key={i} delay={i * 40}>
              <div className="border border-border rounded bg-ink hover:border-amber/20 transition-colors duration-200">
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left" aria-expanded={open === i}>
                  <span className="text-[14px] font-semibold text-white/85 leading-snug">{faq.q}</span>
                  <span className="shrink-0 w-6 h-6 rounded-sm bg-amber/10 border border-amber/20 flex items-center justify-center mt-0.5 transition-colors duration-200">
                    {open === i ? <Minus className="w-3.5 h-3.5 text-amber" /> : <Plus className="w-3.5 h-3.5 text-amber" />}
                  </span>
                </button>
                {open === i && <div className="px-6 pb-5 text-[14px] text-white/50 leading-relaxed border-t border-border pt-4">{faq.a}</div>}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

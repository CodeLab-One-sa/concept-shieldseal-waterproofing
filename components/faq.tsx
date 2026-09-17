"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimateIn from "./animate-in";
import { FAQS } from "@/lib/content";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) };
  return (
    <section id="faq" className="py-28 bg-surface">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-20">
          <AnimateIn className="lg:col-span-2">
            <p className="text-orange text-sm font-semibold mb-3">Common questions</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-5 text-balance leading-tight">Things people ask before booking.</h2>
            <p className="text-white/45 text-[14px] leading-relaxed">Anything not covered here, call us on <a href="tel:0113456700" className="text-orange hover:text-orange-light transition-colors">011 345 6700</a> or send us a WhatsApp.</p>
          </AnimateIn>
          <AnimateIn className="lg:col-span-3 space-y-2">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-charcoal border border-white/[0.07] rounded-xl overflow-hidden">
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-white/[0.02] transition-colors" aria-expanded={open === i}>
                  <span className="text-[14px] font-semibold text-white/90">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-muted/60 shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && <div className="px-6 pb-5 pt-1 text-[14px] text-white/50 leading-relaxed border-t border-white/[0.06]">{faq.a}</div>}
              </div>
            ))}
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

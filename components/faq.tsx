"use client";
import { useState } from "react";
import AnimateIn from "./animate-in";
import { FAQS } from "@/lib/content";

export default function FAQ() {
  const [open, setOpen] = useState<number|null>(null);
  const schema = { "@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({ "@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a} })) };
  return (
    <section id="faq" className="py-24 bg-ink tech-grid">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(schema) }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnimateIn className="mb-12">
          <p className="label mb-4">FAQ — Common questions</p>
          <div className="flex items-end justify-between gap-8">
            <h2 className="text-4xl font-black tracking-tight text-white text-balance leading-tight max-w-lg">
              Before you book,<br /><span className="text-cyan">read these first.</span>
            </h2>
            <p className="label-muted hidden md:block text-right">Questions not answered here?<br />Call <a href="tel:0113456700" className="text-cyan hover:text-cyan-l transition-colors">011 345 6700</a></p>
          </div>
        </AnimateIn>

        <div className="border border-border">
          {FAQS.map((faq, i) => (
            <AnimateIn key={i} delay={i * 35}>
              <div className={`${i < FAQS.length - 1 ? "border-b border-border" : ""}`}>
                <button onClick={() => setOpen(open===i ? null : i)}
                  className="w-full flex items-start justify-between gap-6 px-6 py-5 text-left hover:bg-ink2 transition-colors" aria-expanded={open===i}>
                  <div className="flex items-start gap-4">
                    <span className="label text-cyan/40 shrink-0 mt-0.5">Q{String(i+1).padStart(2,"0")}</span>
                    <span className="text-[14px] font-semibold text-white/85 leading-snug">{faq.q}</span>
                  </div>
                  <span className="text-cyan/50 font-mono text-lg shrink-0 mt-0.5">{open===i ? "–" : "+"}</span>
                </button>
                {open===i && (
                  <div className="px-6 pb-5 grid grid-cols-12">
                    <div className="col-span-1" />
                    <div className="col-span-11 text-[13px] text-white/45 leading-relaxed border-t border-border pt-4">{faq.a}</div>
                  </div>
                )}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

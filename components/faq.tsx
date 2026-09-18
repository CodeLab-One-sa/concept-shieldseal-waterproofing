"use client";
import { useState } from "react";
import AnimateIn from "./animate-in";
import { FAQS } from "@/lib/content";

export default function FAQ() {
  const [open, setOpen] = useState<number|null>(null);
  const schema = { "@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({ "@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a} })) };
  return (
    <section id="faq" className="py-24 bg-canvas border-y border-line">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(schema) }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnimateIn className="mb-12">
          <p className="label mb-4">FAQ</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            <h2 className="font-display font-black text-ink text-balance leading-none"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", letterSpacing: "-0.02em" }}>
              Questions we<br /><span className="text-teal">get asked most.</span>
            </h2>
            <p className="text-ink-mid text-[14px] leading-relaxed">
              Not answered here? Call <a href="tel:0113456700" className="text-teal hover:text-teal-l transition-colors">011 345 6700</a> or send a WhatsApp.
            </p>
          </div>
        </AnimateIn>

        <div className="border border-line">
          {FAQS.map((faq, i) => (
            <AnimateIn key={i} delay={i * 35}>
              <div className={i < FAQS.length - 1 ? "border-b border-line" : ""}>
                <button onClick={() => setOpen(open===i ? null : i)}
                  className="w-full flex items-start justify-between gap-6 px-6 py-6 text-left hover:bg-canvas-s transition-colors"
                  aria-expanded={open===i}>
                  <div className="flex items-start gap-4">
                    <span className="label text-teal/60 shrink-0 mt-0.5" style={{ lineHeight:"1.5rem" }}>Q{String(i+1).padStart(2,"0")}</span>
                    <span className="text-[14px] font-semibold text-ink leading-snug">{faq.q}</span>
                  </div>
                  <span className="text-teal/60 font-mono text-xl shrink-0 mt-0.5 transition-transform duration-200"
                    style={{ transform: open===i ? "rotate(45deg)" : "rotate(0)" }}>+</span>
                </button>
                {open===i && (
                  <div className="border-t border-line bg-canvas-s">
                    <div className="px-6 py-6 grid grid-cols-12">
                      <div className="col-span-1 hidden md:block" />
                      <p className="col-span-12 md:col-span-10 text-[14px] text-ink-mid leading-relaxed">{faq.a}</p>
                    </div>
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

"use client";
import { useState } from "react";
import AnimateIn from "./animate-in";
import { FAQS } from "@/lib/content";

export default function FAQ() {
  const [open, setOpen] = useState<number|null>(null);
  const schema = {
    "@context":"https://schema.org","@type":"FAQPage",
    "mainEntity":FAQS.map(f=>({ "@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a} })),
  };
  return (
    <section id="faq" className="py-28 bg-ink tech-grid">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(schema) }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <AnimateIn className="mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="label mb-5">FAQ — Common questions</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white text-balance leading-[0.95]">
                Before you call,<br /><span className="text-cyan">read these first.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:flex lg:items-end">
              <p className="text-white/45 text-[14px] leading-relaxed">
                Can&apos;t find your answer here? Call us on{" "}
                <a href="tel:0113456700" className="text-cyan hover:text-cyan-l transition-colors">{" "}011 345 6700</a> or send a WhatsApp.
              </p>
            </div>
          </div>
        </AnimateIn>

        {/* FAQ rows in a single border */}
        <div className="border border-border">
          {FAQS.map((faq, i) => (
            <AnimateIn key={i} delay={i * 35}>
              <div className={i < FAQS.length - 1 ? "border-b border-border" : ""}>
                <button
                  onClick={() => setOpen(open===i ? null : i)}
                  className="w-full flex items-start justify-between gap-6 px-6 py-6 text-left hover:bg-ink2 transition-colors"
                  aria-expanded={open===i}
                >
                  <div className="flex items-start gap-5">
                    <span className="label text-cyan/38 shrink-0 mt-0.5" style={{ lineHeight:"1.5rem" }}>Q{String(i+1).padStart(2,"0")}</span>
                    <span className="text-[14px] font-semibold text-white/85 leading-snug">{faq.q}</span>
                  </div>
                  <span className="text-cyan/45 font-mono text-xl shrink-0 mt-0.5 transition-transform duration-200" style={{ transform: open===i ? "rotate(45deg)" : "rotate(0)" }}>+</span>
                </button>
                {open===i && (
                  <div className="border-t border-border">
                    <div className="px-6 py-6 grid grid-cols-12">
                      <div className="col-span-1 hidden md:block" />
                      <div className="col-span-12 md:col-span-10">
                        <p className="text-[14px] text-white/52 leading-relaxed">{faq.a}</p>
                      </div>
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

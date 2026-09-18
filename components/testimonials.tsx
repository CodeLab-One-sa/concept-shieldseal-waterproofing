import { Star } from "lucide-react";
import AnimateIn from "./animate-in";
import { TESTIMONIALS } from "@/lib/content";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-canvas-s">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnimateIn className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            <div>
              <p className="label mb-4">Client Reviews</p>
              <h2 className="font-display font-black text-ink text-balance leading-none"
                style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", letterSpacing: "-0.02em" }}>
                Fixed properly.<br />
                <span className="text-teal">No return visits.</span>
              </h2>
            </div>
            <div className="flex flex-col lg:items-end gap-2">
              <div className="flex gap-1">{[...Array(5)].map((_,i) => <Star key={i} className="w-5 h-5 text-teal fill-teal" />)}</div>
              <p className="text-muted text-[13px] font-mono">Average rating — all clients</p>
            </div>
          </div>
        </AnimateIn>

        <div className="border border-line bg-canvas">
          {TESTIMONIALS.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 65}>
              <div className={`group hover:bg-canvas-s transition-colors duration-200 ${i < TESTIMONIALS.length - 1 ? "border-b border-line" : ""}`}>
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-3 px-7 py-8 border-b lg:border-b-0 lg:border-r border-line">
                    <div className="flex gap-0.5 mb-4">{Array.from({length:t.rating}).map((_,j) => <Star key={j} className="w-3.5 h-3.5 text-teal fill-teal" />)}</div>
                    <p className="font-display font-bold text-ink mb-1" style={{ fontSize:"1.05rem" }}>{t.name}</p>
                    <p className="text-[12px] text-ink-mid font-mono mb-1">{t.role}</p>
                    <p className="label">{t.area}, Gauteng</p>
                  </div>
                  <div className="lg:col-span-9 px-7 py-8 relative">
                    <span className="absolute top-4 right-5 text-teal/10 font-display font-black select-none" style={{ fontSize:"5rem", lineHeight:1 }} aria-hidden="true">&rdquo;</span>
                    <p className="text-[15px] text-ink-mid leading-relaxed pr-8">&ldquo;{t.content}&rdquo;</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={100} className="mt-8 flex items-center gap-6">
          <div className="rule flex-1" />
          <a href="#contact" className="label hover:text-teal-l transition-colors whitespace-nowrap shrink-0">Book your inspection →</a>
          <div className="rule flex-1" />
        </AnimateIn>
      </div>
    </section>
  );
}

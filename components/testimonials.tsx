import { Star } from "lucide-react";
import AnimateIn from "./animate-in";
import { TESTIMONIALS } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="py-28 bg-charcoal">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <AnimateIn className="mb-14">
          <p className="text-orange text-sm font-semibold mb-3">What clients say</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white text-balance leading-tight">Fixed properly. No return visits.</h2>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 65}>
              <div className="bg-surface border border-white/[0.07] rounded-2xl p-7 flex flex-col h-full hover:border-orange/20 transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex gap-0.5 mb-5">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="w-3.5 h-3.5 text-orange fill-orange" />)}</div>
                <p className="text-white/65 text-[14px] leading-relaxed flex-1 mb-6 italic">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                  <div className="w-9 h-9 rounded-full bg-orange/12 border border-orange/20 flex items-center justify-center text-orange text-[11px] font-black shrink-0">{t.name.split(" ").map(n => n[0]).join("")}</div>
                  <div>
                    <p className="text-[13px] font-semibold text-white">{t.name}</p>
                    <p className="text-[11px] text-muted">{t.role}, {t.area}</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

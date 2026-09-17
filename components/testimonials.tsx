import { Star } from "lucide-react";
import AnimateIn from "./animate-in";
import { TESTIMONIALS } from "@/lib/content";

export default function Testimonials() {
  return (
    // CREAM background again — alternating pattern continues
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <AnimateIn className="mb-12">
          <p className="text-amber-dark text-[11px] font-bold tracking-[0.2em] uppercase mb-3">What clients say</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight on-cream text-balance leading-tight">Fixed properly.<br />No return visits.</h2>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border-cream border border-border-cream rounded overflow-hidden">
          {TESTIMONIALS.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 60}>
              <div className="bg-cream hover:bg-white transition-colors duration-300 p-7 h-full flex flex-col">
                <div className="flex gap-0.5 mb-5">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="w-3.5 h-3.5 text-amber fill-amber" />)}</div>
                <p className="text-[14px] on-cream-muted leading-relaxed flex-1 mb-6">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-3 pt-5 border-t border-border-cream">
                  <div className="w-9 h-9 rounded-sm bg-amber/15 border border-amber/25 flex items-center justify-center text-amber text-[11px] font-black shrink-0">{t.name.split(" ").map(n => n[0]).join("")}</div>
                  <div>
                    <p className="text-[13px] font-bold on-cream">{t.name}</p>
                    <p className="text-[11px] on-cream-muted">{t.role}, {t.area}</p>
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

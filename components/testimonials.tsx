import { Star } from "lucide-react";
import AnimateIn from "./animate-in";
import { TESTIMONIALS } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="py-24 bg-ink2">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnimateIn className="mb-12">
          <p className="label mb-4">Client Feedback</p>
          <h2 className="text-4xl font-black tracking-tight text-white text-balance leading-tight">
            Fixed. First time.<br /><span className="text-cyan">Every time.</span>
          </h2>
        </AnimateIn>
        <div className="border border-border">
          {TESTIMONIALS.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 65}>
              <div className={`p-8 ${i < TESTIMONIALS.length - 1 ? "border-b border-border" : ""} hover:bg-ink3 transition-colors`}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Reviewer info */}
                  <div className="lg:col-span-3">
                    <div className="flex gap-0.5 mb-3">{Array.from({length:t.rating}).map((_,j) => <Star key={j} className="w-3 h-3 text-cyan fill-cyan" />)}</div>
                    <p className="text-[14px] font-bold text-white">{t.name}</p>
                    <p className="text-[12px] text-white/35 font-mono mt-0.5">{t.role}</p>
                    <p className="label-muted mt-1">{t.area}, Gauteng</p>
                  </div>
                  {/* Quote */}
                  <div className="lg:col-span-8 lg:col-start-5">
                    <span className="text-cyan/20 text-5xl font-black leading-none select-none">&ldquo;</span>
                    <p className="text-[15px] text-white/65 leading-relaxed -mt-3">{t.content}</p>
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

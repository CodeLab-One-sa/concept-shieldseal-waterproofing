import { Star } from "lucide-react";
import AnimateIn from "./animate-in";
import { TESTIMONIALS } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="py-28 bg-ink2 relative overflow-hidden">
      {/* Large decorative quote mark — background element */}
      <div
        className="absolute -top-8 right-10 font-black text-cyan/[0.04] select-none pointer-events-none leading-none"
        style={{ fontSize:"28rem" }}
        aria-hidden="true"
      >&ldquo;</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <AnimateIn className="mb-14">
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="label mb-5">Client Feedback</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white text-balance leading-[0.95]">
                Fixed properly.<br /><span className="text-cyan">No return visits.</span>
              </h2>
            </div>
            <div className="hidden md:block text-right">
              <p className="label-muted mb-1">Average rating</p>
              <div className="flex justify-end gap-0.5">
                {[...Array(5)].map((_,i) => <Star key={i} className="w-4 h-4 text-cyan fill-cyan" />)}
              </div>
            </div>
          </div>
        </AnimateIn>

        <div className="border border-border">
          {TESTIMONIALS.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 65}>
              <div className={`${i < TESTIMONIALS.length - 1 ? "border-b border-border" : ""} group hover:bg-ink3 transition-colors duration-200`}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

                  {/* Left: reviewer info */}
                  <div className="lg:col-span-3 px-7 py-8 lg:border-r border-border border-b lg:border-b-0">
                    <div className="flex gap-0.5 mb-5">
                      {Array.from({length:t.rating}).map((_,j) => <Star key={j} className="w-3.5 h-3.5 text-cyan fill-cyan" />)}
                    </div>
                    <p className="text-[15px] font-bold text-white mb-1">{t.name}</p>
                    <p className="text-[12px] text-white/40 font-mono mb-1">{t.role}</p>
                    <p className="label text-cyan/55">{t.area}, Gauteng</p>
                  </div>

                  {/* Right: quote */}
                  <div className="lg:col-span-9 px-7 py-8 relative">
                    {/* Decorative opening quote */}
                    <span className="absolute top-6 right-6 text-cyan/10 font-black text-5xl leading-none select-none">&rdquo;</span>
                    <p className="text-[15px] text-white/65 leading-relaxed relative z-10 pr-8">
                      &ldquo;{t.content}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={100} className="mt-8 flex items-center gap-4">
          <div className="rule flex-1" />
          <a href="#contact" className="label text-cyan/60 hover:text-cyan transition-colors whitespace-nowrap">
            Book your inspection →
          </a>
          <div className="rule flex-1" />
        </AnimateIn>
      </div>
    </section>
  );
}

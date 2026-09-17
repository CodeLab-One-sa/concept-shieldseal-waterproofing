import { Star } from "lucide-react";
import AnimateIn from "./animate-in";
import { TESTIMONIALS } from "@/lib/content";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-28 bg-ink2">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <AnimateIn className="mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            <div>
              <p className="label mb-5">Client Reviews</p>
              <h2
                className="font-display font-black text-white text-balance leading-none"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}
              >
                Fixed properly.<br />
                <span className="text-teal">No return visits.</span>
              </h2>
            </div>
            <div className="flex flex-col lg:items-end gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-teal fill-teal" />)}
              </div>
              <p className="text-white/40 text-[13px] font-mono">Average rating — all clients</p>
            </div>
          </div>
        </AnimateIn>

        {/* Testimonials as bordered rows */}
        <div className="border border-border">
          {TESTIMONIALS.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 65}>
              <div
                className={`group hover:bg-ink3 transition-colors duration-200 ${
                  i < TESTIMONIALS.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Reviewer */}
                  <div className="lg:col-span-3 px-7 py-8 border-b lg:border-b-0 lg:border-r border-border">
                    <div className="flex gap-0.5 mb-5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 text-teal fill-teal" />
                      ))}
                    </div>
                    <p
                      className="font-display font-bold text-white mb-1"
                      style={{ fontSize: "1.05rem" }}
                    >
                      {t.name}
                    </p>
                    <p className="text-[12px] text-white/38 font-mono mb-1">{t.role}</p>
                    <p className="label text-teal/55">{t.area}, Gauteng</p>
                  </div>

                  {/* Quote */}
                  <div className="lg:col-span-9 px-7 py-8 relative">
                    <span
                      className="absolute top-5 right-6 text-teal/10 font-display font-black select-none"
                      style={{ fontSize: "5rem", lineHeight: 1 }}
                      aria-hidden="true"
                    >&rdquo;</span>
                    <p className="text-[15px] text-white/62 leading-relaxed relative z-10 pr-10">
                      &ldquo;{t.content}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={100} className="mt-8 flex items-center gap-6">
          <div className="rule flex-1" />
          <a href="#contact" className="label text-teal/60 hover:text-teal transition-colors whitespace-nowrap shrink-0">
            Book your inspection →
          </a>
          <div className="rule flex-1" />
        </AnimateIn>
      </div>
    </section>
  );
}

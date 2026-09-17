import AnimateIn from "./animate-in";
import { SERVICES } from "@/lib/content";

export default function Services() {
  return (
    // CREAM BACKGROUND — completely different from Sentinel
    <section id="services" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <AnimateIn className="mb-14">
          <p className="text-amber-dark text-[11px] font-bold tracking-[0.2em] uppercase mb-3">What we do</p>
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-balance leading-tight flex-1 on-cream">Every waterproofing<br />problem, solved properly.</h2>
            <p className="text-[15px] leading-relaxed max-w-sm on-cream-muted lg:mb-1">From a leaking flat roof to a flooding basement, we find the source, apply the right system, and back it with a 10-year guarantee.</p>
          </div>
        </AnimateIn>

        {/* NUMBERED LIST — not a card grid */}
        <div className="divide-y divide-border-cream">
          {SERVICES.map((svc, i) => (
            <AnimateIn key={svc.id} delay={i * 50}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-8 group">
                {/* Large number */}
                <div className="lg:col-span-1 flex items-start">
                  <span className="text-5xl font-black text-amber/30 group-hover:text-amber/60 transition-colors duration-300 leading-none tabular-nums select-none">{String(i + 1).padStart(2, "0")}</span>
                </div>
                {/* Title + description */}
                <div className="lg:col-span-5">
                  <h3 className="text-[18px] font-black on-cream mb-2 group-hover:text-amber-dark transition-colors duration-200">{svc.title}</h3>
                  <p className="text-[14px] on-cream-muted leading-relaxed">{svc.description}</p>
                </div>
                {/* Feature list */}
                <div className="lg:col-span-6 flex flex-wrap gap-2 lg:justify-end items-start content-start">
                  {svc.features.map(f => (
                    <span key={f} className="text-[12px] font-medium bg-cream-dark text-stone border border-black/8 px-3 py-1.5 rounded-sm">{f}</span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

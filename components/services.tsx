import Image from "next/image";
import AnimateIn from "./animate-in";
import { SERVICES } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="py-28 bg-charcoal">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <AnimateIn className="mb-14">
          <p className="text-orange text-sm font-semibold mb-3">What we do</p>
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white text-balance leading-tight flex-1">Every waterproofing<br />problem, solved properly.</h2>
            <p className="text-white/50 text-[15px] leading-relaxed max-w-sm lg:mb-1">From a leaking flat roof to a flooding basement, we identify the source, apply the right system, and back it with a 10-year guarantee in writing.</p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Image card spanning 1 row */}
          <AnimateIn delay={40} className="relative rounded-2xl overflow-hidden min-h-[220px] lg:row-span-2">
            <Image src="/images/waterproofing-work.jpg" alt="ShieldSeal waterproofing application in Johannesburg" fill className="object-cover" quality={80} />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-orange/70 text-xs font-mono tracking-widest uppercase mb-2">NHBRC Registered</p>
              <p className="text-white font-bold text-lg leading-tight">Proper prep. Correct system. 10-year guarantee.</p>
            </div>
          </AnimateIn>

          {SERVICES.map((svc, i) => (
            <AnimateIn key={svc.id} delay={60 + i * 55}>
              <div className="group bg-surface border border-white/[0.07] hover:border-orange/25 rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                <div className="w-2 h-6 rounded-full bg-orange/60 mb-4 group-hover:bg-orange transition-colors" />
                <h3 className="text-base font-bold text-white mb-2.5">{svc.title}</h3>
                <p className="text-[13px] text-white/50 leading-relaxed mb-4">{svc.description}</p>
                <ul className="space-y-1.5">
                  {svc.features.map(f => <li key={f} className="flex items-center gap-2 text-[11px] text-white/38"><span className="w-1 h-1 rounded-full bg-orange/50 shrink-0" />{f}</li>)}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

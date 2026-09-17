import Image from "next/image";
import AnimateIn from "./animate-in";
import { SERVICES } from "@/lib/content";

const CODES = ["WP•01","DP•02","BT•03","BP•04","RM•05","RC•06"];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-ink2">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <AnimateIn className="mb-14">
          <div className="flex items-start justify-between gap-10">
            <div>
              <p className="label mb-4">Waterproofing Systems</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white text-balance leading-tight">
                Specification-led<br />solutions.
              </h2>
            </div>
            {/* Image — contained, not dominant */}
            <div className="hidden lg:block relative w-[280px] h-[160px] flex-shrink-0 overflow-hidden">
              <Image src="/images/waterproofing-work.jpg" alt="ShieldSeal waterproofing application" fill className="object-cover" quality={80} />
              <div className="absolute inset-0 bg-ink2/40" />
              <div className="absolute bottom-3 left-3">
                <p className="label-muted">Application in progress</p>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Technical specification list */}
        <div className="border border-border">
          {SERVICES.map((svc, i) => (
            <AnimateIn key={svc.id} delay={i * 50}>
              <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-border last:border-0 group hover:bg-ink3 transition-colors duration-200">
                {/* System code */}
                <div className="lg:col-span-2 px-6 py-6 flex items-start gap-4 border-b lg:border-b-0 lg:border-r border-border">
                  <span className="label text-cyan mt-0.5">{CODES[i]}</span>
                </div>
                {/* Title + description */}
                <div className="lg:col-span-5 px-6 py-6 border-b lg:border-b-0 lg:border-r border-border">
                  <h3 className="text-[16px] font-bold text-white mb-2 group-hover:text-cyan transition-colors duration-200">{svc.title}</h3>
                  <p className="text-[13px] text-white/45 leading-relaxed">{svc.description}</p>
                </div>
                {/* Feature spec list */}
                <div className="lg:col-span-5 px-6 py-6">
                  <p className="label-muted mb-3">Includes</p>
                  <ul className="grid grid-cols-1 gap-1.5">
                    {svc.features.map(f => (
                      <li key={f} className="flex items-center gap-2.5 text-[12px] text-white/40">
                        <span className="w-[5px] h-[1px] bg-cyan/50 shrink-0 mt-px" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={80} className="mt-6 flex items-center gap-4">
          <p className="text-[12px] text-white/30 font-mono">All systems applied by NHBRC-registered teams.</p>
          <a href="#contact" className="ml-auto text-cyan text-[12px] font-mono hover:underline underline-offset-4 uppercase tracking-widest">Request inspection →</a>
        </AnimateIn>
      </div>
    </section>
  );
}

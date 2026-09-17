import Image from "next/image";
import AnimateIn from "./animate-in";
import { SERVICES } from "@/lib/content";

const CODES = ["WP•01","DP•02","BT•03","BP•04","RM•05","RC•06"];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-ink2">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header with image */}
        <AnimateIn className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="label mb-5">Waterproofing Systems — Specification</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white text-balance leading-[0.92]">
                The right system<br />for your substrate.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <div className="relative h-[190px] overflow-hidden corner-marks">
                <Image
                  src="/images/waterproofing-work.jpg"
                  alt="ShieldSeal waterproofing application"
                  fill className="object-cover"
                  quality={80}
                />
                <div className="absolute inset-0 bg-ink/35" />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink2 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <p className="label-muted">Application — torch-on system</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-white/50 text-[15px] leading-relaxed mt-8 max-w-2xl">
            Each system is specified for the substrate, exposure, and age of the surface. We do not apply one product to everything. Wrong system selection is the primary cause of premature waterproofing failure.
          </p>
        </AnimateIn>

        {/* Specification table */}
        <div className="border border-border">
          {SERVICES.map((svc, i) => (
            <AnimateIn key={svc.id} delay={i * 45}>
              <div className={`grid grid-cols-1 lg:grid-cols-12 ${i < SERVICES.length - 1 ? "border-b border-border" : ""} group hover:bg-ink3 transition-colors duration-200`}>

                {/* Code + index */}
                <div className="lg:col-span-2 px-6 py-7 flex items-start gap-3 border-b lg:border-b-0 lg:border-r border-border">
                  <div>
                    <p className="label text-cyan mb-1">{CODES[i]}</p>
                    <p className="label-muted" style={{ fontSize:"9px" }}>System ref.</p>
                  </div>
                </div>

                {/* Title + description */}
                <div className="lg:col-span-5 px-6 py-7 border-b lg:border-b-0 lg:border-r border-border">
                  <h3 className="text-[16px] font-bold text-white mb-3 group-hover:text-cyan transition-colors duration-200 leading-snug">
                    {svc.title}
                  </h3>
                  <p className="text-[13px] text-white/52 leading-relaxed">{svc.description}</p>
                </div>

                {/* Features */}
                <div className="lg:col-span-5 px-6 py-7">
                  <p className="label-muted mb-4">Scope of work</p>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {svc.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-[12px] text-white/48">
                        <span className="w-[6px] h-[1.5px] bg-cyan/45 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={80} className="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-white/35 text-[12px] font-mono flex-1">All systems applied by NHBRC-registered teams using approved materials only.</p>
          <a href="#contact" className="text-cyan text-[11px] font-mono hover:underline underline-offset-4 uppercase tracking-widest whitespace-nowrap shrink-0">
            Book a free inspection →
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}

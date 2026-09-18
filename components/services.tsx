import Image from "next/image";
import AnimateIn from "./animate-in";
import { SERVICES } from "@/lib/content";

const CODES = ["WP·01","DP·02","BT·03","BP·04","RM·05","RC·06"];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-canvas-s">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <AnimateIn className="mb-14">
          {/* Heading — always first */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="label mb-4">Waterproofing Systems</p>
              <h2
                className="font-display font-black text-ink text-balance leading-none"
                style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", letterSpacing: "-0.02em" }}
              >
                The right system<br />for the problem.
              </h2>
            </div>
            {/* Image: after description on mobile (order-3 lg:order-none), beside heading on desktop */}
            <div className="lg:col-span-5 order-3 lg:order-none">
              <div className="relative h-[200px] lg:h-[220px] overflow-hidden border border-line">
                <Image
                  src="/images/services-torch-on.jpg"
                  alt="Torch-on bitumen membrane waterproofing application"
                  fill className="object-cover object-center" quality={85}
                />
                <div className="absolute inset-0 bg-ink/30" />
                <div className="absolute bottom-3 left-4">
                  <p className="label" style={{ color:"rgba(255,255,255,0.75)" }}>Torch-on membrane application</p>
                </div>
              </div>
            </div>
            {/* Description: between heading and image on all viewports */}
            <p className="lg:hidden text-ink-mid text-[15px] font-medium leading-relaxed order-2 lg:order-none">
              Each job starts with a diagnosis. We match the system to your specific substrate, exposure, and problem, not what is fastest to apply.
            </p>
          </div>
          {/* Description on desktop (different position in layout) */}
          <p className="hidden lg:block text-ink-mid text-[15px] font-medium leading-relaxed mt-7 max-w-2xl">
            Each job starts with a diagnosis. We match the system to your specific substrate, exposure, and problem, not what is fastest to apply.
          </p>
        </AnimateIn>

        {/* Specification table */}
        <div className="border border-line bg-canvas">
          {SERVICES.map((svc, i) => (
            <AnimateIn key={svc.id} delay={i * 45}>
              <div className={`group hover:bg-canvas-s transition-colors duration-200 ${i < SERVICES.length - 1 ? "border-b border-line" : ""}`}>

                {/* Mobile: stacked layout */}
                <div className="lg:hidden px-5 py-6">
                  <div className="flex items-center gap-3 mb-3">
                    <p className="label">{CODES[i]}</p>
                    <h3 className="font-display font-bold text-ink text-[1.1rem] group-hover:text-teal transition-colors duration-200">
                      {svc.title}
                    </h3>
                  </div>
                  <p className="text-[13px] text-ink-mid font-medium leading-relaxed mb-3">{svc.description}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                    {svc.features.map(f => (
                      <span key={f} className="flex items-center gap-1.5 text-[11px] font-medium text-ink-mid">
                        <span className="w-[5px] h-[1.5px] bg-teal/50 shrink-0" />{f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Desktop: grid layout */}
                <div className="hidden lg:grid lg:grid-cols-12">
                  <div className="lg:col-span-2 px-6 py-7 flex items-start border-r border-line">
                    <p className="label">{CODES[i]}</p>
                  </div>
                  <div className="lg:col-span-5 px-6 py-7 border-r border-line">
                    <h3 className="font-display font-bold text-ink mb-3 group-hover:text-teal transition-colors duration-200" style={{ fontSize:"1.2rem" }}>
                      {svc.title}
                    </h3>
                    <p className="text-[13px] text-ink-mid font-medium leading-relaxed">{svc.description}</p>
                  </div>
                  <div className="lg:col-span-5 px-6 py-7">
                    <p className="label-dim mb-4">Scope of work</p>
                    <ul className="space-y-2.5">
                      {svc.features.map(f => (
                        <li key={f} className="flex items-center gap-3 text-[12px] font-medium text-ink-mid">
                          <span className="w-[5px] h-[1.5px] bg-teal/50 shrink-0" />{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={80} className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-ink-mid text-[12px] font-medium flex-1">All systems applied by NHBRC-registered teams.</p>
          <a href="#contact" className="label hover:text-teal-l transition-colors whitespace-nowrap shrink-0">
            Book a free inspection →
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}

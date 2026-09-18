import Image from "next/image";
import AnimateIn from "./animate-in";
import { SERVICES } from "@/lib/content";

const CODES = ["WP·01","DP·02","BT·03","BP·04","RM·05","RC·06"];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-canvas-s">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <AnimateIn className="mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="label mb-4">Waterproofing Systems</p>
              <h2 className="font-display font-black text-ink text-balance leading-none"
                style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", letterSpacing: "-0.02em" }}>
                The right system<br />for the problem.
              </h2>
            </div>
            <div className="lg:col-span-5">
              {/* Contained image — roofing work */}
              <div className="relative h-[190px] overflow-hidden border border-line">
                <Image src="/images/roof-repair.jpg" alt="Waterproofing work in progress"
                  fill className="object-cover" quality={80} />
                <div className="absolute inset-0 bg-ink/20" />
                <div className="absolute bottom-3 left-4">
                  <p className="label" style={{ color:"rgba(255,255,255,0.70)" }}>Work in progress</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-ink-mid text-[15px] leading-relaxed mt-7 max-w-2xl">
            Each job starts with a diagnosis. We match the system to your specific substrate, exposure, and problem — not to what is fastest to apply.
          </p>
        </AnimateIn>

        <div className="border border-line bg-canvas">
          {SERVICES.map((svc, i) => (
            <AnimateIn key={svc.id} delay={i * 45}>
              <div className={`grid grid-cols-1 lg:grid-cols-12 group hover:bg-canvas-s transition-colors duration-200 ${i < SERVICES.length - 1 ? "border-b border-line" : ""}`}>
                <div className="lg:col-span-2 px-6 py-7 flex items-start border-b lg:border-b-0 lg:border-r border-line">
                  <p className="label">{CODES[i]}</p>
                </div>
                <div className="lg:col-span-5 px-6 py-7 border-b lg:border-b-0 lg:border-r border-line">
                  <h3 className="font-display font-bold text-ink mb-3 group-hover:text-teal transition-colors duration-200 leading-tight"
                    style={{ fontSize: "1.2rem" }}>
                    {svc.title}
                  </h3>
                  <p className="text-[13px] text-ink-mid leading-relaxed">{svc.description}</p>
                </div>
                <div className="lg:col-span-5 px-6 py-7">
                  <p className="label-dim mb-4">Scope of work</p>
                  <ul className="space-y-2.5">
                    {svc.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-[12px] text-ink-mid">
                        <span className="w-[5px] h-[1.5px] bg-teal/50 shrink-0" />
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
          <p className="text-muted text-[12px] font-mono flex-1">All systems applied by NHBRC-registered teams.</p>
          <a href="#contact" className="label hover:text-teal-l transition-colors whitespace-nowrap shrink-0">
            Book a free inspection →
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}

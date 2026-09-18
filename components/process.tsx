import Image from "next/image";
import AnimateIn from "./animate-in";
import { LogoMark } from "./logo";
import { PROCESS } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="py-24 bg-canvas border-y border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <AnimateIn className="mb-16">
          <p className="label mb-4">Our Process</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <h2 className="font-display font-black text-ink text-balance leading-none"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", letterSpacing: "-0.02em" }}>
              From first call to<br />
              <span className="text-teal">10-year guarantee.</span>
            </h2>
            <p className="text-ink-mid text-[15px] font-medium leading-relaxed self-end">
              Most waterproofing failures happen during preparation, not application. Our process starts with an accurate diagnosis before anything is applied.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Steps */}
          <div>
            {PROCESS.map((step, i) => (
              <AnimateIn key={step.step} delay={i * 70}>
                <div className={`flex gap-6 py-8 group ${i < PROCESS.length - 1 ? "border-b border-line" : ""} hover:pl-1.5 transition-all duration-300`}>
                  <div className="w-16 shrink-0 text-right">
                    <span className="font-display font-black tabular-nums text-teal/20 group-hover:text-teal/50 transition-colors duration-300"
                      style={{ fontSize: "3rem", lineHeight: 1 }}>
                      {String(step.step).padStart(2,"0")}
                    </span>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-display font-bold text-ink mb-2 group-hover:text-teal transition-colors duration-200"
                      style={{ fontSize: "1.2rem" }}>
                      {step.title}
                    </h3>
                    <p className="text-[13px] text-ink-mid font-medium leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Right: image + spec card */}
          <AnimateIn delay={80} className="lg:sticky lg:top-28">
            <div className="border border-line">
              {/* Image: contained */}
              <div className="relative h-[240px] border-b border-line overflow-hidden">
                <Image src="/images/process-balcony.jpg" alt="Completed waterproofed balcony surface"
                  fill className="object-cover" quality={82} />
                <div className="absolute inset-0 bg-ink/20" />
                <div className="absolute top-4 left-4">
                  <span className="label" style={{ color:"rgba(255,255,255,0.75)" }}>Completed waterproof surface</span>
                </div>
              </div>

              {/* Spec card */}
              <div className="bg-canvas-s px-6 py-5 border-b border-line">
                <div className="flex items-center justify-between mb-4">
                  <p className="label">ShieldSeal: Inspection form</p>
                  <LogoMark size={22} />
                </div>
                {[
                  { code:"01", text:"Surface inspection and diagnosis" },
                  { code:"02", text:"Written scope and itemised quote" },
                  { code:"03", text:"Preparation and priming" },
                  { code:"04", text:"System application" },
                  { code:"05", text:"Sign-off and guarantee issued" },
                ].map((item, i) => (
                  <div key={item.code} className={`flex items-center gap-3 py-2.5 ${i < 4 ? "border-b border-line" : ""}`}>
                    <span className="label w-6 shrink-0">{item.code}</span>
                    <span className="text-[12px] text-ink-mid">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 divide-x divide-line">
                {[["24 hr","Quote turnaround"],["97%","No-return rate"]].map(([n,l]) => (
                  <div key={n} className="px-6 py-5 text-center">
                    <p className="font-mono font-bold text-teal mb-1" style={{ fontSize: "1.8rem" }}>{n}</p>
                    <p className="label-dim">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import AnimateIn from "./animate-in";
import { PROCESS } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="py-28 bg-ink relative overflow-hidden">
      {/* Large decorative background text — barely visible */}
      <div
        className="absolute -right-8 top-1/2 -translate-y-1/2 font-black text-white/[0.018] select-none pointer-events-none leading-none tracking-tighter"
        style={{ fontSize:"22rem", lineHeight:1 }}
        aria-hidden="true"
      >SS</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        <AnimateIn className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="label mb-5">Process — How we work</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white text-balance leading-[0.92]">
                From your first call<br />to your <span className="text-cyan">guarantee.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:flex lg:items-end">
              <p className="text-white/50 text-[14px] leading-relaxed">
                Most waterproofing failures are preparation failures. Our process is built around getting the substrate right before we apply anything.
              </p>
            </div>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Steps */}
          <div className="space-y-0">
            {PROCESS.map((step, i) => (
              <AnimateIn key={step.step} delay={i * 70}>
                <div className={`group py-8 ${i < PROCESS.length - 1 ? "border-b border-border" : ""} hover:pl-3 transition-all duration-300`}>
                  <div className="flex items-start gap-6">
                    <div className="shrink-0">
                      <span className="font-mono text-cyan/22 group-hover:text-cyan/45 font-bold tabular-nums transition-colors duration-300" style={{ fontSize:"3.2rem", lineHeight:1 }}>
                        {String(step.step).padStart(2,"0")}
                      </span>
                    </div>
                    <div className="pt-2">
                      <h3 className="text-[17px] font-bold text-white mb-2.5 group-hover:text-cyan transition-colors duration-200">
                        {step.title}
                      </h3>
                      <p className="text-[13px] text-white/50 leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Photo — with teal corner marks and stat overlay */}
          <AnimateIn delay={80} className="lg:sticky lg:top-28">
            <div className="relative overflow-hidden corner-marks">
              <div className="relative h-[440px]">
                <Image
                  src="/images/process-inspect.jpg"
                  alt="ShieldSeal site inspection and waterproofing assessment"
                  fill className="object-cover object-center"
                  quality={82}
                />
                {/* Multiple overlays for depth */}
                <div className="absolute inset-0 bg-ink/38" />
                <div className="absolute inset-x-0 top-0 h-px bg-cyan/40" />
                <div className="absolute inset-x-0 bottom-0" style={{ height:"1px", background:"rgba(0,180,198,0.4)" }} />

                {/* Photo label */}
                <div className="absolute top-4 left-4">
                  <span className="label">Site inspection in progress</span>
                </div>
              </div>

              {/* Stats bar below photo */}
              <div className="bg-ink2 border border-border border-t-0">
                <div className="grid grid-cols-3 divide-x divide-border">
                  {[
                    { n:"24 hr", l:"Quote turnaround" },
                    { n:"97%",   l:"No-return rate" },
                    { n:"2011",  l:"Established" },
                  ].map(s => (
                    <div key={s.n} className="px-5 py-5">
                      <p className="font-mono text-cyan font-bold tabular-nums mb-1" style={{ fontSize:"1.6rem", lineHeight:1 }}>{s.n}</p>
                      <p className="label-muted">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

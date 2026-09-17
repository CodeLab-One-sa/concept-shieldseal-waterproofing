import Image from "next/image";
import AnimateIn from "./animate-in";
import { PROCESS } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnimateIn className="mb-16">
          <p className="label mb-4">Process — How we work</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white text-balance leading-tight max-w-2xl">
            From first call to<br />
            <span className="text-cyan">10-year guarantee.</span>
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Steps */}
          <div className="space-y-0">
            {PROCESS.map((step, i) => (
              <AnimateIn key={step.step} delay={i * 70}>
                <div className="grid grid-cols-12 gap-6 py-7 border-b border-border last:border-0 group hover:bg-ink2 hover:px-4 transition-all duration-200 -mx-4 px-4">
                  <div className="col-span-2">
                    <span className="font-mono text-cyan/40 font-bold group-hover:text-cyan/70 transition-colors" style={{ fontSize:"2.8rem", lineHeight:1 }}>
                      {String(step.step).padStart(2,"0")}
                    </span>
                  </div>
                  <div className="col-span-10">
                    <h3 className="text-[16px] font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-[13px] text-white/45 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Photo with teal overlay */}
          <AnimateIn delay={80} className="relative h-[380px] overflow-hidden">
            <Image src="/images/process-inspect.jpg" alt="ShieldSeal site inspection" fill className="object-cover" quality={82} />
            <div className="absolute inset-0" style={{ background:"linear-gradient(to bottom, rgba(10,10,10,0.2), rgba(10,10,10,0.6))" }} />
            {/* Teal scan line effect */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-cyan/40" />
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-cyan/40" />
            {/* Stats overlay */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-border-s bg-ink/90 backdrop-blur-sm">
              <div className="grid grid-cols-2 divide-x divide-border-s px-6 py-5">
                <div>
                  <p className="label-muted mb-1">Quote turnaround</p>
                  <p className="font-mono text-cyan font-bold" style={{ fontSize:"1.8rem", lineHeight:1 }}>24 hr</p>
                </div>
                <div className="pl-6">
                  <p className="label-muted mb-1">No-return job rate</p>
                  <p className="font-mono text-cyan font-bold" style={{ fontSize:"1.8rem", lineHeight:1 }}>97%</p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

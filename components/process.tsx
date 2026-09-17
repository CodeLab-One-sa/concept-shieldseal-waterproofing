import Image from "next/image";
import AnimateIn from "./animate-in";
import { PROCESS } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="py-24 bg-ink relative overflow-hidden">
      {/* Decorative large number in background */}
      <div className="absolute top-0 right-0 text-[28rem] font-black text-white/[0.015] leading-none select-none pointer-events-none" aria-hidden="true">04</div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <AnimateIn className="mb-14">
          <p className="text-amber text-[11px] font-bold tracking-[0.2em] uppercase mb-3">How it works</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white text-balance leading-tight max-w-xl">From your first call to your 10-year guarantee.</h2>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Steps with large decorative numbers */}
          <div className="space-y-0">
            {PROCESS.map((step, i) => (
              <AnimateIn key={step.step} delay={i * 80}>
                <div className="relative flex gap-0 group">
                  {/* Large decorative step number */}
                  <div className="shrink-0 w-20 lg:w-24 text-right pr-6 pt-1">
                    <span className="text-[3.5rem] font-black leading-none text-amber/15 group-hover:text-amber/30 transition-colors duration-300 select-none tabular-nums">{String(step.step).padStart(2,"0")}</span>
                  </div>
                  <div className={`flex-1 pb-10 last:pb-0 border-l border-border pl-6 ${i < PROCESS.length - 1 ? "" : ""}`}>
                    {i < PROCESS.length - 1 && <div className="absolute left-20 lg:left-24 top-14 bottom-0 w-px bg-border" aria-hidden="true" />}
                    <div className="w-2.5 h-2.5 rounded-full bg-amber absolute left-[calc(5rem-5px)] lg:left-[calc(6rem-5px)] top-2.5" aria-hidden="true" />
                    <h3 className="text-[17px] font-bold text-white mb-2 mt-1">{step.title}</h3>
                    <p className="text-white/50 text-[14px] leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Photo with stat overlay */}
          <AnimateIn delay={60} className="relative h-[400px] lg:h-[460px] rounded overflow-hidden">
            <Image src="/images/process-inspect.jpg" alt="ShieldSeal site inspection" fill className="object-cover" quality={82} />
            <div className="absolute inset-0 bg-ink/40" />
            <div className="absolute bottom-0 left-0 right-0">
              {/* Orange bottom bar with stats */}
              <div className="bg-amber p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div><p className="text-white/70 text-[11px] uppercase tracking-widest mb-1">Quote turnaround</p><p className="text-white text-2xl font-black">24 hours</p></div>
                  <div><p className="text-white/70 text-[11px] uppercase tracking-widest mb-1">No-return rate</p><p className="text-white text-2xl font-black">97%</p></div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

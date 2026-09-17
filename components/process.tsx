import Image from "next/image";
import AnimateIn from "./animate-in";
import { PROCESS } from "@/lib/content";

export default function Process() {
  return (
    <section id="about" className="py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <AnimateIn className="relative h-[440px] rounded-2xl overflow-hidden order-2 lg:order-1">
            <Image src="/images/process-inspect.jpg" alt="ShieldSeal site inspection and waterproofing assessment" fill className="object-cover object-center" quality={82} />
            <div className="absolute inset-0 bg-charcoal/30" />
            <div className="absolute bottom-5 left-5 right-5 bg-charcoal/85 backdrop-blur-md border border-white/[0.08] rounded-xl p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted mb-1">Time from inspection to quote</p>
                  <p className="text-2xl font-black text-orange">24 hours</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted mb-1">Jobs with no return leaks</p>
                  <p className="text-2xl font-black text-white">97%</p>
                </div>
              </div>
            </div>
          </AnimateIn>
          <div className="order-1 lg:order-2">
            <AnimateIn>
              <p className="text-orange text-sm font-semibold mb-3">How we work</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-5 text-balance leading-tight">What happens from your first call to the guarantee.</h2>
              <p className="text-white/50 text-[15px] leading-relaxed mb-10">Most waterproofing failures are not product failures. They are preparation failures. Our process is built around getting the substrate right before we apply anything.</p>
            </AnimateIn>
            <div className="space-y-0">
              {PROCESS.map((step, i) => (
                <AnimateIn key={step.step} delay={i * 75}>
                  <div className="relative flex gap-5 pb-9 last:pb-0">
                    {i < PROCESS.length - 1 && <div className="absolute left-[18px] top-10 bottom-0 w-px bg-white/[0.07]" aria-hidden="true" />}
                    <div className="shrink-0 w-9 h-9 rounded-full border border-orange/35 bg-orange/10 flex items-center justify-center text-orange font-black text-sm z-10">{step.step}</div>
                    <div className="pt-1">
                      <h3 className="text-[16px] font-bold text-white mb-1.5">{step.title}</h3>
                      <p className="text-white/50 text-[14px] leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

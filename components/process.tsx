import AnimateIn from "./animate-in";
import { LogoMark } from "./logo";
import { PROCESS } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="py-28 bg-ink relative overflow-hidden">
      {/* Background: large faint "SS" letters — decorative brand watermark */}
      <div
        className="absolute -right-10 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{ fontSize: "24rem", fontFamily: "var(--font-barlow)", fontWeight: 900, color: "rgba(255,255,255,0.015)", lineHeight: 1, letterSpacing: "-0.05em" }}
        aria-hidden="true"
      >SS</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        <AnimateIn className="mb-16">
          <p className="label mb-5">Our Process</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <h2
              className="font-display font-black text-white text-balance leading-none"
              style={{ fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}
            >
              From first call to<br />
              <span className="text-teal">10-year guarantee.</span>
            </h2>
            <p className="text-white/50 text-[15px] leading-relaxed self-end">
              Most waterproofing failures happen in the preparation phase, not the application. Our process is built around diagnosing the actual cause before we apply anything.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Steps */}
          <div className="space-y-0">
            {PROCESS.map((step, i) => (
              <AnimateIn key={step.step} delay={i * 70}>
                <div
                  className={`flex gap-6 py-9 group cursor-default ${
                    i < PROCESS.length - 1 ? "border-b border-border" : ""
                  } hover:pl-2 transition-all duration-300`}
                >
                  {/* Large step number */}
                  <div className="w-20 shrink-0 text-right">
                    <span
                      className="font-display font-black tabular-nums text-teal/20 group-hover:text-teal/45 transition-colors duration-300"
                      style={{ fontSize: "3.4rem", lineHeight: 1 }}
                    >
                      {String(step.step).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3
                      className="font-display font-bold text-white mb-2.5 group-hover:text-teal transition-colors duration-200"
                      style={{ fontSize: "1.2rem" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[13px] text-white/48 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Right: Decorative specification card — engineered look, no photo */}
          <AnimateIn delay={80} className="lg:sticky lg:top-28">
            <div className="border border-border-s">
              {/* Card header */}
              <div className="bg-teal px-6 py-4">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-on-teal">
                    ShieldSeal — System Specification
                  </p>
                  <LogoMark size={24} />
                </div>
              </div>

              {/* Card body */}
              <div className="bg-ink2 p-6 space-y-5">
                {[
                  { code: "STEP 1", title: "Site inspection and diagnosis", note: "No charge" },
                  { code: "STEP 2", title: "Written scope and quotation", note: "Within 24 hrs" },
                  { code: "STEP 3", title: "Surface preparation", note: "Critical phase" },
                  { code: "STEP 4", title: "System application", note: "To spec" },
                  { code: "SIGN-OFF", title: "10-year guarantee issued", note: "In writing" },
                ].map((item, i) => (
                  <div key={item.code} className={`flex items-start gap-4 ${i < 4 ? "pb-5 border-b border-border" : ""}`}>
                    <span className="label text-teal w-14 shrink-0">{item.code}</span>
                    <span className="text-[13px] text-white/65 flex-1">{item.title}</span>
                    <span className="font-mono text-[10px] text-white/30 shrink-0 mt-px">{item.note}</span>
                  </div>
                ))}
              </div>

              {/* Card footer stats */}
              <div className="border-t border-border-s grid grid-cols-2 divide-x divide-border-s">
                <div className="px-6 py-5 text-center">
                  <p className="font-mono font-bold text-teal" style={{ fontSize: "1.8rem" }}>24 hr</p>
                  <p className="label-dim mt-1">Quote turnaround</p>
                </div>
                <div className="px-6 py-5 text-center">
                  <p className="font-mono font-bold text-teal" style={{ fontSize: "1.8rem" }}>97%</p>
                  <p className="label-dim mt-1">No-return rate</p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

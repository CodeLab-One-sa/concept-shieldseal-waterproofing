import AnimateIn from "./animate-in";
import { SERVICES } from "@/lib/content";

const CODES = ["WP·01", "DP·02", "BT·03", "BP·04", "RM·05", "RC·06"];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-ink2">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <AnimateIn className="mb-16">
          <p className="label mb-5">Waterproofing Systems</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <h2
              className="font-display font-black text-white text-balance leading-none"
              style={{ fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}
            >
              The right system<br />for the problem.
            </h2>
            <p className="text-white/52 text-[15px] leading-relaxed self-end">
              Each job starts with a diagnosis. We match the waterproofing system to your specific substrate, exposure, and problem — not to what is fastest to apply. Wrong system selection is the leading cause of waterproofing failure within 3 years.
            </p>
          </div>
        </AnimateIn>

        {/* Specification table */}
        <div className="border border-border">
          {SERVICES.map((svc, i) => (
            <AnimateIn key={svc.id} delay={i * 45}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 group hover:bg-ink3 transition-colors duration-200 ${
                  i < SERVICES.length - 1 ? "border-b border-border" : ""
                }`}
              >
                {/* System code */}
                <div className="lg:col-span-2 px-6 py-7 flex items-start border-b lg:border-b-0 lg:border-r border-border">
                  <p className="label text-teal">{CODES[i]}</p>
                </div>

                {/* Title + description */}
                <div className="lg:col-span-5 px-6 py-7 border-b lg:border-b-0 lg:border-r border-border">
                  <h3
                    className="font-display font-bold text-white mb-3 group-hover:text-teal transition-colors duration-200 leading-tight"
                    style={{ fontSize: "1.25rem" }}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-[13px] text-white/50 leading-relaxed">{svc.description}</p>
                </div>

                {/* Scope of work */}
                <div className="lg:col-span-5 px-6 py-7">
                  <p className="label-dim mb-4">Scope of work</p>
                  <ul className="space-y-2.5">
                    {svc.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-[12px] text-white/45">
                        <span className="w-[5px] h-[1.5px] bg-teal/45 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={80} className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-white/28 text-[12px] font-mono flex-1">
            All systems applied by NHBRC-registered teams. Full written scope issued before work starts.
          </p>
          <a href="#contact" className="label text-teal hover:text-teal-l transition-colors whitespace-nowrap shrink-0">
            Book a free inspection →
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}

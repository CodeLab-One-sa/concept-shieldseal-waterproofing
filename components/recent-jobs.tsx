import AnimateIn from "./animate-in";
import { RECENT_JOBS } from "@/lib/content";

export default function RecentJobs() {
  return (
    <section
      id="jobs"
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/waterproof-drops.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Light overlay — blends with the white sections above and below */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(248,250,252,0.82)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <AnimateIn className="mb-12">
          <p className="label mb-4">Completed Projects: 2025 and 2026</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <h2
              className="font-display font-black text-ink text-balance leading-none"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", letterSpacing: "-0.02em" }}
            >
              Recent jobs<br />across Gauteng.
            </h2>
            <p className="text-ink-mid text-[15px] font-medium leading-relaxed self-end">
              References and site photography available on request. 15 to 25 projects completed monthly.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={60}>
          <div className="border border-line bg-canvas">
            <div className="hidden md:grid grid-cols-12 bg-canvas-s px-6 py-3.5 border-b border-line">
              <span className="label-dim col-span-3">Area</span>
              <span className="label-dim col-span-4">Job type</span>
              <span className="label-dim col-span-3">Scale</span>
              <span className="label-dim col-span-2 text-right">Month</span>
            </div>
            {RECENT_JOBS.map((job, i) => (
              <div key={i} className={`grid grid-cols-1 md:grid-cols-12 gap-y-1 md:gap-0 px-6 py-5 group hover:bg-canvas-s transition-colors ${i < RECENT_JOBS.length - 1 ? "border-b border-line" : ""}`}>
                <div className="md:col-span-3 flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-teal/50 group-hover:bg-teal rounded-full shrink-0 transition-colors" />
                  <span className="text-[14px] font-bold text-ink">{job.area}</span>
                </div>
                <span className="md:col-span-4 text-[13px] font-medium text-ink-mid md:pl-0 pl-5">{job.type}</span>
                <span className="md:col-span-3 text-[13px] font-mono text-muted md:pl-0 pl-5">{job.size}</span>
                <div className="md:col-span-2 flex items-center md:justify-end gap-3 md:pl-0 pl-5">
                  <span className="text-[11px] font-semibold font-mono text-muted">{job.month}</span>
                  <span className="label hidden md:inline">Done</span>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

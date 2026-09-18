import AnimateIn from "./animate-in";
import { RECENT_JOBS } from "@/lib/content";

export default function RecentJobs() {
  return (
    <section
      id="jobs"
      className="parallax py-24 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/waterproof-drops.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Light overlay — blends with white sections above and below */}
      <div className="absolute inset-0" style={{ background: "rgba(248,250,252,0.84)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <AnimateIn className="mb-10">
          <p className="label mb-4">Completed Projects: 2025 and 2026</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
            <h2
              className="font-display font-black text-ink text-balance leading-none"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)", letterSpacing: "-0.02em" }}
            >
              Recent jobs<br />across Gauteng.
            </h2>
            <p className="text-ink-mid text-[15px] font-medium leading-relaxed self-end">
              References and site photography available on request. 15 to 25 projects completed monthly.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={60}>
          {/* Desktop table */}
          <div className="hidden md:block border border-line bg-canvas">
            <div className="grid grid-cols-12 bg-canvas-s px-6 py-3.5 border-b border-line">
              <span className="label-dim col-span-3">Area</span>
              <span className="label-dim col-span-4">Job type</span>
              <span className="label-dim col-span-3">Scale</span>
              <span className="label-dim col-span-2 text-right">Month</span>
            </div>
            {RECENT_JOBS.map((job, i) => (
              <div key={i} className={`grid grid-cols-12 px-6 py-5 group hover:bg-canvas-s transition-colors ${i < RECENT_JOBS.length - 1 ? "border-b border-line" : ""}`}>
                <div className="col-span-3 flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-teal/50 group-hover:bg-teal rounded-full shrink-0 transition-colors" />
                  <span className="text-[14px] font-bold text-ink">{job.area}</span>
                </div>
                <span className="col-span-4 text-[13px] font-medium text-ink-mid self-center">{job.type}</span>
                <span className="col-span-3 text-[13px] font-mono text-muted self-center">{job.size}</span>
                <div className="col-span-2 flex items-center justify-end gap-2">
                  <span className="text-[11px] font-semibold font-mono text-muted">{job.month}</span>
                  <span className="label">Done</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: card list */}
          <div className="md:hidden space-y-3">
            {RECENT_JOBS.map((job, i) => (
              <div key={i} className="bg-canvas border border-line px-5 py-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal rounded-full shrink-0" />
                    <span className="text-[15px] font-bold text-ink">{job.area}</span>
                  </div>
                  <span className="label">Done</span>
                </div>
                <p className="text-[13px] font-medium text-ink-mid mb-1">{job.type}</p>
                <div className="flex items-center gap-3">
                  <span className="text-[12px] font-mono text-muted">{job.size}</span>
                  <span className="text-muted">·</span>
                  <span className="text-[12px] font-mono text-muted">{job.month}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

import AnimateIn from "./animate-in";
import { RECENT_JOBS } from "@/lib/content";

export default function RecentJobs() {
  return (
    <section id="jobs" className="py-28 bg-ink2">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <AnimateIn className="mb-14">
          <p className="label mb-5">Completed Projects — 2025 / 2026</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <h2
              className="font-display font-black text-white text-balance leading-none"
              style={{ fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}
            >
              Recent jobs<br />across Gauteng.
            </h2>
            <p className="text-white/48 text-[15px] leading-relaxed self-end">
              A snapshot of completed work. References and site photography available on request from any of these clients.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={60}>
          <div className="border border-border">
            {/* Table header */}
            <div className="hidden md:grid grid-cols-12 bg-ink px-6 py-3.5 border-b border-border">
              <span className="label-dim col-span-3">Area</span>
              <span className="label-dim col-span-4">Job type</span>
              <span className="label-dim col-span-3">Scale</span>
              <span className="label-dim col-span-2 text-right">Month</span>
            </div>

            {RECENT_JOBS.map((job, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-12 gap-y-1 md:gap-0 px-6 py-5 group hover:bg-ink3 transition-colors duration-150 ${
                  i < RECENT_JOBS.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="md:col-span-3 flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-teal/50 group-hover:bg-teal rounded-full shrink-0 transition-colors" />
                  <span className="text-[14px] font-bold text-white/88">{job.area}</span>
                </div>
                <span className="md:col-span-4 text-[13px] text-white/52 md:pl-0 pl-5">{job.type}</span>
                <span className="md:col-span-3 text-[13px] font-mono text-white/48 md:pl-0 pl-5">{job.size}</span>
                <div className="md:col-span-2 flex items-center md:justify-end gap-3 md:pl-0 pl-5">
                  <span className="text-[11px] font-mono text-white/30">{job.month}</span>
                  <span className="label text-teal/55 hidden md:inline">Done</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-white/22 text-[11px] font-mono mt-4">
            15–25 projects completed monthly across Gauteng. Figures based on 2025–2026 data.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}

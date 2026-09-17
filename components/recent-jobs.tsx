import AnimateIn from "./animate-in";
import { RECENT_JOBS } from "@/lib/content";

export default function RecentJobs() {
  return (
    <section id="jobs" className="py-24 bg-ink2">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnimateIn className="mb-12">
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="label mb-4">Completed Projects — 2025 / 2026</p>
              <h2 className="text-4xl font-black tracking-tight text-white text-balance leading-tight">Recently completed<br />across Gauteng.</h2>
            </div>
            <p className="label-muted hidden md:block text-right">References and site photos<br />available on request.</p>
          </div>
        </AnimateIn>

        <AnimateIn delay={60}>
          <div className="border border-border">
            {/* Header */}
            <div className="hidden md:grid grid-cols-12 bg-ink px-6 py-3 border-b border-border">
              {["Location","Job type","Scale","Completed"].map(h => (
                <span key={h} className="label-muted col-span-3">{h}</span>
              ))}
            </div>
            {RECENT_JOBS.map((job, i) => (
              <div key={i} className={`grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-0 px-6 py-5 ${i < RECENT_JOBS.length - 1 ? "border-b border-border" : ""} hover:bg-ink3 transition-colors group`}>
                <div className="md:col-span-3 flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-cyan/60 group-hover:bg-cyan rounded-full shrink-0 transition-colors" />
                  <span className="text-[14px] font-semibold text-white">{job.area}</span>
                </div>
                <span className="md:col-span-3 text-[13px] text-white/60">{job.type}</span>
                <span className="md:col-span-3 text-[13px] font-mono text-white/55">{job.size}</span>
                <div className="md:col-span-3 flex items-center justify-between md:justify-start gap-4">
                  <span className="text-[12px] font-mono text-white/35">{job.month}</span>
                  <span className="label text-cyan/60">Completed</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-white/20 font-mono mt-4">Approx. 15–25 jobs per month across Gauteng. Figures subject to commercial sensitivity.</p>
        </AnimateIn>
      </div>
    </section>
  );
}

import AnimateIn from "./animate-in";
import { RECENT_JOBS } from "@/lib/content";

export default function RecentJobs() {
  return (
    // CREAM BACKGROUND — alternates with dark sections
    <section id="jobs" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <AnimateIn className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-amber-dark text-[11px] font-bold tracking-[0.2em] uppercase mb-3">Recent work</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-balance leading-tight on-cream">Completed jobs<br />across Johannesburg.</h2>
            </div>
            <p className="on-cream-muted text-[14px] max-w-xs md:mb-2">References and site photos available on request from any of these clients.</p>
          </div>
        </AnimateIn>

        {/* TABLE layout — not cards */}
        <AnimateIn delay={60}>
          <div className="border border-border-cream rounded overflow-hidden">
            <div className="hidden md:grid grid-cols-4 bg-cream-dark px-6 py-3 border-b border-border-cream">
              {["Area", "Job type", "Size", "Month"].map(h => (
                <span key={h} className="text-[11px] font-bold on-cream-muted tracking-widest uppercase">{h}</span>
              ))}
            </div>
            {RECENT_JOBS.map((job, i) => (
              <div key={i} className={`grid grid-cols-2 md:grid-cols-4 gap-y-1 px-6 py-5 border-b border-border-cream last:border-0 ${i % 2 === 0 ? "bg-white/60" : "bg-cream"} hover:bg-cream-dark transition-colors`}>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber shrink-0" />
                  <span className="text-[14px] font-bold on-cream">{job.area}</span>
                </div>
                <span className="text-[14px] on-cream-muted">{job.type}</span>
                <span className="text-[14px] on-cream">{job.size}</span>
                <div className="flex items-center justify-between">
                  <span className="text-[14px] on-cream-muted">{job.month}</span>
                  <span className="text-[11px] text-green-600 font-bold bg-green-50 border border-green-200 px-2 py-0.5 rounded-sm">Done</span>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
        <AnimateIn delay={80} className="mt-6 text-center">
          <p className="on-cream-muted text-[13px]">15 to 25 jobs completed per month across Gauteng.</p>
        </AnimateIn>
      </div>
    </section>
  );
}

import { MapPin, CheckCircle } from "lucide-react";
import AnimateIn from "./animate-in";
import { RECENT_JOBS } from "@/lib/content";

export default function RecentJobs() {
  return (
    <section id="jobs" className="py-28 bg-charcoal">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <AnimateIn className="mb-12">
          <p className="text-orange text-sm font-semibold mb-3">Recent work</p>
          <div className="flex flex-col lg:flex-row lg:items-end gap-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white text-balance leading-tight flex-1">Jobs completed<br />across Johannesburg.</h2>
            <p className="text-white/45 text-[14px] max-w-xs lg:mb-1">A snapshot of recent jobs. References available on request from previous clients.</p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {RECENT_JOBS.map((job, i) => (
            <AnimateIn key={i} delay={i * 55}>
              <div className="bg-surface border border-white/[0.07] hover:border-orange/20 rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-orange/70" />
                    <span className="text-sm font-bold text-white">{job.area}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-[11px] text-green-400 font-semibold">Completed</span>
                  </div>
                </div>
                <p className="text-[14px] text-white/70 font-medium mb-3">{job.type}</p>
                <div className="flex items-center justify-between text-[12px] text-muted">
                  <span>{job.size}</span>
                  <span>{job.month}</span>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={100} className="mt-8 text-center">
          <p className="text-white/35 text-sm">We complete 15 to 25 waterproofing jobs per month across Gauteng. References and site photos available on request.</p>
        </AnimateIn>
      </div>
    </section>
  );
}

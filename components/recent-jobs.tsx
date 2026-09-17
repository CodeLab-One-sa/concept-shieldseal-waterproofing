import Image from "next/image";
import AnimateIn from "./animate-in";
import { RECENT_JOBS } from "@/lib/content";

export default function RecentJobs() {
  return (
    <section id="jobs" className="py-28 bg-ink2">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header with image strip */}
        <AnimateIn className="mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="label mb-5">Completed Projects — Gauteng</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white text-balance leading-[0.95]">
                Recent jobs<br />across Johannesburg.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <div className="relative h-[150px] overflow-hidden corner-marks">
                <Image
                  src="/images/hero-roofing.jpg"
                  alt="Completed waterproofing project"
                  fill className="object-cover object-top"
                  quality={75}
                />
                <div className="absolute inset-0 bg-ink2/60" />
                <div className="absolute bottom-3 left-4">
                  <p className="label-muted">Completed project — Gauteng</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Jobs table */}
        <AnimateIn delay={60}>
          <div className="border border-border">
            <div className="hidden md:grid grid-cols-12 bg-ink px-6 py-4 border-b border-border">
              <span className="label-muted col-span-3">Location</span>
              <span className="label-muted col-span-4">Job type</span>
              <span className="label-muted col-span-3">Scale</span>
              <span className="label-muted col-span-2 text-right">Completed</span>
            </div>
            {RECENT_JOBS.map((job, i) => (
              <div key={i} className={`grid grid-cols-1 md:grid-cols-12 gap-y-1 md:gap-0 px-6 py-5 ${i < RECENT_JOBS.length - 1 ? "border-b border-border" : ""} hover:bg-ink3 transition-colors group`}>
                <div className="md:col-span-3 flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan/50 group-hover:bg-cyan transition-colors shrink-0" />
                  <span className="text-[14px] font-bold text-white/85">{job.area}</span>
                </div>
                <span className="md:col-span-4 text-[13px] text-white/55 md:pl-0 pl-4">{job.type}</span>
                <span className="md:col-span-3 text-[13px] font-mono text-white/52 md:pl-0 pl-4">{job.size}</span>
                <div className="md:col-span-2 flex items-center md:justify-end gap-3 md:pl-0 pl-4">
                  <span className="text-[11px] font-mono text-white/32">{job.month}</span>
                  <span className="label text-cyan/55 hidden md:inline">Done</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between">
            <p className="text-white/28 text-[11px] font-mono">Approx. 15–25 projects completed monthly. Figures based on 2025–2026 data.</p>
            <p className="text-white/28 text-[11px] font-mono hidden md:block">References available on request.</p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

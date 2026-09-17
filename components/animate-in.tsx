"use client";
import { useEffect, useRef, ReactNode } from "react";
export default function AnimateIn({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setTimeout(() => el.classList.add("ai-vis"), delay); obs.unobserve(el); } }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    obs.observe(el); return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={className} style={{ opacity: 0, transform: "translateY(16px)", transition: "opacity 0.5s ease-out, transform 0.5s ease-out" }}>
      <style>{`.ai-vis { opacity: 1 !important; transform: none !important; }`}</style>
      {children}
    </div>
  );
}

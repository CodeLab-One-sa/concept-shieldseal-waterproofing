"use client";
import { useEffect, useRef, ReactNode } from "react";
export default function AnimateIn({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => el.classList.add("ai-visible"), delay); obs.unobserve(el); }
    }, { threshold: 0.08, rootMargin: "0px 0px -32px 0px" });
    el.classList.add("ai-hidden");
    obs.observe(el); return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className={className}>{children}</div>;
}

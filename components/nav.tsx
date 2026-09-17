"use client";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Logo from "./logo";
import { COMPANY } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = [
    { label: "Services",   href: "#services" },
    { label: "Get a quote", href: "#calculator" },
    { label: "Recent jobs", href: "#jobs" },
    { label: "Our process", href: "#process" },
    { label: "FAQ",         href: "#faq" },
  ];
  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-ink/97 backdrop-blur-xl border-b border-border shadow-[0_1px_0_rgba(224,120,32,0.12)]" : "bg-ink"}`}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-16">
        <a href="/" aria-label="ShieldSeal Waterproofing home"><Logo size="sm" /></a>
        <nav className="hidden md:flex items-center gap-0.5">
          {links.map(l => <a key={l.href} href={l.href} className="px-3.5 py-2 text-[13px] text-white/50 hover:text-white transition-colors rounded hover:bg-white/[0.04]">{l.label}</a>)}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href={`tel:${COMPANY.phone.replace(/\s/g,"")}`} className="flex items-center gap-1.5 text-[13px] text-white/50 hover:text-white transition-colors"><Phone className="w-3.5 h-3.5" />{COMPANY.phone}</a>
          <a href="#contact" className="bg-amber hover:bg-amber-light text-white text-[13px] font-bold px-5 py-2.5 rounded transition-all duration-200 hover:-translate-y-px">Free inspection</a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-white/60 hover:text-white" aria-label="Toggle menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-ink2 border-t border-border px-5 py-4 flex flex-col gap-0.5">
          {links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-[13px] text-white/60 hover:text-white transition-colors border-b border-border last:border-0">{l.label}</a>)}
          <a href="#contact" className="mt-3 bg-amber text-white text-sm font-bold px-5 py-3.5 rounded text-center">Get a free inspection</a>
        </div>
      )}
    </header>
  );
}

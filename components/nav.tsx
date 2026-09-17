"use client";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Logo from "./logo";
import { COMPANY } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = [
    { label: "Services", href: "#services" },
    { label: "Price guide", href: "#calculator" },
    { label: "Completed jobs", href: "#jobs" },
    { label: "Our process", href: "#process" },
    { label: "FAQ", href: "#faq" },
  ];
  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-ink/97 backdrop-blur-xl border-b border" : "bg-ink"}`} style={{ borderColor: scrolled ? "rgba(0,180,198,0.14)" : "transparent" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[62px]">
        <a href="/" aria-label="ShieldSeal Waterproofing home"><Logo size="sm" /></a>
        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
          {links.map(l => (
            <a key={l.href} href={l.href} className="px-3.5 py-2 text-[12px] text-white/45 hover:text-white transition-colors font-mono tracking-wide uppercase">{l.label}</a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${COMPANY.phone.replace(/\s/g,"")}`} className="flex items-center gap-1.5 text-[12px] text-white/40 hover:text-white transition-colors font-mono"><Phone className="w-3 h-3" />{COMPANY.phone}</a>
          <a href="#contact" className="bg-cyan hover:bg-cyan-l text-ink text-[12px] font-black px-5 py-2.5 tracking-wide uppercase transition-all duration-200 hover:-translate-y-px">Free inspection</a>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-white/50 hover:text-white" aria-label="Toggle menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-ink2 border-t border px-6 py-5 flex flex-col gap-0.5" style={{ borderColor:"rgba(0,180,198,0.14)" }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-[12px] text-white/50 hover:text-white transition-colors font-mono tracking-widest uppercase border-b last:border-0" style={{ borderColor:"rgba(0,180,198,0.1)" }}>{l.label}</a>
          ))}
          <a href="#contact" className="mt-4 bg-cyan text-ink text-[13px] font-black px-5 py-3.5 text-center uppercase tracking-wide">Get a free inspection</a>
        </div>
      )}
    </header>
  );
}

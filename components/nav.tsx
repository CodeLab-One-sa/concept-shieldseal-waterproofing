"use client";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Logo from "./logo";
import { COMPANY } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = [{ label: "Services", href: "#services" }, { label: "Get a quote", href: "#calculator" }, { label: "Recent jobs", href: "#jobs" }, { label: "About", href: "#about" }, { label: "FAQ", href: "#faq" }];
  return (
    <>
      <div className="bg-orange text-white text-xs font-semibold text-center py-2 px-4">
        Free site inspection and quote: <a href={`tel:${COMPANY.phone.replace(/\s/g,"")}`} className="underline underline-offset-2 hover:no-underline">{COMPANY.phone}</a>
        <span className="mx-3 opacity-40">|</span>
        <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:no-underline">WhatsApp us</a>
      </div>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-charcoal/96 backdrop-blur-xl border-b border-white/[0.06]" : "bg-charcoal"}`}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-[60px]">
          <a href="/" aria-label="ShieldSeal Waterproofing home"><Logo size="sm" /></a>
          <nav className="hidden md:flex items-center gap-0.5">
            {links.map(l => <a key={l.href} href={l.href} className="px-3.5 py-2 text-[13px] text-white/55 hover:text-white transition-colors rounded-md hover:bg-white/[0.04]">{l.label}</a>)}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href={`tel:${COMPANY.phone.replace(/\s/g,"")}`} className="flex items-center gap-1.5 text-[13px] text-white/55 hover:text-white transition-colors"><Phone className="w-3.5 h-3.5" />{COMPANY.phone}</a>
            <a href="#contact" className="bg-orange hover:bg-orange-light text-white text-[13px] font-bold px-5 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-px">Free inspection</a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-white/60 hover:text-white" aria-label="Toggle menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden bg-surface border-t border-white/[0.06] px-5 py-4 flex flex-col gap-0.5">
            {links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-[13px] text-white/60 hover:text-white transition-colors border-b border-white/[0.05] last:border-0">{l.label}</a>)}
            <a href="#contact" className="mt-3 bg-orange text-white text-sm font-bold px-5 py-3.5 rounded-lg text-center">Request a free inspection</a>
          </div>
        )}
      </header>
    </>
  );
}

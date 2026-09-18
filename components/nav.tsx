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

  const links = [
    { label: "Services",    href: "#services" },
    { label: "Price guide", href: "#calculator" },
    { label: "Our process", href: "#process" },
    { label: "Reviews",     href: "#reviews" },
    { label: "FAQ",         href: "#faq" },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-canvas transition-all duration-300 ${scrolled ? "shadow-[0_1px_12px_rgba(0,0,0,0.08)]" : "border-b border-line"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[68px]">

        <a href="/" aria-label="ShieldSeal Waterproofing home">
          <Logo height={36} />
        </a>

        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="px-4 py-2 text-[12px] font-mono font-semibold text-ink-mid hover:text-teal tracking-widest uppercase transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={`tel:${COMPANY.phone.replace(/\s/g,"")}`}
            className="flex items-center gap-1.5 text-[12px] font-mono font-semibold text-muted hover:text-teal transition-colors">
            <Phone className="w-3 h-3" />{COMPANY.phone}
          </a>
          <a href="#contact"
            className="bg-teal hover:bg-teal-l text-white font-display font-black text-[13px] px-6 py-2.5 uppercase tracking-wide transition-all duration-200 hover:-translate-y-px">
            Free inspection
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-ink-mid hover:text-ink transition-colors" aria-label="Toggle menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-canvas border-t border-line px-6 py-5 flex flex-col gap-0.5">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="py-3.5 text-[12px] font-mono font-semibold text-ink-mid hover:text-teal tracking-widest uppercase border-b border-line last:border-0 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="mt-4 bg-teal text-white font-display font-black text-[14px] px-5 py-4 text-center uppercase tracking-wide">
            Request a free inspection
          </a>
        </div>
      )}
    </header>
  );
}

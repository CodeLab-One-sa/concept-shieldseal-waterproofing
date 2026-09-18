"use client";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Logo from "./logo";
import { COMPANY } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 28);
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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/97 backdrop-blur-xl border-b border"
          : "bg-ink border-b border-transparent"
      }`}
      style={scrolled ? { borderColor: "rgba(0,170,194,0.16)" } : undefined}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[64px]">

        <a href="/" aria-label="ShieldSeal Waterproofing home">
          <Logo height={36} />
        </a>

        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-[12px] font-mono text-white/45 hover:text-white tracking-widest uppercase transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 text-[12px] font-mono text-white/38 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3" />
            {COMPANY.phone}
          </a>
          <a
            href="#contact"
            className="bg-teal hover:bg-teal-l text-ink font-display font-black text-[13px] px-6 py-2.5 uppercase tracking-wide transition-all duration-200 hover:-translate-y-px"
          >
            Free inspection
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-white/55 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ink2 border-t border px-6 py-5 flex flex-col gap-0.5" style={{ borderColor: "rgba(0,170,194,0.14)" }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3.5 text-[12px] font-mono text-white/50 hover:text-white tracking-widest uppercase border-b last:border-0 transition-colors"
              style={{ borderColor: "rgba(0,170,194,0.10)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 bg-teal text-ink font-display font-black text-[14px] px-5 py-4 text-center uppercase tracking-wide"
          >
            Request a free inspection
          </a>
        </div>
      )}
    </header>
  );
}

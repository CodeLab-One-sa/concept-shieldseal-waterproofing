import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import AnimateIn from "./animate-in";
import { COMPANY } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          <AnimateIn className="lg:col-span-2">
            <p className="text-amber text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Get in touch</p>
            <h2 className="text-4xl font-black tracking-tight text-white mb-5 text-balance leading-tight">Book your free inspection today.</h2>
            <p className="text-white/50 text-[14px] leading-relaxed mb-8">We visit the property, diagnose the problem, and send a written itemised quote. No call-out fee. No obligation.</p>
            <div className="space-y-4">
              {[
                { icon: <Phone className="w-4 h-4" />,         label: "Call us",          value: COMPANY.phone,          href: `tel:${COMPANY.phone.replace(/\s/g,"")}` },
                { icon: <MessageCircle className="w-4 h-4" />, label: "WhatsApp",         value: "Send a message",        href: COMPANY.whatsapp },
                { icon: <Mail className="w-4 h-4" />,          label: "Email",            value: COMPANY.email,           href: `mailto:${COMPANY.email}` },
                { icon: <MapPin className="w-4 h-4" />,        label: "Office",           value: COMPANY.address,         href: null },
                { icon: <Clock className="w-4 h-4" />,         label: "Hours",            value: "Mon to Sat, 7am to 5pm", href: null },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-3.5">
                  <div className="w-8 h-8 bg-amber/10 border border-amber/20 rounded flex items-center justify-center text-amber shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <p className="text-[11px] text-white/30 mb-0.5">{item.label}</p>
                    {item.href ? <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-[14px] text-white/70 hover:text-white transition-colors">{item.value}</a>
                    : <p className="text-[14px] text-white/70">{item.value}</p>}
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={60} className="lg:col-span-3">
            <div className="border border-border rounded bg-ink2 p-7 lg:p-8">
              <h3 className="text-[18px] font-bold text-white mb-1">Request a free inspection</h3>
              <p className="text-white/35 text-[13px] mb-6">We confirm within 2 hours and arrange a convenient site visit.</p>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {[{ l:"Name", p:"Your name" },{ l:"Phone", p:"082 000 0000" }].map(f => (
                    <div key={f.l}><label className="block text-[11px] text-white/35 mb-1.5 tracking-wide">{f.l}</label><input type="text" placeholder={f.p} className="w-full bg-ink border border-border focus:border-amber/30 rounded px-3.5 py-3 text-[13px] text-white placeholder-white/18 focus:outline-none transition-colors" /></div>
                  ))}
                </div>
                <div><label className="block text-[11px] text-white/35 mb-1.5 tracking-wide">Property address</label><input type="text" placeholder="12 Oak Street, Bedfordview" className="w-full bg-ink border border-border focus:border-amber/30 rounded px-3.5 py-3 text-[13px] text-white placeholder-white/18 focus:outline-none transition-colors" /></div>
                <div><label className="block text-[11px] text-white/35 mb-1.5 tracking-wide">Problem type</label>
                  <select className="w-full bg-ink border border-border focus:border-amber/30 rounded px-3.5 py-3 text-[13px] text-white/60 focus:outline-none transition-colors appearance-none">
                    <option value="">Select...</option>
                    {["Flat roof leaking","Rising damp","Basement flooding","Balcony leaking","Roof coating","Not sure, need inspection"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div><label className="block text-[11px] text-white/35 mb-1.5 tracking-wide">Additional details (optional)</label><textarea rows={3} placeholder="Describe the problem and when it started..." className="w-full bg-ink border border-border focus:border-amber/30 rounded px-3.5 py-3 text-[13px] text-white placeholder-white/18 focus:outline-none transition-colors resize-none" /></div>
                <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-amber hover:bg-amber-light text-white font-bold text-[14px] py-4 rounded transition-all duration-200 hover:-translate-y-px shadow-[0_4px_20px_rgba(224,120,32,0.25)]">
                  <MessageCircle className="w-4 h-4" /> Send via WhatsApp
                </a>
                <p className="text-[11px] text-white/25 text-center">Or call {COMPANY.phone}. Mon to Sat, 7am to 5pm.</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import AnimateIn from "./animate-in";
import { COMPANY } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-charcoal">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <AnimateIn>
            <p className="text-orange text-sm font-semibold mb-3">Get in touch</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-5 text-balance leading-tight">Book your free<br />site inspection.</h2>
            <p className="text-white/50 text-[15px] leading-relaxed mb-10">We visit your property, identify exactly what is causing the problem, and give you a written quote. No call-out fee, no obligation, no high-pressure sales.</p>
            <div className="space-y-5">
              {[
                { icon: <Phone className="w-4 h-4 text-orange" />,         label: "Office",       value: COMPANY.phone,   href: `tel:${COMPANY.phone.replace(/\s/g,"")}` },
                { icon: <MessageCircle className="w-4 h-4 text-orange" />, label: "WhatsApp",     value: "Message us on WhatsApp", href: COMPANY.whatsapp },
                { icon: <Mail className="w-4 h-4 text-orange" />,          label: "Email",        value: COMPANY.email,   href: `mailto:${COMPANY.email}` },
                { icon: <MapPin className="w-4 h-4 text-orange" />,        label: "Address",      value: COMPANY.address, href: null },
                { icon: <Clock className="w-4 h-4 text-orange" />,         label: "Office hours", value: "Mon to Fri 7am to 5pm, Sat 7am to 1pm", href: null },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-orange/10 border border-orange/20 flex items-center justify-center shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <p className="text-[11px] text-muted mb-0.5">{item.label}</p>
                    {item.href ? <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-[14px] text-white/75 hover:text-white transition-colors">{item.value}</a>
                    : <p className="text-[14px] text-white/75">{item.value}</p>}
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={60}>
            <div className="bg-surface border border-white/[0.08] rounded-2xl p-7 lg:p-9 shadow-[0_24px_64px_rgba(0,0,0,0.4)]">
              <h3 className="text-[19px] font-bold text-white mb-1">Request a free inspection</h3>
              <p className="text-white/40 text-[13px] mb-7">We will confirm within 2 hours and arrange a convenient time to visit.</p>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {[{ l: "Name", p: "Your name" }, { l: "Phone", p: "082 000 0000" }].map(f => (
                    <div key={f.l}><label className="block text-[11px] text-muted mb-1.5">{f.l}</label><input type="text" placeholder={f.p} className="w-full bg-charcoal border border-white/[0.08] focus:border-orange/30 rounded-xl px-3.5 py-3 text-[13px] text-white placeholder-muted/40 focus:outline-none transition-colors" /></div>
                  ))}
                </div>
                <div><label className="block text-[11px] text-muted mb-1.5">Property address</label><input type="text" placeholder="12 Oak Street, Bedfordview" className="w-full bg-charcoal border border-white/[0.08] focus:border-orange/30 rounded-xl px-3.5 py-3 text-[13px] text-white placeholder-muted/40 focus:outline-none transition-colors" /></div>
                <div><label className="block text-[11px] text-muted mb-1.5">Problem type</label>
                  <select className="w-full bg-charcoal border border-white/[0.08] focus:border-orange/30 rounded-xl px-3.5 py-3 text-[13px] text-white/65 focus:outline-none transition-colors appearance-none">
                    <option value="">Select...</option>
                    {["Flat roof leaking", "Rising damp", "Basement flooding", "Balcony leaking", "Roof coating", "Not sure, need inspection"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div><label className="block text-[11px] text-muted mb-1.5">Additional details (optional)</label><textarea rows={3} placeholder="Describe the problem, when it started, how bad it is..." className="w-full bg-charcoal border border-white/[0.08] focus:border-orange/30 rounded-xl px-3.5 py-3 text-[13px] text-white placeholder-muted/40 focus:outline-none transition-colors resize-none" /></div>
                <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2.5 bg-orange hover:bg-orange-light text-white font-bold text-[14px] py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(224,107,26,0.28)]">
                  <MessageCircle className="w-4 h-4" /> Send via WhatsApp
                </a>
                <p className="text-[11px] text-muted/50 text-center">Or call {COMPANY.phone}. Mon to Sat, 7am to 5pm.</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

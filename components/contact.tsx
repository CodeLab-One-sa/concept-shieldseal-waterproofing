import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import AnimateIn from "./animate-in";
import { COMPANY } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-ink2">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnimateIn className="mb-14">
          <p className="label mb-4">Contact — Book an inspection</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white text-balance leading-tight max-w-xl">
            One inspection.<br />
            <span className="text-cyan">One written quote.</span><br />
            No obligation.
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <AnimateIn className="lg:col-span-2">
            <div className="space-y-6">
              {[
                { icon: <Phone className="w-3.5 h-3.5" />,         label:"TELEPHONE",     value:COMPANY.phone,        href:`tel:${COMPANY.phone.replace(/\s/g,"")}` },
                { icon: <MessageCircle className="w-3.5 h-3.5" />, label:"WHATSAPP",      value:"Send a message",      href:COMPANY.whatsapp },
                { icon: <Mail className="w-3.5 h-3.5" />,          label:"EMAIL",         value:COMPANY.email,         href:`mailto:${COMPANY.email}` },
                { icon: <MapPin className="w-3.5 h-3.5" />,        label:"OFFICE",        value:COMPANY.address,       href:null },
                { icon: <Clock className="w-3.5 h-3.5" />,         label:"OPERATING HRS", value:"Mon–Sat 07:00–17:00", href:null },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4 border-b border-border pb-5 last:border-0 last:pb-0">
                  <div className="w-7 h-7 border border-border-s flex items-center justify-center text-cyan shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <p className="label-muted mb-0.5">{item.label}</p>
                    {item.href
                      ? <a href={item.href} target={item.href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer" className="text-[13px] text-white/65 hover:text-white transition-colors font-mono">{item.value}</a>
                      : <p className="text-[13px] text-white/65 font-mono">{item.value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={60} className="lg:col-span-3">
            <div className="border border-border p-8">
              <p className="label mb-6">Request — Free Inspection</p>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[{l:"Name",p:"Your name"},{l:"Phone",p:"082 000 0000"}].map(f => (
                    <div key={f.l}>
                      <label className="label-muted block mb-2">{f.l}</label>
                      <input type="text" placeholder={f.p} className="w-full bg-ink border border-border focus:border-border-s px-4 py-3 text-[13px] text-white placeholder-white/15 focus:outline-none font-mono transition-colors" />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="label-muted block mb-2">Property address</label>
                  <input type="text" placeholder="12 Oak Street, Bedfordview" className="w-full bg-ink border border-border focus:border-border-s px-4 py-3 text-[13px] text-white placeholder-white/15 focus:outline-none font-mono transition-colors" />
                </div>
                <div>
                  <label className="label-muted block mb-2">Problem type</label>
                  <select className="w-full bg-ink border border-border focus:border-border-s px-4 py-3 text-[13px] text-white/60 focus:outline-none font-mono transition-colors appearance-none">
                    <option value="">-- Select --</option>
                    {["Flat roof leaking","Rising damp","Basement flooding","Balcony leaking","Roof coating","Unsure — need diagnosis"].map(o=><option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="label-muted block mb-2">Additional notes</label>
                  <textarea rows={3} placeholder="When did the problem start? How severe?" className="w-full bg-ink border border-border focus:border-border-s px-4 py-3 text-[13px] text-white placeholder-white/15 focus:outline-none font-mono transition-colors resize-none" />
                </div>
                <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-cyan hover:bg-cyan-l text-ink font-black text-[12px] py-4 uppercase tracking-widest transition-all duration-200 hover:-translate-y-px shadow-[0_4px_24px_rgba(0,180,198,0.2)]">
                  <MessageCircle className="w-4 h-4" /> Send via WhatsApp
                </a>
                <p className="label-muted text-center">Or call {COMPANY.phone}. Mon to Sat, 07:00 to 17:00.</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

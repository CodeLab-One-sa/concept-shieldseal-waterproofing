import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import AnimateIn from "./animate-in";
import { COMPANY } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="bg-ink2">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5">

          {/* LEFT — info panel with image background */}
          <div className="lg:col-span-2 relative overflow-hidden min-h-[480px] lg:min-h-0">
            {/* Background image */}
            <Image
              src="/images/roof-workers.jpg"
              alt="ShieldSeal waterproofing team"
              fill className="object-cover object-center"
              quality={78}
            />
            <div className="absolute inset-0 bg-ink/88" />
            <div className="absolute inset-0" style={{ background:"linear-gradient(to right, rgba(10,10,10,0.5) 0%, transparent 100%)" }} />
            {/* Tech grid on top */}
            <div className="absolute inset-0 tech-grid opacity-60" />

            <div className="relative z-10 px-8 py-14 lg:py-16 flex flex-col h-full">
              <div className="mb-10">
                <p className="label mb-5">Contact — Get started</p>
                <h2 className="text-3xl font-black tracking-tight text-white leading-tight text-balance">
                  Book your free<br />
                  <span className="text-cyan">inspection today.</span>
                </h2>
              </div>

              <div className="space-y-6 flex-1">
                {[
                  { icon: <Phone className="w-3.5 h-3.5" />,         label:"Telephone",     value:COMPANY.phone,                href:`tel:${COMPANY.phone.replace(/\s/g,"")}` },
                  { icon: <MessageCircle className="w-3.5 h-3.5" />, label:"WhatsApp",      value:"Send a message",             href:COMPANY.whatsapp },
                  { icon: <Mail className="w-3.5 h-3.5" />,          label:"Email",         value:COMPANY.email,                href:`mailto:${COMPANY.email}` },
                  { icon: <MapPin className="w-3.5 h-3.5" />,        label:"Office",        value:"Germiston, Johannesburg",    href:null },
                  { icon: <Clock className="w-3.5 h-3.5" />,         label:"Hours",         value:"Mon–Sat  07:00–17:00",       href:null },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-8 h-8 border border-border-s flex items-center justify-center text-cyan shrink-0 mt-0.5">{item.icon}</div>
                    <div>
                      <p className="label-muted mb-0.5">{item.label}</p>
                      {item.href
                        ? <a href={item.href} target={item.href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer" className="text-[13px] text-white/70 hover:text-white transition-colors font-mono">{item.value}</a>
                        : <p className="text-[13px] text-white/65 font-mono">{item.value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <p className="label-muted mb-1">Registration</p>
                <p className="text-[12px] font-mono text-white/45">{COMPANY.nhbrc}</p>
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <AnimateIn delay={60} className="lg:col-span-3 px-8 py-14 lg:px-12 lg:py-16">
            <p className="label mb-6">Request — Free Inspection Form</p>
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                {[{l:"Full name",p:"Your name"},{l:"Phone number",p:"082 000 0000"}].map(f => (
                  <div key={f.l}>
                    <label className="label-muted block mb-2.5">{f.l}</label>
                    <input type="text" placeholder={f.p}
                      className="w-full bg-ink border border-border focus:border-border-s px-4 py-3.5 text-[13px] text-white placeholder-white/28 focus:outline-none font-mono transition-colors" />
                  </div>
                ))}
              </div>
              <div>
                <label className="label-muted block mb-2.5">Property address</label>
                <input type="text" placeholder="12 Oak Street, Bedfordview"
                  className="w-full bg-ink border border-border focus:border-border-s px-4 py-3.5 text-[13px] text-white placeholder-white/28 focus:outline-none font-mono transition-colors" />
              </div>
              <div>
                <label className="label-muted block mb-2.5">Problem type</label>
                <select className="w-full bg-ink border border-border focus:border-border-s px-4 py-3.5 text-[13px] text-white/65 focus:outline-none font-mono transition-colors appearance-none cursor-pointer">
                  <option value="">-- Select problem --</option>
                  {["Flat roof leaking","Rising damp in walls","Basement flooding","Balcony leaking","Need roof coating","Unsure — need diagnosis"].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="label-muted block mb-2.5">Additional notes</label>
                <textarea rows={4} placeholder="When did the problem start? How bad is it? Have you had repairs before?"
                  className="w-full bg-ink border border-border focus:border-border-s px-4 py-3.5 text-[13px] text-white placeholder-white/28 focus:outline-none font-mono transition-colors resize-none" />
              </div>
              <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-cyan hover:bg-cyan-l text-ink font-black text-[12px] py-4.5 uppercase tracking-widest transition-all duration-200 hover:-translate-y-px shadow-[0_4px_24px_rgba(0,180,198,0.2)]">
                <MessageCircle className="w-4 h-4" />
                Send via WhatsApp
              </a>
              <p className="label-muted text-center">Or call {COMPANY.phone} &nbsp;·&nbsp; Mon to Sat, 07:00 to 17:00</p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

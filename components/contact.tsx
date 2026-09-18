import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import AnimateIn from "./animate-in";
import { COMPANY } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5">

          {/* Info panel — dark with subtle image */}
          <div className="lg:col-span-2 relative overflow-hidden min-h-[420px] lg:min-h-0">
            <Image src="/images/waterproofing-work.jpg" alt=""
              fill className="object-cover object-center" quality={75} aria-hidden="true" />
            <div className="absolute inset-0 bg-dark/90" />

            <div className="relative z-10 px-8 py-14 lg:py-16 flex flex-col h-full">
              <div className="mb-10">
                <p className="label-dark label mb-5">Contact</p>
                <h2 className="font-display font-black text-white text-balance leading-tight"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
                  Book your free<br />
                  <span className="text-teal">inspection today.</span>
                </h2>
              </div>

              <div className="space-y-6 flex-1">
                {[
                  { icon: <Phone className="w-3.5 h-3.5" />,         label:"Telephone",       value:COMPANY.phone,           href:`tel:${COMPANY.phone.replace(/\s/g,"")}` },
                  { icon: <MessageCircle className="w-3.5 h-3.5" />, label:"WhatsApp",        value:"Send a message",         href:COMPANY.whatsapp },
                  { icon: <Mail className="w-3.5 h-3.5" />,          label:"Email",           value:COMPANY.email,            href:`mailto:${COMPANY.email}` },
                  { icon: <MapPin className="w-3.5 h-3.5" />,        label:"Office",          value:"Germiston, Johannesburg", href:null },
                  { icon: <Clock className="w-3.5 h-3.5" />,         label:"Operating hours", value:"Mon–Sat 07:00–17:00",    href:null },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-4 border-b pb-5 last:border-0 last:pb-0" style={{ borderColor:"rgba(255,255,255,0.08)" }}>
                    <div className="w-8 h-8 border flex items-center justify-center text-teal shrink-0 mt-0.5" style={{ borderColor:"rgba(0,170,194,0.30)" }}>{item.icon}</div>
                    <div>
                      <p className="label-dim-dark label-dim mb-0.5">{item.label}</p>
                      {item.href
                        ? <a href={item.href} target={item.href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer" className="text-[13px] text-white/70 hover:text-white transition-colors font-mono">{item.value}</a>
                        : <p className="text-[13px] text-white/65 font-mono">{item.value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8" style={{ borderTop:"1px solid rgba(255,255,255,0.08)" }}>
                <p className="label-dim mb-1">{COMPANY.nhbrc}</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <AnimateIn delay={60} className="lg:col-span-3 px-8 py-14 lg:px-12 lg:py-16">
            <p className="label-dark label mb-6">Request a Free Inspection</p>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {[{l:"Full name",p:"Your name"},{l:"Phone number",p:"082 000 0000"}].map(f => (
                  <div key={f.l}>
                    <label className="label-dim block mb-2.5">{f.l}</label>
                    <input type="text" placeholder={f.p}
                      className="w-full bg-dark-s border px-4 py-3.5 text-[13px] text-white placeholder-white/25 focus:outline-none font-mono transition-colors focus:border-teal"
                      style={{ borderColor:"rgba(255,255,255,0.12)" }} />
                  </div>
                ))}
              </div>
              <div>
                <label className="label-dim block mb-2.5">Property address</label>
                <input type="text" placeholder="12 Oak Street, Bedfordview"
                  className="w-full bg-dark-s border px-4 py-3.5 text-[13px] text-white placeholder-white/25 focus:outline-none font-mono transition-colors focus:border-teal"
                  style={{ borderColor:"rgba(255,255,255,0.12)" }} />
              </div>
              <div>
                <label className="label-dim block mb-2.5">Problem type</label>
                <select className="w-full bg-dark-s border px-4 py-3.5 text-[13px] text-white/65 focus:outline-none font-mono transition-colors appearance-none cursor-pointer focus:border-teal"
                  style={{ borderColor:"rgba(255,255,255,0.12)" }}>
                  <option value="">-- Select --</option>
                  {["Flat roof leaking","Rising damp","Basement flooding","Balcony leaking","Roof coating","Unsure — need diagnosis"].map(o=><option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="label-dim block mb-2.5">Additional notes</label>
                <textarea rows={4} placeholder="When did it start? How bad is it? Previous repairs?"
                  className="w-full bg-dark-s border px-4 py-3.5 text-[13px] text-white placeholder-white/25 focus:outline-none font-mono transition-colors resize-none focus:border-teal"
                  style={{ borderColor:"rgba(255,255,255,0.12)" }} />
              </div>
              <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-teal hover:bg-teal-l text-white font-display font-black text-[13px] py-4 uppercase tracking-wide transition-all duration-200 hover:-translate-y-px shadow-[0_4px_20px_rgba(0,170,194,0.22)]">
                <MessageCircle className="w-4 h-4" />Send via WhatsApp
              </a>
              <p className="label-dim text-center">Or call {COMPANY.phone} · Mon to Sat, 07:00 to 17:00</p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

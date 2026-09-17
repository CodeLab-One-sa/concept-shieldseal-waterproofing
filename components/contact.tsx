import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import AnimateIn from "./animate-in";
import { COMPANY } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-ink2">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <AnimateIn className="mb-16">
          <p className="label mb-5">Get in Touch</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <h2
              className="font-display font-black text-white text-balance leading-none"
              style={{ fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}
            >
              Book your<br />
              <span className="text-teal">free inspection.</span>
            </h2>
            <p className="text-white/50 text-[15px] leading-relaxed self-end">
              We visit the property, diagnose the problem, and provide a written, itemised quote. No call-out fee. No pressure to proceed.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Contact info */}
          <AnimateIn className="lg:col-span-2">
            <div className="space-y-6">
              {[
                { icon: <Phone className="w-3.5 h-3.5" />,         label: "Telephone",       value: COMPANY.phone,           href: `tel:${COMPANY.phone.replace(/\s/g, "")}` },
                { icon: <MessageCircle className="w-3.5 h-3.5" />, label: "WhatsApp",        value: "Send a message",         href: COMPANY.whatsapp },
                { icon: <Mail className="w-3.5 h-3.5" />,          label: "Email",           value: COMPANY.email,            href: `mailto:${COMPANY.email}` },
                { icon: <MapPin className="w-3.5 h-3.5" />,        label: "Office",          value: "Germiston, Johannesburg", href: null },
                { icon: <Clock className="w-3.5 h-3.5" />,         label: "Operating hours", value: "Mon–Sat  07:00–17:00",    href: null },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4 border-b border-border pb-6 last:border-0 last:pb-0">
                  <div className="w-8 h-8 border border-border-s flex items-center justify-center text-teal shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="label-dim mb-0.5">{item.label}</p>
                    {item.href
                      ? <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-[13px] text-white/68 hover:text-white transition-colors font-mono">{item.value}</a>
                      : <p className="text-[13px] text-white/65 font-mono">{item.value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="label-dim mb-2">NHBRC Registration</p>
              <p className="text-[12px] font-mono text-white/40">{COMPANY.nhbrc}</p>
            </div>
          </AnimateIn>

          {/* Request form */}
          <AnimateIn delay={60} className="lg:col-span-3">
            <div className="border border-border bg-ink p-7 lg:p-9">
              <p className="label mb-6">Request a Free Inspection</p>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[{ l: "Full name", p: "Your name" }, { l: "Phone number", p: "082 000 0000" }].map(f => (
                    <div key={f.l}>
                      <label className="label-dim block mb-2.5">{f.l}</label>
                      <input
                        type="text" placeholder={f.p}
                        className="w-full bg-ink2 border border-border focus:border-border-s px-4 py-3.5 text-[13px] text-white placeholder-white/22 focus:outline-none font-mono transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="label-dim block mb-2.5">Property address</label>
                  <input
                    type="text" placeholder="12 Oak Street, Bedfordview"
                    className="w-full bg-ink2 border border-border focus:border-border-s px-4 py-3.5 text-[13px] text-white placeholder-white/22 focus:outline-none font-mono transition-colors"
                  />
                </div>

                <div>
                  <label className="label-dim block mb-2.5">Problem type</label>
                  <select
                    className="w-full bg-ink2 border border-border focus:border-border-s px-4 py-3.5 text-[13px] text-white/62 focus:outline-none font-mono transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">-- Select --</option>
                    {["Flat roof leaking", "Rising damp", "Basement flooding", "Balcony leaking", "Roof coating needed", "Unsure — need diagnosis"].map(o => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="label-dim block mb-2.5">Additional notes</label>
                  <textarea
                    rows={4}
                    placeholder="When did it start? How bad is it? Previous repairs?"
                    className="w-full bg-ink2 border border-border focus:border-border-s px-4 py-3.5 text-[13px] text-white placeholder-white/22 focus:outline-none font-mono transition-colors resize-none"
                  />
                </div>

                <a
                  href={COMPANY.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-teal hover:bg-teal-l text-ink font-display font-black text-[13px] py-4.5 uppercase tracking-wide transition-all duration-200 hover:-translate-y-px shadow-[0_4px_24px_rgba(0,170,194,0.20)]"
                >
                  <MessageCircle className="w-4 h-4" />
                  Send via WhatsApp
                </a>

                <p className="label-dim text-center">
                  Or call {COMPANY.phone} · Mon to Sat, 07:00 to 17:00
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

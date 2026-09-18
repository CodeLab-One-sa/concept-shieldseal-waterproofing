import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import AnimateIn from "./animate-in";
import { COMPANY } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact">

      {/* Top bar: teal brand header */}
      <div className="bg-teal">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
          <AnimateIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-on-teal/65 mb-3">
                  Free site inspection
                </p>
                <h2
                  className="font-display font-black text-on-teal text-balance leading-tight"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
                >
                  Book your free<br />inspection today.
                </h2>
              </div>
              <div className="grid grid-cols-3 gap-0 border border-on-teal/20">
                {[
                  { n:"Free", l:"Call-out fee" },
                  { n:"24 hr", l:"Quote delivery" },
                  { n:"10 yr", l:"Guarantee" },
                ].map((item, i) => (
                  <div key={item.n} className={`px-5 py-5 text-center ${i < 2 ? "border-r border-on-teal/20" : ""}`}>
                    <p className="font-display font-black text-on-teal text-2xl leading-none mb-1">{item.n}</p>
                    <p className="font-mono text-[10px] font-semibold tracking-[0.15em] uppercase text-on-teal/55">{item.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* Main contact area: white with two clear columns */}
      <div className="bg-canvas">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* LEFT: Contact details — clean, on white */}
            <AnimateIn className="lg:col-span-2">
              <div className="space-y-0">
                {[
                  { icon: <Phone className="w-4 h-4" />,          label:"Telephone",       value: COMPANY.phone,            href:`tel:${COMPANY.phone.replace(/\s/g,"")}` },
                  { icon: <MessageCircle className="w-4 h-4" />,  label:"WhatsApp",        value: "Send a message",          href: COMPANY.whatsapp },
                  { icon: <Mail className="w-4 h-4" />,           label:"Email",           value: COMPANY.email,             href:`mailto:${COMPANY.email}` },
                  { icon: <MapPin className="w-4 h-4" />,         label:"Office address",  value: COMPANY.address,           href: null },
                  { icon: <Clock className="w-4 h-4" />,          label:"Operating hours", value: "Mon to Sat, 07:00 to 17:00", href: null },
                ].map((item, i) => (
                  <div key={item.label} className={`flex items-start gap-4 py-5 ${i < 4 ? "border-b border-line" : ""}`}>
                    <div className="w-9 h-9 bg-teal/10 border border-line-teal flex items-center justify-center text-teal shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="label-dim mb-0.5">{item.label}</p>
                      {item.href
                        ? <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                            className="text-[14px] font-medium text-ink-mid hover:text-teal transition-colors">
                            {item.value}
                          </a>
                        : <p className="text-[14px] font-medium text-ink-mid">{item.value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-canvas-s border border-line flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                <div>
                  <p className="text-[13px] font-bold text-ink mb-0.5">{COMPANY.nhbrc}</p>
                  <p className="text-[12px] font-medium text-muted">CETA Accredited Training Provider</p>
                </div>
              </div>
            </AnimateIn>

            {/* RIGHT: Form — white card with teal accents */}
            <AnimateIn delay={60} className="lg:col-span-3">
              <div className="border border-line p-7 lg:p-9">
                <h3
                  className="font-display font-bold text-ink mb-1.5"
                  style={{ fontSize: "1.4rem" }}
                >
                  Request a free inspection
                </h3>
                <p className="text-[14px] font-medium text-muted mb-7">
                  We confirm within 2 hours and arrange a convenient time to visit your property.
                </p>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[{ l:"Full name", p:"Your name" },{ l:"Phone number", p:"082 000 0000" }].map(f => (
                      <div key={f.l}>
                        <label className="label-dim block mb-2">{f.l}</label>
                        <input type="text" placeholder={f.p}
                          className="w-full border border-line focus:border-teal bg-canvas px-4 py-3 text-[14px] font-medium text-ink placeholder-muted focus:outline-none transition-colors" />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="label-dim block mb-2">Property address</label>
                    <input type="text" placeholder="12 Oak Street, Bedfordview"
                      className="w-full border border-line focus:border-teal bg-canvas px-4 py-3 text-[14px] font-medium text-ink placeholder-muted focus:outline-none transition-colors" />
                  </div>

                  <div>
                    <label className="label-dim block mb-2">Problem type</label>
                    <select className="w-full border border-line focus:border-teal bg-canvas px-4 py-3 text-[14px] font-medium text-ink-mid focus:outline-none transition-colors appearance-none cursor-pointer">
                      <option value="">Select a problem type...</option>
                      {["Flat roof leaking","Rising damp","Basement flooding","Balcony leaking","Roof coating needed","Not sure, need a diagnosis"].map(o => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="label-dim block mb-2">Additional notes <span className="text-muted normal-case font-sans font-normal" style={{ fontSize:"11px" }}>(optional)</span></label>
                    <textarea rows={4} placeholder="When did it start? How bad is it? Any previous repairs attempted?"
                      className="w-full border border-line focus:border-teal bg-canvas px-4 py-3 text-[14px] font-medium text-ink placeholder-muted focus:outline-none transition-colors resize-none" />
                  </div>

                  <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 bg-teal hover:bg-teal-l text-white font-display font-black text-[14px] py-4 uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(0,170,194,0.22)]">
                    <MessageCircle className="w-4 h-4" />
                    Send via WhatsApp
                  </a>

                  <p className="label-dim text-center">
                    Or call{" "}
                    <a href={`tel:${COMPANY.phone.replace(/\s/g,"")}`} className="text-teal hover:text-teal-l transition-colors">
                      {COMPANY.phone}
                    </a>
                    {" "}· Mon to Sat, 07:00 to 17:00
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>

    </section>
  );
}

import Logo from "./logo";
import { COMPANY } from "@/lib/content";

const SYSTEM_LINKS = [
  ["WP·01", "Flat Roof Waterproofing"],
  ["DP·02", "Rising Damp Treatment"],
  ["BT·03", "Basement Tanking"],
  ["BP·04", "Balcony Waterproofing"],
  ["RM·05", "Roof Maintenance Plans"],
  ["RC·06", "Protective Roof Coatings"],
];

export default function Footer() {
  return (
    <footer className="bg-ink">
      {/* Teal accent top rule */}
      <div className="h-[3px] bg-teal" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Brand column */}
          <div className="md:col-span-5">
            <Logo height={40} className="mb-7" />
            <p className="text-[13px] font-mono text-white/35 leading-relaxed max-w-[320px] mb-7">
              NHBRC-registered waterproofing specialists since 2011. Johannesburg and Gauteng. Written 10-year workmanship guarantee on every major application.
            </p>
            <div className="space-y-2">
              <p className="label-dim">{COMPANY.nhbrc}</p>
              <p className="label-dim">CETA Accredited Training Provider</p>
            </div>
          </div>

          {/* Systems */}
          <div className="md:col-span-3">
            <p className="label mb-6">Systems</p>
            <ul className="space-y-3">
              {SYSTEM_LINKS.map(([code, name]) => (
                <li key={code}>
                  <a href="#services" className="flex items-center gap-2.5 text-[12px] font-mono text-white/32 hover:text-teal transition-colors">
                    <span className="text-teal/30">{code}</span>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="label mb-6">Contact</p>
            <ul className="space-y-4">
              <li>
                <p className="label-dim mb-1">Telephone</p>
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="text-[13px] font-mono text-white/48 hover:text-teal transition-colors">{COMPANY.phone}</a>
              </li>
              <li>
                <p className="label-dim mb-1">Email</p>
                <a href={`mailto:${COMPANY.email}`} className="text-[13px] font-mono text-white/48 hover:text-teal transition-colors">{COMPANY.email}</a>
              </li>
              <li>
                <p className="label-dim mb-1">Office</p>
                <p className="text-[13px] font-mono text-white/40 leading-relaxed">{COMPANY.address}</p>
              </li>
              <li>
                <p className="label-dim mb-1">Operating hours</p>
                <p className="text-[13px] font-mono text-white/40">Mon–Sat  07:00–17:00</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="rule mb-8" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="label-dim">&copy; {new Date().getFullYear()} ShieldSeal Waterproofing. All rights reserved.</p>
          <p className="label-dim">
            Concept website built by{" "}
            <a href={COMPANY.codelab} className="text-teal/55 hover:text-teal transition-colors" target="_blank" rel="noopener noreferrer">
              CodeLab One
            </a>
            {" "}for the waterproofing industry.
          </p>
        </div>
      </div>

      {/* Sticky WhatsApp */}
      <a
        href={COMPANY.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5c] text-white text-[12px] font-black pl-4 pr-5 py-3.5 rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.35)] transition-all duration-200 hover:-translate-y-0.5"
        aria-label="Chat with ShieldSeal on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.122 1.523 5.853L.057 23.743a.5.5 0 0 0 .6.6l5.89-1.466A11.935 11.935 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.795 9.795 0 0 1-5.065-1.407l-.363-.216-3.762.937.955-3.668-.237-.378A9.818 9.818 0 0 1 2.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
        </svg>
        Chat with us
      </a>
    </footer>
  );
}

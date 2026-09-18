import Logo from "./logo";
import { COMPANY } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-dark border-t" style={{ borderColor:"rgba(255,255,255,0.08)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            {/* Logo on dark — needs the original with white SHIELD, or we use the mark */}
            <Logo height={38} className="mb-6 brightness-0 invert" />
            <p className="text-[13px] font-mono text-white/35 leading-relaxed max-w-[300px] mb-5">
              NHBRC-registered waterproofing specialists. Johannesburg and Gauteng. 10-year written guarantee on every major application.
            </p>
            <p className="label-dim mb-1">{COMPANY.nhbrc}</p>
            <p className="label-dim">CETA Accredited</p>
          </div>

          <div className="md:col-span-3">
            <p className="label mb-5">Systems</p>
            <ul className="space-y-3">
              {[["WP·01","Flat Roof"],["DP·02","Rising Damp"],["BT·03","Basement Tanking"],["BP·04","Balcony Waterproofing"],["RM·05","Maintenance Plans"],["RC·06","Roof Coatings"]].map(([code,name]) => (
                <li key={code}>
                  <a href="#services" className="flex items-center gap-2.5 text-[12px] font-mono text-white/30 hover:text-teal transition-colors">
                    <span className="text-teal/35">{code}</span>{name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="label mb-5">Contact</p>
            <ul className="space-y-4">
              {[
                { l:"Telephone", v:COMPANY.phone, h:`tel:${COMPANY.phone.replace(/\s/g,"")}` },
                { l:"Email",     v:COMPANY.email, h:`mailto:${COMPANY.email}` },
              ].map(i => (
                <li key={i.l}>
                  <p className="label-dim mb-1">{i.l}</p>
                  <a href={i.h} className="text-[13px] font-mono text-white/45 hover:text-teal transition-colors">{i.v}</a>
                </li>
              ))}
              <li>
                <p className="label-dim mb-1">Office</p>
                <p className="text-[13px] font-mono text-white/40 leading-relaxed">{COMPANY.address}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row items-start md:items-center justify-between gap-4" style={{ borderColor:"rgba(255,255,255,0.08)" }}>
          <p className="label-dim">&copy; {new Date().getFullYear()} ShieldSeal Waterproofing. All rights reserved.</p>
          <p className="label-dim">
            Concept website built by <a href={COMPANY.codelab} className="text-teal/55 hover:text-teal transition-colors" target="_blank" rel="noopener noreferrer">CodeLab One</a>.
          </p>
        </div>
      </div>

      {/* WhatsApp */}
      <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5c] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.40)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(37,211,102,0.45)]"
        aria-label="Chat with us on WhatsApp">
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.122 1.523 5.853L.057 23.743a.5.5 0 0 0 .6.6l5.89-1.466A11.935 11.935 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.795 9.795 0 0 1-5.065-1.407l-.363-.216-3.762.937.955-3.668-.237-.378A9.818 9.818 0 0 1 2.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
        </svg>
      </a>
    </footer>
  );
}

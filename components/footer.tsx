import Logo from "./logo";
import { COMPANY } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-cream border-t-4 border-amber">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Logo size="md" onLight className="mb-5" />
            <p className="text-[13px] on-cream-muted leading-relaxed max-w-xs mb-4">NHBRC-registered waterproofing and building maintenance company serving Johannesburg since 2011. 10-year guarantee on all major applications.</p>
            <p className="text-[11px] text-stone/60">{COMPANY.nhbrc}</p>
          </div>
          <div>
            <p className="text-[11px] font-bold on-cream-muted tracking-[0.15em] uppercase mb-4">Services</p>
            <ul className="space-y-2">{["Flat Roof Waterproofing","Rising Damp Treatment","Basement Tanking","Balcony Waterproofing","Roof Maintenance","Protective Coatings"].map(s => <li key={s}><a href="#services" className="text-[13px] on-cream-muted hover:text-amber-dark transition-colors">{s}</a></li>)}</ul>
          </div>
          <div>
            <p className="text-[11px] font-bold on-cream-muted tracking-[0.15em] uppercase mb-4">Contact</p>
            <ul className="space-y-2.5">
              <li><a href={`tel:${COMPANY.phone.replace(/\s/g,"")}`} className="text-[13px] on-cream-muted hover:text-amber-dark transition-colors">{COMPANY.phone}</a></li>
              <li><a href={`mailto:${COMPANY.email}`} className="text-[13px] on-cream-muted hover:text-amber-dark transition-colors">{COMPANY.email}</a></li>
              <li><p className="text-[13px] on-cream-muted leading-relaxed">{COMPANY.address}</p></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border-cream flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[12px] on-cream-muted">&copy; {new Date().getFullYear()} ShieldSeal Waterproofing. All rights reserved.</p>
          <p className="text-[12px] on-cream-muted">Concept website built by <a href={COMPANY.codelab} className="text-amber-dark hover:text-amber transition-colors" target="_blank" rel="noopener noreferrer">CodeLab One</a> to showcase web design for the waterproofing industry.</p>
        </div>
      </div>
      {/* Sticky WhatsApp */}
      <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5c] text-white text-[13px] font-bold pl-4 pr-5 py-3.5 rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.35)] transition-all duration-200 hover:-translate-y-0.5" aria-label="WhatsApp ShieldSeal">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.122 1.523 5.853L.057 23.743a.5.5 0 0 0 .6.6l5.89-1.466A11.935 11.935 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.795 9.795 0 0 1-5.065-1.407l-.363-.216-3.762.937.955-3.668-.237-.378A9.818 9.818 0 0 1 2.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/></svg>
        Chat with us
      </a>
    </footer>
  );
}

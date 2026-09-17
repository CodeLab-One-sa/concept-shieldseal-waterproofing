import { ShieldCheck, Award, FileCheck, Repeat } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="py-16 bg-orange">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          <div className="md:col-span-2">
            <p className="text-white/70 text-xs font-bold tracking-widest uppercase mb-2">Our guarantee</p>
            <h2 className="text-3xl font-black text-white leading-tight">10 years. In writing.<br />Transferable to the next owner.</h2>
          </div>
          <div className="h-px md:h-12 w-full md:w-px bg-white/20 shrink-0" />
          <div className="grid grid-cols-2 gap-5">
            {[
              { icon: <ShieldCheck className="w-5 h-5" />, text: "10-year workmanship guarantee" },
              { icon: <FileCheck className="w-5 h-5" />,  text: "Issued in writing at sign-off" },
              { icon: <Award className="w-5 h-5" />,      text: "NHBRC registered company" },
              { icon: <Repeat className="w-5 h-5" />,     text: "Transferable on property sale" },
            ].map(item => (
              <div key={item.text} className="flex items-start gap-2.5">
                <div className="shrink-0 text-white/80 mt-0.5">{item.icon}</div>
                <p className="text-white/90 text-[13px] font-medium leading-tight">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

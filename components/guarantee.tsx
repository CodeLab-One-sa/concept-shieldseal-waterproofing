import Image from "next/image";

export default function Guarantee() {
  const items = [
    { n: "10 yr",  label: "Workmanship guarantee", sub: "Issued in writing at sign-off" },
    { n: "NHBRC",  label: "Nationally registered",  sub: "Every team, every project" },
    { n: "100%",   label: "Written specification",   sub: "Before work starts" },
    { n: "Free",   label: "Site inspection",         sub: "No call-out fee, no obligation" },
  ];
  return (
    <section className="relative overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/roof-repair.jpg"
          alt=""
          fill
          className="object-cover object-center scale-105"
          quality={75}
        />
        <div className="absolute inset-0 bg-ink/86" />
        {/* Teal gradient overlay from left */}
        <div className="absolute inset-0" style={{ background:"linear-gradient(to right, rgba(0,180,198,0.06) 0%, transparent 60%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top rule */}
        <div className="rule-strong" />
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div key={item.n} className={`px-6 lg:px-8 py-12 ${i > 0 ? "border-l border-border-s" : ""}`}>
              <p className="font-mono text-cyan font-bold tabular-nums mb-3" style={{ fontSize:"2.6rem", lineHeight:1 }}>{item.n}</p>
              <p className="text-white text-[15px] font-bold mb-1">{item.label}</p>
              <p className="text-white/45 text-[12px] font-mono">{item.sub}</p>
            </div>
          ))}
        </div>
        <div className="rule-strong" />
      </div>
    </section>
  );
}

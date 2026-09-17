export default function Guarantee() {
  return (
    <section className="border-y border-border-s">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {[
            { n: "10 yr", label: "Workmanship guarantee, issued in writing at sign-off" },
            { n: "NHBRC", label: "Nationally registered. Every team, every job." },
            { n: "100%", label: "Written specification provided before work starts." },
            { n: "Free", label: "Site inspection. No call-out fee, no obligation." },
          ].map((item, i) => (
            <div key={item.n} className={`px-6 py-10 ${i < 3 ? "border-r border-border-s" : ""}`}>
              <p className="font-mono text-cyan font-bold tabular-nums mb-2" style={{ fontSize:"2.4rem", lineHeight:1 }}>{item.n}</p>
              <p className="text-[13px] text-white/45 leading-snug">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

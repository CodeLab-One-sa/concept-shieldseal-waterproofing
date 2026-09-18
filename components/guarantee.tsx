export default function Guarantee() {
  const items = [
    { n: "10 yr",  h: "Workmanship guarantee",  b: "Issued in writing at sign-off. Transferable." },
    { n: "NHBRC", h: "Nationally registered",   b: "Every team member. Every project." },
    { n: "Free",  h: "Site inspection",          b: "No call-out fee. No obligation." },
    { n: "100%",  h: "Written specification",    b: "Full scope before work begins." },
  ];
  return (
    <section className="bg-teal">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div key={item.n} className={`px-6 lg:px-8 py-11 ${i > 0 ? "border-l border-on-teal/20" : ""}`}>
              <p className="font-display font-black leading-none mb-3 tabular-nums" style={{ fontSize: "2.8rem", color: "#062830" }}>
                {item.n}
              </p>
              <p className="font-bold text-[14px] text-on-teal mb-1">{item.h}</p>
              <p className="text-[12px] leading-snug" style={{ color: "rgba(6,40,48,0.60)" }}>{item.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

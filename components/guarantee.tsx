/**
 * Full-width TEAL section — uses the logo's primary colour as a brand statement.
 * Dark text on teal for maximum contrast. No images.
 */
export default function Guarantee() {
  const items = [
    { n: "10 yr",  h: "Workmanship guarantee",  b: "Issued in writing at sign-off. Transferable on sale." },
    { n: "NHBRC", h: "Nationally registered",   b: "Every team member. Every project." },
    { n: "Free",  h: "Site inspection",          b: "No call-out fee. No obligation to proceed." },
    { n: "100%",  h: "Written specification",    b: "Full scope issued before any work begins." },
  ];

  return (
    <section className="bg-teal">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.n}
              className={`px-6 lg:px-8 py-12 ${i > 0 ? "border-l border-on-teal/20" : ""}`}
            >
              <p
                className="font-display font-black leading-none mb-3 tabular-nums"
                style={{ fontSize: "3rem", color: "#062830" }}
              >
                {item.n}
              </p>
              <p className="font-bold text-[14px] text-on-teal mb-1.5">{item.h}</p>
              <p className="text-[12px] leading-snug" style={{ color: "rgba(6,40,48,0.65)" }}>{item.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ITEMS = [
  { value: "14 yr",   label: "Years in Johannesburg" },
  { value: "2 400+",  label: "Jobs completed" },
  { value: "10 yr",   label: "Written guarantee" },
  { value: "NHBRC",   label: "Registered contractor" },
  { value: "Free",    label: "Site inspection" },
  { value: "100%",    label: "NHBRC compliant" },
  { value: "2011",    label: "Established in Joburg" },
  { value: "R60+",    label: "Per m² from" },
];

export default function Ticker() {
  // Duplicate so the loop is seamless — animation shifts -50%
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="bg-dark overflow-hidden border-b border-white/[0.07]">
      <div
        className="flex items-center"
        style={{ animation: "ticker 32s linear infinite", width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            {/* Stat item */}
            <div className="flex items-center gap-3 px-8 py-5">
              <span
                className="font-display font-black text-teal tabular-nums"
                style={{ fontSize: "1.35rem", lineHeight: 1 }}
              >
                {item.value}
              </span>
              <span className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-white/55">
                {item.label}
              </span>
            </div>
            {/* Separator dot */}
            <span className="text-teal/30 text-lg select-none" aria-hidden="true">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}

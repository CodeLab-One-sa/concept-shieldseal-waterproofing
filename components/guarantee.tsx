export default function Guarantee() {
  const items = [
    { n: "10", unit: "years",     label: "Workmanship guarantee" },
    { n: "NHBRC",unit: "reg.",    label: "Nationally registered" },
    { n: "100%", unit: "written", label: "Guarantee issued at sign-off" },
    { n: "FSA",  unit: "member",  label: "Federated Employers insured" },
  ];
  return (
    <section className="bg-amber">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/15">
          {items.map(item => (
            <div key={item.n} className="px-6 lg:px-10 py-10">
              <p className="text-white text-[2.8rem] font-black leading-none mb-1 tabular-nums">{item.n}</p>
              <p className="text-white/60 text-[12px] uppercase tracking-widest font-bold mb-2">{item.unit}</p>
              <p className="text-white/80 text-[14px] font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

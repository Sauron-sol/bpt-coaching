const words = [
  "SPORT",
  "NUTRITION",
  "DISCIPLINE",
  "TRANSFORMATION",
  "NICE",
  "MONACO",
  "RÉSULTATS",
  "COACHING",
  "PERFORMANCE",
  "BIEN-ÊTRE",
];

export default function Marquee() {
  const repeated = [...words, ...words, ...words, ...words];

  return (
    <div aria-hidden="true" className="relative py-5 bg-bpt-charcoal overflow-hidden select-none">
      <div className="absolute inset-0 opacity-5 dot-grid" />
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((word, i) => (
          <span key={i} className="flex items-center gap-8 mx-8">
            <span className="text-[11px] font-semibold tracking-[0.4em] text-white/60 uppercase">
              {word}
            </span>
            <span className="w-1 h-1 rounded-full bg-bpt-red flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}

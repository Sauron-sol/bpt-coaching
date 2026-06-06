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
    <div aria-hidden="true" className="relative overflow-hidden bg-bpt-charcoal py-4 select-none sm:py-5">
      <div className="absolute inset-0 opacity-5 dot-grid" />
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((word, i) => (
          <span key={i} className="mx-5 flex items-center gap-5 sm:mx-8 sm:gap-8">
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60 sm:text-[11px] sm:tracking-[0.4em]">
              {word}
            </span>
            <span className="w-1 h-1 rounded-full bg-bpt-red flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}

import React from "react";

interface MarqueeProps {
  items: string[];
}

export default function Marquee({ items }: MarqueeProps) {
  return (
    <div className="w-full py-4 border-y border-white/[0.08] bg-brand-surface/70 backdrop-blur-md overflow-hidden flex relative select-none">
      <div className="flex whitespace-nowrap animate-marquee font-bold text-xs sm:text-sm tracking-[0.25em] text-slate-400">
        <div className="flex items-center gap-6 mx-6">
          {items.map((item, idx) => (
            <React.Fragment key={`m1-${idx}`}>
              <span>{item}</span>
              <span className={idx % 3 === 0 ? "text-brand-cyan" : idx % 3 === 1 ? "text-brand-violet" : "text-brand-pink"}>
                &bull;
              </span>
            </React.Fragment>
          ))}
        </div>
        <div className="flex items-center gap-6 mx-6">
          {items.map((item, idx) => (
            <React.Fragment key={`m2-${idx}`}>
              <span>{item}</span>
              <span className={idx % 3 === 0 ? "text-brand-cyan" : idx % 3 === 1 ? "text-brand-violet" : "text-brand-pink"}>
                &bull;
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

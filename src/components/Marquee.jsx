import React from 'react';
import { studioConfig } from '../data/studioData';

export default function Marquee() {
  const items = studioConfig.categories.map((c) => c.title);
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y border-brand-300/70 bg-brand-50 py-4" aria-hidden="true">
      <div className="marquee">
        {row.map((t, i) => (
          <span key={i} className="flex items-center whitespace-nowrap title-caps text-lg sm:text-xl px-7">
            {t}
            <span className="ml-14 text-brand-400 text-sm">♥</span>
          </span>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import { studioConfig } from '../data/studioData';

export default function Marquee() {
  const items = studioConfig.categories.map((c) => c.title);
  const row = [...items, ...items];
  return (
    <div className="marquee-wrap relative overflow-hidden bg-brand-800 py-4 border-y border-brand-900">
      <div className="marquee">
        {[...row, ...row].map((t, i) => (
          <span key={i} className="flex items-center font-serif italic text-xl sm:text-2xl text-brand-100 whitespace-nowrap px-6">
            {t}
            <span className="ml-12 text-champagne text-base not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

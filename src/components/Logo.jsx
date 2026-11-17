import React from 'react';
import { studioConfig } from '../data/studioData';

export default function Logo({ light = false, size = 'md' }) {
  const big = size === 'lg';
  return (
    <span className="inline-flex flex-col items-center leading-none select-none">
      <span className={`font-script ${big ? 'text-5xl' : 'text-3xl sm:text-4xl'} ${light ? 'text-white' : 'text-brand-700'}`}>
        {studioConfig.name}
      </span>
      <span className={`mt-0.5 text-[9px] sm:text-[10px] tracking-[0.5em] uppercase font-semibold ${light ? 'text-brand-200' : 'text-champagne-dark'}`}>
        {studioConfig.nameSuffix}
      </span>
    </span>
  );
}

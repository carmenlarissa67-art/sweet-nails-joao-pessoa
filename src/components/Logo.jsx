import React from 'react';

// Monograma em arco + "Sweet Nails" em serifa + STUDIO
export default function Logo({ light = false }) {
  return (
    <span className={`inline-flex items-center gap-3 select-none ${light ? 'text-white' : 'text-brand-700'}`}>
      <svg viewBox="0 0 40 52" className="w-8 h-10" fill="none" aria-hidden="true">
        <path d="M5 50V20a15 15 0 0 1 30 0v30" stroke="currentColor" strokeWidth="1.2" />
        <text x="20" y="38" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="24" fill="currentColor">S</text>
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-2xl sm:text-[1.7rem] font-normal">Sweet Nails</span>
        <span className={`mt-1 text-[9px] tracking-[0.45em] font-medium ${light ? 'text-brand-200' : 'text-champagne-dark'}`}>STUDIO</span>
      </span>
    </span>
  );
}

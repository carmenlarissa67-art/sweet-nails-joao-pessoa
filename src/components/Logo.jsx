import React from 'react';

// Logo no estilo do Instagram: monograma em arco + "Sweet Nails" em serifa fina + STUDIO
export default function Logo({ compact = false }) {
  return (
    <span className="inline-flex items-center gap-3 select-none text-brand-500">
      <svg viewBox="0 0 40 52" className={compact ? 'w-7 h-9' : 'w-8 h-10'} fill="none" aria-hidden="true">
        <path d="M5 50V20a15 15 0 0 1 30 0v30" stroke="currentColor" strokeWidth="1.2" />
        <text x="20" y="38" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="24" fill="currentColor">S</text>
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-2xl sm:text-[1.7rem] font-normal">Sweet Nails</span>
        <span className="mt-1 text-[9px] tracking-[0.45em] font-medium text-ink-soft">STUDIO</span>
      </span>
    </span>
  );
}

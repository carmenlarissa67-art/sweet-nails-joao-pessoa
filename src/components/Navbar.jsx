import React, { useEffect, useState } from 'react';
import { studioConfig } from '../data/studioData';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const links = [
  { href: '#valores', label: 'Valores' },
  { href: '#trabalhos', label: 'Trabalhos' },
  { href: '#contato', label: 'Endereço e horários' },
];

export default function Navbar({ onOpenBooking }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-colors duration-300 ${scrolled ? 'bg-brand-100/95 backdrop-blur border-b border-brand-300/60' : 'bg-brand-100 border-b border-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <a href="#" aria-label={`${studioConfig.name} ${studioConfig.nameSuffix}`}><Logo /></a>

        <nav className="hidden md:flex items-center gap-9 text-[13px] font-medium text-ink-soft">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-brand-600 transition-colors">{l.label}</a>
          ))}
          <button
            onClick={() => onOpenBooking(null)}
            className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-full text-[13px] font-semibold tracking-wide transition-colors"
          >
            Agendar horário
          </button>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-ink" aria-label="Abrir menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-brand-100 border-b border-brand-300 px-6 pb-6 flex flex-col text-ink animate-fade-in">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3.5 border-b border-brand-200 font-medium">
              {l.label}
            </a>
          ))}
          <button
            onClick={() => { setOpen(false); onOpenBooking(null); }}
            className="mt-5 bg-brand-600 text-white py-3.5 rounded-full font-semibold"
          >
            Agendar horário
          </button>
        </div>
      )}
    </header>
  );
}

import React, { useEffect, useState } from 'react';
import { studioConfig } from '../data/studioData';
import { Calendar, Menu, X, MessageCircle } from 'lucide-react';
import Logo from './Logo';

const links = [
  { href: '#servicos', label: 'Serviços e valores' },
  { href: '#galeria', label: 'Trabalhos' },
  { href: '#como-agendar', label: 'Como agendar' },
  { href: '#contato', label: 'Endereço' },
];

export default function Navbar({ onOpenBooking }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-500 ${scrolled ? 'bg-brand-50/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(184,83,111,.12)]' : 'bg-transparent'}`}>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'h-20'}`}>
        <a href="#" aria-label={studioConfig.name}><Logo /></a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-900">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="relative py-1 hover:text-brand-600 transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-brand-500 after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`https://wa.me/${studioConfig.whatsappNumber}?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de tirar uma dúvida.')}`}
            target="_blank" rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-brand-200 bg-white/70 hover:bg-white transition-all"
            title="Falar no WhatsApp"
          >
            <MessageCircle className="w-5 h-5 text-emerald-600" />
          </a>
          <button
            onClick={() => onOpenBooking(null)}
            className="shine flex items-center gap-2 bg-brand-800 hover:bg-brand-900 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-md shadow-brand-900/15 hover:-translate-y-0.5 transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar horário</span>
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-brand-900" aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-brand-50 border-b border-brand-200 px-6 py-5 flex flex-col gap-1 text-brand-900 font-medium animate-fade-in">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 border-b border-brand-100">
              {l.label}
            </a>
          ))}
          <button
            onClick={() => { setOpen(false); onOpenBooking(null); }}
            className="w-full flex items-center justify-center gap-2 bg-brand-800 text-white py-3 rounded-full font-semibold shadow-md mt-4"
          >
            <Calendar className="w-5 h-5" />
            <span>Agendar horário</span>
          </button>
        </div>
      )}
    </header>
  );
}

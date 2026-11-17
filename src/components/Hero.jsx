import React, { useEffect, useRef } from 'react';
import { studioConfig } from '../data/studioData';
import { CalendarDays, Clock, MapPin } from 'lucide-react';

function IconRow({ icon: Icon, children, delay }) {
  return (
    <li className="rise flex items-center gap-4" style={{ '--d': `${delay}ms` }}>
      <span className="w-11 h-11 shrink-0 rounded-full bg-brand-400 text-white flex items-center justify-center">
        <Icon className="w-5 h-5" strokeWidth={1.6} />
      </span>
      <span className="text-sm text-ink">{children}</span>
    </li>
  );
}

export default function Hero({ onOpenBooking }) {
  const imgRef = useRef(null);

  // Leve parallax na foto ao rolar
  useEffect(() => {
    const el = imgRef.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 700);
        el.style.transform = `scale(${1.12 - y * 0.00012})`;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-16 md:pt-16 md:pb-24 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
        <div className="md:col-span-6">
          <p className="rise text-xs font-medium text-ink-soft" style={{ '--d': '0ms' }}>
            Manaíra, João Pessoa
          </p>

          <h1 className="mt-5 font-serif font-normal text-ink text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-7xl tracking-tight">
            <span className="rise-mask"><span style={{ '--d': '80ms' }}>Unhas sempre</span></span>
            <span className="rise-mask"><span style={{ '--d': '180ms' }}><em className="text-brand-500 not-italic">bonitas</em> na correria</span></span>
            <span className="rise-mask"><span style={{ '--d': '280ms' }}>do dia a dia.</span></span>
          </h1>

          <p className="rise mt-6 text-[15px] leading-relaxed text-ink-soft max-w-md" style={{ '--d': '450ms' }}>
            {studioConfig.subtitle}
          </p>

          <ul className="mt-8 space-y-3">
            <IconRow icon={CalendarDays} delay={550}>Agende pelo site, a confirmação chega no WhatsApp</IconRow>
            <IconRow icon={Clock} delay={620}>Terça a sábado, 9h às 12h e 13h às 18h</IconRow>
            <IconRow icon={MapPin} delay={690}>Av. Monteiro da Franca, 513</IconRow>
          </ul>

          <div className="rise mt-9 flex flex-wrap items-center gap-x-6 gap-y-3" style={{ '--d': '780ms' }}>
            <button
              onClick={() => onOpenBooking(null)}
              className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-colors"
            >
              Agendar meu horário
            </button>
            <a href="#valores" className="text-sm font-semibold text-brand-600 underline underline-offset-4 decoration-brand-300 hover:decoration-brand-600 transition-colors">
              Ver tabela de valores
            </a>
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="curtain relative aspect-[4/5] sm:aspect-[5/6] md:aspect-[4/5] rounded-t-[999px] rounded-b-md overflow-hidden bg-brand-200">
            <img
              ref={imgRef}
              src={studioConfig.gallery[1].url}
              alt="Unhas em marsala com detalhe dourado feitas na Sweet Nails"
              className="absolute inset-0 w-full h-full object-cover will-change-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { studioConfig, formatPrice } from '../data/studioData';
import { CalendarDays, Clock, Heart } from 'lucide-react';
import Reveal, { MaskTitle } from './Reveal';

// Mesma linguagem dos cards de valores do Instagram:
// título em caixa alta rosa, pílula "VALORES", linhas pontilhadas e preço em etiqueta.
export default function ProceduresSection({ onSelectProcedure }) {
  const [activeId, setActiveId] = useState(studioConfig.categories[0].id);
  const cat = studioConfig.categories.find((c) => c.id === activeId);

  const pick = (item) =>
    onSelectProcedure({ ...item, category: cat.title, categoryId: cat.id, duration: item.duration || cat.duration });

  return (
    <section id="valores" className="py-20 sm:py-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="flex items-center gap-4 justify-center">
          <span className="h-px w-16 sm:w-28 border-t border-dotted border-brand-500" />
          <span className="text-brand-500 text-xs">♥</span>
          <span className="bg-brand-500 text-white rounded-full px-7 py-2 font-serif text-xl tracking-[0.12em]">VALORES</span>
          <span className="text-brand-500 text-xs">♥</span>
          <span className="h-px w-16 sm:w-28 border-t border-dotted border-brand-500" />
        </Reveal>
        <Reveal delay={100} as="p" className="mt-5 text-center text-sm text-ink-soft">
          Toque em um serviço para agendar.
        </Reveal>

        {/* Abas */}
        <Reveal delay={150} className="mt-10 -mx-4 px-4 overflow-x-auto">
          <div role="tablist" className="flex gap-6 sm:gap-8 w-max mx-auto border-b border-brand-300/70">
            {studioConfig.categories.map((c) => {
              const on = activeId === c.id;
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActiveId(c.id)}
                  className={`relative whitespace-nowrap pb-3 text-[13px] font-semibold transition-colors ${on ? 'text-brand-600' : 'text-ink-mute hover:text-ink'}`}
                >
                  {c.title}
                  <span className={`absolute left-0 right-0 -bottom-px h-0.5 bg-brand-500 origin-left transition-transform duration-300 ${on ? 'scale-x-100' : 'scale-x-0'}`} />
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Card da categoria */}
        <div key={cat.id} className="animate-pop mt-12 bg-brand-50 border border-brand-300/60 rounded-md overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-10">
            <h3 className="title-caps text-4xl sm:text-5xl">{cat.title}</h3>
            <div className="heart-rule mt-4 max-w-xs text-[10px]">♥</div>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft max-w-md">{cat.description}</p>

            {(cat.maintenance || cat.duration) && (
              <ul className="mt-6 space-y-3">
                {cat.maintenance && (
                  <li className="flex items-center gap-3 text-sm text-ink">
                    <span className="w-9 h-9 rounded-full bg-brand-400 text-white flex items-center justify-center"><CalendarDays className="w-4 h-4" strokeWidth={1.6} /></span>
                    {cat.maintenance}
                  </li>
                )}
                {cat.duration && (
                  <li className="flex items-center gap-3 text-sm text-ink">
                    <span className="w-9 h-9 rounded-full bg-brand-400 text-white flex items-center justify-center"><Clock className="w-4 h-4" strokeWidth={1.6} /></span>
                    Tempo de procedimento: {cat.duration}
                  </li>
                )}
              </ul>
            )}

            <ul className="mt-8 divide-y divide-brand-200">
              {cat.items.map((item, i) => (
                <li key={item.id} className="animate-pop" style={{ animationDelay: `${i * 50}ms` }}>
                  <button
                    onClick={() => pick(item)}
                    className="group w-full flex items-center gap-3 py-3.5 text-left"
                    aria-label={`Agendar ${item.title}, ${formatPrice(item.price)}`}
                  >
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-ink group-hover:text-brand-600 transition-colors">{item.title}</span>
                      {item.detail && <span className="block text-xs text-ink-mute mt-0.5">{item.detail}</span>}
                      {item.duration && <span className="block text-xs text-ink-mute mt-0.5">Cerca de {item.duration}</span>}
                    </span>
                    <span className="flex-1 min-w-[1.5rem] border-b border-dotted border-brand-400 translate-y-1" />
                    <span className="tabular shrink-0 rounded border border-brand-300 bg-brand-200/70 px-3 py-1.5 text-[13px] font-semibold text-brand-700 group-hover:bg-brand-500 group-hover:border-brand-500 group-hover:text-white transition-colors">
                      {formatPrice(item.price)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 relative bg-brand-200 min-h-[260px]">
            <img src={cat.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
            {cat.notes.length > 0 && (
              <div className="absolute left-4 right-4 bottom-4 sm:left-6 sm:right-6 sm:bottom-6 bg-brand-50/95 border border-brand-300/70 rounded-md p-5 space-y-2.5">
                {cat.notes.map((n) => (
                  <p key={n} className="flex items-start gap-2.5 text-xs leading-relaxed text-ink">
                    <Heart className="w-3.5 h-3.5 mt-0.5 shrink-0 fill-brand-500 text-brand-500" />
                    {n}
                  </p>
                ))}
                <p className="flex items-start gap-2.5 text-xs leading-relaxed text-ink">
                  <Heart className="w-3.5 h-3.5 mt-0.5 shrink-0 fill-brand-500 text-brand-500" />
                  {studioConfig.paymentNote}
                </p>
              </div>
            )}
          </div>
        </div>
        {cat.notes.length === 0 && (
          <p className="mt-4 text-xs text-ink-mute text-center">{studioConfig.paymentNote}</p>
        )}
      </div>
    </section>
  );
}

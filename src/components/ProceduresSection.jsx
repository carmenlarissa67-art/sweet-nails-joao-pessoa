import React, { useState } from 'react';
import { studioConfig, formatPrice } from '../data/studioData';
import { Clock, RefreshCw, Check, ChevronRight, Sparkles, Info } from 'lucide-react';
import Reveal from './Reveal';

export default function ProceduresSection({ onSelectProcedure }) {
  const [activeId, setActiveId] = useState(studioConfig.categories[0].id);
  const cat = studioConfig.categories.find((c) => c.id === activeId);

  const pick = (item) =>
    onSelectProcedure({ ...item, category: cat.title, categoryId: cat.id, duration: item.duration || cat.duration });

  return (
    <section id="servicos" className="py-20 sm:py-28 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-600">Serviços e valores</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-brand-950 mt-3 uppercase tracking-[0.06em] font-medium leading-[1.05]">
            Escolha o seu <span className="italic text-brand-700">momento</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-900/70">
            Toque no serviço para agendar. Você escolhe, a gente confirma tudo pelo WhatsApp.
          </p>
        </Reveal>

        {/* Abas de categorias */}
        <Reveal delay={120} className="mt-10 -mx-4 px-4 overflow-x-auto">
          <div className="flex sm:flex-wrap sm:justify-center gap-2 w-max sm:w-auto mx-auto">
            {studioConfig.categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeId === c.id
                    ? 'bg-brand-800 text-white shadow-lg shadow-brand-900/20 scale-[1.03]'
                    : 'bg-white text-brand-800 border border-brand-200 hover:border-brand-400'
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Conteúdo da categoria */}
        <div key={cat.id} className="animate-pop mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl shadow-brand-900/10 group">
              <img src={cat.image} alt={cat.title} className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-[1200ms]" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/10 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="font-serif text-3xl">{cat.title}</h3>
                <p className="text-sm text-white/85 mt-1 leading-relaxed">{cat.description}</p>
              </div>
            </div>

            {(cat.duration || cat.maintenance || cat.notes.length > 0) && (
              <div className="mt-4 p-5 rounded-3xl bg-white border border-brand-100 space-y-2.5 text-xs text-brand-900">
                {cat.duration && (
                  <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-brand-500 shrink-0" />Tempo: {cat.duration}</p>
                )}
                {cat.maintenance && (
                  <p className="flex items-center gap-2"><RefreshCw className="w-4 h-4 text-brand-500 shrink-0" />{cat.maintenance}</p>
                )}
                {cat.notes.map((n) => (
                  <p key={n} className="flex items-start gap-2"><Check className="w-4 h-4 text-brand-500 shrink-0" />{n}</p>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-7 bg-white rounded-[2rem] border border-brand-100 shadow-sm p-2 sm:p-3">
            {cat.items.map((item, i) => (
              <button
                key={item.id}
                onClick={() => pick(item)}
                style={{ animationDelay: `${i * 60}ms` }}
                className="animate-pop w-full text-left group flex items-center gap-4 px-4 sm:px-5 py-4 rounded-2xl hover:bg-brand-50 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium text-brand-950 text-sm sm:text-base">{item.title}</span>
                    {item.popular && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-champagne-dark bg-champagne-light/60 px-2 py-0.5 rounded-full">
                        <Sparkles className="w-3 h-3" /> Mais pedido
                      </span>
                    )}
                  </div>
                  {item.detail && <span className="block text-xs text-brand-700/80">{item.detail}</span>}
                  {item.duration && <span className="text-[11px] text-brand-600">Tempo aproximado: {item.duration}</span>}
                </div>
                <span className="hidden sm:block flex-1 max-w-[80px] border-b border-dotted border-brand-300 translate-y-1" />
                <span className="font-serif text-xl sm:text-2xl font-semibold text-brand-800 whitespace-nowrap">{formatPrice(item.price)}</span>
                <span className="w-9 h-9 shrink-0 rounded-full bg-brand-100 text-brand-800 flex items-center justify-center group-hover:bg-brand-800 group-hover:text-white group-hover:translate-x-0.5 transition-all">
                  <ChevronRight className="w-4 h-4" />
                </span>
              </button>
            ))}
            <p className="flex items-center gap-2 text-[11px] text-brand-700 px-5 pt-3 pb-4 border-t border-brand-100 mt-2">
              <Info className="w-3.5 h-3.5 shrink-0" />
              {studioConfig.paymentNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { studioConfig } from '../data/studioData';
import { Instagram, Calendar } from 'lucide-react';
import Reveal from './Reveal';

export default function GallerySection({ onOpenBooking }) {
  return (
    <section id="galeria" className="py-20 sm:py-28 bg-brand-100/60 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-600">Nossos trabalhos</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-brand-950 mt-3">
              Feito à mão, <span className="italic text-brand-700">com carinho</span>
            </h2>
          </div>
          <a
            href={studioConfig.instagramUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start md:self-auto text-sm font-semibold text-brand-800 border border-brand-300 rounded-full px-5 py-2.5 bg-white/70 hover:bg-white transition-all"
          >
            <Instagram className="w-4 h-4 text-pink-600" />
            <span>Mais no {studioConfig.instagramHandle}</span>
          </a>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {studioConfig.gallery.map((item, idx) => (
            <Reveal key={item.url} delay={idx * 140}>
              <button
                onClick={() => onOpenBooking(null)}
                className={`group relative block w-full rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${idx === 1 ? 'sm:translate-y-10' : ''}`}
              >
                <img src={item.url} alt={item.tag} loading="lazy" className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between text-white sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="font-serif text-xl italic text-left">{item.tag}</span>
                  <span className="flex items-center gap-1.5 text-xs font-semibold bg-white/20 backdrop-blur px-3 py-1.5 rounded-full">
                    <Calendar className="w-3.5 h-3.5" /> Quero
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

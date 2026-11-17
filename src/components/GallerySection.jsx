import React from 'react';
import { studioConfig } from '../data/studioData';
import Reveal, { MaskTitle } from './Reveal';

export default function GallerySection() {
  return (
    <section id="trabalhos" className="py-20 sm:py-28 bg-brand-50 border-y border-brand-300/60 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <MaskTitle className="title-caps text-4xl sm:text-5xl">Nossos trabalhos</MaskTitle>
            <Reveal delay={150} className="heart-rule mt-4 w-56 text-[10px]">♥</Reveal>
          </div>
          <Reveal delay={200}>
            <a href={studioConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand-600 underline underline-offset-4 decoration-brand-300 hover:decoration-brand-600">
              Veja mais no {studioConfig.instagramHandle}
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {studioConfig.gallery.map((item, idx) => (
            <Reveal key={item.url} delay={idx * 120} as="figure">
              <div className="overflow-hidden rounded-md bg-brand-200 aspect-[4/5]">
                <img src={item.url} alt={item.tag} loading="lazy" className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-700 ease-out" />
              </div>
              <figcaption className="mt-3 text-xs text-ink-soft">{item.tag}</figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

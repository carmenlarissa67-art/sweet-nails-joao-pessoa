import React from 'react';
import { studioConfig } from '../data/studioData';
import { Heart } from 'lucide-react';
import Reveal, { MaskTitle } from './Reveal';

export default function PoliciesSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <MaskTitle className="title-caps text-4xl sm:text-5xl">Bom saber</MaskTitle>
        <Reveal delay={150} className="heart-rule mt-4 max-w-[14rem] mx-auto text-[10px]">♥</Reveal>
      </div>
      <Reveal delay={200} className="max-w-3xl mx-auto px-4 sm:px-6 mt-10">
        <ul className="bg-brand-50 border border-brand-300/60 rounded-md p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
          {studioConfig.policies.map((p) => (
            <li key={p.title} className="flex items-start gap-3">
              <Heart className="w-4 h-4 mt-1 shrink-0 fill-brand-500 text-brand-500" />
              <span>
                <span className="block text-sm font-semibold text-ink">{p.title}</span>
                <span className="block mt-1 text-sm leading-relaxed text-ink-soft">{p.description}</span>
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

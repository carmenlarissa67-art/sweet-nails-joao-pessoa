import React from 'react';
import { studioConfig } from '../data/studioData';
import { Heart } from 'lucide-react';
import Reveal from './Reveal';

export default function PoliciesSection() {
  return (
    <section id="informacoes" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-600">Bom saber</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-brand-950 mt-3 uppercase tracking-[0.06em] font-medium leading-[1.05]">Informações importantes</h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {studioConfig.policies.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="h-full p-6 rounded-3xl bg-brand-50 border border-brand-100 flex items-start gap-4 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/5 transition-all duration-300">
                <div className="p-2.5 bg-white rounded-2xl text-brand-600 shadow-sm"><Heart className="w-4 h-4" /></div>
                <div>
                  <h4 className="font-serif text-xl text-brand-950">{p.title}</h4>
                  <p className="text-sm text-brand-900/70 mt-1 leading-relaxed">{p.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

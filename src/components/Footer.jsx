import React from 'react';
import { studioConfig } from '../data/studioData';
import { Instagram, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import Reveal from './Reveal';

export default function Footer({ onOpenBooking }) {
  return (
    <footer id="contato" className="bg-brand-200 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center border-b border-brand-300">
        <Reveal as="p" className="font-serif text-3xl sm:text-5xl leading-tight text-ink max-w-3xl mx-auto">
          Queremos tornar esse momento <em className="text-brand-500">único e inesquecível.</em>
        </Reveal>
        <Reveal delay={150}>
          <button
            onClick={() => onOpenBooking(null)}
            className="mt-9 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-colors"
          >
            Agendar meu horário
          </button>
        </Reveal>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        <div>
          <Logo />
          <div className="mt-6 flex gap-3">
            <a href={studioConfig.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-brand-400 text-white flex items-center justify-center hover:bg-brand-500 transition-colors">
              <Instagram className="w-4 h-4" strokeWidth={1.8} />
            </a>
            <a href={`https://wa.me/${studioConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-brand-400 text-white flex items-center justify-center hover:bg-brand-500 transition-colors">
              <MessageCircle className="w-4 h-4" strokeWidth={1.8} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="title-caps text-xl">Endereço</h4>
          <p className="mt-3 text-ink-soft leading-relaxed">{studioConfig.address}</p>
          <a href={studioConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-semibold text-brand-600 underline underline-offset-4 decoration-brand-300">
            Abrir no mapa
          </a>
        </div>

        <div>
          <h4 className="title-caps text-xl">Horários</h4>
          <dl className="mt-3 space-y-1.5 text-ink-soft">
            {studioConfig.workingHours.map((h) => (
              <div key={h.days} className="flex gap-2">
                <dt className="font-semibold text-ink">{h.days}:</dt>
                <dd>{h.hours}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-ink-soft">WhatsApp {studioConfig.whatsappDisplay}</p>
        </div>
      </div>

      <p className="pb-8 text-center text-xs text-ink-mute">
        © {new Date().getFullYear()} {studioConfig.name} {studioConfig.nameSuffix}, {studioConfig.city}
      </p>
    </footer>
  );
}

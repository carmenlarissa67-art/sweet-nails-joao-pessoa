import React from 'react';
import { studioConfig } from '../data/studioData';
import { MapPin, Clock, MessageCircle, Instagram, Navigation } from 'lucide-react';
import Logo from './Logo';
import Reveal from './Reveal';

export default function Footer({ onOpenBooking }) {
  return (
    <footer id="contato" className="bg-brand-950 text-brand-100 pt-20 pb-10 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center pb-16 border-b border-white/10">
          <h2 className="font-serif text-4xl sm:text-6xl text-white uppercase tracking-[0.06em] font-medium leading-[1.05]">
            Bora deixar suas unhas <span className="italic text-brand-300">lindas?</span>
          </h2>
          <button
            onClick={() => onOpenBooking(null)}
            className="shine mt-8 inline-flex items-center gap-2 bg-brand-300 hover:bg-brand-200 text-brand-950 px-8 py-4 rounded-full font-semibold transition-all hover:-translate-y-0.5"
          >
            Agendar meu horário
          </button>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-14">
          <div className="space-y-4">
            <Logo light />
            <p className="text-sm text-brand-200/80 leading-relaxed max-w-xs">
              Queremos tornar esse momento único e inesquecível.
            </p>
            <div className="flex gap-3">
              <a href={studioConfig.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={`https://wa.me/${studioConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-emerald-400 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-300">Onde estamos</h4>
            <p className="flex items-start gap-2.5 text-brand-100/90"><MapPin className="w-4 h-4 text-brand-300 shrink-0 mt-0.5" />{studioConfig.address}</p>
            <a href={studioConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-300 hover:text-white text-xs font-semibold">
              <Navigation className="w-3.5 h-3.5" /> Abrir no mapa
            </a>
          </div>

          <div className="space-y-3 text-sm">
            <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-300">Horários</h4>
            {studioConfig.workingHours.map((h) => (
              <p key={h.days} className="flex items-start gap-2.5 text-brand-100/90">
                <Clock className="w-4 h-4 text-brand-300 shrink-0 mt-0.5" />
                <span><strong className="font-semibold text-white">{h.days}:</strong> {h.hours}</span>
              </p>
            ))}
            <p className="flex items-center gap-2.5 text-brand-100/90"><MessageCircle className="w-4 h-4 text-emerald-400" />{studioConfig.whatsappDisplay}</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-xs text-brand-200/60 text-center">
          © {new Date().getFullYear()} {studioConfig.name} {studioConfig.nameSuffix} • {studioConfig.city}
        </div>
      </div>
    </footer>
  );
}

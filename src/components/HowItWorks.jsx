import React from 'react';
import { MousePointerClick, CalendarDays, MessageCircle } from 'lucide-react';
import Reveal from './Reveal';

const steps = [
  { icon: MousePointerClick, title: 'Escolha o serviço', text: 'Veja os valores e toque no que você quer fazer.' },
  { icon: CalendarDays, title: 'Escolha o dia', text: 'Escolha o dia e o horário direto na agenda.' },
  { icon: MessageCircle, title: 'Confirme no WhatsApp', text: 'Seu pedido chega prontinho para o studio confirmar.' },
];

export default function HowItWorks({ onOpenBooking }) {
  return (
    <section id="como-agendar" className="py-20 sm:py-28 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-600">Como agendar</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-brand-950 mt-3 uppercase tracking-[0.06em] font-medium leading-[1.05]">
            Simples assim, <span className="italic text-brand-700">em 3 passos</span>
          </h2>
        </Reveal>

        <div className="relative mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 160} className="relative text-center px-4">
              <div className="mx-auto w-20 h-20 rounded-full bg-white border border-brand-200 shadow-lg shadow-brand-900/5 flex items-center justify-center relative">
                <s.icon className="w-8 h-8 text-brand-700" />
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-brand-800 text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
              </div>
              <h3 className="mt-5 font-serif text-2xl text-brand-950">{s.title}</h3>
              <p className="mt-2 text-sm text-brand-900/70">{s.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400} className="mt-12 text-center">
          <button
            onClick={() => onOpenBooking(null)}
            className="shine inline-flex items-center gap-2 bg-brand-800 hover:bg-brand-900 text-white px-8 py-4 rounded-full font-medium shadow-xl shadow-brand-900/20 hover:-translate-y-0.5 transition-all"
          >
            Começar agendamento
          </button>
        </Reveal>
      </div>
    </section>
  );
}

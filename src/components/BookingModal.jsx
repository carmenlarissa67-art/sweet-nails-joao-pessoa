import React, { useEffect, useMemo, useState } from 'react';
import { studioConfig, allServices, formatPrice } from '../data/studioData';
import { X, Check, ChevronRight, ChevronLeft, Clock, MessageCircle, Info, Sun, Sunset } from 'lucide-react';

const STEPS = ['Serviço', 'Detalhes', 'Dia', 'Confirmar'];

const todayISO = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
};

const weekday = (iso) => (iso ? new Date(`${iso}T12:00:00`).getDay() : null); // 0 = domingo, 1 = segunda

const formatDateBR = (iso) =>
  iso
    ? new Date(`${iso}T12:00:00`).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' })
    : '';

export default function BookingModal({ isOpen, onClose, initialProcedure }) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(null);
  const [addons, setAddons] = useState([]);
  const [agreed, setAgreed] = useState(false);
  const [date, setDate] = useState('');
  const [period, setPeriod] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    setService(initialProcedure || null);
    setStep(initialProcedure ? 2 : 1);
    setAddons([]);
    setAgreed(false);
    setDate('');
    setPeriod('');
  }, [initialProcedure, isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && onClose();
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [isOpen, onClose]);

  const grouped = useMemo(() => studioConfig.categories.map((c) => ({
    ...c,
    services: allServices.filter((s) => s.categoryId === c.id),
  })), []);

  if (!isOpen) return null;

  const hasCalendly = Boolean(studioConfig.calendlyUrl);
  const day = weekday(date);
  const isSunday = day === 0;
  const isMonday = day === 1;
  const periods = [
    { id: 'Manhã (09h às 12h)', label: 'Manhã', sub: '09h às 12h', icon: Sun },
    ...(isMonday ? [] : [{ id: 'Tarde (13h às 18h)', label: 'Tarde', sub: '13h às 18h', icon: Sunset }]),
  ];

  const total = (service?.price || 0) + addons.reduce((a, b) => a + b.price, 0);

  const toggleAddon = (addon) =>
    setAddons((cur) => (cur.some((a) => a.id === addon.id) ? cur.filter((a) => a.id !== addon.id) : [...cur, addon]));

  const canAdvance =
    (step === 1 && service) ||
    (step === 2 && agreed) ||
    (step === 3 && (hasCalendly || (date && !isSunday && period)));

  // Mensagem em texto simples (emojis viram "?" em alguns celulares)
  const whatsappLink = () => {
    const lines = [
      'Olá! Quero agendar pelo site.',
      '',
      `*Nome:* ${name || 'Não informado'}`,
      `*WhatsApp:* ${phone || 'Não informado'}`,
      '',
      `*Serviço:* ${service?.title} (${service?.category})`,
      `*Valor:* ${formatPrice(service?.price || 0)}`,
      ...(addons.length ? ['*Adicionais:*', ...addons.map((a) => `- ${a.name} (+ ${formatPrice(a.price)})`)] : []),
      `*Total estimado:* ${formatPrice(total)}`,
      '',
      hasCalendly
        ? 'Já escolhi meu horário na agenda online.'
        : `*Dia:* ${formatDateBR(date)}\n*Período:* ${period}`,
      ...(notes ? ['', `*Observações:* ${notes}`] : []),
      '',
      'Pode confirmar, por favor? Obrigada!',
    ];
    return `https://wa.me/${studioConfig.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-ink/50 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-pop bg-brand-50 w-full sm:max-w-2xl max-h-[94vh] sm:max-h-[90vh] rounded-t-xl sm:rounded-lg shadow-2xl flex flex-col overflow-hidden"
        role="dialog" aria-modal="true" aria-label="Agendamento"
      >
        {/* Topo */}
        <div className="px-5 sm:px-7 pt-5 pb-4 border-b border-brand-200 bg-white">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[11px] font-medium text-ink-mute">Sweet Nails Studio</span>
              <h3 className="title-caps text-3xl sm:text-4xl">Agendamento</h3>
            </div>
            <button onClick={onClose} aria-label="Fechar" className="p-2 text-ink-soft hover:bg-brand-100 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          {/* Progresso */}
          <div className="mt-4 flex items-center gap-2">
            {STEPS.map((label, i) => (
              <div key={label} className="flex-1">
                <div className="h-1.5 rounded-full bg-brand-100 overflow-hidden">
                  <div className="h-full bg-brand-500 transition-all duration-500" style={{ width: step > i ? '100%' : '0%' }} />
                </div>
                <span className={`block mt-1.5 text-[10px] sm:text-[11px] font-semibold ${step > i ? 'text-ink-soft' : 'text-brand-300'}`}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Conteúdo */}
        <div key={step} className="animate-fade-in p-5 sm:p-7 flex-1 overflow-y-auto">
          {step === 1 && (
            <div className="space-y-6">
              <p className="text-sm text-ink">Qual serviço você quer fazer?</p>
              {grouped.map((g) => (
                <div key={g.id}>
                  <h4 className="title-caps text-xl mb-3">{g.title}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {g.services.map((s) => {
                      const sel = service?.id === s.id;
                      return (
                        <button
                          key={s.id}
                          onClick={() => setService(s)}
                          className={`text-left p-3.5 rounded-md border transition-all ${sel ? 'border-brand-500 bg-brand-100 ring-2 ring-brand-500/20' : 'border-brand-200 bg-white hover:border-brand-400'}`}
                        >
                          <div className="flex justify-between gap-2">
                            <span className="text-sm text-ink leading-snug">{s.title}{s.detail ? <span className="block text-xs text-ink-mute">{s.detail}</span> : null}</span>
                            {sel && <span className="w-5 h-5 shrink-0 bg-brand-600 text-white rounded-full flex items-center justify-center"><Check className="w-3 h-3" /></span>}
                          </div>
                          <span className="mt-1 block font-serif text-lg font-semibold text-ink-soft">{formatPrice(s.price)}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div className="bg-white p-4 rounded-md border border-brand-200 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-brand-600 uppercase font-bold tracking-wider">{service?.category}</span>
                  <p className="font-serif text-xl text-ink leading-tight">{service?.title}</p>
                  {service?.duration && <span className="text-xs text-ink-soft flex items-center gap-1 mt-1"><Clock className="w-3.5 h-3.5" />{service.duration}</span>}
                </div>
                <p className="font-serif text-2xl font-semibold text-ink-soft whitespace-nowrap">{formatPrice(service?.price || 0)}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-ink">Precisa de algum adicional?</h4>
                <div className="grid grid-cols-1 gap-2 mt-3">
                  {studioConfig.addons.map((a) => {
                    const on = addons.some((x) => x.id === a.id);
                    return (
                      <button key={a.id} onClick={() => toggleAddon(a)} className={`p-3.5 rounded-md border flex items-center justify-between text-left transition-all ${on ? 'bg-brand-100 border-brand-500' : 'bg-white border-brand-200 hover:bg-brand-50'}`}>
                        <span className="flex items-center gap-2.5 text-sm text-ink">
                          <span className={`w-4 h-4 rounded border flex items-center justify-center ${on ? 'bg-brand-600 border-brand-600 text-white' : 'border-brand-400'}`}>{on && <Check className="w-3 h-3" />}</span>
                          {a.name}
                        </span>
                        <span className="text-sm font-semibold text-ink-soft whitespace-nowrap pl-3">+ {formatPrice(a.price)}</span>
                      </button>
                    );
                  })}
                </div>
                <p className="text-[11px] text-ink-soft mt-2">Unhas decoradas (glitter, baby color, artísticas) têm valor sob consulta. É só escrever nas observações.</p>
              </div>

              <div className="p-4 rounded-md bg-white border border-brand-200 text-xs text-ink space-y-2">
                <p className="flex items-center gap-2 font-bold text-ink"><Info className="w-4 h-4 text-brand-600" /> Antes de continuar</p>
                <ul className="list-disc list-inside space-y-1 text-ink-soft">
                  <li>{studioConfig.paymentNote}</li>
                  <li>Os valores não valem para unhas extremas.</li>
                </ul>
                <label className="flex items-center gap-2 pt-2 border-t border-brand-100 cursor-pointer">
                  <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="w-4 h-4 accent-brand-600" />
                  <span className="font-semibold text-ink">Li e estou de acordo.</span>
                </label>
              </div>
            </div>
          )}

          {step === 3 && hasCalendly && (
            <div className="space-y-3">
              <p className="text-sm text-ink-soft">Escolha o dia e o horário na agenda. Depois toque em <strong className="text-ink">Continuar</strong> para enviar o pedido pelo WhatsApp.</p>
              <div className="rounded-md overflow-hidden border border-brand-200 bg-white h-[460px]">
                <iframe
                  src={`${studioConfig.calendlyUrl}?embed_domain=${window.location.hostname}&embed_type=Inline&hide_gdpr_banner=1&background_color=fdf7f8&text_color=3a1822&primary_color=984259`}
                  width="100%" height="100%" frameBorder="0" title="Agenda online" className="w-full h-full"
                />
              </div>
            </div>
          )}

          {step === 3 && !hasCalendly && (
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-ink mb-2">Qual dia fica melhor?</label>
                <input
                  type="date" min={todayISO()} value={date}
                  onChange={(e) => { setDate(e.target.value); setPeriod(''); }}
                  className="w-full p-3.5 rounded-md border border-brand-200 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-brand-600"
                />
                {date && !isSunday && <p className="mt-2 text-xs text-ink-soft capitalize">{formatDateBR(date)}</p>}
                {isSunday && <p className="mt-2 text-xs font-semibold text-rose-700">Aos domingos o studio está fechado. Escolha outro dia.</p>}
              </div>
              {date && !isSunday && (
                <div className="animate-fade-in">
                  <span className="block text-sm font-semibold text-ink mb-2">E o período?</span>
                  <div className="grid grid-cols-2 gap-3">
                    {periods.map((p) => (
                      <button key={p.id} onClick={() => setPeriod(p.id)} className={`p-4 rounded-md border text-left transition-all ${period === p.id ? 'border-brand-500 bg-brand-100 ring-2 ring-brand-500/20' : 'border-brand-200 bg-white hover:border-brand-400'}`}>
                        <p.icon className="w-5 h-5 text-brand-600" />
                        <p className="mt-2 font-semibold text-ink">{p.label}</p>
                        <p className="text-xs text-ink-soft">{p.sub}</p>
                      </button>
                    ))}
                  </div>
                  {isMonday && <p className="mt-2 text-xs text-ink-soft">Às segundas o atendimento é só pela manhã.</p>}
                </div>
              )}
              <p className="text-xs text-ink-soft bg-white border border-brand-100 rounded-md p-3">
                O studio confirma o horário exato pelo WhatsApp, conforme a agenda do dia.
              </p>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <div className="text-center">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3"><Check className="w-7 h-7" /></div>
                <h4 className="title-caps text-3xl">Quase pronto</h4>
                <p className="text-sm text-ink-soft mt-1">Deixe seu nome e WhatsApp para o studio confirmar.</p>
              </div>
              <div className="bg-white p-5 rounded-md border border-brand-200 space-y-3">
                <label className="block">
                  <span className="block text-xs font-semibold text-ink mb-1">Seu nome</span>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Como podemos te chamar?" className="w-full text-sm p-3 rounded-md border border-brand-200 bg-brand-50/50 focus:outline-none focus:ring-2 focus:ring-brand-600" />
                </label>
                <label className="block">
                  <span className="block text-xs font-semibold text-ink mb-1">Seu WhatsApp</span>
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(83) 9 0000-0000" className="w-full text-sm p-3 rounded-md border border-brand-200 bg-brand-50/50 focus:outline-none focus:ring-2 focus:ring-brand-600" />
                </label>
                <label className="block">
                  <span className="block text-xs font-semibold text-ink mb-1">Observações (opcional)</span>
                  <textarea rows="2" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Ex: quero formato amendoado, cor nude..." className="w-full text-sm p-3 rounded-md border border-brand-200 bg-brand-50/50 focus:outline-none focus:ring-2 focus:ring-brand-600" />
                </label>
              </div>
              <a
                href={whatsappLink()} target="_blank" rel="noopener noreferrer" onClick={onClose}
                className="w-full flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-full shadow-lg shadow-emerald-700/20 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Enviar pelo WhatsApp
              </a>
            </div>
          )}
        </div>

        {/* Rodapé */}
        <div className="px-5 sm:px-7 py-4 border-t border-brand-200 flex items-center justify-between bg-white">
          {step > 1 ? (
            <button onClick={() => setStep(step - 1)} className="flex items-center gap-1 text-sm font-semibold text-ink-soft px-3 py-2 rounded-md hover:bg-brand-50">
              <ChevronLeft className="w-4 h-4" /> Voltar
            </button>
          ) : <span />}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-[10px] text-brand-600 block">Total estimado</span>
              <span className="font-serif text-xl font-semibold text-ink">{formatPrice(total)}</span>
            </div>
            {step < 4 && (
              <button
                disabled={!canAdvance} onClick={() => setStep(step + 1)}
                className={`flex items-center gap-1.5 px-6 py-3 rounded-full text-sm font-semibold transition-all ${canAdvance ? 'bg-brand-600 hover:bg-brand-500 text-white shadow-md' : 'bg-brand-100 text-brand-300 cursor-not-allowed'}`}
              >
                Continuar <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

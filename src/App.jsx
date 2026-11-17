import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import ProceduresSection from './components/ProceduresSection';
import GallerySection from './components/GallerySection';
import HowItWorks from './components/HowItWorks';
import PoliciesSection from './components/PoliciesSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { studioConfig } from './data/studioData';
import { Calendar, MessageCircle } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openBooking = useCallback((procedure = null) => {
    setSelected(procedure);
    setIsBookingOpen(true);
  }, []);
  const closeBooking = useCallback(() => {
    setIsBookingOpen(false);
    setSelected(null);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-brand-50 font-sans">
      <Navbar onOpenBooking={openBooking} />
      <main className="flex-1">
        <Hero onOpenBooking={openBooking} />
        <Marquee />
        <ProceduresSection onSelectProcedure={openBooking} />
        <GallerySection onOpenBooking={openBooking} />
        <HowItWorks onOpenBooking={openBooking} />
        <PoliciesSection />
      </main>
      <Footer onOpenBooking={openBooking} />

      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} initialProcedure={selected} />

      {/* Botões flutuantes */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-3">
        <a
          href={`https://wa.me/${studioConfig.whatsappNumber}?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de tirar uma dúvida.')}`}
          target="_blank" rel="noopener noreferrer"
          className="pulse-ring w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <button
          onClick={() => openBooking(null)}
          className="sm:hidden flex items-center gap-2 bg-brand-800 text-white px-5 py-3 rounded-full text-sm font-semibold shadow-xl"
        >
          <Calendar className="w-4 h-4" />
          Agendar
        </button>
      </div>
    </div>
  );
}

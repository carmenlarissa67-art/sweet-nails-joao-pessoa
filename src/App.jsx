import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import ProceduresSection from './components/ProceduresSection';
import GallerySection from './components/GallerySection';
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
    <div className="min-h-screen flex flex-col bg-brand-100 font-sans">
      <Navbar onOpenBooking={openBooking} />
      <main className="flex-1">
        <Hero onOpenBooking={openBooking} />
        <Marquee />
        <ProceduresSection onSelectProcedure={openBooking} />
        <GallerySection />
        <PoliciesSection />
      </main>
      <Footer onOpenBooking={openBooking} />

      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} initialProcedure={selected} />

      {/* Botões flutuantes */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-3">
        <a
          href={`https://wa.me/${studioConfig.whatsappNumber}?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de tirar uma dúvida.')}`}
          target="_blank" rel="noopener noreferrer"
          className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <button
          onClick={() => openBooking(null)}
          className="md:hidden flex items-center gap-2 bg-brand-600 text-white px-5 py-3 rounded-full text-sm font-semibold shadow-lg shadow-brand-900/20"
        >
          <Calendar className="w-4 h-4" />
          Agendar
        </button>
      </div>
    </div>
  );
}

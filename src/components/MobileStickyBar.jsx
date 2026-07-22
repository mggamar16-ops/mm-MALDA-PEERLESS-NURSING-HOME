import React from 'react';
import { Phone, Calendar, MessageCircle } from 'lucide-react';
import { useHospital } from '../context/HospitalContext';

export const MobileStickyBar = () => {
  const { hospitalData, openBookingModal } = useHospital();
  const { info } = hospitalData;

  const whatsappUrl = `https://wa.me/${info.whatsappPhone.replace(/[^0-9]/g, '')}?text=Hello%20Malda%20Peerless%20Nursing%20Home,%20I%20would%20like%20to%20inquire%20about%20OPD%20appointment.`;

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 p-3 shadow-apple-lg flex items-center justify-between gap-2">
      
      {/* Call Button */}
      <a
        href={`tel:${info.phone}`}
        className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-brand-deep rounded-2xl text-xs font-bold flex items-center justify-center gap-1.5 border border-slate-200"
      >
        <Phone className="w-4 h-4 text-brand-deep" />
        <span>Call</span>
      </a>

      {/* Book Appointment CTA Button */}
      <button
        onClick={() => openBookingModal()}
        className="flex-[2] py-3 shimmer-btn text-white rounded-2xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
      >
        <Calendar className="w-4 h-4 text-brand-accent" />
        <span>Book Appointment</span>
      </button>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md"
        aria-label="Contact hospital on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

    </div>
  );
};

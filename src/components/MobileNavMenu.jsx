import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { useHospital } from '../context/HospitalContext';

export const MobileNavMenu = ({ navLinks, onClose }) => {
  const { hospitalData, openBookingModal } = useHospital();
  const { info } = hospitalData;

  return (
    <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4">
      <div className="flex flex-col space-y-2">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={onClose}
            className="text-base font-semibold text-slate-800 hover:text-brand-deep py-2 border-b border-slate-100"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="pt-2 flex flex-col gap-3">
        <button
          onClick={() => {
            onClose();
            openBookingModal();
          }}
          className="w-full shimmer-btn py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2 shadow-md"
        >
          <Calendar className="w-5 h-5 text-brand-accent" />
          Book Appointment
        </button>

        <a
          href={`tel:${info.phone}`}
          className="w-full py-3 rounded-xl text-brand-deep bg-brand-cyanBg font-semibold flex items-center justify-center gap-2 border border-brand-accent/20"
        >
          <Phone className="w-5 h-5 text-brand-accent" />
          Call Now ({info.phone})
        </a>
      </div>
    </div>
  );
};

import React from 'react';
import { Phone, Clock, MapPin, AlertCircle, Settings } from 'lucide-react';
import { useHospital } from '../context/HospitalContext';

export const AnnouncementBar = () => {
  const { hospitalData, setIsAdminOpen } = useHospital();
  const { info } = hospitalData;

  return (
    <div className="bg-brand-navy text-slate-200 text-xs py-2 px-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        
        {/* Left: Emergency Status */}
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 bg-red-500/20 text-red-300 font-semibold px-2.5 py-0.5 rounded-full border border-red-500/30 animate-pulse">
            <AlertCircle className="w-3.5 h-3.5" />
            24/7 Emergency Active
          </span>
          <span className="hidden md:inline text-slate-400">|</span>
          <div className="hidden md:flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-brand-accent" />
            <span>OPD: Mon-Sat (8AM-8PM)</span>
          </div>
        </div>

        {/* Right: Hotline & Admin Edit Switch */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-brand-accent" />
            <span className="hidden sm:inline">English Bazar, Malda</span>
          </div>
          
          <a
            href={`tel:${info.emergencyPhone}`}
            className="flex items-center gap-1.5 text-white font-semibold hover:text-brand-accent transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>Emergency: {info.emergencyPhone}</span>
          </a>

          <button
            onClick={() => setIsAdminOpen(true)}
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors border border-slate-700 hover:border-slate-500 px-2 py-0.5 rounded-md"
            title="Edit hospital details live"
          >
            <Settings className="w-3 h-3" />
            <span className="text-[10px] uppercase font-bold tracking-wider">Edit Details</span>
          </button>
        </div>

      </div>
    </div>
  );
};

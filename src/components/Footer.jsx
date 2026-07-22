import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Heart, Star, Settings } from 'lucide-react';
import { useHospital } from '../context/HospitalContext';

export const Footer = () => {
  const { hospitalData, setIsPrivacyOpen, setIsAdminOpen } = useHospital();
  const { info, departments } = hospitalData;

  return (
    <footer className="bg-brand-navy text-slate-300 pt-16 pb-24 sm:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-deep p-0.5 shadow-md flex items-center justify-center border border-white/20">
                <span className="text-xl font-black text-white">P</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">{info.name}</h3>
                <span className="text-[11px] text-brand-accent font-semibold block">{info.category}</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Bringing advanced, reliable, and multi-specialty clinical care to patients in Malda and surrounding regions of West Bengal.
            </p>

            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-xs text-slate-300">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>Google Rating: <strong>{info.googleRating}</strong> ({info.totalReviews} Verified Patient Reviews)</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-brand-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-accent transition-colors">About Hospital</a></li>
              <li><a href="#departments" className="hover:text-brand-accent transition-colors">Departments</a></li>
              <li><a href="#doctors" className="hover:text-brand-accent transition-colors">Specialist Doctors</a></li>
              <li><a href="#facilities" className="hover:text-brand-accent transition-colors">Facilities & ICU</a></li>
              <li><a href="#gallery" className="hover:text-brand-accent transition-colors">Infrastructure Gallery</a></li>
              <li><a href="#reviews" className="hover:text-brand-accent transition-colors">Patient Reviews</a></li>
              <li><a href="#faq" className="hover:text-brand-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Col 3: Departments */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Specialty Clinics</h4>
            <ul className="space-y-2 text-xs">
              {departments.slice(0, 6).map((dept) => (
                <li key={dept.id}>
                  <a href="#departments" className="hover:text-brand-accent transition-colors">
                    {dept.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Address */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Contact Malda Desk</h4>
            
            <div className="flex items-start gap-2.5 text-slate-400">
              <MapPin className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
              <span>{info.address}</span>
            </div>

            <div className="flex items-center gap-2.5 text-slate-300 font-semibold">
              <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <a href={`tel:${info.phone}`} className="hover:underline">{info.phone}</a>
            </div>

            <div className="flex items-center gap-2.5 text-red-400 font-bold">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <a href={`tel:${info.emergencyPhone}`} className="hover:underline">Emergency: {info.emergencyPhone}</a>
            </div>

            <div className="flex items-center gap-2.5 text-slate-400">
              <Mail className="w-4 h-4 text-brand-accent flex-shrink-0" />
              <span>{info.email}</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {info.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="flex items-center gap-1 hover:text-white transition-colors border border-slate-700 px-2 py-1 rounded"
            >
              <Settings className="w-3 h-3" />
              <span>Edit Details</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

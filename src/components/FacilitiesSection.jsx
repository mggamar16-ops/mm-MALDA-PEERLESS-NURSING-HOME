import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useHospital } from '../context/HospitalContext';

export const FacilitiesSection = () => {
  const { hospitalData } = useHospital();
  const { facilities } = hospitalData;

  return (
    <section id="facilities" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Infrastructure & Amenities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            World-Class Hospital Infrastructure
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Designed for patient safety, sterile care standards, rapid diagnostic turnaround, and comfortable recovery.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac) => (
            <div
              key={fac.id}
              className="bg-brand-offwhite/80 rounded-3xl overflow-hidden border border-slate-200/80 shadow-apple-sm hover:shadow-apple-lg hover:bg-white transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="text-lg font-bold">{fac.title}</h3>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {fac.desc}
                </p>
                
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-deep pt-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>WHO Sterilization Compliant</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

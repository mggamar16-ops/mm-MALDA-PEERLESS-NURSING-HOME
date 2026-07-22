import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Baby, Heart, Activity, ShieldAlert, Siren, Microscope, ArrowRight, CheckCircle2, ChevronRight, X } from 'lucide-react';
import { useHospital } from '../context/HospitalContext';
import { TiltCard } from './TiltCard';

export const DepartmentsSection = () => {
  const { hospitalData, openBookingModal } = useHospital();
  const { departments } = hospitalData;
  const [selectedDept, setSelectedDept] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-brand-deep" />;
      case 'Baby': return <Baby className="w-6 h-6 text-pink-500" />;
      case 'Heart': return <Heart className="w-6 h-6 text-red-500" />;
      case 'Activity': return <Activity className="w-6 h-6 text-emerald-600" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-amber-600" />;
      case 'Siren': return <Siren className="w-6 h-6 text-red-600" />;
      case 'Microscope': return <Microscope className="w-6 h-6 text-purple-600" />;
      default: return <Stethoscope className="w-6 h-6 text-brand-deep" />;
    }
  };

  return (
    <section id="departments" className="py-20 lg:py-28 bg-brand-offwhite relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header with Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest bg-brand-cyanBg px-3 py-1 rounded-full border border-brand-accent/20">
            Center of Excellence
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark tracking-tight">
            Specialized Medical Departments
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Our multi-disciplinary team delivers advanced clinical care backed by modern technology.
          </p>
        </motion.div>

        {/* Departments Grid with Staggered 3D Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, idx) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <TiltCard className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-apple-sm hover:shadow-apple-lg transition-all duration-300 flex flex-col justify-between group h-full">
                
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-md shadow-md flex items-center justify-center">
                    {getIcon(dept.icon)}
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] font-semibold text-brand-accent bg-brand-navy/80 px-2.5 py-0.5 rounded-full border border-white/20">
                      {dept.head}
                    </span>
                    <h3 className="text-xl font-bold mt-1 leading-tight">{dept.name}</h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {dept.shortDesc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Key Services</span>
                    {dept.services.slice(0, 3).map((srv, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span className="truncate">{srv}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedDept(dept)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => openBookingModal(null)}
                      className="py-2.5 px-4 rounded-xl bg-brand-deep hover:bg-brand-navy text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                    >
                      <span>Book</span>
                    </button>
                  </div>
                </div>

              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Expandable Department Detail Modal */}
      {selectedDept && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-fade-up">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-apple-lg border border-slate-200">
            <div className="relative h-48 sm:h-56">
              <img src={selectedDept.image} alt={selectedDept.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
              
              <button
                onClick={() => setSelectedDept(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 text-white hover:bg-black/60 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-semibold text-brand-accent bg-brand-navy/90 px-3 py-1 rounded-full">
                  Department Head: {selectedDept.head}
                </span>
                <h3 className="text-2xl font-bold mt-1">{selectedDept.name}</h3>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedDept.shortDesc}
              </p>

              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
                  Comprehensive Services & Clinical Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedDept.services.map((srv, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedDept(null)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedDept(null);
                    openBookingModal();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-brand-deep hover:bg-brand-navy text-white text-xs font-semibold flex items-center gap-2 shadow-md"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

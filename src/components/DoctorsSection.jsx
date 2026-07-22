import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Award, Search } from 'lucide-react';
import { useHospital } from '../context/HospitalContext';
import { TiltCard } from './TiltCard';

export const DoctorsSection = () => {
  const { hospitalData, openBookingModal } = useHospital();
  const { doctors } = hospitalData;

  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const specialties = ['All', ...new Set(doctors.map(d => d.specialty))];

  const filteredDoctors = doctors.filter(doc => {
    const matchesSpecialty = selectedSpecialty === 'All' || doc.specialty === selectedSpecialty;
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doc.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSpecialty && matchesSearch;
  });

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-brand-offwhite relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-12"
        >
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest bg-brand-cyanBg px-3 py-1 rounded-full border border-brand-accent/20">
            Medical Faculty
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark tracking-tight">
            Our Experienced Doctors & Specialists
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Senior consultants and surgeons committed to personalized treatment and expert care.
          </p>
        </motion.div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {specialties.map((spec) => (
              <button
                key={spec}
                onClick={() => setSelectedSpecialty(spec)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedSpecialty === spec
                    ? 'bg-brand-deep text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search doctor or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 text-slate-800"
            />
          </div>
        </div>

        {/* Doctor Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <TiltCard className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-apple-sm hover:shadow-apple-lg transition-all duration-300 flex flex-col justify-between group h-full">
                
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <img
                      src={doc.photo}
                      alt={doc.name}
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-slate-100 shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0"
                    />
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-cyanBg text-brand-deep px-2.5 py-0.5 rounded-full inline-block">
                        {doc.specialty}
                      </span>
                      <h3 className="text-lg font-bold text-brand-dark leading-snug group-hover:text-brand-deep transition-colors">
                        {doc.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">{doc.degree}</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100/80 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-700">
                      <div className="flex items-center gap-1.5 font-medium">
                        <Award className="w-3.5 h-3.5 text-amber-500" />
                        <span>Experience:</span>
                      </div>
                      <span className="font-bold text-slate-900">{doc.experience}</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-700">
                      <div className="flex items-center gap-1.5 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-brand-accent" />
                        <span>OPD Days:</span>
                      </div>
                      <span className="font-semibold text-slate-900">{doc.days}</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-700">
                      <div className="flex items-center gap-1.5 font-medium">
                        <Clock className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Timings:</span>
                      </div>
                      <span className="font-semibold text-slate-900">{doc.timing}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => openBookingModal(doc)}
                    className="w-full shimmer-btn py-3 rounded-xl text-xs font-semibold text-white flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Calendar className="w-4 h-4 text-brand-accent" />
                    <span>Book Doctor Appointment</span>
                  </button>
                </div>

              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

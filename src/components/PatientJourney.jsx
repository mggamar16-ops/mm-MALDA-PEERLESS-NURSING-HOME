import React from 'react';
import { motion } from 'framer-motion';
import { useHospital } from '../context/HospitalContext';

export const PatientJourney = () => {
  const { hospitalData } = useHospital();
  const { patientJourney } = hospitalData;

  return (
    <section className="py-20 lg:py-28 bg-brand-navy text-white relative overflow-hidden">
      {/* Dynamic Glow Sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-brand-accent/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/20">
            Care Pathway
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Your Seamless Patient Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            From online booking to full recovery, we ensure a transparent, comfortable, and reassuring healthcare experience.
          </p>
        </motion.div>

        {/* Timeline Motion Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {patientJourney.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group space-y-4 shadow-apple-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-brand-accent group-hover:scale-110 transition-transform">
                  {item.step}
                </span>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

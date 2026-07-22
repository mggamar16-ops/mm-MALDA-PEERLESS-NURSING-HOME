import React from 'react';
import { Cpu, UserCheck, Heart, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { useHospital } from '../context/HospitalContext';

export const WhyChooseUs = () => {
  const { hospitalData } = useHospital();
  const { whyUs } = hospitalData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-6 h-6 text-brand-deep" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-emerald-600" />;
      case 'Heart': return <Heart className="w-6 h-6 text-red-500" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-brand-accent" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-500" />;
      default: return <Sparkles className="w-6 h-6 text-brand-deep" />;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Why Patients Choose Malda Peerless
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Setting the Benchmark for Medical Excellence
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Every clinical decision, infrastructure investment, and nursing touchpoint is guided by patient safety, medical efficacy, and human warmth.
          </p>
        </div>

        {/* 6 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUs.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-brand-offwhite/60 border border-slate-200/80 hover:bg-white hover:shadow-apple-lg hover:border-brand-accent/30 transition-all duration-300 group space-y-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-apple-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-deep transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

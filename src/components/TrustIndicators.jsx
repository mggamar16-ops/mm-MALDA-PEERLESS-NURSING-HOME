import React from 'react';
import { Award, UserCheck, HeartPulse, Clock, Star } from 'lucide-react';
import { useHospital } from '../context/HospitalContext';

export const TrustIndicators = () => {
  const { hospitalData } = useHospital();
  const { stats } = hospitalData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Award': return <Award className="w-6 h-6 text-brand-accent" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-emerald-500" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-red-500" />;
      case 'Clock': return <Clock className="w-6 h-6 text-blue-500" />;
      case 'Star': return <Star className="w-6 h-6 text-amber-500 fill-amber-500" />;
      default: return <Award className="w-6 h-6 text-brand-accent" />;
    }
  };

  return (
    <section className="py-10 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-brand-offwhite/80 border border-slate-200/60 hover:bg-white hover:shadow-apple-md hover:border-brand-accent/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(stat.icon)}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Verified</span>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
                  {stat.value}
                </h4>
                <p className="text-xs font-medium text-slate-500 mt-1">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

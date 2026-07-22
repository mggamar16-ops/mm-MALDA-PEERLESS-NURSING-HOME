import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { useHospital } from '../context/HospitalContext';

export const TestimonialsSection = () => {
  const { hospitalData } = useHospital();
  const { testimonials, info } = hospitalData;

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-xs font-bold border border-amber-200">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Google Rating: {info.googleRating} / 5.0 ({info.totalReviews} Reviews)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Patient Stories & Reassuring Feedback
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Read verified experiences from families who trusted Malda Peerless Nursing Home for surgeries, maternity care, and emergency admissions.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="p-8 rounded-3xl bg-brand-offwhite/80 border border-slate-200/80 hover:bg-white hover:shadow-apple-lg transition-all duration-300 flex flex-col justify-between space-y-6 relative"
            >
              <Quote className="w-10 h-10 text-brand-accent/20 absolute top-6 right-6" />

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{test.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-brand-dark">{test.name}</h4>
                  <span className="text-[11px] text-slate-500 block">{test.location} • {test.relation}</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

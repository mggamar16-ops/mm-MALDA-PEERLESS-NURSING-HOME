import React from 'react';
import { Target, Eye, Heart, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { useHospital } from '../context/HospitalContext';

export const AboutSection = () => {
  const { hospitalData, openBookingModal } = useHospital();
  const { info } = hospitalData;

  const values = [
    { title: "Clinical Excellence", desc: "Evidence-based medical guidelines and continuous medical training.", icon: Target },
    { title: "Patient-Centered Empathy", desc: "Compassionate bedside manner and dedicated emotional support.", icon: Heart },
    { title: "Integrity & Transparency", desc: "Ethical medical guidance with upfront, clear billing structure.", icon: Shield },
    { title: "Absolute Safety", desc: "Rigorous infection control, sterile operating suites, and 24/7 care.", icon: Eye },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-b from-white to-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-apple-lg border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80"
                alt="About Malda Peerless Nursing Home"
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-semibold text-brand-accent uppercase tracking-widest">Est. 2008 in Malda</span>
                <h4 className="text-xl font-bold">18+ Years of Healing & Trust</h4>
                <p className="text-xs text-slate-300">Serving English Bazar and surrounding districts of North Bengal.</p>
              </div>
            </div>

            {/* Overlapping Badge */}
            <div className="bg-white p-5 rounded-2xl shadow-apple-md border border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 font-medium block">Total Patient Satisfaction</span>
                <span className="text-2xl font-extrabold text-brand-deep">99.2% Positive Feedback</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                ✓
              </div>
            </div>
          </div>

          {/* Right Column: Hospital Story, Mission & Vision */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-bold text-brand-deep uppercase tracking-widest bg-brand-cyanBg px-3 py-1 rounded-full border border-brand-accent/20">
                About Our Institution
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
                Pioneering Quality Healthcare in Malda
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Founded with the vision to bring world-class, multi-specialty clinical care to the doorstep of Malda and North Bengal, <strong className="text-brand-dark">{info.name}</strong> has evolved into a premier healthcare sanctuary.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Located conveniently at Dakshin Jadupur, English Bazar, our facility houses state-of-the-art modular operating theatres, advanced ICUs, automated diagnostic laboratories, and round-the-clock emergency medical response.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-apple-sm space-y-2">
                <div className="flex items-center gap-2 text-brand-deep font-bold text-sm">
                  <Target className="w-4 h-4 text-brand-accent" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To deliver compassionate, ethical, and advanced medical treatment at affordable costs while ensuring standard safety protocols for every patient.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-apple-sm space-y-2">
                <div className="flex items-center gap-2 text-brand-deep font-bold text-sm">
                  <Eye className="w-4 h-4 text-brand-accent" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To be North Bengal's most trusted healthcare provider, continuously integrating cutting-edge medical advancements with human-centric nursing care.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="pt-2">
              <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3">Our Core Healthcare Values</h4>
              <div className="grid grid-cols-2 gap-3">
                {values.map((v, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">{v.title}</span>
                      <span className="text-[11px] text-slate-500">{v.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => openBookingModal()}
                className="shimmer-btn px-7 py-3.5 rounded-xl text-white text-xs font-semibold flex items-center gap-2 shadow-md hover:shadow-apple-md"
              >
                <span>Consult Our Specialists</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Calendar, Phone, ArrowRight, HeartPulse, Clock, Sparkles, MapPin } from 'lucide-react';
import { useHospital } from '../context/HospitalContext';
import { Apple3DCanvas } from './Apple3DCanvas';
import { TiltCard } from './TiltCard';

export const HeroSection = () => {
  const { hospitalData, openBookingModal } = useHospital();
  const { info } = hospitalData;
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section ref={targetRef} id="home" className="relative min-h-[92vh] pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-gradient-to-b from-brand-offwhite via-white to-slate-50 flex items-center">
      
      {/* 3D WebGL Motion Canvas Background */}
      <Apple3DCanvas />

      {/* Ambient Radial Gradient */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-accent/15 blur-[160px] rounded-full pointer-events-none" />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full"
      >
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          
          {/* Top Apple Style Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md text-brand-deep px-4 py-2 rounded-full border border-brand-accent/30 text-xs sm:text-sm font-semibold shadow-apple-sm"
          >
            <Sparkles className="w-4 h-4 text-brand-accent" />
            <span>Malda Peerless Nursing Home • Multi-Specialty Hospital</span>
            <span className="bg-brand-deep text-white text-[10px] px-2.5 py-0.5 rounded-full font-bold">NABH Protocol</span>
          </motion.div>

          {/* Large Apple Marketing Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-dark leading-[1.1]"
          >
            Healthcare Built on <br />
            <span className="bg-gradient-to-r from-brand-deep via-brand-navy to-brand-accent bg-clip-text text-transparent">
              Trust, Safety & Care.
            </span>
          </motion.h1>

          {/* Reassuring Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-xl text-slate-600 font-normal max-w-3xl leading-relaxed"
          >
            West Bengal’s trusted multi-specialty healthcare institution in English Bazar, Malda. Delivering 24/7 ICU & Emergency care, advanced laparoscopic surgeries, gynecology, pediatrics, and expert clinical consultations.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => openBookingModal()}
              className="w-full sm:w-auto shimmer-btn flex items-center justify-center gap-3 text-base font-semibold text-white px-9 py-4 rounded-2xl shadow-apple-lg hover:shadow-apple-glow transition-all active:scale-[0.98]"
            >
              <Calendar className="w-5 h-5 text-brand-accent" />
              <span>Book Appointment</span>
              <ArrowRight className="w-5 h-5 opacity-80" />
            </button>

            <a
              href={`tel:${info.phone}`}
              className="w-full sm:w-auto flex items-center justify-center gap-3 text-base font-semibold text-brand-deep bg-white/90 backdrop-blur-md hover:bg-white px-8 py-4 rounded-2xl border border-slate-200 shadow-apple-md hover:border-brand-accent/40 transition-all"
            >
              <Phone className="w-5 h-5 text-brand-accent" />
              <span>Call Hospital Now</span>
            </a>
          </motion.div>

          {/* Key Micro Features Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 border-t border-slate-200/80 w-full max-w-2xl text-xs sm:text-sm font-semibold text-slate-700"
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span>Certified Doctors</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center text-brand-deep">
                <HeartPulse className="w-4 h-4" />
              </div>
              <span>Advanced ICU & OT</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
                <Clock className="w-4 h-4" />
              </div>
              <span>24/7 Rapid Triage</span>
            </div>
          </motion.div>

          {/* Apple-Style Hero Feature Image Card with 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full pt-8"
          >
            <TiltCard className="rounded-3xl shadow-apple-lg border border-white/80 max-w-5xl mx-auto">
              <div className="relative h-[360px] sm:h-[480px] overflow-hidden rounded-3xl group">
                <motion.img
                  style={{ scale: imageScale }}
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
                  alt="Malda Peerless Nursing Home Modern Facility"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Image Overlay Footer */}
                <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-brand-accent uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Dakshin Jadupur, English Bazar, Malda</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold">State-of-the-Art Care Sanctuary</h3>
                    <p className="text-xs sm:text-sm text-slate-300">Sterile operating suites, automated diagnostics, and comfortable private rooms.</p>
                  </div>

                  <div className="bg-white/15 backdrop-blur-md border border-white/20 p-3 rounded-2xl flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-900 font-extrabold flex items-center justify-center text-base">
                      ★
                    </div>
                    <div>
                      <span className="text-sm font-extrabold block">{info.googleRating} / 5.0 Rating</span>
                      <span className="text-[11px] text-slate-300 block">{info.totalReviews} Patient Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

        </div>
      </motion.div>

    </section>
  );
};

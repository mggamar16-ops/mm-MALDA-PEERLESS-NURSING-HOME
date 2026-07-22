import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useHospital } from '../context/HospitalContext';

export const ContactSection = () => {
  const { hospitalData, triggerToast } = useHospital();
  const { info } = hospitalData;

  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    department: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) {
      alert("Please fill in your name and phone number.");
      return;
    }
    setSubmitted(true);
    triggerToast("Inquiry sent! Our reception desk will call you shortly.");
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', phone: '', department: 'General Inquiry', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold text-brand-deep uppercase tracking-widest bg-brand-cyanBg px-3 py-1 rounded-full border border-brand-accent/20">
            Reach Us Anytime
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Contact & Hospital Location
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Located centrally in English Bazar, Malda. Feel free to call us, visit our desk, or send an enquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-brand-offwhite border border-slate-200/80 shadow-apple-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-deep text-white flex items-center justify-center">
                <MapPin className="w-5 h-5 text-brand-accent" />
              </div>
              <div>
                <h4 className="text-base font-bold text-brand-dark">Hospital Location</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  {info.address}
                </p>
                <span className="text-[11px] font-semibold text-brand-deep block mt-1">
                  Landmark: {info.landmark}
                </span>
              </div>
            </div>

            {/* Phone & Emergency Card */}
            <div className="p-6 rounded-3xl bg-brand-offwhite border border-slate-200/80 shadow-apple-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-brand-dark">Direct Hotlines</h4>
                <div className="space-y-1 mt-2 text-xs sm:text-sm">
                  <div className="flex items-center justify-between text-slate-700">
                    <span>OPD & Reception:</span>
                    <a href={`tel:${info.phone}`} className="font-bold text-brand-deep hover:underline">{info.phone}</a>
                  </div>
                  <div className="flex items-center justify-between text-red-600 font-bold">
                    <span>24/7 Emergency:</span>
                    <a href={`tel:${info.emergencyPhone}`} className="hover:underline">{info.emergencyPhone}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email & Hours Card */}
            <div className="p-6 rounded-3xl bg-brand-offwhite border border-slate-200/80 shadow-apple-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-brand-dark">Working Hours & Email</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {info.workingHours}
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium mt-2">
                  <Mail className="w-4 h-4 text-brand-accent" />
                  <a href={`mailto:${info.email}`} className="hover:underline text-brand-deep">{info.email}</a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Enquiry Form & Map */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Quick Enquiry Form */}
            <div className="bg-brand-offwhite p-8 rounded-3xl border border-slate-200 shadow-apple-md">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-brand-accent" />
                <h3 className="text-xl font-bold text-brand-dark">Quick Patient Enquiry</h3>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-2 animate-fade-up">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-900">Enquiry Received!</h4>
                  <p className="text-xs text-emerald-700">Thank you for writing to us. Our administrative desk in Malda will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anish Sarkar"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-xs bg-white border border-slate-200 focus:ring-2 focus:ring-brand-accent/50 outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98320 XXXXX"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-xs bg-white border border-slate-200 focus:ring-2 focus:ring-brand-accent/50 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Department / Reason</label>
                    <select
                      value={formState.department}
                      onChange={(e) => setFormState({ ...formState, department: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-xs bg-white border border-slate-200 focus:ring-2 focus:ring-brand-accent/50 outline-none"
                    >
                      <option>General Inquiry</option>
                      <option>OPD Consultation</option>
                      <option>Admission & IPD</option>
                      <option>Diagnostics & Lab Test</option>
                      <option>Health Insurance / TPA</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Your Message or Query</label>
                    <textarea
                      rows="3"
                      placeholder="Specify doctor preference, symptom, or question..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-xs bg-white border border-slate-200 focus:ring-2 focus:ring-brand-accent/50 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full shimmer-btn py-3.5 rounded-xl text-xs font-semibold text-white flex items-center justify-center gap-2 shadow-md"
                  >
                    <Send className="w-4 h-4 text-brand-accent" />
                    <span>Submit Quick Enquiry</span>
                  </button>
                </form>
              )}
            </div>

            {/* Google Map Container */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-apple-sm h-64 relative bg-slate-100">
              <iframe
                title="Malda Peerless Nursing Home Google Map Location"
                src={info.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

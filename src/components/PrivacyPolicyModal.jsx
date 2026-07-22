import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { useHospital } from '../context/HospitalContext';

export const PrivacyPolicyModal = () => {
  const { isPrivacyOpen, setIsPrivacyOpen, hospitalData } = useHospital();
  const { info } = hospitalData;

  if (!isPrivacyOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-up">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-apple-lg border border-slate-200 flex flex-col max-h-[85vh]">
        
        <div className="bg-brand-navy text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brand-accent" />
            <h3 className="text-xl font-bold">Privacy Policy & Patient Rights</h3>
          </div>
          <button
            onClick={() => setIsPrivacyOpen(false)}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <h4 className="font-bold text-slate-900 text-base">1. Commitment to Health Data Privacy</h4>
          <p>
            At {info.name}, patient confidentiality is paramount. All medical records, diagnostic test results, doctor prescriptions, and personal identifying information are stored securely in accordance with Indian healthcare regulations and NABH guidelines.
          </p>

          <h4 className="font-bold text-slate-900 text-base">2. Collection of Information</h4>
          <p>
            When you schedule an appointment or register at our desk in Dakshin Jadupur, English Bazar, Malda, we collect your name, contact phone number, address, age, medical history, and insurance details solely for clinical treatment and billing purposes.
          </p>

          <h4 className="font-bold text-slate-900 text-base">3. Non-Disclosure Guarantee</h4>
          <p>
            We do NOT sell, lease, or share your personal health data with third-party advertising companies. Your records are strictly accessible only by treating clinicians, authorized laboratory staff, and TPA insurance coordinators.
          </p>

          <h4 className="font-bold text-slate-900 text-base">4. Emergency & Medical Records Access</h4>
          <p>
            Patients or legal guardians may request copies of discharge summaries, diagnostic reports, and billing receipts at our administrative office during working hours.
          </p>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={() => setIsPrivacyOpen(false)}
            className="px-6 py-2.5 rounded-xl bg-brand-deep text-white text-xs font-semibold"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};

import React from 'react';
import { useHospital } from '../context/HospitalContext';
import { CheckCircle2 } from 'lucide-react';

export const Toast = () => {
  const { toastMessage } = useHospital();

  if (!toastMessage) return null;

  return (
    <div className="fixed top-20 right-6 z-50 animate-bounce">
      <div className="flex items-center gap-3 bg-brand-deep text-white px-5 py-3.5 rounded-2xl shadow-apple-lg border border-brand-accent/30">
        <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0" />
        <span className="text-sm font-medium">{toastMessage}</span>
      </div>
    </div>
  );
};

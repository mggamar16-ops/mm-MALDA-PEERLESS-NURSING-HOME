import React, { useState } from 'react';
import { X, Save, RotateCcw, Edit, Sliders } from 'lucide-react';
import { useHospital } from '../context/HospitalContext';

export const AdminEditorDrawer = () => {
  const { isAdminOpen, setIsAdminOpen, hospitalData, updateHospitalInfo, resetToDefaults } = useHospital();
  const { info } = hospitalData;

  const [formData, setFormData] = useState({ ...info });

  if (!isAdminOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateHospitalInfo(formData);
    setIsAdminOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-950/70 backdrop-blur-sm animate-fade-up">
      <div className="bg-white w-full max-w-lg h-full overflow-y-auto shadow-apple-lg border-l border-slate-200 flex flex-col justify-between">
        
        {/* Header */}
        <div className="bg-brand-deep text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-brand-accent" />
            <div>
              <h3 className="text-lg font-bold">Hospital Details Content Editor</h3>
              <p className="text-xs text-slate-300">Live edit contact, address, hours & rating</p>
            </div>
          </div>
          <button
            onClick={() => setIsAdminOpen(false)}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-6 space-y-4 flex-1">
          
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Hospital Business Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-accent/50 outline-none font-semibold"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">OPD Phone Hotline</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-red-600 block mb-1">24/7 Emergency Number</label>
              <input
                type="text"
                name="emergencyPhone"
                value={formData.emergencyPhone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl text-xs bg-slate-50 border border-red-200 font-bold text-red-600 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">WhatsApp Hotline</label>
              <input
                type="text"
                name="whatsappPhone"
                value={formData.whatsappPhone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-amber-600 block mb-1">Google Rating Placeholder</label>
              <input
                type="text"
                name="googleRating"
                value={formData.googleRating}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl text-xs bg-slate-50 border border-amber-200 font-bold text-amber-600 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Contact Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Full Physical Address</label>
            <textarea
              rows="2"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 outline-none resize-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Landmark / Location Note</label>
            <input
              type="text"
              name="landmark"
              value={formData.landmark}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Working Hours Text</label>
            <input
              type="text"
              name="workingHours"
              value={formData.workingHours}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Google Map Embed URL</label>
            <input
              type="text"
              name="mapEmbedUrl"
              value={formData.mapEmbedUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 outline-none text-slate-500 font-mono truncate"
            />
          </div>

          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
            <button
              type="button"
              onClick={resetToDefaults}
              className="px-4 py-2 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 text-xs font-semibold flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <button
              type="submit"
              className="shimmer-btn px-6 py-2.5 rounded-xl text-xs font-semibold text-white flex items-center gap-2 shadow-md"
            >
              <Save className="w-4 h-4 text-brand-accent" />
              <span>Save & Publish Changes</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

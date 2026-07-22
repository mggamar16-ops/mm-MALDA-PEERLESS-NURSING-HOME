import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, CheckCircle2, Phone, Printer, ArrowRight, ArrowLeft } from 'lucide-react';
import { useHospital } from '../context/HospitalContext';

export const AppointmentModal = () => {
  const { isBookingOpen, closeBookingModal, bookingDoctor, hospitalData, triggerToast } = useHospital();
  const { doctors, departments, info } = hospitalData;

  const [step, setStep] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState(bookingDoctor || doctors[0]);
  const [selectedDept, setSelectedDept] = useState(departments[0].name);
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('11:00 AM - 12:00 PM');
  
  const [patientDetails, setPatientDetails] = useState({
    name: '',
    phone: '',
    age: '',
    gender: 'Male',
    notes: ''
  });

  const [bookingRef, setBookingRef] = useState(null);

  useEffect(() => {
    if (bookingDoctor) {
      setSelectedDoctor(bookingDoctor);
      setSelectedDept(bookingDoctor.specialty);
    }
  }, [bookingDoctor]);

  if (!isBookingOpen) return null;

  const handleDepartmentChange = (deptName) => {
    setSelectedDept(deptName);
    const matchingDocs = doctors.filter(d => d.specialty === deptName);
    if (matchingDocs.length > 0) {
      setSelectedDoctor(matchingDocs[0]);
    }
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (!patientDetails.name || !patientDetails.phone) {
      alert("Please provide patient name and contact phone number.");
      return;
    }
    const randomRef = 'MPNH-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setStep(4);
    triggerToast(`Appointment booked! Ref: ${randomRef}`);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-up">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-apple-lg border border-slate-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-brand-navy text-white px-6 py-5 flex items-center justify-between border-b border-white/10">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">
              Official Booking Portal
            </span>
            <h3 className="text-xl font-bold">Book OPD Appointment</h3>
          </div>
          <button
            onClick={closeBookingModal}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator Progress Bar */}
        {step < 4 && (
          <div className="bg-slate-100 px-6 py-3 flex items-center justify-between border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${step === 1 ? 'bg-brand-deep text-white' : 'bg-emerald-500 text-white'}`}>1</span>
              <span className="text-xs font-semibold text-slate-700 hidden sm:inline">Doctor & Specialty</span>
            </div>
            <div className="h-0.5 w-8 bg-slate-300" />
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${step === 2 ? 'bg-brand-deep text-white' : step > 2 ? 'bg-emerald-500 text-white' : 'bg-slate-300 text-slate-600'}`}>2</span>
              <span className="text-xs font-semibold text-slate-700 hidden sm:inline">Date & Time</span>
            </div>
            <div className="h-0.5 w-8 bg-slate-300" />
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${step === 3 ? 'bg-brand-deep text-white' : 'bg-slate-300 text-slate-600'}`}>3</span>
              <span className="text-xs font-semibold text-slate-700 hidden sm:inline">Patient Info</span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* STEP 1: SELECT DOCTOR & DEPARTMENT */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Select Department</label>
                <select
                  value={selectedDept}
                  onChange={(e) => handleDepartmentChange(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-accent/50 outline-none font-medium"
                >
                  {departments.map((d) => (
                    <option key={d.id} value={d.name}>{d.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-2">Select Specialist Doctor</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {doctors.map((doc) => {
                    const isSelected = selectedDoctor?.id === doc.id;
                    return (
                      <div
                        key={doc.id}
                        onClick={() => {
                          setSelectedDoctor(doc);
                          setSelectedDept(doc.specialty);
                        }}
                        className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center gap-3 ${
                          isSelected
                            ? 'bg-brand-cyanBg/60 border-brand-accent shadow-sm'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <img src={doc.photo} alt={doc.name} className="w-12 h-12 rounded-xl object-cover" />
                        <div className="text-left flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-brand-dark truncate">{doc.name}</h4>
                          <span className="text-[10px] text-slate-500 block truncate">{doc.specialty}</span>
                          <span className="text-[10px] font-semibold text-emerald-600 block">{doc.timing}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="shimmer-btn px-6 py-3 rounded-xl text-xs font-semibold text-white flex items-center gap-2"
                >
                  <span>Next: Select Slot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: DATE & TIME */}
          {step === 2 && (
            <div className="space-y-5">
              <div className="bg-brand-offwhite p-4 rounded-2xl border border-slate-200 flex items-center gap-3">
                <img src={selectedDoctor.photo} alt={selectedDoctor.name} className="w-12 h-12 rounded-xl object-cover" />
                <div>
                  <h4 className="text-sm font-bold text-brand-dark">{selectedDoctor.name}</h4>
                  <p className="text-xs text-slate-500">{selectedDoctor.specialty} • OPD: {selectedDoctor.days}</p>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Preferred Appointment Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 outline-none font-semibold text-slate-800"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-2">Available Time Slot</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['09:00 AM - 10:00 AM', '11:00 AM - 12:00 PM', '02:00 PM - 03:00 PM', '04:00 PM - 05:00 PM', '06:00 PM - 07:00 PM'].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTimeSlot(slot)}
                      className={`p-2.5 rounded-xl text-xs font-semibold border transition-all ${
                        timeSlot === slot
                          ? 'bg-brand-deep text-white border-brand-deep shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="shimmer-btn px-6 py-3 rounded-xl text-xs font-semibold text-white flex items-center gap-2"
                >
                  <span>Next: Patient Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: PATIENT INFO */}
          {step === 3 && (
            <form onSubmit={handleFinalSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Patient Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sourav Roy"
                    value={patientDetails.name}
                    onChange={(e) => setPatientDetails({ ...patientDetails, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-accent/50 outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 94340 XXXXX"
                    value={patientDetails.phone}
                    onChange={(e) => setPatientDetails({ ...patientDetails, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-accent/50 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Age (Years)</label>
                  <input
                    type="number"
                    placeholder="e.g. 42"
                    value={patientDetails.age}
                    onChange={(e) => setPatientDetails({ ...patientDetails, age: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Gender</label>
                  <select
                    value={patientDetails.gender}
                    onChange={(e) => setPatientDetails({ ...patientDetails, gender: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 outline-none"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Health Issues / Remarks</label>
                <textarea
                  rows="2"
                  placeholder="Mention previous prescriptions or current symptoms..."
                  value={patientDetails.notes}
                  onChange={(e) => setPatientDetails({ ...patientDetails, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 outline-none resize-none"
                />
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="shimmer-btn px-7 py-3 rounded-xl text-xs font-semibold text-white flex items-center gap-2 shadow-md"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>Confirm Appointment</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: DIGITAL PASS / CONFIRMATION */}
          {step === 4 && (
            <div className="space-y-6 text-center animate-fade-up">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Appointment Confirmed
                </span>
                <h3 className="text-2xl font-extrabold text-brand-dark mt-2">OPD Consultation Ticket</h3>
                <p className="text-xs text-slate-500">Please present this digital pass or reference number at the reception desk.</p>
              </div>

              {/* Ticket Card */}
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-left space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Booking Reference</span>
                    <h4 className="text-lg font-black text-brand-deep">{bookingRef}</h4>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-lg">STATUS: ACTIVE</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 font-medium block">Patient Name</span>
                    <strong className="text-slate-800">{patientDetails.name} ({patientDetails.phone})</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block">Specialist Doctor</span>
                    <strong className="text-slate-800">{selectedDoctor.name}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block">Date & Time</span>
                    <strong className="text-slate-800">{date} at {timeSlot}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block">Hospital Location</span>
                    <strong className="text-slate-800">Dakshin Jadupur, Malda</strong>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={handlePrint}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 flex items-center gap-2"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Ticket</span>
                </button>
                <button
                  onClick={closeBookingModal}
                  className="px-6 py-2.5 rounded-xl bg-brand-deep text-white text-xs font-semibold shadow-md"
                >
                  Done
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

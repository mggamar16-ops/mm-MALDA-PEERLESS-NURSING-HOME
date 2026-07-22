import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialHospitalData } from '../data/hospitalData';

const HospitalContext = createContext(null);

export const HospitalProvider = ({ children }) => {
  const [hospitalData, setHospitalData] = useState(() => {
    const saved = localStorage.getItem('mpnh_hospital_data');
    return saved ? JSON.parse(saved) : initialHospitalData;
  });

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingDoctor, setBookingDoctor] = useState(null);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Save changes to localStorage for live persistence
  useEffect(() => {
    localStorage.setItem('mpnh_hospital_data', JSON.stringify(hospitalData));
  }, [hospitalData]);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const openBookingModal = (doctor = null) => {
    setBookingDoctor(doctor);
    setIsBookingOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingOpen(false);
    setBookingDoctor(null);
  };

  const updateHospitalInfo = (newInfo) => {
    setHospitalData(prev => ({
      ...prev,
      info: { ...prev.info, ...newInfo }
    }));
    triggerToast("Hospital information updated successfully!");
  };

  const resetToDefaults = () => {
    setHospitalData(initialHospitalData);
    localStorage.removeItem('mpnh_hospital_data');
    triggerToast("Reset all information to default state.");
  };

  return (
    <HospitalContext.Provider
      value={{
        hospitalData,
        isBookingOpen,
        bookingDoctor,
        openBookingModal,
        closeBookingModal,
        isPrivacyOpen,
        setIsPrivacyOpen,
        isAdminOpen,
        setIsAdminOpen,
        updateHospitalInfo,
        resetToDefaults,
        toastMessage,
        triggerToast
      }}
    >
      {children}
    </HospitalContext.Provider>
  );
};

export const useHospital = () => {
  const context = useContext(HospitalContext);
  if (!context) throw new Error('useHospital must be used within HospitalProvider');
  return context;
};

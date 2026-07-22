import React from 'react';
import { HospitalProvider } from './context/HospitalContext';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import Navbar from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustIndicators } from './components/TrustIndicators';
import { DepartmentsSection } from './components/DepartmentsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { DoctorsSection } from './components/DoctorsSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { PatientJourney } from './components/PatientJourney';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { AdminEditorDrawer } from './components/AdminEditorDrawer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { Toast } from './components/Toast';

export function App() {
  return (
    <HospitalProvider>
      <div className="min-h-screen bg-brand-offwhite text-brand-dark flex flex-col font-sans selection:bg-brand-accent selection:text-white">
        <ScrollProgressBar />
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <TrustIndicators />
          <DepartmentsSection />
          <WhyChooseUs />
          <AboutSection />
          <DoctorsSection />
          <FacilitiesSection />
          <PatientJourney />
          <GallerySection />
          <TestimonialsSection />
          <FaqSection />
          <ContactSection />
        </main>
        <Footer />
        <AppointmentModal />
        <PrivacyPolicyModal />
        <AdminEditorDrawer />
        <MobileStickyBar />
        <Toast />
      </div>
    </HospitalProvider>
  );
}

export default App;

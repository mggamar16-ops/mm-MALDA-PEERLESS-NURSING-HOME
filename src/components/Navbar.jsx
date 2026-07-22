import React, { useState } from 'react';
import { Menu, X, Calendar, Phone, Settings } from 'lucide-react';
import { useHospital } from '../context/HospitalContext';

export function Navbar() {
  const { hospitalData, openBookingModal, setIsAdminOpen } = useHospital();
  const { info } = hospitalData;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Departments', href: '#departments' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between py-4">
        
        {/* Minimal Apple-Style Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-brand-deep p-0.5 shadow-sm group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
            <div className="w-full h-full bg-brand-deep rounded-lg flex items-center justify-center">
              <span className="text-lg font-black text-white tracking-tighter">P</span>
            </div>
          </div>
          <span className="text-base sm:text-lg font-bold tracking-tight text-brand-dark group-hover:text-brand-deep transition-colors">
            {info.name}
          </span>
        </a>

        {/* Centered Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-deep px-3.5 py-2 rounded-lg hover:bg-slate-100/60 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => setIsAdminOpen(true)}
            className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors"
            title="Edit hospital details live"
          >
            <Settings className="w-4 h-4" />
          </button>

          <a
            href={`tel:${info.phone}`}
            className="flex items-center gap-2 text-sm font-semibold text-brand-deep bg-brand-cyanBg hover:bg-brand-cyanBg px-4 py-2.5 rounded-xl border border-brand-accent/20 transition-all"
          >
            <Phone className="w-4 h-4 text-brand-accent" />
            <span>Call Now</span>
          </a>

          <button
            onClick={() => openBookingModal()}
            className="shimmer-btn flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-xl shadow-apple-sm active:scale-95 transition-transform"
          >
            <Calendar className="w-4 h-4 text-brand-accent" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-brand-deep rounded-lg hover:bg-slate-100"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-brand-deep py-2 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openBookingModal();
              }}
              className="w-full shimmer-btn py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2 shadow-md"
            >
              <Calendar className="w-5 h-5 text-brand-accent" />
              Book Appointment
            </button>

            <a
              href={`tel:${info.phone}`}
              className="w-full py-3 rounded-xl text-brand-deep bg-brand-cyanBg font-semibold flex items-center justify-center gap-2 border border-brand-accent/20"
            >
              <Phone className="w-5 h-5 text-brand-accent" />
              Call Now ({info.phone})
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

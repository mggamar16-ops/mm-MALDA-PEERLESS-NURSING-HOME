export const initialHospitalData = {
  info: {
    name: "Malda Peerless Nursing Home",
    tagline: "Advanced Multi-Specialty Healthcare with Compassionate Care",
    category: "Multi-Specialty Private Hospital & Nursing Home",
    location: "Dakshin Jadupur, English Bazar, Malda, West Bengal 732101, India",
    address: "Dakshin Jadupur, Post: English Bazar, Dist: Malda, West Bengal - 732101",
    landmark: "Near English Bazar Bus Terminus & Malda Town Railway Station",
    phone: "+91 94340 12345",
    emergencyPhone: "+91 94340 99999",
    whatsappPhone: "+91 94340 12345",
    email: "care@maldapeerless.com",
    googleRating: "4.8",
    totalReviews: "1,240+",
    workingHours: "OPD: Mon - Sat: 8:00 AM - 8:00 PM | Emergency & Admissions: 24 Hours / 7 Days",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.702819842186!2d88.1408!3d25.0007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAwJzAyLjUiTiA4OMKwMDgnMjYuOSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  
  stats: [
    { label: "Years of Dedicated Service", value: "18+", icon: "Award" },
    { label: "Specialist Doctors", value: "25+", icon: "UserCheck" },
    { label: "Happy Patients Treated", value: "85,000+", icon: "HeartPulse" },
    { label: "24/7 Emergency Care", value: "365 Days", icon: "Clock" },
    { label: "Google Rating", value: "4.8 ★", icon: "Star" }
  ],

  departments: [
    {
      id: "general-medicine",
      name: "General Medicine",
      shortDesc: "Comprehensive diagnosis and non-surgical treatment of complex adult illnesses.",
      icon: "Stethoscope",
      head: "Dr. A. K. Choudhury (MD)",
      services: ["Diabetes & Hypertension Care", "Infectious Disease Management", "Cardiovascular Risk Screening", "Comprehensive Health Checks"],
      image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gynecology",
      name: "Gynecology & Obstetrics",
      shortDesc: "Specialized maternal health, painless delivery, laparoscopy, and fertility consultation.",
      icon: "Baby",
      head: "Dr. S. Mukherjee (MS, DNB)",
      services: ["High-Risk Pregnancy Management", "Painless Normal Delivery", "Laparoscopic Gyne Surgery", "Infertility & Hormonal Clinic"],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pediatrics",
      name: "Pediatrics & Neonatology",
      shortDesc: "Gentle child care, newborn ICU (NICU), pediatric emergency, and vaccination.",
      icon: "Heart",
      head: "Dr. R. N. Sarkar (MD Pediatrics)",
      services: ["Neonatal Intensive Care (NICU)", "Pediatric Growth & Nutrition", "Childhood Immunization", "Pediatric Asthma Clinic"],
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "orthopedics",
      name: "Orthopedics & Joint Replacement",
      shortDesc: "Advanced bone fracture repair, keyhole arthroscopy, and joint replacement surgeries.",
      icon: "Activity",
      head: "Dr. P. K. Das (MS Ortho, FRCS)",
      services: ["Total Knee & Hip Replacement", "Trauma & Complex Fracture Care", "Arthroscopic Shoulder & Knee Repair", "Spine Care & Physiotherapy"],
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "general-surgery",
      name: "General & Laparoscopic Surgery",
      shortDesc: "Minimal access laparoscopic keyhole procedures ensuring faster healing and minimal scarring.",
      icon: "ShieldAlert",
      head: "Dr. S. K. Roy (MS Surgery)",
      services: ["Laparoscopic Gallbladder & Hernia", "Appendix & Gastro Surgeries", "Laser Piles & Fistula Care", "Emergency Trauma Surgery"],
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "emergency-care",
      name: "24/7 Emergency & Critical Care",
      shortDesc: "Round-the-clock rapid response trauma center with fully equipped ICU beds and ventilators.",
      icon: "Siren",
      head: "Dr. M. Banerjee (MEM Critical Care)",
      services: ["Cardiac Arrest & Stroke Response", "24/7 Advanced ICU & Ventilator", "Trauma & Accident Stabilization", "Instant Cardiac ECG & Triage"],
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "diagnostics",
      name: "Advanced Diagnostics & Lab",
      shortDesc: "Computerized pathology, digital X-Ray, 4D Ultrasound, CT Scan, and Echo diagnostics.",
      icon: "Microscope",
      head: "Dr. D. Sen (MD Pathology)",
      services: ["Fully Automated Bio-Chem Lab", "High-Resolution Digital X-Ray", "Color Doppler & 4D USG", "24/7 Blood Bank Tie-Up"],
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80"
    }
  ],

  doctors: [
    {
      id: 1,
      name: "Dr. Alok Kumar Choudhury",
      specialty: "General Medicine",
      degree: "MBBS, MD (General Medicine) - IPGMER Kolkata",
      experience: "22+ Years",
      days: "Mon, Wed, Fri",
      timing: "10:00 AM - 2:00 PM",
      photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      name: "Dr. Supriya Mukherjee",
      specialty: "Gynecology & Obstetrics",
      degree: "MBBS, MS (O&G), DNB, Fellowship in Laparoscopy",
      experience: "16+ Years",
      days: "Mon - Sat",
      timing: "11:00 AM - 4:00 PM",
      photo: "https://images.unsplash.com/photo-1594824813566-78a9c394d2f8?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      name: "Dr. Partha Sarathi Das",
      specialty: "Orthopedics & Joint Replacement",
      degree: "MBBS, MS (Ortho), Fellowship in Joint Replacement (UK)",
      experience: "18+ Years",
      days: "Tue, Thu, Sat",
      timing: "4:00 PM - 8:00 PM",
      photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      name: "Dr. Rabindra Nath Sarkar",
      specialty: "Pediatrics & Neonatology",
      degree: "MBBS, MD (Pediatrics), DCH",
      experience: "15+ Years",
      days: "Mon - Sat",
      timing: "9:00 AM - 1:00 PM",
      photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      name: "Dr. Subhasis Roy",
      specialty: "General & Laparoscopic Surgery",
      degree: "MBBS, MS (Surgery), FIAGES",
      experience: "19+ Years",
      days: "Mon, Tue, Thu, Fri",
      timing: "2:00 PM - 6:00 PM",
      photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      name: "Dr. Madhumita Banerjee",
      specialty: "Critical Care & Emergency Medicine",
      degree: "MBBS, MEM (Emergency Medicine), IDCCM",
      experience: "12+ Years",
      days: "Daily 24 Hours (On Call / Shift)",
      timing: "Round The Clock",
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
    }
  ],

  facilities: [
    {
      id: "ot",
      title: "Modular Operation Theatres",
      desc: "Ultra-clean HEPA filtered modular OTs equipped with C-Arm, laparoscopic towers, and shadowless LED surgical lights.",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "icu",
      title: "Intensive Care Unit (ICU / NICU)",
      desc: "State-of-the-art multi-bed ICU with invasive ventilators, cardiac monitors, arterial blood gas analyzers, and 1:1 nursing ratio.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pathology",
      title: "24/7 Automated Laboratory",
      desc: "Comprehensive diagnostic lab equipped with automatic hematology & biochemistry analyzers for precise report generation within hours.",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pharmacy",
      title: "In-House 24/7 Pharmacy",
      desc: "Fully stocked pharmacy providing genuine life-saving drugs, surgical disposables, and cold-chain vaccines 24x7.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "ambulance",
      title: "ACL Critical Care Ambulance",
      desc: "Advanced life support ambulance equipped with transport ventilator, defibrillator, oxygen supply, and paramedic staff.",
      image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "rooms",
      title: "Deluxe Private & Semi-Private Wards",
      desc: "Spacious, hygienic AC private rooms with nurse call bells, LED television, attendant couch, and serene infection-free environment.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
    }
  ],

  whyUs: [
    {
      title: "Advanced Medical Technology",
      desc: "Equipped with modern modular OTs, digital diagnostics, high-tech ICU, and laparoscopy setups.",
      icon: "Cpu"
    },
    {
      title: "Veteran Specialist Doctors",
      desc: "Senior clinicians from reputed medical colleges dedicated to patient wellbeing.",
      icon: "UserCheck"
    },
    {
      title: "Compassionate Care Culture",
      desc: "We treat every patient like family with warmth, dignity, empathy, and utmost care.",
      icon: "Heart"
    },
    {
      title: "Sterile & Infection-Free Environment",
      desc: "Strict WHO hygiene guidelines, daily sanitization, and isolated clean wards.",
      icon: "Sparkles"
    },
    {
      title: "Transparent & Affordable Pricing",
      desc: "No hidden charges, fair package billing, and smooth cashless insurance support.",
      icon: "ShieldCheck"
    },
    {
      title: "Rapid Emergency Response",
      desc: "Zero-delay admission protocol for trauma, cardiac, and critical emergency patients.",
      icon: "Zap"
    }
  ],

  patientJourney: [
    { step: "01", title: "Easy Appointment Booking", desc: "Select doctor or department online or call directly." },
    { step: "02", title: "Hospital Reception Arrival", desc: "Welcoming front desk assistance and hassle-free registration." },
    { step: "03", title: "Doctor Consultation", desc: "Detailed physical evaluation by senior medical specialist." },
    { step: "04", title: "Precision Diagnostics", desc: "Fast-track lab work & digital imaging under one roof." },
    { step: "05", title: "Tailored Care Plan", desc: "Personalized medication, minor procedure, or surgical care." },
    { step: "06", title: "Smooth Recovery", desc: "Post-care guidance, follow-up schedule, and continuous wellness." }
  ],

  gallery: [
    { id: 1, title: "Modern Hospital Entrance & Reception", category: "Interiors", url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" },
    { id: 2, title: "Modular Operation Theatre", category: "Equipment", url: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "24/7 Advanced ICU Setup", category: "ICU", url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80" },
    { id: 4, title: "Private Deluxe Patient Room", category: "Rooms", url: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80" },
    { id: 5, title: "Expert Medical Team", category: "Doctors", url: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80" },
    { id: 6, title: "High Precision Lab Setup", category: "Equipment", url: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80" }
  ],

  testimonials: [
    {
      id: 1,
      name: "Subrata Ghosh",
      location: "Malda Town",
      relation: "Gallbladder Laparoscopic Surgery Patient",
      rating: 5,
      comment: "Malda Peerless Nursing Home provided exceptional care during my keyhole gallbladder surgery. Dr. Roy and the nursing staff were so gentle, reassuring, and attentive. Clean room and zero hassle."
    },
    {
      id: 2,
      name: "Priyanka Roy Chowdhury",
      location: "English Bazar",
      relation: "Maternal & Delivery Care",
      rating: 5,
      comment: "I delivered my baby under Dr. Supriya Mukherjee. The gynecological care and post-delivery nursery support were outstanding. Highly recommended hospital in Malda!"
    },
    {
      id: 3,
      name: "Debashis Seal",
      location: "Old Malda",
      relation: "Emergency ICU Admission",
      rating: 5,
      comment: "My father had a sudden chest issue at midnight. The emergency team acted within seconds, admitted him to ICU, and stabilized him. We are forever grateful to the critical care team."
    }
  ],

  faqs: [
    {
      q: "How can I book an appointment with a specialist doctor?",
      a: "You can click the 'Book Appointment' button on this website to schedule an appointment online, or call our direct desk at +91 94340 12345."
    },
    {
      q: "Are emergency and ambulance services available 24/7?",
      a: "Yes, our Emergency Department, ICU, Diagnostic Lab, Pharmacy, and ACL Ambulance services operate round-the-clock 365 days a year."
    },
    {
      q: "Does Malda Peerless Nursing Home accept cashless health insurance?",
      a: "We support major health insurance TPA providers and government health card schemes. Please contact our insurance desk at reception for immediate assistance."
    },
    {
      q: "What are the visiting hours for admitted patients?",
      a: "General Ward & Private Room visiting hours: Morning 11:00 AM - 12:30 PM and Evening 5:00 PM - 7:00 PM. ICU visitor entry is restricted to designated immediate family members."
    },
    {
      q: "How quickly can I receive diagnostic lab test reports?",
      a: "Routine blood and urine test reports are available within 3 to 6 hours. Emergency STAT investigations are delivered within 45 minutes."
    }
  ]
};

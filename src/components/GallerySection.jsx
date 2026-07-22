import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { useHospital } from '../context/HospitalContext';

export const GallerySection = () => {
  const { hospitalData } = useHospital();
  const { gallery } = hospitalData;

  const [activeCategory, setActiveCategory] = useState('All');
  const [activeImage, setActiveImage] = useState(null);

  const categories = ['All', 'Interiors', 'ICU', 'Rooms', 'Equipment', 'Doctors'];

  const filteredGallery = activeCategory === 'All'
    ? gallery
    : gallery.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest bg-brand-cyanBg px-3 py-1 rounded-full border border-brand-accent/20">
            Hospital Tour
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Infrastructure & Gallery
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Take a visual tour of our clean reception areas, state-of-the-art ICUs, private patient suites, and surgical operation rooms.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-brand-deep text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="relative h-64 rounded-3xl overflow-hidden shadow-apple-sm group cursor-pointer border border-slate-200"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-accent px-2 py-0.5 rounded text-white inline-block mb-1">
                  {item.category}
                </span>
                <h4 className="text-sm font-bold truncate">{item.title}</h4>
              </div>

              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Image Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-up">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-apple-lg border border-slate-700">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <img src={activeImage.url} alt={activeImage.title} className="w-full max-h-[75vh] object-contain bg-black" />
            
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between border-t border-slate-800">
              <div>
                <span className="text-xs text-brand-accent font-semibold">{activeImage.category}</span>
                <h3 className="text-base font-bold">{activeImage.title}</h3>
              </div>
              <span className="text-xs text-slate-400">Malda Peerless Nursing Home</span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

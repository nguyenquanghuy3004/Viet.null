import React from 'react';
import { motion } from 'framer-motion';
import { dynasties } from '../data/data';

const Collections = () => {
  return (
    <section className="py-32 px-8 bg-heritage-black relative overflow-hidden" id="collections">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-gold uppercase tracking-widest text-sm mb-4 font-bold">The Dynasties</h2>
            <h3 className="text-5xl md:text-6xl font-serif text-white leading-tight">
              Four Eras of <br /> <span className="text-gold italic">Vietnamese Pride</span>
            </h3>
          </div>
          <p className="text-white/70 max-w-sm text-lg leading-relaxed">
            Each piece is a journey through time, meticulously crafted to honor the hands that built our nation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dynasties.map((dynasty, index) => (
            <motion.div
              key={dynasty.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative h-[650px] overflow-hidden cursor-pointer border border-white/5 hover:border-gold/30 transition-all duration-500"
            >
              {/* Overlay with color gradient - Using inline style for reliability with CDN */}
              <div 
                className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-10"
                style={{
                  background: `linear-gradient(to top, #0a0a0a, transparent)`
                }}
              ></div>
              
              <div className="absolute inset-0 bg-noise z-0"></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 group-hover:bg-heritage-black/20 transition-all duration-500">
                <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-2">{dynasty.period}</span>
                <h4 className="text-3xl font-serif text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">{dynasty.name}</h4>
                <p className="text-white/90 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 leading-relaxed">
                  {dynasty.description}
                </p>
                <div className="w-10 h-0.5 bg-gold group-hover:w-full transition-all duration-700"></div>
              </div>

              {/* Decorative Text */}
              <div className="absolute top-8 right-8 text-gold/10 text-8xl font-serif select-none pointer-events-none">
                {dynasty.name.charAt(0)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;

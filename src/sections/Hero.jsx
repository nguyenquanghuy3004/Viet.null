import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 scale-110 animate-pulse-slow"
        style={{
          backgroundImage: 'url("/assets/hero.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-heritage-black/60 bg-noise"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-heritage-black via-transparent to-heritage-black"></div>
      </div>

      {/* Floating Patterns */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-60 -left-60 w-[500px] h-[500px] opacity-10 border border-gold rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-60 -right-60 w-[700px] h-[700px] opacity-10 border-2 border-gold/40 rounded-full"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gold uppercase tracking-[0.6em] text-sm md:text-base mb-6 font-bold text-glow-gold"
        >
          Integration of History & Style
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-7xl md:text-[10rem] font-serif text-white mb-10 leading-none"
        >
          Wear <span className="text-gold italic">History</span>
        </motion.h1>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1 }}
        >
          <button 
            className="px-12 py-5 bg-gold text-heritage-black font-bold uppercase tracking-[0.3em] text-xs hover:bg-white transition-all duration-500 shadow-2xl"
          >
            Explore Collection
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gold opacity-80 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Scroll</span>
        <div className="w-0.5 h-16 bg-gradient-to-b from-gold to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;

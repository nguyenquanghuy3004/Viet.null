import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-cinematic-gradient">
      {/* Background Image with Cinematic Effects */}
      <div 
        className="absolute inset-0 z-0 opacity-80"
        style={{
          backgroundImage: 'url("/assets/products/group_hero.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
        }}
      >
        <div className="absolute inset-0 bg-noise opacity-10"></div>
        <div className="absolute inset-0 bg-heritage-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-heritage-black/60 via-transparent to-heritage-black/60"></div>
        <div className="absolute inset-0 vignette-overlay opacity-40"></div>
        <div className="gold-dust opacity-20 pointer-events-none"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gold uppercase tracking-[0.6em] text-xs md:text-sm mb-6 font-bold text-glow-gold"
        >
          {t('hero.subtext')}
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-6xl md:text-[9rem] font-serif text-white mb-10 leading-none"
        >
          {t('hero.title_part1')} <span className="text-gold italic">{t('hero.title_part2')}</span>
        </motion.h1>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1 }}
        >
          <a href="#showcase">
            <button 
              className="px-12 py-5 bg-gold text-heritage-black font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-white transition-all duration-500 shadow-2xl"
            >
              {t('hero.cta')}
            </button>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gold opacity-80 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold">{t('hero.scroll')}</span>
        <div className="w-0.5 h-16 bg-gradient-to-b from-gold to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;

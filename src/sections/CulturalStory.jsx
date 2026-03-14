import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const CulturalStory = () => {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section className="py-32 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 radial-warm-glow pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative h-[600px]">
          <motion.div
            style={{ y: y1 }}
            className="absolute top-0 right-0 w-[80%] h-[70%] z-10 border-4 border-gold/20 overflow-hidden"
          >
            <img src="/assets/pattern_detail.png" alt="Pattern" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </motion.div>
          <motion.div
            style={{ y: y2 }}
            className="absolute bottom-0 left-0 w-[60%] h-[60%] z-20 border-4 border-gold/40 shadow-2xl overflow-hidden"
          >
            <img src="/assets/hung_kings.png" alt="Dynasty" className="w-full h-full object-cover" />
          </motion.div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-gold/10 rounded-full animate-spin-slow pointer-events-none"></div>
        </div>

        <div>
          <h2 className="text-gold text-sm tracking-[0.4em] uppercase mb-6 italic font-bold">{t('cultural.subtitle')}</h2>
          <h3 className="text-6xl font-serif text-white mb-8 leading-tight">{t('cultural.title')}</h3>
          <div className="space-y-6 text-white/70 text-lg leading-relaxed">
            <p>{t('cultural.p1')}</p>
            <p>{t('cultural.p2')}</p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gold/20 pt-12">
            <div>
              <p className="text-gold font-bold text-3xl mb-1 italic">{t('cultural.stat1_val')}</p>
              <p className="text-white/50 text-[10px] uppercase tracking-widest font-bold">{t('cultural.stat1_label')}</p>
            </div>
            <div>
              <p className="text-gold font-bold text-3xl mb-1 italic">{t('cultural.stat2_val')}</p>
              <p className="text-white/50 text-[10px] uppercase tracking-widest font-bold">{t('cultural.stat2_label')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalStory;

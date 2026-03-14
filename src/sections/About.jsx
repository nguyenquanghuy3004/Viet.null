import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-transparent relative overflow-hidden" id="about">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img src="/assets/hero.png" alt="Brand Logo" className="w-24 h-24 mx-auto mb-12 rounded-full border-2 border-gold grayscale" />
          <h2 className="text-gold text-sm tracking-[0.4em] uppercase mb-8 font-bold">{t('about.subtitle')}</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-10 leading-relaxed italic">
            {t('about.title')}
          </h3>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('about.desc')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

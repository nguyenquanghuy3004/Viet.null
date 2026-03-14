import React from 'react';
import { motion } from 'framer-motion';
import { dynasties } from '../data/data';
import { useLanguage } from '../context/LanguageContext';

const Collections = ({ onSelectDynasty }) => {
  const { lang, t } = useLanguage();
  const currentDynasties = dynasties[lang] || dynasties.vi;

  return (
    <section className="py-40 px-8 bg-transparent relative overflow-hidden" id="collections">
      <div className="absolute inset-0 radial-spotlight pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold uppercase tracking-[0.6em] text-[10px] mb-6 font-black flex items-center gap-4"
            >
              <span className="w-12 h-[1px] bg-gold/30"></span>
              {t('collections.subtitle')}
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-serif text-white leading-[1.1] italic"
            >
              {t('collections.title1')} <br />
              <span className="text-gold not-italic uppercase font-sans font-black text-5xl md:text-7xl tracking-tighter">
                {t('collections.title2')}
              </span>
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-sm text-lg leading-relaxed italic font-serif border-l border-white/10 pl-8"
          >
            {t('collections.desc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentDynasties.map((dynasty, index) => (
            <motion.div
              key={dynasty.id}
              onClick={() => onSelectDynasty(dynasty.id)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[700px] overflow-hidden cursor-pointer border border-white/5 hover:border-gold/40 transition-all duration-700 bg-heritage-gray/20"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={dynasty.image}
                  alt={dynasty.name}
                  className="w-full h-full object-cover object-top opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-[1.5s] ease-out"
                />
              </div>

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 opacity-70 group-hover:opacity-80 transition-opacity duration-700 z-10"
                style={{
                  background: `linear-gradient(to top, #0a0a0a 0%, #0a0a0a 25%, transparent 100%)`
                }}
              ></div>

              <div className="absolute inset-0 z-5"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-10 z-20">
                <div className="mb-6 overflow-hidden">
                  <motion.span
                    className="text-gold text-[10px] font-black tracking-[0.4em] uppercase block mb-3"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {dynasty.period}
                  </motion.span>
                  <motion.h4
                    className="text-4xl font-serif text-white group-hover:text-gold transition-colors duration-500"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {dynasty.name}
                  </motion.h4>
                </div>

                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-700">
                  <p className="text-white/60 text-sm mb-8 leading-relaxed font-medium italic font-serif">
                    {dynasty.description}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-[1px] bg-gold/30 flex-1 group-hover:bg-gold transition-colors duration-700"></div>
                  <span className="text-[9px] text-gold uppercase tracking-[0.4em] font-black opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0">
                    Discover
                  </span>
                </div>
              </div>


            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;

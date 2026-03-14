import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/data';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Rotate3d, ChevronLeft, ChevronRight } from 'lucide-react';

const Showcase = () => {
  const { lang, t } = useLanguage();
  const currentProducts = products[lang] || products.vi;
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    if (startIndex + itemsPerPage < currentProducts.length) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0); // Loop back
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(currentProducts.length - itemsPerPage); // Loop to end
    }
  };

  return (
    <section className="py-32 px-8 bg-transparent overflow-hidden relative" id="showcase">
      <div className="absolute inset-0 radial-spotlight pointer-events-none opacity-50"></div>
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <h2 className="text-gold text-sm tracking-[0.5em] uppercase mb-4 font-bold">{t('showcase.subtitle')}</h2>
          <h3 className="text-6xl md:text-7xl font-serif text-white italic">BST Thời đại</h3>
        </div>

        <div className="relative px-12 md:px-20">
          {/* Navigation Arrows on Sides */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 md:w-20 md:h-20 rounded-full border border-gold/10 flex items-center justify-center text-gold/40 hover:text-gold hover:border-gold/40 hover:bg-gold/5 transition-all duration-700 z-50 group"
          >
            <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 md:w-20 md:h-20 rounded-full border border-gold/10 flex items-center justify-center text-gold/40 hover:text-gold hover:border-gold/40 hover:bg-gold/5 transition-all duration-700 z-50 group"
          >
            <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <AnimatePresence mode="popLayout" initial={false}>
              {currentProducts.slice(startIndex, startIndex + itemsPerPage).map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="group perspective-1000"
                >
                  <div className="relative aspect-[3/4] mb-8 transition-all duration-1000 preserve-3d group-hover:rotate-y-12">
                    <div className="absolute inset-0 overflow-hidden bg-heritage-gray border border-white/5 group-hover:border-gold/40 shadow-2xl rounded-sm">
                      <div
                        className="absolute inset-0 bg-cover bg-top transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        style={{
                          backgroundImage: `url(${product.id % 2 === 0 ? '/assets/dynasties_collection.png' : '/assets/hero.png'})`,
                        }}
                      ></div>
                      <div className="absolute inset-0 bg-heritage-black/40 group-hover:bg-heritage-black/10 transition-all duration-500"></div>

                      {/* 3D Label */}
                      <div className="absolute top-4 right-4 text-gold/30 group-hover:text-gold transition-colors">
                        <Rotate3d size={16} />
                      </div>

                      <div className="absolute bottom-6 left-6 right-6 translate-y-full group-hover:translate-y-0 transition-all duration-700 bg-heritage-black/95 p-8 backdrop-blur-md border border-gold/30 z-20">
                        <p className="text-gold text-[10px] uppercase tracking-[0.4em] mb-3 font-bold">{t('showcase.story')}</p>
                        <p className="text-white/90 text-sm leading-relaxed italic">"{product.story}"</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-start border-b border-white/10 pb-6 relative z-10">
                    <div>
                      <h4 className="text-2xl font-serif text-white mb-2 group-hover:text-gold transition-colors">{product.name}</h4>
                      <p className="text-gold/50 text-[10px] uppercase tracking-[0.3em] font-bold">{product.collection}</p>
                    </div>
                    <span className="text-gold font-serif text-lg">{product.price}</span>
                  </div>

                  <button className="mt-8 flex items-center gap-3 text-white/50 text-[10px] uppercase tracking-[0.4em] hover:text-gold hover:gap-6 transition-all group font-black">
                    {t('showcase.purchase')} <ArrowRight size={14} className="text-gold group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;

import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/data';
import { ArrowRight } from 'lucide-react';

const Showcase = () => {
  return (
    <section className="py-32 px-8 bg-heritage-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <h2 className="text-gold text-sm tracking-[0.5em] uppercase mb-4 font-bold">Craftsmanship</h2>
          <h3 className="text-6xl font-serif text-white italic">The Collection</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-8 bg-heritage-gray border border-white/10 group-hover:border-gold/40 transition-all duration-700 shadow-2xl">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${index === 0 ? '/assets/hero.png' : '/assets/dynasties_collection.png'})`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-heritage-black/40 group-hover:bg-heritage-black/10 transition-all duration-500"></div>
                
                <div className="absolute bottom-6 left-6 right-6 translate-y-full group-hover:translate-y-0 transition-all duration-700 bg-heritage-black/95 p-8 backdrop-blur-md border border-gold/30">
                  <p className="text-gold text-[10px] uppercase tracking-[0.4em] mb-3 font-bold">The Story</p>
                  <p className="text-white/90 text-sm leading-relaxed italic">"{product.story}"</p>
                </div>
              </div>

              <div className="flex justify-between items-start border-b border-white/10 pb-6">
                <div>
                  <h4 className="text-2xl font-serif text-white mb-2">{product.name}</h4>
                  <p className="text-gold text-xs uppercase tracking-[0.3em] font-bold">{product.collection}</p>
                </div>
                <span className="text-gold font-serif text-lg">{product.price}</span>
              </div>

              <button className="mt-8 flex items-center gap-3 text-white text-xs uppercase tracking-[0.4em] hover:text-gold hover:gap-6 transition-all group font-bold">
                Purchase Detail <ArrowRight size={16} className="text-gold group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;

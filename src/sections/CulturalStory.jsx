import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CulturalStory = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section className="py-32 bg-heritage-gray relative overflow-hidden">
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
          <h2 className="text-gold text-sm tracking-[0.4em] uppercase mb-6 italic">Deep Roots</h2>
          <h3 className="text-6xl font-serif text-white mb-8">Symbols of <br /> Sovereignty</h3>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              The Dong Son drum is more than an ancient musical instrument; it is a repository of the Lac Viet spirit. Its central sunburst pattern represents the source of life and order, surrounded by rows of stylized birds—humanity’s connection to the heavens.
            </p>
            <p>
              By weaving these symbols into modern threads, we aren't just creating clothing. We are continuing a conversation that began four millennia ago. Each shirt is a canvas; each pattern is a story waiting to be told.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gold/20 pt-12">
            <div>
              <p className="text-gold font-bold text-lg mb-1 italic">4000+</p>
              <p className="text-muted-foreground text-xs uppercase tracking-widest">Years of History</p>
            </div>
            <div>
              <p className="text-gold font-bold text-lg mb-1 italic">Handcrafted</p>
              <p className="text-muted-foreground text-xs uppercase tracking-widest">Detail Oriented</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalStory;

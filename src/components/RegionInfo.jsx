import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const RegionInfo = ({ region }) => {
  if (!region) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={region.id}
        initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
        animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-10"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-gold">
            <Sparkles size={16} />
            <span className="text-xs uppercase tracking-[0.5em] font-bold">{region.culture}</span>
          </div>
          <h2 className="text-7xl md:text-8xl font-serif text-white italic leading-none">
            {region.name}
          </h2>
        </div>

        <p className="text-white/60 text-lg leading-relaxed max-w-xl italic font-serif">
          "{region.details}"
        </p>

        <div className="pt-12 border-t border-white/5 space-y-8">
          <div>
            <h4 className="text-gold text-[10px] uppercase tracking-[0.4em] font-black mb-6">Di sản hoa văn tiêu biểu</h4>
            <div className="flex flex-wrap gap-4">
              {region.patterns.map((p, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05, borderColor: '#D4AF37' }}
                  className="px-8 py-4 border border-white/10 text-white/50 text-[10px] uppercase font-bold tracking-[0.2em] bg-heritage-black/40 backdrop-blur-sm hover:text-gold transition-all"
                >
                  {p}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RegionInfo;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Terminal } from 'lucide-react';

const ScrambleText = ({ text, duration = 1.5 }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => 
        text.split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );
      
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
    
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
}

const RegionInfo = ({ region }) => {
  if (!region) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={region.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        className="space-y-10 relative"
      >
        {/* HUD Decoration */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-1 bg-gold rounded-full animate-ping"></div>
          <span className="text-[8px] text-gold/40 font-mono tracking-[0.5em] uppercase">Status: Analysis_Complete // Source: Heritage_Map_v4.0</span>
        </div>

        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-4 text-gold"
          >
            <Terminal size={12} className="opacity-50" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold">
              <ScrambleText text={region.culture} />
            </span>
          </motion.div>
          <h2 className="text-7xl md:text-8xl font-serif text-white italic leading-none flex flex-wrap">
            <ScrambleText text={region.name} />
          </h2>
        </div>

        <p className="text-white/60 text-lg leading-relaxed max-w-xl italic font-serif border-l-2 border-gold/10 pl-6 py-2">
          "{region.details}"
        </p>

        <div className="pt-12 border-t border-white/5 space-y-8">
          <div>
            <h4 className="flex items-center gap-2 text-gold text-[10px] uppercase tracking-[0.4em] font-black mb-6">
              <span className="w-2 h-[1px] bg-gold"></span>
              Di sản hoa văn tiêu biểu
            </h4>
            <div className="flex flex-wrap gap-4">
              {region.patterns.map((p, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ scale: 1.05, borderColor: '#D4AF37', background: 'rgba(212, 175, 55, 0.1)' }}
                  className="px-8 py-4 border border-white/10 text-white/50 text-[10px] uppercase font-bold tracking-[0.2em] bg-heritage-black/40 backdrop-blur-sm hover:text-gold transition-all flex items-center gap-3"
                >
                  <span className="text-gold/20 font-mono">0{i+1}</span>
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

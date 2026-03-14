import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { timeline } from '../data/data';
import { useLanguage } from '../context/LanguageContext';
import { X, ExternalLink, Sparkles } from 'lucide-react';

const Timeline = () => {
  const { t } = useLanguage();
  const currentTimeline = timeline.vi;
  const [selectedEvent, setSelectedEvent] = useState(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-64 px-8 bg-[#020202] relative overflow-hidden" id="timeline">
      {/* Cinematic Artistic Overlays */}
      <div className="absolute inset-0 gold-dust opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202] z-10 pointer-events-none" />
      
      {/* Large Floating Artistic Numbers in Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.01] pointer-events-none select-none overflow-hidden">
        <motion.h1 
          style={{ x: useTransform(scrollYProgress, [0, 1], [0, -300]) }}
          className="text-[50vw] font-serif italic text-white whitespace-nowrap"
        >
          DI SẢN
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        <header className="flex flex-col items-center mb-80 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-10 text-gold/40 text-[10px] tracking-[0.8em] font-black uppercase flex items-center gap-4"
          >
            <div className="w-8 h-px bg-gold/20" />
            Biên Niên Sử Gấm Vóc
            <div className="w-8 h-px bg-gold/20" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-serif text-white italic mb-10 leading-none tracking-tight"
          >
            {t('timeline.title')}
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 160 }}
            className="h-px bg-gradient-to-r from-transparent via-gold to-transparent"
          />
        </header>

        <div className="relative">
          {/* Artistic Central Narrative Line - Thinner, more elegant */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/5" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gold origin-top z-0 shadow-[0_0_40px_rgba(212,175,55,0.3)]"
          />

          {currentTimeline.map((item, index) => (
            <div key={index} className={`flex items-start justify-between mb-96 relative group ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              
              {/* Artistic Narrative Card */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className={`w-[45%] relative group cursor-pointer ${index % 2 === 0 ? 'text-left pl-12' : 'text-right pr-12'}`}
                onClick={() => setSelectedEvent(item)}
              >
                {/* Visual Anchor: Large Artistic Year */}
                <div className="mb-6 relative">
                   <motion.div
                     whileHover={{ scale: 1.02 }}
                     className="text-gold font-serif text-[7rem] md:text-[9rem] italic leading-none inline-block relative"
                   >
                     {item.year}
                     <motion.div 
                       initial={{ width: 0 }}
                       whileInView={{ width: '100%' }}
                       className="absolute -bottom-2 left-0 h-px bg-gold/30" 
                     />
                   </motion.div>
                   
                   {/* Background Decorative Large Number */}
                   <div className={`absolute -z-10 top-0 opacity-[0.02] text-[20rem] font-serif italic select-none pointer-events-none transition-all duration-1000 group-hover:opacity-[0.05] ${index % 2 === 0 ? '-right-20' : '-left-20'}`}>
                     {index + 1}
                   </div>
                </div>

                <div className="relative py-6">
                  <h4 className="text-4xl font-serif text-white mb-8 uppercase tracking-[0.2em] leading-tight font-medium group-hover:text-gold transition-colors duration-1000">
                    {item.event}
                  </h4>
                  
                  <div className={`relative mb-12 border-gold/10 p-8 bg-white/[0.01] hover:bg-gold/[0.02] transition-colors duration-1000 overflow-hidden`}>
                    {/* Decorative Corner */}
                    <div className={`absolute top-0 ${index % 2 === 0 ? 'left-0' : 'right-0'} w-8 h-8 border-t border-${index % 2 === 0 ? 'l' : 'r'} border-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
                    
                    <p className="text-white/60 text-2xl font-light italic leading-relaxed">
                      "{item.description}"
                    </p>
                  </div>

                  <div className={`flex items-center gap-6 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className="h-px bg-gold/20 w-16 group-hover:w-32 transition-all duration-1000" />
                    <span className="text-[9px] text-gold/40 tracking-[0.5em] font-black uppercase group-hover:text-gold transition-colors">Chiêm Ngưỡng</span>
                  </div>
                </div>
              </motion.div>

              {/* Minimalist Artistic Node */}
              <div className="absolute left-1/2 -translate-x-1/2 top-20 z-20 flex flex-col items-center">
                 <motion.div 
                   whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                   transition={{ duration: 1.2 }}
                   className="w-12 h-12 border border-gold/20 rounded-full flex items-center justify-center relative bg-[#020202] backdrop-blur-md"
                 >
                    <div className="w-1.5 h-1.5 bg-gold rounded-full shadow-[0_0_20px_rgba(212,175,55,1)]" />
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-2 border border-gold/10 rounded-full border-dashed"
                    />
                 </motion.div>
              </div>

              {/* Artistic Image Ghost - More like a painting */}
              <div className="w-[45%] flex items-center justify-center h-[500px] overflow-hidden">
                 <motion.div
                    whileInView={{ opacity: [0, 0.15, 0.1], y: [60, 0], scale: [1.2, 1] }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                    className="w-full h-full grayscale opacity-20 group-hover:opacity-40 transition-opacity duration-1500"
                 >
                    <img 
                      src={index % 2 === 0 ? "/assets/dynasties_collection.png" : "/assets/hero.png"} 
                      className="w-full h-full object-cover rotate-6 scale-125 hover:rotate-0 hover:scale-100 transition-all duration-[3s]" 
                      alt="" 
                    />
                 </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Poetic Detail View */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 lg:p-16 bg-black/98 backdrop-blur-2xl"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 40 }}
              transition={{ type: "spring", damping: 30 }}
              className="max-w-7xl w-full h-[90vh] bg-[#050505] p-[1px] rounded-3xl overflow-hidden relative"
              onClick={e => e.stopPropagation()}
            >
              {/* Outer Glow Border */}
              <div className="absolute inset-0 bg-gradient-to-b from-gold/20 via-transparent to-gold/20 opacity-30" />
              
              <div className="relative w-full h-full bg-[#050505] rounded-[23px] overflow-hidden flex flex-col">
                <div className="absolute right-12 top-12 z-50">
                  <button 
                    onClick={() => setSelectedEvent(null)}
                    className="w-14 h-14 rounded-full border border-white/10 hover:border-gold/40 flex items-center justify-center text-white/30 hover:text-gold transition-all group"
                  >
                    <X size={20} className="group-hover:scale-110 transition-transform" />
                  </button>
                </div>

                <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
                  {/* Visual Portrait */}
                  <div className="hidden lg:block lg:col-span-5 relative bg-black overflow-hidden">
                     <motion.img 
                        initial={{ scale: 1.3, filter: 'blur(10px)' }}
                        animate={{ scale: 1.1, filter: 'blur(0px)' }}
                        transition={{ duration: 2 }}
                        src="/assets/dynasties_collection.png" 
                        className="w-full h-full object-cover grayscale opacity-40 mix-blend-lighten" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#050505]/50 to-[#050505]" />
                     <div className="absolute bottom-20 left-20">
                        <Sparkles className="text-gold/20 mb-6" size={40} />
                        <h2 className="text-gold/10 font-serif text-[12rem] italic leading-none select-none">HỒN</h2>
                     </div>
                  </div>

                  {/* Narrative Flow */}
                  <div className="col-span-1 lg:col-span-7 p-12 md:p-24 flex flex-col justify-center relative overflow-y-auto custom-scrollbar">
                     <div className="max-w-3xl">
                        <motion.div
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.4 }}
                           className="flex items-center gap-8 mb-16"
                        >
                           <span className="text-gold font-serif text-8xl md:text-[11rem] italic leading-none">
                              {selectedEvent.year}
                           </span>
                           <div className="grow h-px bg-gradient-to-r from-gold/30 to-transparent" />
                        </motion.div>
                        
                        <motion.h3 
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.5 }}
                           className="text-5xl md:text-7xl font-serif text-white mb-12 tracking-tight leading-tight italic"
                        >
                           {selectedEvent.event}
                        </motion.h3>
                        
                        <motion.div 
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.6 }}
                           className="relative"
                        >
                           <p className="text-white/60 text-2xl md:text-3xl font-light italic leading-relaxed border-l border-gold/40 pl-12 mb-20">
                              {selectedEvent.description}
                           </p>
                        </motion.div>

                        <motion.div
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ delay: 0.8 }}
                           className="flex items-center gap-12"
                        >
                           <button className="group relative px-14 py-6 overflow-hidden transition-all">
                              <div className="absolute inset-0 border border-gold/30 group-hover:border-gold transition-colors" />
                              <div className="absolute inset-0 bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                              <span className="relative z-10 text-gold group-hover:text-black text-[10px] tracking-[0.6em] font-black uppercase flex items-center gap-4">
                                 KHÁM PHÁ CHI TIẾT <ExternalLink size={14} />
                              </span>
                           </button>
                        </motion.div>
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Timeline;

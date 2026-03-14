import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { timeline } from '../data/data';
import { useLanguage } from '../context/LanguageContext';
import { X, ExternalLink } from 'lucide-react';

const Timeline = () => {
  const { lang, t } = useLanguage();
  const currentTimeline = timeline[lang] || timeline.vi;
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="py-32 px-8 bg-heritage-gray relative overflow-hidden" id="timeline">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-gold text-sm tracking-[0.4em] uppercase mb-4 font-bold">Hành Trình Lịch Sử</h2>
        <h3 className="text-center text-5xl font-serif text-white mb-24 italic">Dòng chảy thời gian</h3>

        <div className="relative">
          {/* Central Line */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gold origin-top z-0"
          />

          {currentTimeline.map((item, index) => (
            <div key={index} className={`flex items-center justify-between mb-32 relative ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              {/* Content Side */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`w-[42%] cursor-pointer group ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
                onClick={() => setSelectedEvent(item)}
              >
                <div className="p-6 border border-white/5 hover:border-gold/30 bg-heritage-black/30 transition-all duration-500 rounded-sm">
                  <span className="text-gold font-bold text-3xl mb-2 block italic">{item.year}</span>
                  <h4 className="text-xl font-serif text-white mb-4 uppercase tracking-widest font-bold group-hover:text-gold transition-colors">{item.event}</h4>
                  <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="text-[8px] text-gold uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 transition-opacity">Nhấn để xem chi tiết</div>
                </div>
              </motion.div>

              {/* Dot in Center */}
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-gold bg-heritage-black z-10 shadow-[0_0_20px_rgba(212,175,55,0.8)]"></div>

              {/* Empty Side for Spacing */}
              <div className="w-[42%]"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Detail View */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-heritage-black/95 backdrop-blur-xl"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-4xl w-full bg-heritage-gray border border-gold/30 p-12 relative max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <button 
                 onClick={() => setSelectedEvent(null)}
                 className="absolute top-8 right-8 text-white/40 hover:text-gold transition-colors"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <span className="text-gold font-bold text-5xl mb-6 block italic">{selectedEvent.year}</span>
                  <h3 className="text-4xl font-serif text-white mb-8 border-b border-gold/20 pb-6 uppercase tracking-widest leading-tight">
                    {selectedEvent.event}
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed mb-8 italic">
                    {selectedEvent.description}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Đây là một trong những mốc son chói lọi, không chỉ khẳng định chủ quyền mà còn định hình bản sắc văn hóa Việt qua hàng thiên niên kỷ. Những giá trị từ mốc lịch sử này chính là linh hồn cho các bst thời trang Heritage.
                  </p>
                </div>

                <div className="space-y-8">
                   <div className="p-8 bg-heritage-black border border-white/5">
                      <h4 className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Sản phẩm liên quan</h4>
                      <div className="flex gap-6 items-center border-t border-white/5 pt-6">
                        <div className="w-24 h-24 bg-heritage-gray border border-gold/10">
                           <img src="/assets/hero.png" alt="Product" className="w-full h-full object-cover grayscale" />
                        </div>
                        <div>
                           <p className="text-white text-sm font-serif">Sản phẩm lấy cảm hứng {selectedEvent.event}</p>
                           <p className="text-gold text-xs font-bold mt-2">XEM CHI TIẾT <ExternalLink size={10} className="inline ml-1" /></p>
                        </div>
                      </div>
                   </div>
                   
                   <div className="aspect-video border border-gold/20 overflow-hidden relative group">
                      <img src="/assets/dynasties_collection.png" alt="Historical" className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <p className="text-gold text-[10px] uppercase font-bold tracking-[0.3em]">Tư liệu lịch sử</p>
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

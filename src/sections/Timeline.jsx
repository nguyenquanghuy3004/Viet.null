import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { timeline } from '../data/data';

const Timeline = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="py-32 px-8 bg-heritage-gray relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-gold text-sm tracking-[0.4em] uppercase mb-4 font-bold">The Journey</h2>
        <h3 className="text-center text-5xl font-serif text-white mb-24 italic">Thread of Time</h3>

        <div className="relative">
          {/* Central Line */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gold origin-top z-0"
          />

          {timeline.map((item, index) => (
            <div key={index} className={`flex items-center justify-between mb-32 relative ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              {/* Content Side */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`w-[42%] ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
              >
                <span className="text-gold font-bold text-3xl mb-2 block italic">{item.year}</span>
                <h4 className="text-xl font-serif text-white mb-4 uppercase tracking-widest font-bold">{item.event}</h4>
                <p className="text-white/80 text-lg leading-relaxed">
                  {item.description}
                </p>
              </motion.div>

              {/* Dot in Center */}
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-gold bg-heritage-black z-10 shadow-[0_0_20px_rgba(212,175,55,0.8)]"></div>

              {/* Empty Side for Spacing */}
              <div className="w-[42%]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const options = {
  types: [
    { id: 'top', name: 'Áo Gấm', icon: '👘' },
    { id: 'jacket', name: 'Áo Khoác', icon: '🧥' },
    { id: 'shirt', name: 'Sơ Mi', icon: '👔' }
  ],
  patterns: [
    { id: 'dongson', name: 'Họa tiết Đông Sơn', color: '#D4AF37' },
    { id: 'dragon', name: 'Rồng Nguyễn', color: '#B8860B' },
    { id: 'lotus', name: 'Liên Hoa Lý Trần', color: '#FFA500' }
  ],
  colors: [
    { id: 'black', hex: '#0a0a0a', name: 'Đen Tuyển' },
    { id: 'red', hex: '#8B0000', name: 'Đỏ Thẫm' },
    { id: 'gold', hex: '#634b12', name: 'Nâu Vàng' }
  ]
};

const OutfitBuilder = () => {
  const [selections, setSelections] = useState({
    type: options.types[0],
    pattern: options.patterns[0],
    color: options.colors[0]
  });

  return (
    <section className="py-32 px-8 bg-heritage-black relative border-y border-gold/10" id="mix-outfit">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          {/* Preview Area */}
          <div className="flex-1 w-full max-w-md relative overflow-hidden group">
            <h3 className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-10 text-center md:text-left">Live Preview — Thiết kế của bạn</h3>
            <motion.div 
               layout
               className="aspect-[3/4] rounded-sm p-4 relative flex items-center justify-center border-4 border-gold/20 shadow-2xl"
               style={{ backgroundColor: selections.color.hex }}
            >
              <div className="absolute inset-0 bg-noise opacity-20"></div>
              
              {/* Overlay Pattern Effect */}
              <div 
                className="absolute inset-4 border border-gold/50 flex items-center justify-center"
                style={{
                  backgroundImage: `radial-gradient(circle at center, ${selections.pattern.color}22 0%, transparent 70%)`,
                  backgroundSize: '40px 40px'
                }}
              >
                 <motion.div 
                    key={selections.pattern.id}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-8xl opacity-30 select-none grayscale contrast-200"
                 >
                    {selections.type.icon}
                 </motion.div>
              </div>

              <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-gold/80 text-[10px] uppercase tracking-[0.5em] font-bold">{selections.pattern.name}</p>
                <p className="text-white text-lg font-serif italic mt-2">{selections.type.name} Custom</p>
              </div>
            </motion.div>
          </div>

          {/* Controls Area */}
          <div className="flex-1 space-y-12">
            <div>
              <h2 className="text-gold text-sm tracking-[0.4em] uppercase mb-12 font-bold">Xây dựng trang phục – Mix & Match</h2>
              
              {/* Type Selection */}
              <div className="mb-10">
                <p className="text-white/60 text-[10px] uppercase font-bold mb-6">1. Chọn loại sản phẩm</p>
                <div className="flex gap-4">
                  {options.types.map(t => (
                    <button
                      key={t.id}
                      onClick={() => setSelections({...selections, type: t})}
                      className={`px-6 py-4 border transition-all ${selections.type.id === t.id ? 'border-gold text-gold bg-gold/5' : 'border-white/10 text-white/40 hover:border-white/30'}`}
                    >
                      {t.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pattern Selection */}
              <div className="mb-10">
                <p className="text-white/60 text-[10px] uppercase font-bold mb-6">2. Chọn họa tiết di sản</p>
                <div className="space-y-3">
                  {options.patterns.map(p => (
                    <button
                      key={p.id}
                      onClick={() => setSelections({...selections, pattern: p})}
                      className={`w-full text-left px-6 py-4 border transition-all flex justify-between items-center ${selections.pattern.id === p.id ? 'border-gold text-gold bg-gold/5' : 'border-white/10 text-white/40 hover:border-white/30'}`}
                    >
                      <span>{p.name}</span>
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: p.color }}></div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <p className="text-white/60 text-[10px] uppercase font-bold mb-6">3. Chọn màu nền</p>
                <div className="flex gap-6">
                  {options.colors.map(c => (
                    <button
                      key={c.id}
                      onClick={() => setSelections({...selections, color: c})}
                      className={`group relative w-12 h-12 rounded-full border-2 transition-all ${selections.color.id === c.id ? 'border-gold scale-125' : 'border-transparent'}`}
                      style={{ backgroundColor: c.hex }}
                    >
                      <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[8px] uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-gold">
                        {c.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button className="w-full py-5 bg-gold text-heritage-black font-bold uppercase tracking-[0.3em] text-xs hover:bg-white transition-all shadow-xl">
              Thêm vào giỏ hàng di sản
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutfitBuilder;

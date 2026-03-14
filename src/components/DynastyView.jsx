import React from 'react';
import { motion } from 'framer-motion';
import { dynastiesDetail } from '../data/dataDetail';
import { ChevronLeft, ArrowRight, BookOpen } from 'lucide-react';

const DynastyView = ({ dynastyKey, onBack }) => {
  const data = dynastiesDetail[dynastyKey];

  if (!data) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-heritage-black pt-32 pb-20 px-8"
    >
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gold hover:text-white transition-colors mb-20 uppercase tracking-[0.3em] text-xs font-bold"
        >
          <ChevronLeft size={20} /> Quay lại trang chủ
        </button>

        {/* Hero Section of Dynasty */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm tracking-[0.4em] uppercase font-bold mb-4 block">{data.period}</span>
            <h1 className="text-7xl md:text-9xl font-serif text-white mb-6 leading-tight">{data.name}</h1>
            <h2 className="text-3xl font-serif text-gold italic mb-10">{data.title}</h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl border-l-2 border-gold/30 pl-8 italic">
              {data.history}
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="aspect-[4/5] relative overflow-hidden border border-gold/20"
          >
             <img src="/assets/dynasties_collection.png" alt={data.name} className="w-full h-full object-cover grayscale opacity-60" />
             <div className="absolute inset-0 bg-gradient-to-t from-heritage-black to-transparent"></div>
             <div className="absolute bottom-12 left-12 right-12">
                <p className="text-gold text-[10px] uppercase tracking-[0.4em] mb-4">Biểu tượng chính</p>
                <div className="flex flex-wrap gap-4">
                  {data.symbols.map((s, i) => (
                    <span key={i} className="px-4 py-2 bg-gold/10 border border-gold/30 text-white/80 text-[10px] uppercase font-bold tracking-widest">
                       {s}
                    </span>
                  ))}
                </div>
             </div>
          </motion.div>
        </div>

        {/* Patterns Section */}
        <div className="mb-32">
          <h3 className="text-3xl font-serif text-white mb-16 italic border-b border-gold/10 pb-6">Giải mã họa tiết {data.name}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {data.patterns.map((p, i) => (
              <div key={i} className="p-10 bg-heritage-gray border border-white/5 hover:border-gold/30 transition-all group">
                <h4 className="text-gold font-serif text-2xl mb-4 group-hover:translate-x-2 transition-transform">{p.name}</h4>
                <p className="text-white/60 leading-relaxed italic">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fashion Showcase Section */}
        <div>
          <h3 className="text-3xl font-serif text-white mb-16 italic border-b border-gold/10 pb-6">Bộ sưu tập lấy cảm hứng</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.products.map(product => (
              <div key={product.id} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden bg-heritage-gray mb-6 relative border border-white/10 group-hover:border-gold/50 transition-all">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-heritage-black/20 group-hover:opacity-0 transition-opacity"></div>
                </div>
                <h4 className="text-xl font-serif text-white mb-2">{product.name}</h4>
                <p className="text-gold font-bold">{product.price}</p>
                <button className="mt-4 flex items-center gap-2 text-white/50 hover:text-gold transition-colors text-[10px] uppercase font-bold tracking-[0.3em]">
                   Xem chi tiết <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DynastyView;

import React from 'react';
import { Menu, ShoppingBag, Search, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Navbar = ({ onTryOnClick, onLogoClick }) => {
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-heritage-black/90 backdrop-blur-lg border-b border-gold/10"
    >
      <div className="flex items-center gap-6">
        <Menu className="text-gold cursor-pointer hover:scale-110 transition-transform" size={24} />
        <div className="hidden md:flex gap-6 uppercase tracking-[0.2em] text-[10px] text-white/80 font-bold items-center">
           <button onClick={onLogoClick} className="hover:text-gold transition-colors">{t('nav.collections')}</button>
           <button onClick={onTryOnClick} className="px-4 py-2 border border-gold/20 text-gold hover:bg-gold hover:text-heritage-black transition-all flex items-center gap-2">
              <ShoppingBag size={14} /> Thử trang phục
           </button>
           <a href="#cultural-map" onClick={onLogoClick} className="hover:text-gold transition-colors">Địa đồ</a>
           <a href="#quiz" onClick={onLogoClick} className="hover:text-gold transition-colors">Trắc nghiệm</a>
           <a href="#blog-section" onClick={onLogoClick} className="hover:text-gold transition-colors">Bản tin</a>
        </div>
      </div>

      <div className="text-center">
        <button 
          onClick={onLogoClick}
          className="text-3xl font-serif text-gold tracking-[0.2em] uppercase cursor-pointer hover:text-white transition-colors"
        >
          {t('nav.heritage')}
        </button>
      </div>

      <div className="flex items-center gap-6">
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 text-white/50 hover:text-gold transition-colors text-[10px] uppercase font-bold tracking-[0.2em]"
        >
          <Globe size={16} />
          <span>{lang === 'en' ? 'EN' : 'VI'}</span>
        </button>

        <Search className="text-gold cursor-pointer hover:scale-110 transition-transform hidden sm:block" size={20} />
        <div className="relative cursor-pointer hover:scale-110 transition-transform">
          <ShoppingBag className="text-gold" size={20} />
          <span className="absolute -top-2 -right-2 bg-gold text-heritage-black text-[10px] font-bold px-1.5 rounded-full">0</span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

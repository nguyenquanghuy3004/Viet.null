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
      className="fixed top-0 left-0 w-full z-50 px-8 py-6 grid grid-cols-3 items-center bg-heritage-black/90 backdrop-blur-lg border-b border-gold/10"
    >
      {/* Left Section */}
      <div className="flex items-center gap-6">
        <Menu className="text-gold cursor-pointer hover:scale-110 transition-transform" size={24} />
        <div className="hidden lg:flex gap-6 uppercase tracking-[0.2em] text-[10px] text-white/80 font-bold items-center">
           <button onClick={onLogoClick} className="hover:text-gold transition-colors whitespace-nowrap">{t('nav.collections')}</button>
           <button onClick={onTryOnClick} className="px-4 py-2 border border-gold/20 text-gold hover:bg-gold hover:text-heritage-black transition-all flex items-center gap-2 whitespace-nowrap">
              <ShoppingBag size={14} /> {t('nav.tryOn')}
           </button>
        </div>
      </div>

      {/* Center Section: Logo */}
      <div className="flex justify-center">
        <button 
          onClick={onLogoClick}
          className="text-3xl font-serif text-gold tracking-[0.2em] uppercase cursor-pointer hover:text-white transition-colors"
        >
          {t('nav.heritage')}
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-end gap-6">
        <div className="hidden xl:flex gap-6 uppercase tracking-[0.2em] text-[10px] text-white/80 font-bold items-center">
            <a href="#cultural-map" onClick={onLogoClick} className="hover:text-gold transition-colors whitespace-nowrap">{t('nav.map')}</a>
            <a href="#quiz" onClick={onLogoClick} className="hover:text-gold transition-colors whitespace-nowrap">{t('nav.quiz')}</a>
            <a href="#blog-section" onClick={onLogoClick} className="hover:text-gold transition-colors whitespace-nowrap">{t('nav.blog')}</a>
        </div>

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

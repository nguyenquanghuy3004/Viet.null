import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-heritage-gray pt-20 pb-10 px-8 border-t border-gold/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-serif text-gold tracking-widest uppercase mb-6">{t('nav.heritage')}</h2>
          <p className="text-white/60 max-w-sm mb-8 leading-relaxed">
            {t('footer.desc')}
          </p>
          <div className="flex gap-6">
            <Facebook className="text-gold cursor-pointer hover:text-white transition-colors" size={20} />
            <Instagram className="text-gold cursor-pointer hover:text-white transition-colors" size={20} />
            <Twitter className="text-gold cursor-pointer hover:text-white transition-colors" size={20} />
          </div>
        </div>

        <div>
          <h4 className="text-white font-serif mb-6 text-lg tracking-widest uppercase">{t('footer.explore')}</h4>
          <ul className="space-y-4 text-white/50 text-[10px] uppercase tracking-widest font-bold">
            <li className="hover:text-gold cursor-pointer transition-colors">Hung Kings</li>
            <li className="hover:text-gold cursor-pointer transition-colors">Ly–Tran</li>
            <li className="hover:text-gold cursor-pointer transition-colors">Le Dynasty</li>
            <li className="hover:text-gold cursor-pointer transition-colors">Nguyen Dynasty</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif mb-6 text-lg tracking-widest uppercase">{t('footer.service')}</h4>
          <ul className="space-y-4 text-white/50 text-[10px] uppercase tracking-widest font-bold">
            <li className="hover:text-gold cursor-pointer transition-colors">Size Guide</li>
            <li className="hover:text-gold cursor-pointer transition-colors">Shipping</li>
            <li className="hover:text-gold cursor-pointer transition-colors">Returns</li>
            <li className="hover:text-gold cursor-pointer transition-colors">Contact</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/30 text-[10px] uppercase tracking-[0.3em]">
          &copy; {new Date().getFullYear()} {t('footer.copyright')}
        </p>
        <div className="flex gap-8 text-white/30 text-[10px] uppercase tracking-[0.3em]">
          <span className="cursor-pointer hover:text-gold">{t('footer.privacy')}</span>
          <span className="cursor-pointer hover:text-gold">{t('footer.terms')}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

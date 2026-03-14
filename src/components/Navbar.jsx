import React from 'react';
import { Menu, ShoppingBag, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-heritage-black/80 backdrop-blur-md border-b border-gold/10"
    >
      <div className="flex items-center gap-4">
        <Menu className="text-gold cursor-pointer hover:scale-110 transition-transform" size={24} />
        <span className="text-muted-foreground text-sm uppercase tracking-widest hidden md:block">Collections</span>
      </div>

      <div className="text-center">
        <h1 className="text-3xl font-serif text-gold tracking-[0.2em] uppercase cursor-pointer">Heritage</h1>
      </div>

      <div className="flex items-center gap-6">
        <Search className="text-gold cursor-pointer hover:scale-110 transition-transform" size={20} />
        <div className="relative cursor-pointer hover:scale-110 transition-transform">
          <ShoppingBag className="text-gold" size={20} />
          <span className="absolute -top-2 -right-2 bg-gold text-heritage-black text-[10px] font-bold px-1.5 rounded-full">0</span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

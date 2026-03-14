import React, { useState } from 'react';
import VietnamMap from '../components/VietnamMap';
import RegionInfo from '../components/RegionInfo';
import { useLanguage } from '../context/LanguageContext';

const CulturalMap = () => {
  const { t } = useLanguage();
  
  const regionIds = ["north", "central", "south"];
  const [selectedId, setSelectedId] = useState(regionIds[0]);

  const selectedRegion = t(`map.${selectedId}`);

  return (
    <section className="py-40 px-8 bg-transparent relative overflow-hidden" id="cultural-map">
      <div className="absolute inset-0 radial-spotlight pointer-events-none"></div>
      
      {/* 1. Topographic/Satellite HUD Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(212,175,55,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 transition-all">
        <div className="flex flex-col lg:flex-row gap-24 items-center min-h-[850px]">
          
          {/* Left: THE NEON GOLDEN MAP */}
          <div className="w-full lg:w-[500px] relative group">
            {/* Cinematic Scan Line Animation */}
            <div className="absolute inset-x-0 h-[1px] bg-gold/20 animate-scan opacity-20 pointer-events-none z-0"></div>
            
            <div className="mb-14 text-left pl-8 border-l border-gold/10">
              <h2 className="text-gold text-[10px] tracking-[0.8em] uppercase mb-4 font-black">Cartography v4.1</h2>
              <p className="text-white/20 text-[9px] uppercase tracking-[0.4em] font-mono leading-relaxed">
                Scanning_Region: {selectedRegion.name}<br/>
                Lat_Long: 14.0583° N, 108.2772° E<br/>
                Signal: STABLE
              </p>
            </div>
            
            <VietnamMap 
              selectedRegion={selectedId} 
              onRegionClick={setSelectedId} 
            />
          </div>

          {/* Right: CULTURAL DEPTH (REGION INFO) */}
          <div className="flex-1 w-full text-left">
            <RegionInfo region={selectedRegion} />
          </div>

        </div>
      </div>

      {/* Interface Decor & Technical Specs */}
      <div className="absolute bottom-12 left-12 opacity-20 pointer-events-none hidden md:block">
        <p className="text-[10px] text-white/40 uppercase tracking-[0.4em] font-mono">
          Interactive_Cartography_Heritage_Core<br/>
          Layer: Golden_Neon_Borders<br/>
          Processing: AI_Region_Detection
        </p>
      </div>

      <div className="absolute top-12 right-12 opacity-10 pointer-events-none hidden md:block">
        <div className="w-48 h-48 border border-gold/20 rounded-full flex items-center justify-center animate-spin-slow">
            <div className="w-40 h-40 border border-gold/10 rounded-full border-dashed"></div>
        </div>
      </div>
    </section>
  );
};

export default CulturalMap;

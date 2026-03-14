import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Download, Share2, Sparkles, Maximize2, RotateCcw, Check, Plus, Minus, Wand2, ShieldCheck, Database, Zap } from 'lucide-react';

const options = {
  types: [
    { id: 'top', name: 'Áo Gấm', icon: '👘', src: '/assets/overlay_1.svg', dy: 'HungVuong' },
    { id: 'jacket', name: 'Áo Khoác', icon: '🧥', src: '/assets/overlay_2.svg', dy: 'Nguyen' },
    { id: 'shirt', name: 'Sơ Mi', icon: '👔', src: '/assets/overlay_1.svg', dy: 'LyTran' }
  ],
  patterns: [
    { id: 'dongson', name: 'Họa tiết Đông Sơn', color: '#D4AF37', fact: "Họa tiết từ thời đại Hùng Vương rực rỡ." },
    { id: 'dragon', name: 'Rồng Nguyễn', color: '#B8860B', fact: "Biểu tượng quyền uy của triều đại cuối cùng." },
    { id: 'lotus', name: 'Liên Hoa Lý Trần', color: '#FFA500', fact: "Nét đẹp thanh tao của Phật giáo thời Lý-Trần." }
  ],
  colors: [
    { id: 'black', hex: '#0a0a0a', name: 'Đen Tuyển' },
    { id: 'red', hex: '#8B0000', name: 'Đỏ Thẫm' },
    { id: 'gold', hex: '#634b12', name: 'Nâu Vàng' }
  ]
};

const HeritageStudio = () => {
  const [userImage, setUserImage] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isOutfitApplied, setIsOutfitApplied] = useState(false);
  const [generationStep, setGenerationStep] = useState(0); // 0: Idle, 1: Scanning, 2: Neural Map, 3: Finalizing
  
  const [selections, setSelections] = useState({
    type: options.types[0],
    pattern: options.patterns[0],
    color: options.colors[0]
  });

  const [outfitPos, setOutfitPos] = useState({ x: 50, y: 35, scale: 1.1, hue: 0 });
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUserImage(event.target.result);
        setIsOutfitApplied(false);
        setGenerationStep(0);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = () => {
    if (!userImage) {
      alert("Vui lòng tải ảnh chân dung của bạn để bắt đầu thiết kế!");
      return;
    }
    
    setIsGenerating(true);
    setIsOutfitApplied(false);
    
    // Multi-stage generation for "Wow" effect
    setGenerationStep(1); // Scanning
    setTimeout(() => setGenerationStep(2), 1200); // Neural Map
    setTimeout(() => setGenerationStep(3), 2400); // Finalizing
    
    setTimeout(() => {
      setOutfitPos(prev => ({ ...prev, x: 50, y: 40, scale: 1.2 }));
      setIsGenerating(false);
      setIsOutfitApplied(true);
      setGenerationStep(0);
    }, 3500);
  };

  const resetFit = () => {
    setOutfitPos({ x: 50, y: 40, scale: 1.2, hue: 0 });
  };

  return (
    <section className="py-32 px-8 bg-heritage-black relative border-y border-gold/10 overflow-hidden" id="heritage-studio">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 text-left">
          <div className="max-w-2xl">
            <h2 className="text-gold text-xs tracking-[0.6em] uppercase mb-6 font-bold flex items-center gap-4">
              <Database size={14} className="text-gold animate-pulse" /> Heritage Generative A.I <ShieldCheck size={14} />
            </h2>
            <h3 className="text-6xl md:text-8xl font-serif text-white italic leading-[1.1]">The Studio <br /> <span className="text-gold uppercase tracking-[0.1em] not-italic font-sans font-black text-5xl md:text-6xl">Visionary</span></h3>
          </div>
          <div className="flex flex-col items-end gap-2">
             <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-gold animate-ping"></div>
                <span className="text-[10px] text-gold font-mono tracking-widest uppercase font-bold">Neural Engine v3.1415</span>
             </div>
             <p className="text-white/30 max-w-sm text-right italic font-serif text-sm">
                "Khởi tạo di sản của riêng bạn bằng thuật toán nhận diện hình thể và phủ mẫu họa tiết đa lớp."
             </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          
          {/* LEFT: MASTER CONTROLS */}
          <div className="w-full lg:w-[420px] space-y-6 order-2 lg:order-1">
            
            <div className="relative p-10 bg-heritage-gray/40 border border-white/5 backdrop-blur-3xl overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                 <Zap className="text-gold" size={40} />
              </div>

              {/* Upload Stage */}
              <div className="mb-12 text-left">
                <h4 className="text-gold/50 text-[9px] uppercase tracking-[0.4em] font-black mb-6 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-gold/20"></span>
                  STAGE 01: SOURCE IMAGE
                </h4>
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-10 border border-gold/20 hover:border-gold/60 transition-all flex flex-col items-center gap-4 bg-heritage-black/40 relative overflow-hidden group/btn"
                >
                  <div className="absolute inset-0 bg-gold/5 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                  <Upload className="text-gold/40 group-hover/btn:text-gold relative z-10" size={24} />
                  <span className="text-white/40 text-[10px] uppercase font-bold tracking-[0.3em] relative z-10">
                    {userImage ? "PORTRAIT CAPTURED" : "IMPORT FOOTAGE"}
                  </span>
                </button>
                <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
              </div>

              {/* Selection Stage */}
              <div className="space-y-12 text-left">
                <h4 className="text-gold/50 text-[9px] uppercase tracking-[0.4em] font-black mb-6 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-gold/20"></span>
                  STAGE 02: SYMBOL SELECTION
                </h4>
                
                {/* 2.1 Garment Type */}
                <div>
                   <label className="text-white/30 text-[8px] uppercase font-black mb-3 block tracking-widest">Garment Chassis</label>
                   <div className="grid grid-cols-3 gap-2">
                     {options.types.map(t => (
                       <button
                         key={t.id}
                         onClick={() => { setSelections({...selections, type: t}); setIsOutfitApplied(false); }}
                         className={`py-5 border text-[9px] uppercase font-black tracking-[0.2em] transition-all ${selections.type.id === t.id ? 'border-gold text-gold bg-gold/5 shadow-[0_0_15px_rgba(212,175,55,0.1)]' : 'border-white/5 text-white/30 hover:border-white/20'}`}
                       >
                         {t.name}
                       </button>
                     ))}
                   </div>
                </div>

                {/* 2.2 Pattern Library */}
                <div>
                  <label className="text-white/30 text-[8px] uppercase font-black mb-3 block tracking-widest">Historical Motifs</label>
                  <div className="space-y-2">
                    {options.patterns.map(p => (
                      <button
                        key={p.id}
                        onClick={() => { setSelections({...selections, pattern: p}); setIsOutfitApplied(false); }}
                        className={`w-full text-left px-6 py-4 border text-[10px] uppercase font-black flex justify-between items-center transition-all ${selections.pattern.id === p.id ? 'border-gold text-gold bg-gold/10' : 'border-white/5 text-white/20 hover:border-white/10'}`}
                      >
                        <div className="flex flex-col gap-1">
                           <span>{p.name}</span>
                           <span className="text-[7px] text-white/20 normal-case font-normal italic">{p.fact}</span>
                        </div>
                        <Check size={14} className={selections.pattern.id === p.id ? 'opacity-100 text-gold' : 'opacity-0'} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* GENERATE BUTTON */}
              <div className="mt-16 pt-8 border-t border-white/5">
                <button 
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="w-full py-6 bg-gold text-heritage-black font-black uppercase tracking-[0.5em] text-[11px] flex items-center justify-center gap-6 hover:bg-white transition-all shadow-[0_20px_40px_rgba(212,175,55,0.2)] group disabled:opacity-50 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <Wand2 size={20} className={isGenerating ? 'animate-spin' : 'group-hover:rotate-45 transition-transform'} />
                  {isGenerating ? "INITIALIZING..." : "THIẾT KẾ"}
                </button>
              </div>
            </div>

            {/* Sub Actions */}
            <div className="flex gap-4">
               <button className="flex-1 py-5 border border-white/5 text-white/30 font-bold uppercase tracking-[0.3em] text-[9px] hover:border-gold/50 hover:text-gold transition-all flex items-center justify-center gap-3">
                  <Download size={14} /> EXPORT
               </button>
               <button className="p-5 border border-white/10 text-white/50 hover:border-gold hover:text-gold transition-all">
                  <Share2 size={16} />
               </button>
            </div>
          </div>

          {/* RIGHT: THE PROJECTION MIRROR */}
          <div className="flex-1 order-1 lg:order-2">
            <div className="relative aspect-[4/5] lg:aspect-video bg-heritage-gray/60 border border-white/5 overflow-hidden shadow-2xl flex items-center justify-center group/preview">
               
               {/* 1. Cinematic Background Elements */}
               <div className="absolute inset-0 bg-noise opacity-40"></div>
               <div className="absolute inset-0 opacity-10 pointer-events-none animate-neural" style={{ backgroundImage: 'radial-gradient(#D4AF37 1.5px, transparent 1.5px)', backgroundSize: '60px 60px' }}></div>
               
               {/* Interface Decorative L-Brackets */}
               <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-gold/20"></div>
               <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-gold/20"></div>
               <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-gold/20"></div>
               <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-gold/20"></div>

               <AnimatePresence mode="wait">
                 {!userImage ? (
                   <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center relative z-10 px-12">
                     <div className="w-32 h-32 border-2 border-gold/5 rounded-full flex items-center justify-center mx-auto mb-12 group-hover/preview:border-gold/20 transition-all duration-1000">
                        <Maximize2 className="text-gold/10 group-hover/preview:text-gold/40 transition-colors" size={48} />
                     </div>
                     <h5 className="text-white/20 font-serif italic text-3xl uppercase tracking-[0.4em] mb-4">Mirror Offline</h5>
                     <p className="text-gold/20 text-[10px] uppercase tracking-widest font-black">Please provide source footage to begin</p>
                   </motion.div>
                 ) : (
                   <motion.div key="preview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative w-full h-full flex items-center justify-center">
                      
                      {/* --- GENERATION OVERLAY SYSTEM --- */}
                      <AnimatePresence>
                      {isGenerating && (
                        <motion.div 
                           initial={{ opacity: 0 }} 
                           animate={{ opacity: 1 }} 
                           exit={{ opacity: 0 }}
                           className="absolute inset-0 z-50 bg-heritage-black/98 flex flex-col items-center justify-center backdrop-blur-2xl overflow-hidden"
                        >
                           {/* Stage 1: Scanning Line */}
                           {generationStep === 1 && (
                              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                 <div className="w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent shadow-[0_0_20px_#D4AF37] animate-scan opacity-80"></div>
                              </div>
                           )}

                           {/* Stage 2: Neural Grid Pulse */}
                           {generationStep >= 2 && (
                              <motion.div 
                                 initial={{ scale: 0.8, opacity: 0 }}
                                 animate={{ scale: 1, opacity: 1 }}
                                 className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[400px] pointer-events-none"
                                 style={{ 
                                    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(212,175,55,0.05) 51px), repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(212,175,55,0.05) 51px)',
                                    backgroundSize: '100% 100%'
                                 }}
                              ></motion.div>
                           )}

                           {/* Core Loading Circle */}
                           <div className="relative z-10 text-center space-y-10 scale-125 md:scale-150">
                              <div className="relative mx-auto w-24 h-24">
                                 <motion.div 
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border-t-2 border-b-w border-gold rounded-full"
                                 ></motion.div>
                                 <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold animate-pulse" size={24} />
                              </div>
                              
                              <div className="space-y-3">
                                 <p className="text-gold text-[10px] uppercase tracking-[0.8em] font-black">
                                    {generationStep === 1 ? "ANALYZING POSE" : generationStep === 2 ? "TEXTURE MAPPING" : "SNAP LOCKING"}
                                 </p>
                                 <div className="w-64 h-[1px] bg-white/5 mx-auto relative overflow-hidden">
                                    <motion.div 
                                       initial={{ x: '-100%' }}
                                       animate={{ x: '100%' }}
                                       transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                       className="w-1/2 h-full bg-gold shadow-[0_0_10px_#D4AF37]"
                                    ></motion.div>
                                 </div>
                                 <p className="text-white/20 text-[7px] uppercase tracking-[0.4em] font-mono">Neural Pipeline v3.1.4: Process_{generationStep * 33}%</p>
                              </div>
                           </div>
                        </motion.div>
                      )}
                      </AnimatePresence>

                      {/* Main Image Base */}
                      <img src={userImage} alt="UserPortrait" className="max-w-full max-h-full object-contain filter brightness-90 shadow-2xl" />

                      {/* Explicitly Generated Outfit Overlay */}
                      {isOutfitApplied && (
                        <motion.div
                          initial={{ scale: 1.8, opacity: 0, filter: 'blur(30px) brightness(4)' }}
                          animate={{ 
                            scale: outfitPos.scale, 
                            opacity: 1,
                            left: `${outfitPos.x}%`,
                            top: `${outfitPos.y}%`,
                            filter: 'blur(0px) brightness(1)'
                          }}
                          transition={{ type: "spring", damping: 15, stiffness: 60 }}
                          className="absolute w-[45%] pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
                          style={{ 
                              filter: `drop-shadow(0 40px 80px rgba(0,0,0,0.8))`,
                              pointerEvents: 'auto'
                          }}
                        >
                          <div className="relative group/outfit cursor-grab active:cursor-grabbing">
                              {/* Integrated Garment Layer (Color + Pattern) */}
                              <div 
                                className="w-full aspect-[3/4] transition-all duration-1000 relative"
                                style={{ 
                                  backgroundColor: selections.color.hex,
                                  backgroundImage: `url('/assets/pattern_detail.png')`,
                                  backgroundBlendMode: 'overlay',
                                  backgroundSize: '250px',
                                  maskImage: `url('${selections.type.src}')`,
                                  WebkitMaskImage: `url('${selections.type.src}')`,
                                  maskSize: 'contain',
                                  maskRepeat: 'no-repeat',
                                  maskPosition: 'center'
                                }}
                              >
                                 {/* Lighting / Texture Layer for Realism */}
                                 <div className="absolute inset-0 opacity-40 pointer-events-none bg-gradient-to-tr from-black/60 via-transparent to-white/20"></div>
                                 <div className="absolute inset-0 opacity-10 pointer-events-none bg-noise"></div>
                                 <div className="absolute inset-0 opacity-20 border-white/5 border-[1px] rounded-lg"></div>
                              </div>
                              
                              {/* AI Meta Tag */}
                              <motion.div 
                                 initial={{ opacity: 0, y: 10 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 className="absolute -top-16 left-1/2 -translate-x-1/2 flex items-center gap-4"
                              >
                                 <div className="h-[1px] w-8 bg-gold/40"></div>
                                 <span className="bg-heritage-black/90 text-gold text-[9px] font-black px-6 py-1.5 border border-gold/40 uppercase tracking-[0.4em] whitespace-nowrap backdrop-blur-xl shadow-2xl">
                                    SYMMETRY LOCKED • {selections.type.name}
                                 </span>
                                 <div className="h-[1px] w-8 bg-gold/40"></div>
                              </motion.div>
                          </div>
                        </motion.div>
                      )}

                      {/* Mirror HUD Overlays */}
                      <div className="absolute top-10 left-10 flex flex-col gap-8">
                         <div className="flex flex-col gap-2 p-5 bg-heritage-black/60 border border-white/5 backdrop-blur-xl">
                            <span className="text-[7px] text-gold uppercase font-black tracking-[0.4em] mb-2">Workspace</span>
                            <div className="flex gap-3">
                               <button onClick={() => setOutfitPos(p => ({...p, scale: p.scale + 0.05}))} className="p-2.5 border border-white/10 hover:border-gold hover:text-gold transition-colors"><Plus size={14} /></button>
                               <button onClick={() => setOutfitPos(p => ({...p, scale: p.scale - 0.05}))} className="p-2.5 border border-white/10 hover:border-gold hover:text-gold transition-colors"><Minus size={14} /></button>
                               <button onClick={resetFit} className="p-2.5 border border-white/10 hover:border-gold hover:text-gold transition-colors"><RotateCcw size={14} /></button>
                            </div>
                         </div>
                      </div>

                      <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                         <div className="p-6 bg-heritage-black/40 border-l border-gold/40 backdrop-blur-md space-y-4 max-w-xs">
                            <div className="flex flex-col">
                               <span className="text-[9px] text-gold uppercase tracking-[0.3em] font-black mb-1">Motif Signature</span>
                               <span className="text-sm text-white font-serif italic tracking-wide">{selections.pattern.name}</span>
                            </div>
                            <p className="text-[8px] text-white/40 leading-relaxed uppercase tracking-widest font-mono">
                               Status: {isOutfitApplied ? "Rendering_Active" : "Telemetry_Standby"} <br />
                               Engine: {isGenerating ? "Computing..." : "Ready"}
                            </p>
                         </div>
                         
                         <div className="flex flex-col items-end gap-2 p-6">
                            <div className="flex gap-2 items-center">
                               <div className={`w-1.5 h-1.5 rounded-full ${isOutfitApplied ? 'bg-green-500 shadow-[0_0_10px_#22c55e]' : 'bg-white/10'}`}></div>
                               <span className="text-[9px] text-white font-black uppercase tracking-[0.4em]">Live Meta Data</span>
                            </div>
                            <span className="text-[8px] text-white/30 uppercase font-mono">Res: 2160x3840 • Pos_Locked_True</span>
                         </div>
                      </div>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageStudio;

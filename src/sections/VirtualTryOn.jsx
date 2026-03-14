import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Download, Share2, Trash2, Maximize2, Move, Plus, Minus } from 'lucide-react';

const clothingTemplates = [
  { id: 1, name: "Áo khoác Đông Sơn", src: "/assets/overlay_1.png" },
  { id: 2, name: "Sơ mi Rồng Thiêng", src: "/assets/overlay_2.png" },
  { id: 3, name: "Áo Nhật Bình Modern", src: "/assets/hero.png" }
];

const VirtualTryOn = () => {
  const [userImage, setUserImage] = useState(null);
  const [selectedOutfit, setSelectedOutfit] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [outfitStyle, setOutfitStyle] = useState({
    x: 50,
    y: 50,
    width: 250,
    opacity: 1,
    hue: 0
  });

  const fileInputRef = useRef(null);
  const dragRef = useRef(null);
  const [dragStart, setDragStart] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsProcessing(true);
      const reader = new FileReader();
      reader.onload = (event) => {
        setUserImage(event.target.result);
        setTimeout(() => setIsProcessing(false), 1200);
      };
      reader.readAsDataURL(file);
    }
  };

  // Custom simple dragging logic
  const onMouseDown = (e) => {
    setDragStart({
      x: e.clientX - outfitStyle.x,
      y: e.clientY - outfitStyle.y
    });
  };

  const onMouseMove = (e) => {
    if (dragStart) {
      setOutfitStyle({
        ...outfitStyle,
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const onMouseUp = () => {
    setDragStart(null);
  };

  const adjustSize = (delta) => {
    setOutfitStyle(prev => ({
      ...prev,
      width: Math.max(100, prev.width + delta)
    }));
  };

  return (
    <section 
      className="py-32 px-8 bg-heritage-gray relative border-y border-gold/10 overflow-hidden" 
      id="virtual-try-on"
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gold text-sm tracking-[0.5em] uppercase mb-4 font-bold">Công nghệ AR</h2>
          <h3 className="text-5xl md:text-6xl font-serif text-white italic">Thử trang phục lịch sử</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start text-left">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="p-8 bg-heritage-black border border-white/10">
              <h4 className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Tải ảnh chân dung</h4>
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-10 border-2 border-dashed border-gold/20 hover:border-gold/50 transition-all flex flex-col items-center gap-4 group"
              >
                <Upload className="text-gold/40 group-hover:text-gold" size={24} />
                <span className="text-white/30 text-[10px] uppercase font-bold tracking-widest">Chọn ảnh (.jpg, .png)</span>
              </button>
              <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
            </div>

            <div className="p-8 bg-heritage-black border border-white/10">
              <h4 className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Chọn bộ cánh di sản</h4>
              <div className="grid grid-cols-3 gap-3">
                {clothingTemplates.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedOutfit(item)}
                    className={`aspect-square border transition-all ${selectedOutfit?.id === item.id ? 'border-gold bg-gold/5' : 'border-white/5'}`}
                  >
                    <img src={item.src} alt={item.name} className="w-full h-full object-cover px-2" />
                  </button>
                ))}
              </div>
            </div>

            {selectedOutfit && (
              <div className="p-8 bg-heritage-black border border-white/10 space-y-6">
                <h4 className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold">Công cụ điều chỉnh</h4>
                
                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-[10px] uppercase">Kích thước</span>
                  <div className="flex gap-2">
                    <button onClick={() => adjustSize(-20)} className="p-2 border border-white/10 text-white hover:text-gold"><Minus size={14} /></button>
                    <button onClick={() => adjustSize(20)} className="p-2 border border-white/10 text-white hover:text-gold"><Plus size={14} /></button>
                  </div>
                </div>

                <div>
                   <span className="text-white/40 text-[10px] uppercase block mb-3">Chỉnh màu (Hue Rotate)</span>
                   <input 
                      type="range" min="0" max="360" value={outfitStyle.hue} 
                      onChange={(e) => setOutfitStyle({...outfitStyle, hue: e.target.value})}
                      className="w-full accent-gold"
                   />
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="relative aspect-square md:aspect-video bg-heritage-black border border-gold/10 overflow-hidden shadow-2xl flex items-center justify-center">
              <AnimatePresence mode="wait">
                {!userImage ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
                    <Maximize2 className="text-gold/20 mx-auto mb-6" size={48} />
                    <p className="text-white/20 font-serif italic text-xl">"Hãy tải thư viện ảnh của bạn lên"</p>
                  </motion.div>
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center bg-heritage-gray/20">
                    {isProcessing && (
                      <div className="absolute inset-0 z-50 bg-heritage-black/80 flex flex-col items-center justify-center gap-4">
                        <div className="w-10 h-10 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-gold text-[10px] uppercase tracking-widest">AI Body Detecting...</p>
                      </div>
                    )}
                    
                    <img src={userImage} alt="User" className="max-w-full max-h-full object-contain" />
                    
                    {selectedOutfit && (
                      <div
                        style={{
                          position: 'absolute',
                          left: `${outfitStyle.x}px`,
                          top: `${outfitStyle.y}px`,
                          width: `${outfitStyle.width}px`,
                          cursor: dragStart ? 'grabbing' : 'grab',
                          filter: `hue-rotate(${outfitStyle.hue}deg) drop-shadow(0 10px 20px rgba(0,0,0,0.5))`,
                          zIndex: 40
                        }}
                        onMouseDown={onMouseDown}
                      >
                         <img src={selectedOutfit.src} alt="Outfit" className="w-full pointer-events-none" />
                         <div className="absolute -top-6 left-0 right-0 text-center opacity-0 hover:opacity-100 transition-opacity">
                            <span className="bg-gold text-heritage-black text-[8px] px-2 py-0.5 font-bold uppercase">Giữ để di chuyển</span>
                         </div>
                      </div>
                    )}
                  </div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="mt-8 flex justify-between items-center px-4">
               <p className="text-white/30 text-[10px] uppercase font-bold tracking-widest italic flex items-center gap-2">
                  <Move size={12} className="text-gold" /> Mẹo: Sử dụng chuột để kéo trang phục vào vị trí hình thể
               </p>
               <div className="flex gap-4">
                 <button className="flex items-center gap-2 text-gold text-[10px] uppercase font-bold tracking-widest hover:text-white transition-all">
                    <Download size={14} /> Tải xuống
                 </button>
                 <button className="flex items-center gap-2 text-gold text-[10px] uppercase font-bold tracking-widest hover:text-white transition-all">
                    <Share2 size={14} /> Chia sẻ
                 </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTryOn;

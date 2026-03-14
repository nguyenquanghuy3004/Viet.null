import React, { useState } from 'react';
import ImageUploader from '../components/ImageUploader';
import OutfitSelector from '../components/OutfitSelector';
import CanvasRenderer from '../components/CanvasRenderer';
import { Sparkles } from 'lucide-react';

const TryOnPage = () => {
  const [userImage, setUserImage] = useState(null);
  const [selectedOutfit, setSelectedOutfit] = useState(null);

  return (
    <div className="min-h-screen bg-heritage-black pt-32 pb-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-gold text-xs tracking-[0.5em] uppercase mb-4 font-black flex items-center justify-center gap-4">
            <Sparkles size={16} /> Heritage Mirror <Sparkles size={16} />
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif text-white italic leading-tight">Thử trang phục <br /> <span className="text-gold uppercase tracking-widest not-italic">Lịch sử</span></h1>
        </div>

        {/* Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Panel: Upload */}
          <div className="lg:col-span-3 space-y-8">
            <ImageUploader onImageUpload={setUserImage} />
            <div className="p-6 border border-white/5 bg-heritage-gray/20 rounded-lg">
                <p className="text-[10px] text-white/30 leading-relaxed uppercase tracking-widest font-mono">
                    System-Version: v.4.0.2-Beta<br/>
                    Module: AI-Body-Mapping-Core<br/>
                    Status: Standby
                </p>
            </div>
          </div>

          {/* Center Panel: Preview */}
          <div className="lg:col-span-6">
            <CanvasRenderer userImage={userImage} selectedOutfit={selectedOutfit} />
          </div>

          {/* Right Panel: Outfit Selection */}
          <div className="lg:col-span-3">
            <OutfitSelector selectedOutfit={selectedOutfit} onSelectOutfit={setSelectedOutfit} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default TryOnPage;

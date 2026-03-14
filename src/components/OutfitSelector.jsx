import React from 'react';

const outfits = [
  { id: 'tran', name: 'Áo Giao Lĩnh triều Trần', src: '/assets/outfits/shirt_tran.png' },
  { id: 'nguyen', name: 'Áo Nhật Bình triều Nguyễn', src: '/assets/outfits/shirt_nguyen.png' },
  { id: 'dongson', name: 'Áo họa tiết Trống Đồng', src: '/assets/outfits/shirt_dongson.png' },
  { id: 'lacbird', name: 'Áo họa tiết Chim Lạc', src: '/assets/outfits/shirt_lacbird.png' }
];

const OutfitSelector = ({ selectedOutfit, onSelectOutfit }) => {
  return (
    <div className="p-6 bg-heritage-gray/40 border border-white/5 backdrop-blur-xl h-full">
      <h3 className="text-gold text-sm font-black uppercase tracking-widest mb-6 border-b border-gold/10 pb-4">Bộ sưu tập trang phục</h3>
      <div className="space-y-4">
        {outfits.map((outfit) => (
          <button
            key={outfit.id}
            onClick={() => onSelectOutfit(outfit)}
            className={`w-full text-left p-4 border transition-all ${
              selectedOutfit?.id === outfit.id
                ? 'border-gold bg-gold/10 text-gold shadow-[0_0_15px_rgba(212,175,55,0.1)]'
                : 'border-white/5 text-white/40 hover:border-white/20'
            }`}
          >
            <span className="text-[11px] font-bold uppercase tracking-wider">{outfit.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default OutfitSelector;

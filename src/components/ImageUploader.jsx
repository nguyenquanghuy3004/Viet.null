import React from 'react';
import { Upload } from 'lucide-react';

const ImageUploader = ({ onImageUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onImageUpload(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6 bg-heritage-gray/40 border border-white/5 backdrop-blur-xl">
      <h3 className="text-gold text-sm font-black uppercase tracking-widest mb-4">Tải ảnh của bạn lên</h3>
      <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gold/20 hover:border-gold/50 transition-all cursor-pointer bg-heritage-black/40 group">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Upload className="text-gold/40 group-hover:text-gold mb-3" size={32} />
          <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Chọn ảnh</p>
        </div>
        <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
      </label>
      <p className="mt-4 text-[9px] text-white/30 italic">Lưu ý: Sử dụng ảnh chụp chính diện, rõ phần thân trên.</p>
    </div>
  );
};

export default ImageUploader;

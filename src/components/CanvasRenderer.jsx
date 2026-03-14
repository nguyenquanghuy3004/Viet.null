import React, { useRef, useEffect, useState } from 'react';
import { Download, Move, Maximize, RotateCw } from 'lucide-react';

const CanvasRenderer = ({ userImage, selectedOutfit }) => {
  const canvasRef = useRef(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [poseData, setPoseData] = useState(null);
  const [adjustments, setAdjustments] = useState({ x: 0, y: 0, scale: 1, rotate: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (userImage) {
      detectPose();
    }
  }, [userImage]);

  const detectPose = async () => {
    if (!window.Pose) return;
    setIsDetecting(true);

    const img = new Image();
    img.src = userImage;
    img.onload = async () => {
      const pose = new window.Pose({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
      });

      pose.setOptions({
        modelComplexity: 1,
        smoothLandmarks: true,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
      });

      pose.onResults((results) => {
        if (results.poseLandmarks) {
          setPoseData(results.poseLandmarks);
          // Auto-align based on shoulders
          const leftShoulder = results.poseLandmarks[11];
          const rightShoulder = results.poseLandmarks[12];
          const neckX = (leftShoulder.x + rightShoulder.x) / 2;
          const neckY = (leftShoulder.y + rightShoulder.y) / 2;
          
          setAdjustments({
            x: neckX * img.width - (img.width/2), // Relative to center? Let's just store absolute canvas pos soon
            y: neckY * img.height - (img.height/2),
            scale: 1,
            rotate: 0
          });
        }
        setIsDetecting(false);
      });

      await pose.send({ image: img });
    };
  };

  useEffect(() => {
    renderCanvas();
  }, [userImage, selectedOutfit, poseData, adjustments]);

  const renderCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas || !userImage) return;
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = userImage;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      if (selectedOutfit && poseData) {
        const outfitImg = new Image();
        outfitImg.src = selectedOutfit.src;
        outfitImg.onload = () => {
          const leftShoulder = poseData[11];
          const rightShoulder = poseData[12];
          
          // Calculate scale based on shoulder width
          const shoulderDist = Math.sqrt(
            Math.pow(rightShoulder.x - leftShoulder.x, 2) + 
            Math.pow(rightShoulder.y - leftShoulder.y, 2)
          );
          
          const baseScale = shoulderDist * canvas.width * 2.5; // Multiplier to look right
          const neckX = ((leftShoulder.x + rightShoulder.x) / 2) * canvas.width;
          const neckY = ((leftShoulder.y + rightShoulder.y) / 2) * canvas.height;

          ctx.save();
          ctx.translate(neckX + adjustments.x, neckY + adjustments.y);
          ctx.rotate((adjustments.rotate * Math.PI) / 180);
          
          const drawWidth = baseScale * adjustments.scale;
          const drawHeight = drawWidth * (outfitImg.height / outfitImg.width);
          
          ctx.drawImage(outfitImg, -drawWidth / 2, -drawHeight * 0.2, drawWidth, drawHeight);
          ctx.restore();
        };
      }
    };
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.download = 'historical-try-on.png';
    link.href = canvasRef.current.toDataURL();
    link.click();
  };

  // Drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - lastMousePos.x;
    const dy = e.clientY - lastMousePos.y;
    setAdjustments(prev => ({ ...prev, x: prev.x + dx, y: prev.y + dy }));
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className="flex flex-col items-center gap-6 w-full h-full">
      <div className="relative w-full max-h-[600px] bg-heritage-black/60 border border-white/10 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center">
        {isDetecting && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-heritage-black/90 backdrop-blur-sm">
            <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gold text-xs uppercase font-black tracking-widest animate-pulse">Đang nhận diện cơ thể...</p>
          </div>
        )}
        
        <canvas 
          ref={canvasRef} 
          className="max-w-full max-h-full object-contain cursor-move"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />

        {!userImage && (
          <div className="text-center p-20 opacity-20">
            <Maximize size={64} className="mx-auto mb-4 text-gold" />
            <p className="font-serif italic text-xl uppercase tracking-widest">Mirror Waiting</p>
          </div>
        )}
      </div>

      {userImage && (
        <div className="flex flex-wrap justify-center gap-4 p-4 bg-heritage-gray/60 border border-white/5 backdrop-blur-md rounded-lg w-full">
          <div className="flex items-center gap-3">
            <span className="text-[9px] text-white/40 uppercase font-bold pr-2 border-r border-white/10">Kích thước</span>
            <button onClick={() => setAdjustments(p => ({...p, scale: p.scale - 0.1}))} className="p-2 border border-white/10 hover:border-gold hover:text-gold"><RotateCw className="rotate-180" size={14} /></button>
            <button onClick={() => setAdjustments(p => ({...p, scale: p.scale + 0.1}))} className="p-2 border border-white/10 hover:border-gold hover:text-gold"><RotateCw size={14} /></button>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[9px] text-white/40 uppercase font-bold pr-2 border-r border-white/10">Xoay</span>
            <button onClick={() => setAdjustments(p => ({...p, rotate: p.rotate - 5}))} className="p-2 border border-white/10 hover:border-gold hover:text-gold">-5°</button>
            <button onClick={() => setAdjustments(p => ({...p, rotate: p.rotate + 5}))} className="p-2 border border-white/10 hover:border-gold hover:text-gold">+5°</button>
          </div>
          <button 
            onClick={handleDownload}
            className="ml-auto px-6 py-2 bg-gold text-heritage-black text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2"
          >
            <Download size={14} /> Download ảnh của bạn
          </button>
        </div>
      )}
    </div>
  );
};

export default CanvasRenderer;

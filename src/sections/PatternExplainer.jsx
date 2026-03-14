import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Historically Accurate SVG Components ---

const DongSonSun = () => (
  <motion.div
    initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
    animate={{ rotate: 0, opacity: 1, scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    className="w-full h-full relative flex items-center justify-center p-2"
  >
    {/* Using the detailed, highly acclaimed authentic Dong Son drum graphic */}
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/2/22/Tr%E1%BB%91ng_%C4%91%E1%BB%93ng_%C4%90%C3%B4ng_S%C6%A1n.svg" 
      alt="Mặt Trời Đông Sơn"
      className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]"
      style={{
        // Filter crafted to convert black into the #D4AF37 gold tone matching the theme
        filter: "invert(72%) sepia(35%) saturate(760%) hue-rotate(357deg) brightness(91%) contrast(85%)"
      }}
    />
    
    {/* Subtle spinning outer halo to match the description of "vận động vũ trụ" */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 rounded-full border-[1.5px] border-gold/30 border-dashed pointer-events-none z-0"
    />
    
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="absolute inset-2 rounded-full border border-gold/10 pointer-events-none z-0"
    />
  </motion.div>
);

const ChimLac = () => (
  <motion.div
    initial={{ x: -20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    className="w-full h-full relative flex items-center justify-center"
  >
    <motion.img 
      src="https://upload.wikimedia.org/wikipedia/commons/a/a2/SCP_Wiki_Vietnamese_Logo.svg" 
      alt="Chim Lạc"
      animate={{ 
        y: [0, -5, 0],
        rotate: [0, 1, 0]
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]"
      style={{
        // High-end filter to achieve the perfect #D4AF37 gold metallic look
        filter: "invert(72%) sepia(35%) saturate(760%) hue-rotate(357deg) brightness(91%) contrast(85%)"
      }}
    />
    
    {/* Decorative motion trails to represent the "spirit of flight" */}
    <div className="absolute inset-0 z-0">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: [0, 0.2, 0], x: [-20, 60] }}
          transition={{ 
            duration: 3, 
            delay: i * 1, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute h-px bg-gold/30"
          style={{ top: `${30 + i * 20}%`, width: '40px' }}
        />
      ))}
    </div>
  </motion.div>
);

const ImperialDragon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current">
    {/* S-shaped body (Ly Dynasty style) */}
    <motion.path
      d="M20 80 C20 90 40 95 50 80 C60 65 40 55 50 40 C60 25 80 30 80 20 C80 10 65 5 55 15 C45 25 55 35 50 50 C45 65 35 65 25 60 C15 55 10 40 20 30"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2 }}
    />
    {/* Head details */}
    <motion.path
      d="M80 20 L88 15 M80 20 L85 25"
      strokeWidth="1.5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    />
    {/* Spine/Scale details */}
    {[...Array(10)].map((_, i) => (
      <circle 
        key={i} 
        cx={25 + i * 5} 
        cy={75 - (Math.sin(i * 0.8) * 20)} 
        r="1" 
        opacity="0.3" 
      />
    ))}
    {/* Whiskers */}
    <path d="M82 18 Q95 10 90 25" strokeWidth="0.8" opacity="0.5" />
  </svg>
);

const patterns = [
  {
    id: "sun",
    title: "Mặt Trời Đông Sơn",
    desc: "Tâm điểm của mặt trống Đông Sơn, đại diện cho nguồn sống và trật tự vũ trụ. Các tia sáng rạng ngời tượng trưng cho uy quyền của các thủ lĩnh Lạc Việt thời cổ đại.",
    detail: "Họa tiết này thường có 8, 10 hoặc 12 cánh, tương ứng với lịch pháp và các tiết khí trong năm của cư dân nông nghiệp lúa nước.",
    component: <DongSonSun />
  },
  {
    id: "bird",
    title: "Chim Lạc",
    desc: "Vật tổ của người Việt cổ, tượng trưng cho khát vọng vươn tới những tầm cao mới và tâm hồn bay bổng, tự do.",
    detail: "Trên trống đồng, Chim Lạc thường được vẽ bay ngược chiều kim đồng hồ, thể hiện dòng chảy của thời gian và sự vận động bất tận của vũ trụ.",
    component: <ChimLac />
  },
  {
    id: "dragon",
    title: "Rồng Cung Đình",
    desc: "Tượng trưng cho quyền uy tối thượng và bản sắc vương triều qua các thời kỳ Lý, Trần, Lê, Nguyễn.",
    detail: "Rồng thời Nguyễn thường có 5 móng (dành cho vua) và mang vẻ oai nghiêm, lộng lẫy, kết hợp với các họa tiết mây lửa sinh động.",
    component: <ImperialDragon />
  }
];

const PatternExplainer = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="py-32 px-8 bg-heritage-black relative border-y border-gold/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gold text-sm tracking-[0.5em] uppercase mb-4 font-bold"
          >
            Ngôn ngữ Thị giác
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif text-white italic"
          >
            Giải mã những Sợi chỉ
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {patterns.map((p) => (
            <motion.div
              key={p.id}
              onClick={() => setActiveId(activeId === p.id ? null : p.id)}
              whileHover={{ scale: 1.02 }}
              className={`relative cursor-pointer bg-heritage-gray p-12 transition-all duration-500 border rounded-sm group overflow-hidden ${
                activeId === p.id ? 'border-gold shadow-[0_0_40px_rgba(212,175,55,0.15)]' : 'border-white/5 hover:border-gold/30'
              }`}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${activeId === p.id ? 'opacity-100' : ''}`} />

              <div className="relative z-10">
                <div className={`w-32 h-32 mb-10 text-gold transition-all duration-700 ${activeId === p.id ? 'opacity-100 scale-110' : 'opacity-40 group-hover:opacity-100 group-hover:scale-105'}`}>
                  {p.component}
                </div>
                
                <h4 className="text-2xl font-serif text-white mb-6 uppercase tracking-widest group-hover:text-gold transition-colors">
                  {p.title}
                </h4>
                <p className="text-white/60 leading-relaxed italic mb-8 group-hover:text-white/80 transition-colors">
                  {p.desc}
                </p>
                
                <AnimatePresence>
                  {activeId === p.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="overflow-hidden bg-gold/5 p-6 border-l-2 border-gold mb-4"
                    >
                      <p className="text-gold text-sm font-medium leading-relaxed italic">
                        {p.detail}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-8 text-[10px] text-gold/30 uppercase tracking-[0.3em] font-bold group-hover:text-gold/60 transition-colors">
                  {activeId === p.id ? "THU GỌN" : "NHẤN ĐỂ XEM CHI TIẾT"}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Atmospheric elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px] pointer-events-none" />
    </section>
  );
};

export default PatternExplainer;

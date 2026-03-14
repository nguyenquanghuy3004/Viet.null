import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ScrollText, ArrowRight } from 'lucide-react';

// --- Historically Accurate Graphic Components ---

const DongSonSun = () => (
  <motion.div
    initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
    animate={{ rotate: 0, opacity: 1, scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    className="w-full h-full relative flex items-center justify-center transform group-hover:scale-110 transition-transform duration-1000"
  >
    <motion.img
      src="/assets/dong_son_sun.png"
      alt="Mặt Trời Đông Sơn"
      className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]"
      animate={{ 
        scale: [1, 1.05, 1],
        filter: ["brightness(1) contrast(1.1)", "brightness(1.3) contrast(1.2)", "brightness(1) contrast(1.1)"]
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="absolute inset-x-0 inset-y-0 rounded-full border-[1.5px] border-gold/10 border-dashed pointer-events-none z-0 scale-150"
    />
  </motion.div>
);

const ChimLac = () => (
  <motion.div
    initial={{ x: -20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    className="w-full h-full relative flex items-center justify-center group-hover:translate-y-[-10px] transition-transform duration-1000"
  >
    <motion.img
      src="/assets/chim_lac.png"
      alt="Chim Lạc"
      animate={{
        y: [0, -15, 0],
        rotate: [0, 3, 0],
        filter: ["brightness(1) contrast(1.1)", "brightness(1.2) contrast(1.15)", "brightness(1) contrast(1.1)"]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_25px_rgba(212,175,55,0.4)]"
    />
  </motion.div>
);

const ImperialDragon = () => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    className="w-full h-full relative flex items-center justify-center group-hover:scale-105 transition-transform duration-1000"
  >
    <motion.img
      src="/assets/ly_dragon.png"
      alt="Rồng Thời Lý"
      className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]"
      animate={{ 
        x: [-5, 5, -5],
        y: [-3, 3, -3],
        filter: ["brightness(1) contrast(1.2)", "brightness(1.3) contrast(1.25)", "brightness(1) contrast(1.2)"]
      }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    />
  </motion.div>
);

const patterns = [
  {
    id: "sun",
    title: "Mặt Trời Đông Sơn",
    subtitle: "Nghi Lễ Thái Dương",
    desc: "Tâm điểm của mặt trống Đông Sơn, đại diện cho nguồn sống và trật tự vũ trụ. Các tia sáng rạng ngời tượng trưng cho uy quyền tối cao.",
    detail: "Họa tiết này thường có 8, 10 hoặc 12 cánh, tương ứng với lịch pháp và các tiết khí trong năm, là 'kim chỉ nam' cho nền nông nghiệp lúa nước cổ xưa.",
    component: <DongSonSun />,
    offset: ""
  },
  {
    id: "bird",
    title: "Chim Lạc",
    subtitle: "Vũ Điệu Tự Do",
    desc: "Vật tổ thiêng liêng, tượng trưng cho khát vọng chinh phục những tầm cao mới và tâm hồn bay bổng, thanh tao của người Việt.",
    detail: "Trên trống đồng, Chim Lạc thường được vẽ bay ngược chiều kim đồng hồ, thể hiện niềm tin vào sự vận chuyển vĩnh hằng của vũ trụ và thời gian.",
    component: <ChimLac />,
    offset: ""
  },
  {
    id: "dragon",
    title: "Rồng Cung Đình",
    subtitle: "Khí Phách Vương Triều",
    desc: "Biểu tượng của quyền năng tối thượng, nét vẽ thanh thoát ẩn chứa sức mạnh nội sinh qua các triều đại Lý, Trần, Lê, Nguyễn.",
    detail: "Rồng thời Nguyễn mang vẻ uy nghiêm tuyệt đối với 5 móng sắc sảo, uốn lượn giữa làn mây lửa, là hiện thân cho thiên tử và sự thịnh vượng.",
    component: <ImperialDragon />,
    offset: ""
  }
];

const PatternExplainer = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="py-64 px-8 bg-transparent relative overflow-hidden" id="explainer">
      {/* Artistic Atmosphere Backdrop */}
      <div className="absolute inset-0 gold-dust opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[150px] pointer-events-none animate-pulse-slow" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-40 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-10 bg-gold/30" />
            <span className="text-gold text-[10px] tracking-[0.6em] font-black uppercase">Ngôn Ngữ Thị Giác</span>
            <div className="h-px w-10 bg-gold/30" />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-7xl md:text-8xl font-serif text-white italic leading-none mb-12 tracking-tight"
          >
            Giải mã những <span className="text-gold">Sợi chỉ</span>
          </motion.h3>
          
          <div className="h-px w-24 bg-gold animate-glow-gold" />
        </div>

        {/* Balanced Symmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 items-start">
          {patterns.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              onClick={() => setActiveId(activeId === p.id ? null : p.id)}
              className={`relative group cursor-pointer ${p.offset}`}
            >
              {/* Artistic Border Frame */}
              <div className="absolute -inset-4 border border-gold/10 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-sm pointer-events-none" />
              
              <div className="relative">
                {/* Main Visual Content */}
                <div className={`aspect-[4/5] w-full mb-12 relative overflow-hidden bg-heritage-black/40 backdrop-blur-sm border border-white/5 transition-all duration-700 flex items-center justify-center p-12
                  ${activeId === p.id ? 'border-gold/40 shadow-[0_0_50px_rgba(212,175,55,0.1)]' : 'hover:border-gold/20'}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-1" />
                  <div className="relative z-10 w-full h-full">
                    {p.component}
                  </div>
                  
                  {/* Subtle Texture Overlay */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
                </div>

                {/* Typography Information */}
                <div className="relative pl-6">
                  <motion.div 
                    animate={{ x: activeId === p.id ? 10 : 0 }}
                    className="flex flex-col gap-2"
                  >
                    <span className="text-gold/40 text-[9px] tracking-[0.4em] font-bold uppercase">{p.subtitle}</span>
                    <h4 className="text-4xl font-serif text-white tracking-wide uppercase transition-colors group-hover:text-gold">
                      {p.title}
                    </h4>
                    <div className="w-12 h-px bg-gold/20 mt-4 mb-4" />
                    <p className="text-white/50 text-xl leading-relaxed font-light italic max-w-sm group-hover:text-white/80 transition-colors">
                      "{p.desc}"
                    </p>
                  </motion.div>

                  <AnimatePresence>
                    {activeId === p.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-8 border-l border-gold/40 bg-white/[0.02] backdrop-blur-md relative">
                          <div className="absolute top-0 right-0 p-4 opacity-10">
                            <ScrollText size={60} className="text-gold" />
                          </div>
                          <p className="text-gold/80 text-lg leading-[1.8] font-light italic relative z-10">
                            {p.detail}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-12 flex items-center gap-4 group-hover:gap-8 transition-all duration-700">
                    <span className="text-[10px] text-gold tracking-[0.5em] font-black uppercase">
                      {activeId === p.id ? "Thu Gọn" : "Chi Tiết"}
                    </span>
                    <ArrowRight size={14} className={`text-gold transition-transform duration-500 ${activeId === p.id ? 'rotate-90' : ''}`} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Aesthetic Text */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center opacity-[0.02] pointer-events-none">
        <span className="text-[20vw] font-serif italic text-white whitespace-nowrap leading-none">CRAFTED HISTORY</span>
      </div>
    </section>
  );
};

export default PatternExplainer;

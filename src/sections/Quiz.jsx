import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizQuestions } from '../data/dataDetail';

const results = {
  hung: {
    title: "Phong cách Hùng Vương",
    desc: "Bạn mang trong mình tâm hồn của những người Việt cổ: mộc mạc, tự do và gắn liền với thiên nhiên. Trang phục của bạn nên ưu tiên các họa tiết Chim Lạc và Trống Đồng.",
    dynasty: "Hùng Vương"
  },
  tran: {
    title: "Phong cách Nhà Trần",
    desc: "Oai nghiêm và quyết đoán. Bạn phù hợp với phong cách mạnh mẽ, hào sảng, lấy hoa sen và mây vờn làm điểm nhấn để tôn vinh khí chất Đông A.",
    dynasty: "Nhà Trần"
  },
  le: {
    title: "Phong cách Nhà Lê",
    desc: "Bạn trân trọng những giá trị chuẩn mực và tinh hoa văn hiến. Hãy chọn những bộ cánh tinh xảo với họa tiết phượng hoàng và hoa cúc để thể hiện sự thanh tao.",
    dynasty: "Nhà Lê"
  },
  nguyen: {
    title: "Phong cách Nhà Nguyễn",
    desc: "Lộng lẫy và vương giả. Bạn sinh ra để tỏa sáng với những họa tiết rồng phượng cung đình, áo Nhật Bình và sự tỉ mỉ trong từng đường kim mũi chỉ.",
    dynasty: "Nhà Nguyễn"
  }
};

const Quiz = () => {
  const [step, setStep] = useState(0); // 0: Start, 1..N: Questions, -1: Result
  const [scores, setScores] = useState({ hung: 0, tran: 0, le: 0, nguyen: 0 });
  const [finalResult, setFinalResult] = useState(null);

  const handleAnswer = (type) => {
    const newScores = { ...scores, [type]: scores[type] + 1 };
    setScores(newScores);

    if (step < quizQuestions.length) {
      setStep(step + 1);
    } else {
      // Calculate result
      const topType = Object.keys(newScores).reduce((a, b) => newScores[a] > newScores[b] ? a : b);
      setFinalResult(results[topType]);
      setStep(-1);
    }
  };

  const reset = () => {
    setStep(0);
    setScores({ hung: 0, tran: 0, le: 0, nguyen: 0 });
    setFinalResult(null);
  };

  return (
    <section className="py-32 px-8 bg-heritage-gray relative border-t border-gold/10 overflow-hidden" id="quiz">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="space-y-8"
            >
              <h2 className="text-gold text-sm tracking-[0.5em] uppercase font-bold">Thử thách di sản</h2>
              <h3 className="text-5xl font-serif text-white italic">Bạn thuộc triều đại nào?</h3>
              <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
                Khám phá phong cách thời trang lịch sử phù hợp nhất với tính cách và gu thẩm mỹ của riêng bạn.
              </p>
              <button
                onClick={() => setStep(1)}
                className="px-12 py-5 bg-gold text-heritage-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-all mt-8"
              >
                Bắt đầu khám phá
              </button>
            </motion.div>
          )}

          {step > 0 && step <= quizQuestions.length && (
            <motion.div
              key={`q-${step}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-12"
            >
              <div className="text-white/30 text-xs font-bold uppercase tracking-[0.4em]">Câu hỏi {step}/{quizQuestions.length}</div>
              <h4 className="text-4xl font-serif text-white italic">{quizQuestions[step-1].question}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quizQuestions[step-1].answers.map((ans, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(ans.type)}
                    className="p-8 border border-white/10 text-white/80 hover:border-gold hover:text-gold transition-all duration-300 bg-heritage-black/50 backdrop-blur-sm"
                  >
                    {ans.text}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === -1 && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-12 border-2 border-gold/30 bg-heritage-black relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold px-8 py-2 text-heritage-black font-bold uppercase tracking-[0.3em] text-[10px]">
                Kết quả của bạn
              </div>
              <h3 className="text-6xl font-serif text-gold mb-6 mt-4 italic">{finalResult.title}</h3>
              <p className="text-white/80 text-lg leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
                {finalResult.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                   onClick={() => window.location.href = '#collections'}
                   className="px-10 py-4 border border-gold text-gold font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-gold hover:text-heritage-black transition-all"
                >
                  Xem bst Nhà {finalResult.dynasty}
                </button>
                <button
                  onClick={reset}
                  className="px-10 py-4 text-white/30 hover:text-gold uppercase tracking-[0.2em] text-[10px] transition-all"
                >
                  Thử lại
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Quiz;

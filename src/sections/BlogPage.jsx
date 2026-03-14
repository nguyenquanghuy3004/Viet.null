import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, User, ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "Ý nghĩa trống đồng Đông Sơn trong văn hóa Việt",
    excerpt: "Trống đồng không chỉ là một nhạc cụ cổ đại mà còn là biểu tượng rực rỡ nhất của nền văn minh Lạc Việt, phản ánh quan niệm về vũ trụ...",
    date: "12/03/2026",
    author: "Heritage Team",
    image: "/assets/hero.png"
  },
  {
    id: 2,
    title: "Biểu tượng Rồng thời Lý: Sự thanh thoát và tinh xảo",
    excerpt: "Khác với vẻ oai nghiêm của rồng các thời kỳ sau, con rồng thời Lý mang dáng dấp uốn lượn mềm mại như những dải lụa, đại diện cho...",
    date: "10/03/2026",
    author: "KTS. Minh An",
    image: "/assets/dynasties_collection.png"
  },
  {
    id: 3,
    title: "Vì sao Chim Lạc xuất hiện trên Trống Đồng?",
    excerpt: "Hình ảnh đôi Chim Lạc bay ngược chiều kim đồng hồ mang thông điệp gì của tiền nhân về dòng chảy thời gian và khát vọng chinh phục?... ",
    date: "08/03/2026",
    author: "Nhà sử học Trần Huy",
    image: "/assets/pattern_detail.png"
  }
];

const BlogPage = () => {
  return (
    <section className="py-32 px-8 bg-transparent relative overflow-hidden" id="blog-section">
      <div className="absolute inset-0 radial-spotlight pointer-events-none opacity-40"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-gold text-sm tracking-[0.5em] uppercase mb-4 font-bold">Góc Học Thuật</h2>
          <h3 className="text-5xl font-serif text-white italic">Nhật ký Di sản</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {articles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden mb-8 border border-white/5 group-hover:border-gold/30 transition-all relative">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-heritage-black/40"></div>
                <div className="absolute top-6 left-6 px-4 py-2 bg-gold/10 border border-gold/30 text-gold text-[8px] uppercase font-bold tracking-widest">
                  Văn hóa
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-6 text-white/30 text-[10px] uppercase font-bold tracking-widest">
                  <span className="flex items-center gap-2"><Calendar size={12} className="text-gold" /> {article.date}</span>
                  <span className="flex items-center gap-2"><User size={12} className="text-gold" /> {article.author}</span>
                </div>

                <h4 className="text-2xl font-serif text-white group-hover:text-gold transition-colors leading-tight">
                  {article.title}
                </h4>

                <p className="text-white/50 text-sm leading-relaxed italic line-clamp-3">
                  {article.excerpt}
                </p>

                <button className="flex items-center gap-3 text-gold text-[10px] uppercase font-bold tracking-[0.4em] pt-4 group-hover:gap-6 transition-all">
                  Đọc câu chuyện <ArrowRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-24 text-center">
          <button className="px-12 py-5 border border-white/10 text-white/50 hover:border-gold hover:text-gold transition-all uppercase tracking-[0.4em] text-[10px] font-bold">
            Xem tất cả bài viết
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;

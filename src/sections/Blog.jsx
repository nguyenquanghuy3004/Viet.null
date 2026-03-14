import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { BookOpen } from 'lucide-react';

const Blog = () => {
  const { t } = useLanguage();
  const blogData = t('blog');

  return (
    <section className="py-32 px-8 bg-heritage-gray relative" id="blog">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-gold text-sm tracking-[0.5em] uppercase mb-4 font-bold">{blogData.subtitle}</h2>
          <h3 className="text-5xl font-serif text-white italic">{blogData.title}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogData.posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-heritage-black p-10 border border-white/5 hover:border-gold/30 transition-all duration-500 group relative"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-gold text-[10px] uppercase font-bold tracking-[0.3em] px-3 py-1 border border-gold/30">
                  {post.tag}
                </span>
                <span className="text-white/30 text-xs uppercase tracking-widest">{post.date}</span>
              </div>
              
              <h4 className="text-3xl font-serif text-white mb-6 group-hover:text-gold transition-colors leading-tight">
                {post.title}
              </h4>
              <p className="text-white/60 mb-10 leading-relaxed italic line-clamp-2">
                {post.desc}
              </p>
              
              <button className="flex items-center gap-2 text-gold text-xs uppercase tracking-[0.4em] hover:gap-4 transition-all font-bold">
                {blogData.readMore} <BookOpen size={14} />
              </button>

              {/* Decorative Number */}
              <div className="absolute top-10 right-10 text-white/5 text-8xl font-serif select-none pointer-events-none group-hover:text-gold/5 transition-colors">
                0{post.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

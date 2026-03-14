import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-32 bg-heritage-black relative" id="about">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 1 }}
           viewport={{ once: true }}
        >
          <img src="/assets/hero.png" alt="Brand Logo" className="w-24 h-24 mx-auto mb-12 rounded-full border-2 border-gold grayscale" />
          <h2 className="text-gold text-sm tracking-[0.4em] uppercase mb-8">Our Mission</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-10 leading-relaxed italic">
            "To inspire a generation to wear their history with pride, bridging the distance between the ancients and the youth."
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Heritage was born from a simple observation: our history is beautiful, but it's often trapped in museums. We believe culture is alive. By integrating imperial motifs into contemporary street fashion, we make history wearable, relevant, and impossible to forget.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

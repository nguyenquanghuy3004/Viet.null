import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Collections from './sections/Collections';
import Timeline from './sections/Timeline';
import Showcase from './sections/Showcase';
import CulturalStory from './sections/CulturalStory';
import About from './sections/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-heritage-black text-white selection:bg-gold selection:text-heritage-black">
      <Navbar />
      
      <main>
        <Hero />
        <Collections />
        <Timeline />
        <Showcase />
        <CulturalStory />
        <About />
      </main>

      <Footer />
    </div>
  );
}

export default App;

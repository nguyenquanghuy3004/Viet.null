import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Collections from './sections/Collections';
import Timeline from './sections/Timeline';
import Showcase from './sections/Showcase';
import CulturalStory from './sections/CulturalStory';
import PatternExplainer from './sections/PatternExplainer';
import BlogPage from './sections/BlogPage';
import About from './sections/About';
import Footer from './components/Footer';
import Quiz from './sections/Quiz';
import CulturalMap from './sections/CulturalMap';
import DynastyView from './components/DynastyView';
import TryOnPage from './pages/TryOnPage';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [activeDynasty, setActiveDynasty] = useState(null);
  const [view, setView] = useState('landing'); // 'landing' or 'tryon'

  const handleSelectDynasty = (id) => {
    setActiveDynasty(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cinematic-gradient text-white selection:bg-gold selection:text-heritage-black scroll-smooth relative overflow-x-hidden">
        {/* Global Atmospheric Layers (Moved to z-[-1] for absolute safety) */}
        <div className="fixed inset-0 bg-noise pointer-events-none opacity-40 z-[-1]"></div>
        <div className="fixed inset-0 vignette-overlay pointer-events-none z-[-1] opacity-70"></div>
        <div className="fixed inset-0 gold-dust pointer-events-none z-[-1] opacity-20"></div>

        <div className="relative z-10">
          <Navbar onTryOnClick={() => setView('tryon')} onLogoClick={() => { setView('landing'); setActiveDynasty(null); }} />
        
        <AnimatePresence mode="wait">
          {view === 'tryon' ? (
            <TryOnPage key="tryon" />
          ) : !activeDynasty ? (
            <main key="landing">
              <Hero />
              <Collections onSelectDynasty={handleSelectDynasty} />
              <Timeline />
              <Showcase />
              <CulturalStory />
              <PatternExplainer />
              <CulturalMap />
              <Quiz onSelectDynasty={handleSelectDynasty} />
              <BlogPage />
              <About />
            </main>
          ) : (
            <DynastyView 
              key="dynasty"
              dynastyKey={activeDynasty} 
              onBack={() => setActiveDynasty(null)} 
            />
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </div>
  </LanguageProvider>
);
}

export default App;

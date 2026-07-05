import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Career from './components/Career';
import Projects from './components/Projects';
import Institute from './components/Institute';
import Contact from './components/Contact';
import { ArrowUp } from 'lucide-react';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-[#e2e8f0] font-sans selection:bg-[#00f0ff]/20">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Institute />
        <Career />
        <Projects />
        <Contact />
      </main>

      <footer className="py-12 bg-[#040914] border-t border-[#00f0ff]/10 text-center relative z-10">
        <div className="container mx-auto px-6 max-w-6xl flex justify-center items-center">
          <div className="text-gray-500 text-sm font-mono">
            &copy; {new Date().getFullYear()} <span className="text-[#00f0ff] font-sans font-bold">Amit Kumar</span>. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top Button */}
      {showScroll && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-tr from-[#00f0ff] to-[#0055ff] text-white shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 group border border-[#00f0ff]/30 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      )}
    </div>
  );
}

export default App;

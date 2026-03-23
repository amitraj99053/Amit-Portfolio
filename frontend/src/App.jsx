import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-[#e2e8f0] font-sans selection:bg-purple-500/30">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
      </main>
      <footer className="py-6 text-center text-sm opacity-50 border-t border-purple-500/20">
        <p>© {new Date().getFullYear()} Amit. Built with MERN Stack.</p>
      </footer>
    </div>
  );
}

export default App;

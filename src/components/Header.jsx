import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'INSTITUTE', href: '#institute' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'CAREER', href: '#career' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${isScrolled ? 'bg-[#040914]/90 backdrop-blur-md border-[#00f0ff]/20 py-4 shadow-[0_4px_30px_rgba(0,240,255,0.05)]' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-3xl font-black tracking-tighter">
          <span className="text-[#0055ff]">&lt;</span>
          <span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">AMIT</span>
          <span className="text-[#0055ff]"> /&gt;</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-xs font-bold uppercase tracking-[0.2em] hover:text-[#00f0ff] transition-colors relative group text-gray-300">
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00f0ff] to-[#0055ff] transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#00f0ff]"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white hover:text-[#00f0ff]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#040914]/95 backdrop-blur-xl border-b border-[#00f0ff]/20 py-8 flex flex-col items-center gap-8 md:hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-black uppercase tracking-[0.2em] text-white hover:text-[#00f0ff]"
              >
                {link.name}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

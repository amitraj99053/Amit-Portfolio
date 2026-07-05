import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const DEFAULT_AVATAR = "https://github.com/amitraj99053.png";

  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden relative min-h-screen flex items-center justify-center">
      {/* Background decorations matching reference */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00f0ff]/10 rounded-full blur-[120px] -z-10 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#0055ff]/10 rounded-full blur-[150px] -z-10 mix-blend-screen" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1"
          >
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/5 text-green-400 text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Available For New Opportunities
              </span>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block py-2 px-6 rounded-full border border-[#00f0ff]/40 bg-[#00f0ff]/5 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.1)]"
            >
              <span className="text-xs md:text-sm font-mono tracking-[0.2em] text-[#e2e8f0] uppercase">MERN Stack Developer | Software Engineer</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-black mb-8 tracking-tighter leading-none text-white drop-shadow-2xl">
              I'M <span className="text-neon inline-block" style={{ animation: 'glow 3s ease-in-out infinite alternate' }}>AMIT KUMAR</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto lg:mx-0 font-light tracking-wide">
              TECH ENTHUSIAST — Turning Ideas into <span className="text-white font-medium">Scalable Web Applications</span> and seamless digital experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center w-full sm:w-auto">
              <a href="#projects" className="button-neon px-10 py-4 w-full sm:w-auto text-center text-sm md:text-base">
                View My Work
              </a>
              <a href="#contact" className="hover:text-[#00f0ff] font-bold uppercase tracking-widest transition-colors flex items-center gap-2 group text-sm md:text-base">
                Let's Connect 
                <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
              </a>
            </div>
          </motion.div>

          {/* Right Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2"
          >
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-[#00f0ff] to-[#0055ff] shadow-[0_0_30px_rgba(0,240,255,0.2)] hover:shadow-[0_0_50px_rgba(0,240,255,0.4)] transition-all duration-500">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#040914] relative flex items-center justify-center">
                <img 
                  src={DEFAULT_AVATAR} 
                  alt="Amit Kumar" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

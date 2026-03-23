import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden relative min-h-screen flex items-center justify-center">
      {/* Background decorations matching reference */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00f0ff]/10 rounded-full blur-[120px] -z-10 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#0055ff]/10 rounded-full blur-[150px] -z-10 mix-blend-screen" />
      
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block py-2 px-6 rounded-full border border-[#00f0ff]/40 bg-[#00f0ff]/5 mb-10 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.1)]"
          >
            <span className="text-xs md:text-sm font-mono tracking-[0.2em] text-[#e2e8f0] uppercase">MERN Stack Developer | Software Engineer</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-black mb-8 tracking-tighter leading-none text-white drop-shadow-2xl">
            I'M <span className="text-neon inline-block" style={{ animation: 'glow 3s ease-in-out infinite alternate' }}>AMIT KUMAR</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-400 mb-14 max-w-3xl mx-auto font-light tracking-wide">
            TECH ENTHUSIAST — Turning Ideas into <span className="text-white font-medium">Scalable Web Applications</span> and seamless digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a href="#projects" className="button-neon px-10 py-4 w-full sm:w-auto text-center text-sm md:text-base">
              View My Work
            </a>
            <a href="#contact" className="hover:text-[#00f0ff] font-bold uppercase tracking-widest transition-colors flex items-center gap-2 group text-sm md:text-base">
              Let's Connect 
              <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

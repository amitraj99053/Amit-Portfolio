import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'Core: OOP, DBMS, OS, Data Structures', level: 85 },
    { name: 'Full Stack: MERN, REST APIs, JWT', level: 90 },
    { name: 'Languages: Java, JavaScript, Python, SQL', level: 85 },
    { name: 'Tools: Git, VS Code, Postman, Vercel', level: 80 }
  ];

  return (
    <section id="about" className="py-24 px-6 relative flex justify-center border-t border-[#00f0ff]/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            <span className="text-[#0055ff]">01. </span> 
            <span className="text-white">ABOUT ME</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00f0ff] to-[#0055ff] mx-auto rounded-full shadow-[0_0_15px_#00f0ff]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Bio aligned with reference style */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg leading-relaxed space-y-6"
          >
            <p>
              Hello! I'm <strong className="text-white">Amit Kumar</strong>, a passionate Computer Science student and Full Stack Developer. I enjoy architecting intuitive, fast, and secure digital experiences. 
            </p>
            <p>
              My journey into tech started with an immense curiosity about how applications run behind the scenes. Fast forward to today, I've hands-on experience building various MERN-stack projects, focusing heavily on performance and visually striking user interfaces.
            </p>
            <p>
              When I'm not coding, I'm usually solving complex DSA problems or learning about System Design and Cloud architectures.
            </p>
          </motion.div>

          {/* Skill Bars exactly like reference */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#040914]/80 p-10 rounded-3xl border border-[#00f0ff]/20 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f0ff]/10 rounded-full blur-[60px] pointer-events-none"></div>
            
            <h3 className="text-2xl font-bold mb-10 text-white tracking-widest uppercase">Technical Proficiency</h3>
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold text-sm text-gray-300 tracking-wide">{skill.name}</span>
                    <span className="text-xs text-[#00f0ff] font-mono tracking-widest">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-2 overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
                      className="bg-gradient-to-r from-[#00f0ff] to-[#0055ff] h-full rounded-full relative"
                    >
                      <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/30 blur-sm animate-[moveLight_2s_infinite]"></div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

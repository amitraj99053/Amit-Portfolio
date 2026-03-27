import React from 'react';
import { motion } from 'framer-motion';

const Career = () => {
  const careerAspirations = [
    {
      title: "MERN Stack Development",
      icon: "⚛️",
      description: "My primary objective is mastering the complete MERN lifecycle (MongoDB, Express, React, Node.js) to craft highly interactive, secure, and blazing-fast web applications. I aim to build rich, single-page interfaces powered by robust RESTful APIs."
    },
    {
      title: "Data Analysis",
      icon: "📊",
      description: "Beyond building software, my focus extends into Data Analysis. My aspiration is to extract, visualize, and transform complex raw data into actionable insights, driving crucial data-driven decisions that propel businesses forward."
    },
    {
      title: "Cloud & System Design",
      icon: "☁️",
      description: "I am deeply passionate about learning distributed systems, cloud infrastructure (AWS/GCP), and microservices architecture. My ultimate aspiration is to architect systems that effortlessly handle massive traffic with zero downtime."
    }
  ];

  return (
    <section id="career" className="py-24 px-6 relative flex justify-center border-t border-[#00f0ff]/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase">
            <span className="text-white">Career Path & Aspirations</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00f0ff] to-[#0055ff] mx-auto rounded-full shadow-[0_0_15px_#00f0ff]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {careerAspirations.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#040914]/80 p-10 rounded-3xl border border-[#00f0ff]/20 backdrop-blur-md hover:-translate-y-3 hover:shadow-[0_15px_30px_rgba(0,240,255,0.15)] hover:border-[#00f0ff]/50 transition-all duration-500 relative overflow-hidden group"
            >
              {/* Decorative top gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00f0ff] to-[#0055ff] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <div className="text-5xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00f0ff] transition-colors">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
              
              {/* Background ambient light */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#0055ff]/10 rounded-full blur-[40px] group-hover:bg-[#00f0ff]/20 transition-colors pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;

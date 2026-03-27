import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "Elevate Lab Pvt. Ltd.",
      duration: "May 2025 - June 2025",
      location: "Remote",
      description: "Spearheaded the development of a real-time collaboration tool using the MERN stack. Optimized complex MongoDB queries and utilized React best practices to improve frontend load performance by over 40%.",
      skills: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Git", "Tailwind CSS"]
    },
    {
      role: "Freelance Full Stack Developer",
      company: "Self-Employed",
      duration: "2024 - Present",
      location: "India",
      description: "Architecting and deploying tailored web solutions for diverse clients globally. Specializing in high-performance, SEO-optimized portfolio and business websites with a strong emphasis on user experience and modern design tokens.",
      skills: ["Next.js", "JavaScript", "Tailwind CSS", "Framer Motion", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative flex justify-center border-t border-[#0055ff]/10">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#00f0ff]/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            <span className="text-white">EXPERIENCE</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00f0ff] to-[#0055ff] mx-auto rounded-full shadow-[0_0_15px_#00f0ff]"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#040914]/80 p-8 md:p-10 rounded-3xl border border-[#0055ff]/20 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:border-[#00f0ff]/50 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00f0ff]/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#00f0ff] transition-colors flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-[#0055ff]" />
                    {exp.role}
                  </h3>
                  <p className="text-[#00f0ff] font-medium text-lg">{exp.company}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 text-gray-400 text-sm">
                  <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    <Calendar className="w-4 h-4 text-[#0055ff]" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    <MapPin className="w-4 h-4 text-[#0055ff]" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-8 text-base md:text-lg max-w-4xl">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                {exp.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-[#0055ff]/10 text-[#00f0ff] border border-[#0055ff]/30 rounded-lg group-hover:bg-[#00f0ff]/20 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Background ambient light */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#0055ff]/5 rounded-full blur-[80px] group-hover:bg-[#00f0ff]/10 transition-colors pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

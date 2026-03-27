import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications",
      institute: "GL Bajaj Institute of Technology and Management",
      duration: "2024 - 2026",
      description: "A final-year Master of Computer Applications (MCA) student with a strong foundation in software development, programming, and problem-solving. Skilled in technologies like Java, Python, Web Development (HTML, CSS, JavaScript, MERN stack), and database management systems.",
      gpa: "7.5 CGPA"
    },
    {
      degree: "Bachelor of Computer Applications",
      institute: "Vinoba Bhave University",
      duration: "2021 - 2024",
      description: "Successfully completed a Bachelor's in Computer Applications, building a strong foundation in core computer science subjects, including C/C++, Java, Database Management Systems, and Web & App Development. Developed various projects to strengthen practical programming skills.",
      gpa: "7.0 CGPA"
    }
  ];

  return (
    <section id="education" className="py-24 px-6 relative flex justify-center border-t border-[#0055ff]/10 bg-[#0b0f19]">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#0055ff]/10 rounded-full blur-[80px] pointer-events-none transform -translate-y-1/2"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            <span className="text-white">EDUCATION</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00f0ff] to-[#0055ff] mx-auto rounded-full shadow-[0_0_15px_#00f0ff]"></div>
        </motion.div>

        <div className="relative border-l-2 border-[#00f0ff]/30 ml-4 md:ml-12 pl-8 md:pl-12 space-y-16">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 bg-[#0b0f19] border-4 border-[#00f0ff] rounded-full shadow-[0_0_10px_#00f0ff]"></div>

              <div className="bg-[#040914]/80 p-8 md:p-10 rounded-2xl border border-[#0055ff]/20 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-[#00f0ff]/40 transition-all duration-300 group">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#00f0ff] transition-colors">{edu.degree}</h3>
                    <h4 className="text-lg text-gray-400 font-medium mt-1">{edu.institute}</h4>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#0055ff]/10 text-[#00f0ff] border border-[#00f0ff]/20 text-sm font-mono tracking-wider font-semibold">
                      {edu.duration}
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {edu.description}
                </p>

                <div className="flex items-center gap-3">
                  <span className="text-gray-500 uppercase text-xs font-bold tracking-widest">Score / GPA:</span>
                  <span className="text-white font-mono bg-white/5 px-3 py-1 rounded border border-white/10">{edu.gpa}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

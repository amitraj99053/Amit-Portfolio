import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, MapPin, Star } from 'lucide-react';

const Institute = () => {
  return (
    <section id="institute" className="py-24 px-6 relative overflow-hidden bg-[#040914]">
      {/* Background radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0055ff]/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter uppercase">
            <span className="text-[#0055ff]">Institutional</span> <span className="text-white">Highlights</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#00f0ff] to-[#0055ff] mx-auto rounded-full shadow-[0_0_15px_#00f0ff]"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Institute Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0b1221]/80 backdrop-blur-xl border border-[#00f0ff]/20 p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#00f0ff]/5 rounded-full blur-3xl -z-10 group-hover:bg-[#00f0ff]/10 transition-colors"></div>
            
            <div className="flex items-start gap-6 mb-8">
              <div className="p-4 bg-[#0055ff]/10 rounded-2xl border border-[#0055ff]/20 text-[#00f0ff]">
                <BookOpen size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">GL Bajaj Institute of Technology and Management</h3>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin size={16} className="text-[#0055ff]" />
                  Greater Noida, Uttar Pradesh
                </div>
              </div>
            </div>

            <div className="space-y-6 mb-10">
              <p className="text-gray-400 leading-relaxed">
                Currently pursuing a <span className="text-white font-semibold">Master of Computer Applications (MCA)</span> with a focus on advanced computing, software engineering, and emerging technologies. GL Bajaj is recognized for its excellence in engineering and management education.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="text-[#00f0ff] font-mono text-xl font-bold mb-1">Batch</div>
                  <div className="text-white text-sm">2024 - 2026</div>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="text-[#00f0ff] font-mono text-xl font-bold mb-1">Status</div>
                  <div className="text-white text-sm">Active (Final Year)</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-gray-500">
              <span className="flex items-center gap-2"><Star size={14} className="text-yellow-500" /> NAAC A+ Accredited</span>
              <span className="h-1 w-1 bg-gray-700 rounded-full"></span>
              <span className="flex items-center gap-2"><Award size={14} className="text-[#0055ff]" /> NIRF Ranked</span>
            </div>
          </motion.div>

          {/* Quick Stats/Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#00f0ff]/30 transition-all group"
            >
              <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00f0ff] rounded-full"></div>
                Curriculum
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Focused on MERN Stack, Cloud Computing, and advanced Data Structures to build industry-ready solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#00f0ff]/30 transition-all group"
            >
              <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00f0ff] rounded-full"></div>
                Innovation
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Active participant in technical symposiums and hackathons encouraged by the institute's incubation cell.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#00f0ff]/30 transition-all group"
            >
              <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00f0ff] rounded-full"></div>
                Achievements
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Maintaining a consistently strong academic record and leading collaborative student project teams.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#00f0ff]/30 transition-all group"
            >
              <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00f0ff] rounded-full"></div>
                Placement Preps
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Rigorous training in aptitude, problem-solving, and technical interviews as part of campus initiatives.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Institute;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      _id: '1',
      title: 'EduConnect Platform',
      description: 'A comprehensive MERN stack platform connecting students and mentors dynamically. Includes secure authentication, live chat, and payment gateway integration.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      _id: '2',
      title: 'Smart E-Commerce',
      description: 'An advanced e-commerce application with dynamic cart, Redux state management, custom admin dashboard, and robust REST API.',
      technologies: ['Vite React', 'Tailwind CSS', 'Mongoose', 'Redux'],
      githubLink: '#',
      liveLink: '#'
    }
  ]);

  useEffect(() => {
    fetch('http://localhost:5000/api/portfolio/projects')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) setProjects(data);
      })
      .catch(err => console.log('Using fallback projects...'));
  }, []);

  return (
    <section id="projects" className="py-24 px-6 relative bg-gradient-to-b from-[#040914] to-[#040914] border-t border-[#00f0ff]/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            <span className="text-[#0055ff]">02. </span> 
            <span className="text-white">FEATURED PROJECTS</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00f0ff] to-[#0055ff] mx-auto rounded-full shadow-[0_0_15px_#00f0ff]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-[#0b1221]/50 border border-[#00f0ff]/20 rounded-3xl p-8 group hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_20px_40px_rgba(0,85,255,0.15)] relative overflow-hidden backdrop-blur-sm"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#00f0ff]/5 rounded-full blur-[50px] group-hover:bg-[#00f0ff]/10 transition-colors"></div>
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="text-5xl font-black text-white/5 group-hover:text-[#00f0ff]/10 transition-colors">
                  0{idx + 1}
                </div>
                <div className="flex gap-4">
                  <a href={project.githubLink} className="text-gray-400 hover:text-white transition-colors hover:scale-110" title="GitHub Repo"><Github size={24} /></a>
                  <a href={project.liveLink} className="text-gray-400 hover:text-[#00f0ff] transition-colors hover:scale-110" title="Live Preview"><ExternalLink size={24} /></a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00f0ff] transition-colors relative z-10">{project.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-8 flex-grow relative z-10">{project.description}</p>
              
              <div className="flex flex-wrap gap-3 mt-auto relative z-10">
                {project.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="text-xs font-bold tracking-widest text-[#00f0ff] bg-[#00f0ff]/10 border border-[#00f0ff]/20 px-3 py-1 rounded-full uppercase">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

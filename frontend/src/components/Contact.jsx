import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden flex flex-col justify-center border-t border-[#00f0ff]/10 bg-[#040914]">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0055ff]/5 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            <span className="text-[#0055ff]">04. </span> 
            <span className="text-white">GET IN TOUCH</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00f0ff] to-[#0055ff] rounded-full shadow-[0_0_15px_#00f0ff]"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-0 bg-[#0b1221]/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-[#00f0ff]/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          
          {/* Contact Info Sidebar */}
          <div className="md:w-5/12 bg-[#0055ff]/5 p-12 flex flex-col justify-center relative overflow-hidden border-r border-[#00f0ff]/10">
            <div className="bg-[#00f0ff]/10 w-48 h-48 absolute -top-10 -right-10 rounded-full -z-10 blur-3xl"></div>
            
            <h3 className="text-3xl font-black text-white mb-10 tracking-wide">Contact Info</h3>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-white/5 border border-white/5 rounded-2xl text-[#00f0ff] group-hover:bg-[#00f0ff]/10 group-hover:border-[#00f0ff]/30 transition-all shadow-[0_0_10px_rgba(0,240,255,0)] group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"><Mail size={24} /></div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-mono mb-1">Mail Me</p>
                  <a href="mailto:amit@example.com" className="text-white font-semibold hover:text-[#00f0ff] transition-colors text-lg">amit@example.com</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-white/5 border border-white/5 rounded-2xl text-[#00f0ff] group-hover:bg-[#00f0ff]/10 group-hover:border-[#00f0ff]/30 transition-all shadow-[0_0_10px_rgba(0,240,255,0)] group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"><MapPin size={24} /></div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-mono mb-1">Location</p>
                  <p className="text-white font-semibold text-lg">India</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-white/5 border border-white/5 rounded-2xl text-[#00f0ff] group-hover:bg-[#00f0ff]/10 group-hover:border-[#00f0ff]/30 transition-all shadow-[0_0_10px_rgba(0,240,255,0)] group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"><Linkedin size={24} /></div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-mono mb-1">Professional</p>
                  <a href="#" className="text-white font-semibold hover:text-[#00f0ff] transition-colors text-lg">LinkedIn Profile</a>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <span className="inline-block py-2 px-4 rounded-full border border-green-500/50 bg-green-500/10 text-green-400 text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_10px_rgba(34,197,94,0.2)]">
                ● Open For Opportunities
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-7/12 p-12 md:p-16">
            <h3 className="text-3xl font-black text-white mb-3">Send me a message.</h3>
            <p className="text-gray-400 mb-10 text-lg">Have a question or a project in mind? Shoot me a message!</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full bg-[#040914]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00f0ff]/50 focus:bg-[#040914] focus:shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-all" />
                </div>
                <div>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full bg-[#040914]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00f0ff]/50 focus:bg-[#040914] focus:shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-all" />
                </div>
              </div>
              <div>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required className="w-full bg-[#040914]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00f0ff]/50 focus:bg-[#040914] focus:shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-all" />
              </div>
              <div>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message..." required rows="4" className="w-full bg-[#040914]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00f0ff]/50 focus:bg-[#040914] focus:shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="button-neon w-full flex justify-center items-center gap-3 text-lg py-4 mt-2">
                Send Message <Send size={20} />
              </button>
              
              {status && <p className="text-center mt-6 text-sm font-mono text-[#00f0ff] font-bold tracking-widest">{status}</p>}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

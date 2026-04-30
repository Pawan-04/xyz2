import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpeg';
import { Github, Linkedin, Mail, ArrowRight } from './Icons';

const Hero = () => {
  const skills = ['ServiceNow ITSM', 'Fullstack', 'Generative AI', 'NLP', 'Computer Vision','ML'];

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#fafafa] flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Background Architectural Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 w-full max-w-6xl px-8 flex flex-col md:flex-row items-center gap-16">
        
        {/* LEFT: The Identity Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          {/* Neon Border Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative w-64 h-64 md:w-80 md:h-96 rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
            <img 
              src={profile}
              alt="Pawan Kumar Pandey" 
              className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700 hover:scale-105"
              //grayscale 
            />
            {/* Overlay Gradient for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6">
               <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">Available for Hire</span>
               </div>
               <p className="text-white font-bold text-lg tracking-tight">Pawan Kumar Pandey</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: The Detail Section */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-blue-500 font-mono text-xs tracking-[0.4em] uppercase mb-6">// Full-Stack Architect</h2>
            
             <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
              Building <br />
              <span className="text-gray-500 italic font-serif">intelligent App.</span>
            </h1>

            <p className="max-w-xl text-gray-400 text-lg font-light leading-relaxed mb-10">
 I build full-stack web applications using the <span className="text-white font-medium">MERN stack</span> and explore adding <span className="text-white font-medium">AI features</span> to make them more useful.
</p>


            {/* INTEGRATED TECH BADGES */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-12">
              {skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-white/[0.03] border border-white/10 text-slate-300 text-[10px] font-bold uppercase tracking-widest rounded-lg hover:border-blue-500/50 hover:text-white transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* ACTION ROW */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-8">
              {/* <button className="group flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-blue-600 hover:text-white transition-all">
                Work History
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button> */}
              
              <div className="flex items-center gap-6 text-gray-500 border-l border-white/10 pl-8">
                <a href="https://github.com/Pawan-04" className="hover:text-white transition-colors"><Github size={20}/></a>
                <a href="https://www.linkedin.com/in/pawan-kumar-pandey-559134263?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="hover:text-white transition-colors"><Linkedin size={20}/></a>
                <a href="mailto:pawan4kp@gmail.com" className="hover:text-white transition-colors"><Mail size={20}/></a>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Decorative vertical "2026" text */}
      <div className="absolute right-12 bottom-12 hidden lg:block">
        <p className="text-[10px] font-mono text-gray-700 tracking-[1em] rotate-90 origin-right">
          BUILD.2026
        </p>
      </div>
    </div>
  );
};

export default Hero;
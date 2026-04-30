import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github } from './Icons';
import MoodyPlayer from '../assets/MoodyPlayer.png'
import CaptionGenerator from '../assets/CaptionGenerator.png'
import github from '../assets/github.png'

const projects = [
  {
    title: "Moody Player",
    desc: "Emotion-based music recommendation system that analyzes facial expressions in real-time and suggests songs accordingly.",
    tech: "React / Node.js / Express / MongoDB / face-api.js",
    gitlink:"https://github.com/Pawan-04/Song-Player-MoodDependent",
    link: "https://moody-player-frontend-d9wq.vercel.app/",
    image: MoodyPlayer
  },
  {
    title: "Image Caption Generator",
    desc: "AI-powered application that generates captions with emojis from uploaded images using modern LLM integration.",
    tech: "React / Node.js / Express / MongoDB / LLM API",
    gitlink:"https://github.com/Pawan-04/Mini-SocialMedia-AI-Integarted",
    link: "https://caption-generator-frontend-six.vercel.app/",
    image: CaptionGenerator
  },
  {
    title: "Hate Speech Detection",
    desc: "Machine learning model that classifies text into hate or non-hate speech using NLP techniques and SVM.",
    tech: "Python / NLP / Scikit-learn / SVM",
    gitlink: "https://github.com/Pawan-04/Hate-Speech-Detetction/blob/main/Pawan_Kumar_Pandey_S24mcag0015(hate_speech)/s24mcag0015(hate_speech).ipynb",
    image: github
  }
];

const Projects = () => {
  return (
    <section id="work" className="bg-[#050505] py-24 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.4em]">// Projects</h2>
            <div className="w-12 h-[1px] bg-white/20"></div>
          </div>
          <a href="#" className=" flex gap-3 text-[10px] uppercase tracking-widest text-slate-300 hover:text-white transition-colors">Top 
             <ArrowRight size={12} className="-rotate-90 group-hover:-translate-y-1 transition-transform" />
          </a>
          
        </div>

        {/* Side-by-Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex items-center gap-5 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-blue-500/20 transition-all duration-300"
            >
              {/* Small Thumbnail */}
              <div className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 shrink-0 overflow-hidden rounded-lg bg-neutral-900 border border-white/10">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Project Info */}
              <div className="flex-1 min-w-0 pr-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <span className="text-[9px] font-mono text-slate-300 uppercase tracking-tighter">{project.tech}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 font-light">
                  {project.desc}
                </p>
                
                {/* Links */}
                <div className="mt-4 flex items-center gap-4">
                  <a href={project.gitlink} target="_blank" className="text-slate-400 hover:text-white transition-colors">
                    <Github size={16} />
                  </a>
                  {project.link?<a href={project.link} target="_blank" className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-slate-400 hover:text-blue-400 transition-colors">
                    Deployment <ArrowRight size={12} />
                  </a> : ''}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

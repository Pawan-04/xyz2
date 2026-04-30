import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from './Icons'; // Using your local icons for consistency

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#050505] pt-24 pb-10 px-8 md:px-24 border-t border-white/5 overflow-hidden">
      
      {/* BACKGROUND TEXT (Watermark Style) */}
      <div className="absolute bottom-[-10%] right-[-5%] text-[15rem] font-black text-white/[0.02] pointer-events-none select-none">
        PAWAN.
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* BRAND & CONNECT */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold text-white tracking-tighter mb-8">
              P<span className="text-blue-500">.</span>
            </h2>
            <p className="text-slate-500 text-lg font-light leading-relaxed mb-10 max-w-sm">
  Building web applications and exploring AI-based features. 
   <span className="text-white"> - Delhi, India.</span>
</p>
            <div className="flex gap-6">
  {[
    { icon: <Github size={20} />, link: "https://github.com/Pawan-04" },
    { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/pawan-kumar-pandey-559134263?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { icon: <Mail size={20} />, link: "mailto:pawan4kp@gmail.com" }
  ].map((social, i) => (
    <a 
      key={i} 
      href={social.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-slate-500 hover:text-white transition-colors duration-300"
    >
      {social.icon}
    </a>
  ))}
</div>

          </div>

          {/* QUICK NAVIGATION */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-blue-500 font-bold mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#work" className="text-slate-500 hover:text-white transition-colors">Selected Work</a></li>
              <li><a href="#experience" className="text-slate-500 hover:text-white transition-colors">Career Path</a></li>
              <li><a href="#techstack" className="text-slate-500 hover:text-white transition-colors">Technical Stack</a></li>
              <li className="text-slate-700 cursor-not-allowed">Case Studies (Soon)</li>
            </ul>
          </div>

          {/* STATUS CARD (The Modern Polish) */}
          <div className="lg:col-span-4">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 relative group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] uppercase tracking-widest text-white font-bold">Open for Collaboration</span>
              </div>
              <p className="text-sm text-slate-500 font-light mb-8 italic">
                "Building intelligent applications, one solution at a time."
              </p>
              <a className="w-full flex items-center justify-between group/btn py-4 px-6 bg-white text-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-500"
              href ="https://drive.google.com/uc?export=download&id=17-XpYGpRnqQfLaDUA_gPMGvi7JJzgI9n" download>
                Download Resume
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* METADATA FOOTER */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8 text-[9px] font-mono text-slate-600 uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 bg-blue-500 rounded-full" /> 
              BUILD_V2.0.26
            </span>
            <span className="hidden md:inline">DEPLOYED_VIA_VERCEL</span>
          </div>

          <div className="text-slate-600 text-[10px] font-mono tracking-tighter">
            © 2026 PAWAN KUMAR PANDEY. ALL RIGHTS RESERVED.
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-slate-500 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest"
          >
            Top 
            <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center group-hover:border-white transition-colors">
              <ArrowRight size={12} className="-rotate-90 group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
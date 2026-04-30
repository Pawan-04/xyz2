import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-[#050505]">
      <div className="flex h-20 items-center">
        
        {/* BRAND SECTION */}
<div className="w-20 md:w-32 h-full flex items-center justify-center border-r border-white/5 relative group">
  
  {/* Glow background */}
  <div className="absolute w-10 h-10 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>

  {/* Letter */}
  <span className="text-white font-black text-xl md:text-2xl tracking-widest 
                   transition duration-300 
                   group-hover:scale-110 group-hover:text-blue-400">
    P.
  </span>

  {/* Bottom line animation */}
  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 
                  group-hover:w-full transition-all duration-500"></div>
</div>

        {/* LINKS SECTION - Flexible space */}
        <div className="flex-1 flex justify-center items-center gap-12 text-[10px] uppercase tracking-[0.4em] font-bold text-slate-300">
          <a href="#work" className="hover:text-blue-500 transition-colors hidden md:block">Projects</a>
          <a href="#experience" className="hover:text-blue-500 transition-colors hidden md:block">Career</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
        </div>

        {/* STATUS SECTION - Boxed with border */}
        <div className="hidden lg:flex h-full items-center px-10 border-l border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[9px] uppercase tracking-widest text-slate-300 font-bold">
              Available for Hire
            </span>
          </div>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="md:hidden flex h-full items-center px-6 border-l border-white/5 ml-auto">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none flex flex-col gap-1.5 z-[110]">
            <span className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
            <span className={`block w-6 h-[2px] bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-20 bg-[#050505]/95 backdrop-blur-md z-[100] border-t border-white/5"
          >
            <div className="flex flex-col items-center justify-center h-full gap-10 text-sm uppercase tracking-[0.4em] font-bold text-slate-300">
              <a href="#work" onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition-colors">Projects</a>
              <a href="#experience" onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition-colors">Career</a>
              <a href="#techstack" onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition-colors">Tech Stack</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition-colors">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
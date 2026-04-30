import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const techs = [
    { name: 'ServiceNow', icon: "https://simpleicons.org/icons/servicenow.svg" },
    { name: 'React', icon: "https://skillicons.dev/icons?i=react" },
    { name: 'Node.js', icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: 'MongoDB', icon: "https://skillicons.dev/icons?i=mongodb" },
    { name: 'Tailwind', icon: "https://skillicons.dev/icons?i=tailwind" },
    { name: 'JavaScript', icon: "https://skillicons.dev/icons?i=js" },
    { name: 'Express', icon: "https://skillicons.dev/icons?i=express" },
    { name: 'Python', icon: "https://skillicons.dev/icons?i=python" },
    { name: 'C++', icon: "https://skillicons.dev/icons?i=cpp" },
  ];

  const marqueeVariants = {
    animate: {
      x: [0, -1600], // Increased range to handle 3x duplication smoothly
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30, // Slightly slower for a more "premium" feel
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="py-24 bg-[#050505] overflow-hidden border-y border-white/5 " id='techstack' >
      <div className="max-w-7xl mx-auto px-6 mb-12 ">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-2">// Skills</h2>
            <h3 className="text-3xl font-bold text-white tracking-tighter">Technical Toolkit</h3>
          </div>
          <p className="text-slate-300 text-sm font-light max-w-xs md:text-right italic">
            Learning by building web applications and experimenting with new ideas.
          </p>
        </div>
      </div>

      {/* GRADIENT MASKING: This makes the edges fade in/out beautifully */}
      <div className="relative flex overflow-hidden w-full 
        before:absolute before:left-0 before:top-0 before:z-20 before:h-full before:w-32 before:bg-gradient-to-r before:from-[#050505] before:to-transparent 
        after:absolute after:right-0 after:top-0 after:z-20 after:h-full after:w-32 after:bg-gradient-to-l after:from-[#050505] after:to-transparent">
        
        <motion.div 
          className="flex whitespace-nowrap gap-6 py-4"
          variants={marqueeVariants}
          animate="animate"
        >
          {/* Tripled the list for a truly seamless infinite scroll */}
          {[...techs, ...techs, ...techs].map((tech, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 px-8 py-4 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-blue-500/20 transition-all duration-300 group"
            >
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className="w-7 h-7 object-contain grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
                style={tech.name === 'ServiceNow' ? { 
                  filter: 'invert(58%) sepia(19%) saturate(541%) hue-rotate(113deg) brightness(91%) contrast(88%)' 
                } : {}}
              />
              <span className="text-slate-300 font-bold uppercase text-[10px] tracking-[0.2em] group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
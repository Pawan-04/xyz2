import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  // Smooth progress bar simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 40); // Reaches 100% in approx 4-5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Grid (Matching your Hero) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 w-full max-w-xs px-6">
        {/* Branding reveal */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 text-center"
        >
          <h2 className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-2">// System Initialization</h2>
          <h1 className="text-white font-bold text-2xl tracking-tighter uppercase">
            Pawan Kumar Pandey
          </h1>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden mb-4">
          <motion.div 
            className="h-full bg-blue-600 shadow-[0_0_15px_#2563eb]"
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        {/* Technical Metadata */}
        <div className="flex justify-between font-mono text-[8px] text-gray-600 uppercase tracking-widest">
          <span>{progress}% Loaded</span>
          <span>Build.2026.V3</span>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
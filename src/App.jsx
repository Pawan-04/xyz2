import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import TechStack from './components/TechStack'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Services from './components/Services'
import Experience from './components/Experience'
import Education from './components/Education'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Keeps the loading screen visible for exactly 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen">
      {/* 1. The Loading Screen Layer */}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {/* 2. The Main Portfolio Layer */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col gap-20"
        >
          <Navbar />
          <Hero />
          <Services />
          <Experience />
          <Education />
          <TechStack />
          <Projects />
          <Footer />
        </motion.div>
      )}
    </div>
  )
}

export default App
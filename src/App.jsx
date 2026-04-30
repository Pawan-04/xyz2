import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import TechStack from './components/TechStack'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Services from './components/Services'
import Experience from './components/Experience'
import Education from './components/Education'

function App() {
  return (
    <div className="bg-[#050505] flex flex-col gap-20 ">
      <Navbar/>
      <Hero/>
      <Services/>
      <Experience/>
      <Education/>
      <TechStack/>
    <Projects/>
      <Footer/>
    </div>
  )
}

export default App

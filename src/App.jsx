import React, { useState, useEffect } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import SkillsAndEducation from './components/SkillsAndEducation'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true);

  // Once preloader finishes, we allow scrolling again
  useEffect(() => {
    if (loading) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [loading]);

  return (
    <>
      <Preloader onComplete={() => setLoading(false)} />
      
      {!loading && (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Hero />
          <About />
          <Service />
          <SkillsAndEducation />
          <Experience />
          <Projects />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App

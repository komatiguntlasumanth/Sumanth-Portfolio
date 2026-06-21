import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ChevronDown } from 'lucide-react';
import profilePic from '../assets/My_photo.jpeg';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="home" className="relative w-full h-screen flex items-center overflow-hidden bg-[#FF2A2A]">


      <div className="container relative z-10 w-full h-full flex flex-col justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full mt-20">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-6">
              <span className="block text-white">Hi, I'm a</span>
              <motion.span 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="block uppercase text-6xl md:text-8xl mt-2 premium-text-gradient"
              >
                Full Stack Web Developer
              </motion.span>
            </h1>
            
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-lg font-medium drop-shadow-md">
              I build fast, scalable, and creative web applications using HTML, CSS, JavaScript, React, Java, Spring Boot, MySQL Database and other modern technologies.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#projects" 
                className="px-8 py-3.5 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-transform"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3.5 glass border border-white/30 text-white rounded-full font-bold text-sm hover:bg-white/10 transition-all"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right Side - Video Profile Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex-shrink-0 mt-16 md:mt-0 md:mr-12 flex flex-col items-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.3)] mb-4">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                loop
                playsInline
                poster={profilePic}
              >
                {/* You will add your AI generated video source here */}
                <source src="/intro-video.mp4" type="video/mp4" />
              </video>
              
              <div className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
                <button 
                  onClick={toggleVideo}
                  className="w-20 h-20 rounded-full glass border border-white/40 flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 fill-white" />
                  ) : (
                    <Play className="w-8 h-8 ml-1 fill-white" />
                  )}
                </button>
              </div>
            </div>
            
            <span className="text-xs font-bold tracking-[0.2em] text-white uppercase">
              {isPlaying ? 'Pause' : 'Play Intro Video'}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white/70 w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

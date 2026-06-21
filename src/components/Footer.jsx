import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="contact" className="w-full min-h-[50vh] bg-[#111111] text-[#F4F4F4] pt-24 pb-10 flex flex-col justify-between relative overflow-hidden z-20">
      <div className="container mx-auto px-6 flex-1 flex flex-col justify-between">
        
        {/* Top Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Left Column: Creative Services */}
          <div className="flex flex-col gap-3 font-mono text-sm tracking-widest uppercase text-[#D4D4D4]">
            <p className="hover:text-white transition-colors cursor-pointer">Full Stack Web Developer</p>
            <p className="hover:text-white transition-colors cursor-pointer">Java & Spring Boot</p>
            <p className="hover:text-white transition-colors cursor-pointer">React & Node.js</p>
            <p className="hover:text-white transition-colors cursor-pointer">MySQL & Databases</p>
          </div>

          {/* Center Column: Experience */}
          <div className="flex flex-col items-start md:items-center text-center">
            <h4 className="text-xl md:text-2xl font-light mb-4">Fresher</h4>
            <a 
              href="#projects" 
              className="text-lg relative inline-block group"
            >
              View Work
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-300"></span>
            </a>
          </div>

          {/* Right Column: Availability */}
          <div className="flex flex-col items-start md:items-end font-mono text-sm uppercase text-[#D4D4D4] tracking-wider gap-2">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#FF2A2A] animate-pulse"></span>
              Available Worldwide
            </div>
            <p className="mt-2">© {new Date().getFullYear()}</p>
          </div>
        </div>

        {/* Center Hero Branding */}
        <div className="w-full flex justify-center items-center my-10 overflow-hidden">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] leading-none font-black tracking-tighter text-[#E5E5E5] select-none"
          >
            Thank You
          </motion.h1>
        </div>

        {/* Bottom Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-white/10 mt-auto text-sm font-mono text-[rgba(255,255,255,0.6)]">
          {/* Left */}
          <div className="flex flex-col gap-2">
            <a href="#contact" className="hover:text-white transition-colors w-fit">Contact</a>
            <p>Built with React & Vite</p>
          </div>

          {/* Center */}
          <div className="flex justify-start md:justify-center">
            <a 
              href="mailto:komatiguntlasumanths@gmail.com" 
              className="text-[#F4F4F4] text-lg hover:text-[#FF2A2A] transition-colors relative group w-fit"
            >
              komatiguntlasumanths@gmail.com
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#FF2A2A] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Right */}
          <div className="flex justify-start md:justify-end">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

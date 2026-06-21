import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/My_Professional_Passport_photo.jpg';

const About = () => {
  return (
    <section id="about" className="relative w-full min-h-screen bg-[#FF2A2A] pt-24 pb-40 overflow-hidden z-10">
      
      {/* Decorative floating stars */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-20 text-black text-4xl"
      >
        ✦
      </motion.div>
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-40 left-10 text-black text-6xl"
      >
        ✦
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 h-full flex flex-col md:flex-row items-center justify-center gap-16">
        
        {/* Left Column: ID Badge */}
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center pt-10"
        >
          <div className="relative group">
            {/* Lanyard Line */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-4 h-40 bg-[#111] rounded-t-full z-0 origin-top">
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-6 bg-zinc-800 rounded shadow-md border-b-2 border-zinc-600"></div>
            </div>
            
            {/* ID Card */}
            <motion.div 
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="relative z-10 w-72 h-96 bg-zinc-900 rounded-[2rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col items-center justify-start transform -rotate-3 transition-all duration-300"
            >
              <div className="w-16 h-2 bg-zinc-800 rounded-full mb-6 mt-2"></div>
              {/* Photo Area */}
              <div className="w-full h-48 bg-zinc-800 rounded-2xl mb-4 overflow-hidden border-2 border-zinc-700">
                 <img src={profilePic} alt="Profile Photo" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-white font-bold text-xl uppercase tracking-wider mt-2">SUMANTH</h3>
              <p className="text-[#FF2A2A] font-mono text-xs mt-1">DEVELOPER PASS</p>
              <div className="mt-auto w-full flex justify-between items-center opacity-50">
                 <div className="text-xs text-white font-mono">ID: 0042</div>
                 <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                 </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-6xl md:text-8xl font-black text-black mb-6 tracking-tight">Hello!</h2>
          
          <p className="text-white text-lg md:text-xl leading-relaxed mb-6">
            I am <span className="text-black font-bold uppercase text-2xl">Sumanth</span>, a Full Stack Web Developer with hands-on experience in building scalable web applications using Java, Spring Boot, React, and MySQL. Skilled in developing REST APIs, implementing JWT authentication and RBAC.
          </p>

          <p className="text-[#ffe0e0] text-lg leading-relaxed mb-12">
            Experienced in AI-powered recommendation systems using cosine similarity and optimizing application performance with JVM tuning.
          </p>

          {/* Technology Skills */}
          <div className="flex flex-wrap gap-5 items-center">
             {/* Java */}
             <motion.div whileHover={{ scale: 1.1, y: -10 }} className="flex flex-col items-center gap-2 drop-shadow-2xl">
               <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" className="w-10 h-10 opacity-90" />
               </div>
               <span className="text-white/70 text-[10px] font-bold tracking-wider uppercase">Java</span>
             </motion.div>
             {/* Spring Boot */}
             <motion.div whileHover={{ scale: 1.1, y: -10 }} className="flex flex-col items-center gap-2 drop-shadow-2xl">
               <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="Spring Boot" className="w-10 h-10 opacity-90" />
               </div>
               <span className="text-white/70 text-[10px] font-bold tracking-wider uppercase">Spring</span>
             </motion.div>
             {/* React */}
             <motion.div whileHover={{ scale: 1.1, y: -10 }} className="flex flex-col items-center gap-2 drop-shadow-2xl">
               <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="w-10 h-10 opacity-90" />
               </div>
               <span className="text-white/70 text-[10px] font-bold tracking-wider uppercase">React</span>
             </motion.div>
             {/* MySQL */}
             <motion.div whileHover={{ scale: 1.1, y: -10 }} className="flex flex-col items-center gap-2 drop-shadow-2xl">
               <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" className="w-10 h-10 opacity-90" />
               </div>
               <span className="text-white/70 text-[10px] font-bold tracking-wider uppercase">MySQL</span>
             </motion.div>
             {/* JavaScript */}
             <motion.div whileHover={{ scale: 1.1, y: -10 }} className="flex flex-col items-center gap-2 drop-shadow-2xl">
               <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-10 h-10 opacity-90 rounded" />
               </div>
               <span className="text-white/70 text-[10px] font-bold tracking-wider uppercase">JS</span>
             </motion.div>
             {/* HTML5 */}
             <motion.div whileHover={{ scale: 1.1, y: -10 }} className="flex flex-col items-center gap-2 drop-shadow-2xl">
               <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" className="w-10 h-10 opacity-90" />
               </div>
               <span className="text-white/70 text-[10px] font-bold tracking-wider uppercase">HTML</span>
             </motion.div>
             {/* CSS3 */}
             <motion.div whileHover={{ scale: 1.1, y: -10 }} className="flex flex-col items-center gap-2 drop-shadow-2xl">
               <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" className="w-10 h-10 opacity-90" />
               </div>
               <span className="text-white/70 text-[10px] font-bold tracking-wider uppercase">CSS</span>
             </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Torn Paper Divider Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 translate-y-[2px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[150px]">
          <path d="M0,0 L0,120 L1200,120 L1200,0 C1000,50 800,20 600,60 C400,100 200,40 0,0 Z" fill="#ffffff"></path>
        </svg>
      </div>

    </section>
  );
};

export default About;

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  { id: 1, title: 'Define', desc: 'We align on goals and outline the exact roadmap to success.', position: 'top-right', rotate: '3deg' },
  { id: 2, title: 'Design', desc: 'Crafting pixel-perfect prototypes with premium aesthetics.', position: 'left-side', rotate: '-2deg' },
  { id: 3, title: 'Build', desc: 'Developing robust, scalable solutions using modern tech stacks.', position: 'right-side', rotate: '2deg' },
  { id: 4, title: 'Launch', desc: 'Deploying the final product with seamless performance.', position: 'bottom-left', rotate: '-3deg' },
];

const Service = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Calculate the SVG path length animation based on scroll
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" ref={containerRef} className="relative w-full py-32 bg-white z-10">
      {/* Light gray grid background */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center max-w-3xl mb-32 relative">
          <div className="inline-block px-4 py-1.5 rounded-full border border-black/10 bg-white shadow-sm mb-6 font-medium text-sm text-black uppercase tracking-wide">
            How we work
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-black leading-tight tracking-tight">
            Let us show you how we drive your brand to new heights
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-xl mx-auto">
            A streamlined process designed to turn complex problems into elegant digital solutions.
          </p>
          {/* Hand drawn arrow placeholder */}
          <div className="absolute -right-12 top-20 text-[#FF2A2A] text-4xl transform rotate-45 md:block hidden">
            ↘
          </div>
        </div>

        {/* Timeline Area */}
        <div className="relative w-full max-w-5xl mx-auto">
          
          {/* The S-Curve SVG Timeline */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-4 hidden md:block">
            <svg width="200" height="100%" viewBox="0 0 200 1200" className="absolute left-1/2 -translate-x-1/2 overflow-visible" preserveAspectRatio="none">
              <motion.path
                d="M100,0 C100,200 180,300 180,500 C180,700 20,800 20,1000 C20,1100 100,1150 100,1200"
                fill="none"
                stroke="#FF2A2A"
                strokeWidth="4"
                strokeDasharray="10 10"
                style={{ pathLength }}
              />
              <path
                d="M100,0 C100,200 180,300 180,500 C180,700 20,800 20,1000 C20,1100 100,1150 100,1200"
                fill="none"
                stroke="#000000"
                strokeWidth="4"
                strokeDasharray="10 10"
                className="opacity-10"
              />
            </svg>
          </div>

          {/* Process Cards */}
          <div className="flex flex-col gap-24 md:gap-40 w-full relative pt-10">
            {steps.map((step, index) => {
              // Calculate when this card should become active
              const start = index * 0.25;
              const end = start + 0.1;
              const isActive = useTransform(scrollYProgress, [start, end], [0, 1]);
              
              // We convert the motion value to a color string in render or use simple hook.
              // For simplicity, we use framer motion color interpolation or opacity overlays.
              
              const isEven = index % 2 === 0;

              return (
                <div key={step.id} className={`w-full flex ${isEven ? 'md:justify-start' : 'md:justify-end'} justify-center`}>
                  <motion.div
                    style={{ 
                      // Simple toggle class effect based on scroll position could be complex with useTransform output
                      // We'll use a local component or useTransform for background color.
                      backgroundColor: useTransform(scrollYProgress, [start, end], ['#ffffff', '#FF2A2A']),
                      color: useTransform(scrollYProgress, [start, end], ['#000000', '#ffffff'])
                    }}
                    className={`relative w-full md:w-[45%] p-10 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col`}
                    initial={{ opacity: 0, y: 50, rotate: 0 }}
                    whileInView={{ opacity: 1, y: 0, rotate: step.rotate }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring" }}
                  >
                    {/* Hole Punch */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-inner border border-gray-200"></div>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-1 h-6 bg-gray-300"></div>

                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-3xl font-bold">{step.title}</h3>
                      <span className="text-5xl font-serif italic opacity-30 leading-none">0{step.id}</span>
                    </div>
                    <p className="text-lg opacity-80 leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-40 text-center">
          <motion.div 
            initial={{ rotate: -5, opacity: 0 }}
            whileInView={{ rotate: -5, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-10 py-6 bg-yellow-100 shadow-md border border-yellow-200 transform -rotate-3"
            style={{ borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}
          >
            <h4 className="text-4xl font-serif italic text-black whitespace-nowrap">Ready to be delivered!</h4>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Service;

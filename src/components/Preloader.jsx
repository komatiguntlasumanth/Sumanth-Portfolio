import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Wait for the text fill + pause, then trigger the shutter
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1500); // 1s fill + ~0.5s pause

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isAnimating && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100000] flex items-center justify-center bg-[#FF2A2A]"
        >
          {/* Logo container to handle exit scale/fade */}
          <motion.div
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative text-6xl md:text-8xl font-black tracking-tighter"
          >
            {/* Background Text (Dark Transparent) */}
            <span className="text-black/20 absolute inset-0 flex items-center justify-center pointer-events-none">
              Sumanth.
            </span>

            {/* Foreground Text (White) - Water fill effect */}
            <motion.div
              initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
              animate={{ clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)' }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="text-white relative z-10 flex items-center justify-center whitespace-nowrap"
            >
              Sumanth.
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

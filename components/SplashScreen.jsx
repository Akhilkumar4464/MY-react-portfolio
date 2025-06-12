import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      repeat : Infinity,
      staggerChildren: 0.3, 
      delayChildren: 0.2,
      duration: 1
    } 
  },
  exit: { opacity: 0, transition: { duration: 0.5 } }
};

const textVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: 0 },
  visible: { opacity: 1, scale: 1.2, rotate: 360, transition: { duration: 1, repeat: Infinity, ease: "easeInOut" } }
};

function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h1
        className="text-white text-5xl font-extrabold"
        variants={textVariants}

      >
        Loading...
      </motion.h1>
    </motion.div>
  );
}

export default SplashScreen;

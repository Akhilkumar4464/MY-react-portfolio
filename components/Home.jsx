import Textchanger from './Textchanger'
import { motion } from 'motion/react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Home() {
  return (
    <motion.div
      className="h-screen w-full mt-2 text-white flex flex-col md:flex-row items-start justify-between p-4 sm:p-6 md:p-20 animate-fadeIn bg-gradient-to-r from-slate-500 to-slate-900 bg-opacity-80 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl transition-all duration-700 ease-in-out md:fixed"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="w-full md:w-1/2 pt-6 md:pt-10 flex flex-col items-start justify-center space-y-4 sm:space-y-6"
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <span className="mb-3 sm:mb-5 h-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide hover-underline cursor-pointer drop-shadow-lg">
            <Textchanger />
          </h1>
        </span>
        <motion.p
          className="text-base sm:text-xl mt-2 sm:mt-3 md:text-2xl leading-relaxed drop-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          A passionate web developer with a knack for creating dynamic and responsive web applications.
        </motion.p>
        <motion.p
          className="text-base sm:text-xl md:text-2xl leading-relaxed drop-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          I love coding and I'm always eager to learn new technologies.
        </motion.p>
        <motion.p
          className="text-xs sm:text-sm md:text-2xl italic text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          Let's connect and build something amazing together!
        </motion.p>
        <motion.button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 border-none focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-sm sm:text-base px-5 sm:px-7 py-2 sm:py-3 text-center shadow-md sm:shadow-lg transition-all duration-300 transform hover:scale-105"
          onClick={() => window.location.href = '/#/about'}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          About Me
        </motion.button>
        <motion.div
          className="flex space-x-4 sm:space-x-6 mt-3 sm:mt-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-2 sm:p-4 rounded-lg sm:rounded-xl w-max shadow-md sm:shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white text-xl sm:text-2xl transition-transform transform hover:scale-125 hover:text-yellow-300 hover:rotate-12"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-white text-xl sm:text-2xl transition-transform transform hover:scale-125 hover:text-cyan-300 hover:-rotate-12"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white text-xl sm:text-2xl transition-transform transform hover:scale-125 hover:text-pink-300 hover:rotate-6"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white text-xl sm:text-2xl transition-transform transform hover:scale-125 hover:text-blue-300 hover:-rotate-6"
          >
            <FaLinkedinIn />
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2 flex items-center justify-center bg-transparent mt-6 md:mt-0"
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className="relative group"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 rounded-full blur-lg sm:blur-xl opacity-60 group-hover:opacity-90 transition-all duration-500 animate-pulse"></div>
          <img
            src="assests/akhil.jpg"
            alt="Akhil's Portfolio"
            className="relative z-10 shadow-xl sm:shadow-2xl mt-4 sm:mt-10 transition-transform duration-700 ease-in-out hover:scale-110 hover:rotate-3 animate-fadeInUp w-80 h-80 sm:w-80 sm:h-80 md:w-80 md:h-80 object-cover rounded-full border-4 sm:border-8 border-white/20"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Home

import Textchanger from './Textchanger';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


function Home({ theme }) {
  const isLight = theme === 'light';

  return (
    <div
      className={
        "h-screen w-full mt-2 flex flex-col md:flex-row items-start justify-between p-4 sm:p-6 md:p-20  shadow-xl sm:shadow-2xl transition-all duration-700 ease-in-out " +
        (isLight ? "bg-gray-100 text-gray-900" : "bg-gradient-to-r from-slate-500 to-slate-900 bg-opacity-80 text-white")
      }
    >
      
      <div
        className={
          "w-full md:w-1/2 pt-6 md:pt-10 flex flex-col items-start justify-center space-y-4 sm:space-y-6 " +
          (isLight ? "text-gray-900" : "")
        }
      >
        <span className="mb-3 sm:mb-5 h-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide hover-underline cursor-pointer drop-shadow-lg">
            <Textchanger />
          </h1>
        </span>
        <p className="text-base sm:text-xl mt-2 sm:mt-3 md:text-2xl leading-relaxed drop-shadow">
          A passionate web developer with a knack for creating dynamic and responsive web applications.
        </p>
        <p className="text-base sm:text-xl md:text-2xl leading-relaxed drop-shadow">
          I love coding and I'm always eager to learn new technologies.
        </p>
        <p className={"text-xs sm:text-sm md:text-2xl italic " + (isLight ? "text-gray-600" : "text-gray-300")}>
          Let's connect and build something amazing together!
        </p>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 border-none focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-sm sm:text-base px-5 sm:px-7 py-2 sm:py-3 text-center shadow-md sm:shadow-lg transition-all duration-300 transform hover:scale-105"
          onClick={() => window.location.href = '#about'}
        >
          About Me
        </button>
        <div className="flex space-x-4 sm:space-x-6 mt-3 sm:mt-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-2 sm:p-4 rounded-lg sm:rounded-xl w-max shadow-md sm:shadow-xl">
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
        </div>
      </div>
      <div
        className="w-full md:w-1/2 flex items-center justify-center bg-transparent mt-6 md:mt-0"
      >
        <div
          className="relative group"
        >
          <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 rounded-full blur-lg sm:blur-xl opacity-60 group-hover:opacity-90 transition-all duration-500 animate-pulse"></div>
          <img
            src="\assests\akhil.jpg"
            alt="Akhil's Portfolio"
            className="relative z-10 shadow-xl sm:shadow-2xl mt-4 sm:mt-10 transition-transform duration-700 ease-in-out hover:scale-110 hover:rotate-3 animate-fadeInUp w-80 h-80 sm:w-80 sm:h-80 md:w-80 md:h-80 object-cover rounded-full border-4 sm:border-8 border-white/20"
          />
        </div>
      </div>
    </div>
  )
}

export default Home

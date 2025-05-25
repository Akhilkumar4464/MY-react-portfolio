import Textchanger from '../../Textchanger'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
 

function Home() {
  return (
    <div className="h-screen w-full mt-4 text-white flex items-start justify-between p-10 md:p-20 animate-fadeIn flex-col md:flex-row bg-transparent bg-opacity-30  rounded-lg  transition-all duration-500 ease-in-out md:fixed">
       
      <div className="md:w-1/2 md:pt-10 flex flex-col items-start justify-center space-y-6">
       <span className='mb-{20px} h-8  '><h1 className="text-4xl md:text-6xl font-extrabold tracking-wide hover-underline cursor-pointer">
       <Textchanger/>
        </h1>
        </span> 
        <p className="text-xl mt-3 md:text-2xl leading-relaxed ">
          A passionate web developer with a knack for creating dynamic and responsive web applications.
        </p>
        <p className="text-xl md:text-2xl leading-relaxed">
          I love coding and I'm always eager to learn new technologies.
        </p>
        <p className="text-sm md:text-2xl italic text-gray-300">
          Let's connect and build something amazing together!
        </p>

      
       <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800" onClick={() => window.location.href='/about'}> about us </button>
       
        <div className=" flex space-x-6 mt-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-4 rounded-lg w-max shadow-lg">
         
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="text-white text-2xl transition-transform transform hover:scale-125 hover:text-yellow-300 hover:animate-spin"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="text-white text-2xl transition-transform transform hover:scale-125 hover:text-cyan-300  hover:animate-spin"
      >
        <FaTwitter />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="text-white text-2xl transition-transform transform hover:scale-125 hover:text-pink-300 hover:animate-spin"
      >
        <FaInstagram />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-white text-2xl transition-transform transform hover:scale-125 hover:text-blue-300 hover:animate-spin"
      >
        <FaLinkedinIn />
      </a>


 
        </div>
      </div> 
      <div className=" md:w-1/2 flex items-center justify-center  bg-transparent">
        <img
          src="https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Akhil's Portfolio"
          className=" rounded-lg shadow-lg  mt-10 transition-transform duration-500 ease-in-out transform hover:scale-105 md:w-3/4 md:h-auto"
        />
        </div>
    </div>
  )
}

export default Home

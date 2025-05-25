import React from 'react'
import { NavLink } from 'react-router-dom'




const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)
   

  return (
    <nav className=" text-white px-10 pt-6 flex justify-between items-center flex-wrap md:items-center md:px-20" role="navigation" aria-label="Main navigation">
      <span className="text-xl md:4xl text-white font-bold tracking-wide"> AKHIL'S PORTFOLIO</span>

      <div className="flex items-center space-x-4 bg-transparent backdrop-blur-xl md:bg-transparent md:space-x-6">
        <ul
          className={`${
            menuOpen ? 'block' : 'hidden'
          } mx-4 py-2 font-semibold md:mt-5 bg-transparent backdrop-blur-xl px-2 rounded-2xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:flex gap-6`}
          id="primary-navigation"
          aria-label="Primary"
          role="menu"
        >
          <li className="inline-block px-4 py-2 hover:animate-pulse " role="none">
            <NavLink to="/" role="menuitem" tabIndex={menuOpen ? 0 : -1}>Home</NavLink>
          </li>
          <li className="inline-block px-4 py-2 hover:animate-pulse" role="none">
            <NavLink to="/about" role="menuitem" tabIndex={menuOpen ? 0 : -1}>About</NavLink>
          </li>
          <li className="inline-block px-4 py-2 hover:animate-pulse" role="none">
            <NavLink to="/projects" role="menuitem" tabIndex={menuOpen ? 0 : -1}>Projects</NavLink>
          </li>
          <li className="inline-block px-4 py-2 hover:animate-pulse" role="none">
            <NavLink to="/contact" role="menuitem" tabIndex={menuOpen ? 0 : -1}>Contact</NavLink>
          </li>
        </ul>
        
       <div className=" flex-row md:flex  items-center space-x-4"> 
         <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          className="text-white md:hidden flex-col items-center justify-center bg-black bg-opacity-30 rounded-full p-2 hover:bg-opacity-50 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => setMenuOpen(!menuOpen)}
          > <img src="\akhil-portflio\src\assets\menu_open_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png" alt="" aria-hidden="true" /> <span className="sr-only">Show menu</span> </button></div>
      </div>
      
    </nav>
    
  )
}

export default Header

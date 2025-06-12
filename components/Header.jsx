import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  // Close menu on nav click (for mobile)
  const handleNavClick = () => setMenuOpen(false)

  return (
    <nav className="w-full text-white px-4 sm:px-8 md:px-20 pt-6 flex justify-between items-center flex-wrap" role="navigation" aria-label="Main navigation">
      <span className="text-lg sm:text-xl md:text-4xl font-bold tracking-wide">AKHIL'S PORTFOLIO</span>

      {/* Hamburger Button */}
      <button
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        className="md:hidden flex items-center bg-black bg-opacity-30 rounded-full p-2 hover:bg-opacity-50 transition duration-300 focus:outline-none focus:ring-2 focus:ring-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img src="../../assets/menu_open_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png" alt="" aria-hidden="true" />
        <span className="sr-only">Show menu</span>
      </button>

      {/* Navigation Links */}
      <ul
        className={`
          fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex-col items-center justify-center gap-8 z-40
          transition-transform duration-300 ease-in-out
          ${menuOpen ? 'flex' : 'hidden'}
          md:static md:flex md:flex-row md:bg-transparent md:w-auto md:h-auto md:gap-6 md:items-center
        `}
        id="primary-navigation"
        aria-label="Primary"
        role="menu"
      >
        <li className="px-4 py-2 hover:animate-pulse" role="none">
          <NavLink to="/" role="menuitem" onClick={handleNavClick}>Home</NavLink>
        </li>
        <li className="px-4 py-2 hover:animate-pulse" role="none">
          <NavLink to="/about" role="menuitem" onClick={handleNavClick}>About</NavLink>
        </li>
        <li className="px-4 py-2 hover:animate-pulse" role="none">
          <NavLink to="/projects" role="menuitem" onClick={handleNavClick}>Projects</NavLink>
        </li>
        <li className="px-4 py-2 hover:animate-pulse" role="none">
          <NavLink to="/contact" role="menuitem" onClick={handleNavClick}>Contact</NavLink>
        </li>
        {/* Close button for mobile menu */}
        <button
          className="absolute top-6 right-6 md:hidden text-white text-2xl"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          &times;
        </button>
      </ul>
    </nav>
  )
}

export default Header

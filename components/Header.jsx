import React from 'react'

const Header = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)



  // Scroll to section smoothly
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

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
        className={
          "fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex-col items-center justify-center gap-8 z-40 " +
          (menuOpen ? "flex" : "hidden") +
          " md:static md:flex md:flex-row md:bg-transparent md:w-auto md:h-auto md:gap-6 md:items-center"
        }
        id="primary-navigation"
        aria-label="Primary"
        role="menu"
      >
        <li className="px-4 py-2 hover:animate-pulse" role="none">
          <button role="menuitem" onClick={() => scrollToSection('home')}>Home</button>
        </li>
        <li className="px-4 py-2 hover:animate-pulse" role="none">
          <button role="menuitem" onClick={() => scrollToSection('about')}>About</button>
        </li>
        <li className="px-4 py-2 hover:animate-pulse" role="none">
          <button role="menuitem" onClick={() => scrollToSection('projects')}>Projects</button>
        </li>
        <li className="px-4 py-2 hover:animate-pulse" role="none">
          <button role="menuitem" onClick={() => scrollToSection('contact')}>Contact</button>
        </li>
        {/* Dark/Light Mode Toggle Button */}
        <li className="px-4 py-2 hover:animate-pulse" role="none">
          <button
            role="menuitem"
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            className="bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-800 px-3 py-1 rounded-full  flex items-center justify-center"
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.485-8.485h-1M4.515 12.515h-1m15.364 4.95l-.707-.707M6.343 6.343l-.707-.707m12.728 12.728l-.707-.707M6.343 17.657l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
              </svg>
            )}
          </button>
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

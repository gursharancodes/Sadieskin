import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { navLinks } from '../../constants'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  const closeMobileMenu = () => {
    setIsOpen(false)
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <nav className='fixed top-0 left-0 w-full z-[999] transition duration-300 ease-in-out'>
      <div className={`flex justify-between items-center px-5 py-4 md:px-12 md:py-5 ${scrolled
        ? 'bg-[#fffaf3]/60 backdrop-blur-md text-primary-dark shadow-md'
          : 'bg-transparent text-white'
        }`}>

        {/* logo and hamburger */}
        <div className='flex items-center gap-4'>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden focus:outline-none focus:ring-2 focus:ring-primary-light rounded-md p-1'
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`w-6 h-6 transition-colors duration-300 ${scrolled ? 'text-primary-dark' : 'text-white'
                }`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H7.5" />
            </svg>
          </button>

          {/* Logo */}
          <NavLink to="/" className='flex items-center'>
            <h1 className='text-2xl md:text-3xl font-[600] tracking-tight'>
              Sadie <span className='font-["Courgette"] font-[500]'>skin</span>
            </h1>
          </NavLink>

        </div>

        {/* nav links */}
        <ul className='hidden md:flex items-center gap-12'>
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.href || `/${link.id}`} // Use href if available, otherwise construct path
                className={({ isActive }) =>
                  `opacity-80 hover:opacity-100 transition duration-200 ease-in-out hover:scale-105 ${isActive ? 'opacity-100 font-medium' : ''
                  }`
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Buy Now CTA */}
        <Link
          to="/shop" // Changed from "#" to actual route
          className="px-5 py-2.5 md:px-7 md:py-3 text-sm md:text-base bg-primary-dark text-white/90 rounded-full font-medium tracking-tight transform transition duration-200 ease-in-out hover:scale-105 hover:bg-primary-dark/90"
        >
          Buy Now
        </Link>

      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className='fixed inset-0 bg-black/50 z-[1000] md:hidden'
            onClick={closeMobileMenu}
          />

          {/* Mobile nav */}
          <div className='fixed top-0 left-0 w-full h-screen z-[1001] bg-gradient-to-b from-[#f5f1eb] to-[#f0d9b3] text-[#2a1b10] shadow-lg flex flex-col md:hidden'>

            {/* Mobile menu header */}
            <div className='flex justify-between items-center px-6 py-4 border-b border-[#c2ad8c]'>
              <h2 className='text-xl font-semibold'>Menu</h2>
              <button
                onClick={closeMobileMenu}
                className='cursor-pointer'
                aria-label="Close mobile menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile menu content */}
            <div className='flex-1 flex flex-col justify-start mt-20 px-6'>
              <ul className='space-y-8 text-center'>
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <NavLink
                      to={link.href || `/${link.id}`}
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `block text-xl font-medium transition duration-200 hover:text-[#5c3b1c] ${isActive ? 'underline' : ''}`
                      }
                    >
                      {link.title}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Mobile CTA */}
              <div className='mt-10 text-center'>
                <Link
                  to="/shop"
                  onClick={closeMobileMenu}
                  className="inline-block px-7 py-3.5 bg-[#5c3b1c] text-[#f5f1eb] rounded-full font-medium text-lg transition duration-200 hover:bg-[#4a2e18] hover:scale-105"
                >
                  Buy Now
                </Link>
              </div>
            </div>

          </div>

        </>
      )}

    </nav>
  )
}

export default Navbar
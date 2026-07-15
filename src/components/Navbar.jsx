import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen(!isMobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setMobileOpen(false);
    }
  }, [isMobile]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex flex-wrap px-5 flex-col md:flex-row items-center justify-between">
        <Link to="/" className="title-font font-medium text-black flex items-center">
          <p className="text-2xl font-bold flex items-center gap-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="inline-block fill-current text-transparent stroke-red-600 stroke-2"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <span className="text-black">Devroy</span>
          </p>
        </Link>

        {/* Mobile Nav Toggle */}
        {isMobile && (
          <div className="absolute top-5 right-5 z-50">
            <motion.button
              className="md:hidden cursor-pointer p-2 focus:outline-none"
              whileTap={{ scale: 0.9 }}
              onClick={toggleMobileMenu}
            >
              <div className={`h-0.5 w-6 bg-red-600 mb-1.5 transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`h-0.5 w-6 bg-red-600 mb-1.5 transition-all duration-300 ${isMobileOpen ? 'opacity-0' : ''}`}></div>
              <div className={`h-0.5 w-6 bg-red-600 transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </motion.button>
          </div>
        )}

        {/* Regular Nav Menu for Larger Screens */}
        {!isMobile && (
          <nav className="md:mr-auto md:ml-8 md:py-1 md:pl-8 md:border-l md:border-gray-300 flex flex-wrap items-center text-base justify-center space-x-8">
            <a href="#projects" className="font-medium text-gray-700 hover:text-red-600 transition-colors">
              Past Work
            </a>
            <a href="#skills" className="font-medium text-gray-700 hover:text-red-600 transition-colors">
              Skills
            </a>
            <Link to="/blogs" className="font-medium text-gray-700 hover:text-red-600 transition-colors">
              Blog
            </Link>
          </nav>
        )}

        {/* Hire Me Button */}
        {!isMobile && (
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center text-white bg-black py-2 px-6 focus:outline-none hover:bg-red-600 rounded-full text-sm font-medium transition-colors mt-4 md:mt-0"
          >
            Hire Me
            <FaBriefcase className="w-4 h-4 ml-2" />
          </motion.a>
        )}
      </div>

      {/* Mobile Nav Menu Overlay */}
      <AnimatePresence>
        {isMobile && isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 pt-20 bg-white z-40 flex flex-col items-center shadow-xl"
          >
            <nav className="flex flex-col items-center space-y-8 mt-10 w-full">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                href="#projects"
                onClick={toggleMobileMenu}
                className="text-2xl font-semibold text-gray-800 hover:text-red-600"
              >
                Past Work
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                href="#skills"
                onClick={toggleMobileMenu}
                className="text-2xl font-semibold text-gray-800 hover:text-red-600"
              >
                Skills
              </motion.a>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <Link to="/blogs" onClick={toggleMobileMenu} className="text-2xl font-semibold text-gray-800 hover:text-red-600">
                  Blog
                </Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="pt-8">
                <a
                  href="#contact"
                  onClick={toggleMobileMenu}
                  className="inline-flex items-center text-white bg-black py-3 px-8 hover:bg-red-600 rounded-full text-lg font-medium transition-colors"
                >
                  Hire Me
                  <FaBriefcase className="w-5 h-5 ml-3" />
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const variants = {
  open: { opacity: 1, height: 'auto' },
  closed: { opacity: 0, height: 0 },
};

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isMobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen(!isMobileOpen);
  };

  useEffect(() => {
    // Close the mobile menu when the screen size changes to larger
    if (!isMobile) {
      setMobileOpen(false);
    }
  }, [isMobile]);

  return (
    <motion.header
      className="bg-white  top-0 z-10"
      initial="closed"
      animate={isMobileOpen ? 'open' : 'closed'}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="title-font font-medium text-black mb-4 md:mb-0">
          <p className="ml-3 text-xl text-red-600">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="inline-block fill-current text-transparent stroke-red-600"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>{' '}
            DR
          </p>
        </Link>

        {/* Mobile Nav Toggle */}
        {isMobile && (
          <motion.div
            className="md:hidden cursor-pointer"
            whileTap={{ scale: 0.9 }}
            onClick={toggleMobileMenu}
          >
            <div className={`bar1 bg-red-500 h-1 w-6 mb-1 ${isMobileOpen && 'rotate-45'}`}></div>
            <div className={`bar2 bg-red-500 h-1 w-6 mb-1 ${isMobileOpen && 'hidden'}`}></div>
            <div className={`bar3 bg-red-500 h-1 w-6 ${isMobileOpen && '-rotate-45'}`}></div>
          </motion.div>
        )}

        {/* Regular Nav Menu for Larger Screens */}
        {!isMobile && (
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
            <a href="#projects" className="mr-5 hover:text-red-500 text-black">
              Past Work
            </a>
            <a href="#skills" className="mr-5 hover:text-red-500">
              Skills
            </a>
            <Link to="/blogs" className="mr-5 hover:text-red-500">
              Blog
            </Link>
          </nav>
        )}

        {/* Mobile Nav Menu */}
        {isMobile && (
          <motion.nav
            className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center"
            variants={variants}
          >
            <motion.a
              href="#projects"
              className="mr-5 hover:text-red-500 text-black"
              whileTap={{ scale: 0.9 }}
            >
              Past Work
            </motion.a>
            <motion.a
              href="#skills"
              className="mr-5 hover:text-red-500"
              whileTap={{ scale: 0.9 }}
            >
              Skills
            </motion.a>
            <motion.a
              as={Link}
              to="/blogs"
              className="mr-5 hover:text-red-500"
              whileTap={{ scale: 0.9 }}
            >
              Blog
            </motion.a>
          </motion.nav>
        )}

        {/* Hire Me Button */}
        <motion.a
          href="#contact"
          className="inline-flex items-center text-white bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-900 rounded text-base mt-4 md:mt-0"
          whileTap={{ scale: 0.9 }}
        >
          Hire Me
          <FaBriefcase className="w-4 h-4 ml-3" />
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Navbar;
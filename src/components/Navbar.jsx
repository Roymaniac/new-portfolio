import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { FaBriefcase } from "react-icons/fa";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '100%' },
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };


  return (
    <motion.header
      className="bg-white md:sticky top-0 z-10"
      initial="closed"
      animate={isMobileOpen ? 'open' : 'closed'}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="title-font font-medium text-white mb-4 md:mb-0">
          <p className="ml-3 text-xl text-black">DR</p>
        </Link>
        {/* Mobile Nav Toggle */}
        <motion.div
          className="md:hidden cursor-pointer"
          whileTap={{ scale: 0.9 }}
          onClick={toggleMobileMenu}
        >
          <div className={`bar1 bg-black h-1 w-6 mb-1 ${isMobileOpen && 'rotate-45'}`}></div>
          <div className={`bar2 bg-black h-1 w-6 mb-1 ${isMobileOpen && 'hidden'}`}></div>
          <div className={`bar3 bg-black h-1 w-6 ${isMobileOpen && '-rotate-45'}`}></div>
        </motion.div>

        {/* Mobile Nav Menu */}
        <motion.nav
          className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center"
          variants={variants}
        >
          <motion.a
            href="#projects"
            className="mr-5 hover:text-black text-black"
            whileTap={{ scale: 0.9 }}
          >
            Past Work
          </motion.a>
          <motion.a
            href="#skills"
            className="mr-5 hover:text-black"
            whileTap={{ scale: 0.9 }}
          >
            Skills
          </motion.a>
          <motion.a
            as={Link}
            to="/blogs"
            className="mr-5 hover:text-black"
            whileTap={{ scale: 0.9 }}
          >
            Blog
          </motion.a>
        </motion.nav>

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

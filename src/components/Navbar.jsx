import { Link } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-black md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="title-font font-medium text-white mb-4 md:mb-0">
          <p className="ml-3 text-xl text-indigo-500">DR</p>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-indigo-500 text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <Link to="/blogs" className="mr-5 hover:text-white">
            blog
          </Link>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0"
        >
          Hire Me
          <FaBriefcase className="w-4 h-4 ml-3" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;

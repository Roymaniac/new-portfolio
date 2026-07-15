import { FaCheckCircle, FaMicrochip } from "react-icons/fa";
import { skills } from "../info/skill";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <section id="skills" className="bg-white py-20 overflow-hidden">
      <div className="px-5 mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <FaMicrochip className="w-10 h-10 inline-block mb-4 text-red-600" />
          <h1 className="sm:text-5xl text-4xl font-bold title-font text-black mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here's an overview of the tools and technologies I work with.
          </p>
        </motion.div>

        {/* Auto-Scrolling Section */}
        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-10 after:bg-gradient-to-l after:from-white after:to-transparent md:before:w-40 md:after:w-40">
          <motion.div
            className="flex space-x-6 w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {/* First set of skills */}
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="flex-shrink-0 bg-black rounded-xl flex items-center justify-center w-64 h-24 p-6 shadow-lg hover:bg-gray-900 transition-colors duration-300"
              >
                <FaCheckCircle className="text-red-600 w-6 h-6 mr-4" />
                <span className="title-font text-lg font-medium text-white tracking-wide">
                  {skill.name}
                </span>
              </div>
            ))}

            {/* Duplicate for seamless looping */}
            {skills.map((skill) => (
              <div
                key={skill.id + "-duplicate"}
                className="flex-shrink-0 bg-black rounded-xl flex items-center justify-center w-64 h-24 p-6 shadow-lg hover:bg-gray-900 transition-colors duration-300"
              >
                <FaCheckCircle className="text-red-600 w-6 h-6 mr-4" />
                <span className="title-font text-lg font-medium text-white tracking-wide">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

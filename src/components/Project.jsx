import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Project = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="text-black bg-white body-font overflow-hidden">
        <motion.div 
          className="container px-6 py-20 mx-auto"
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeIn("up", "tween", 0, 0.5)}>
            <h1 className="text-3xl font-semibold text-center text-black capitalize lg:text-4xl">
              Portfolio
            </h1>
            <p className="mt-4 text-center text-black">My Work</p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-6 mt-8 xl:mt-12 xl:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                key={index}
                className="relative overflow-hidden shadow-xl bg-cover rounded-xl cursor-pointer group h-80 transition-transform duration-300 hover:shadow-2xl"
                style={{ backgroundImage: `url(${project.image})` }}
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -5 }}
              >
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h2 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-300 line-clamp-2">{project.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              variants={zoomIn(0, 0.3)}
              initial="hidden"
              animate="show"
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-red-600 rounded-full flex items-center justify-center text-white text-2xl transition-colors duration-300"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>

              {/* Modal Header */}
              <div className="relative h-64 md:h-80 overflow-hidden bg-gray-100">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Body */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-lg text-red-600 font-medium mb-4">
                  {selectedProject.subtitle}
                </p>
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 mt-8 text-white bg-black hover:bg-red-600 rounded-full font-medium transition-colors duration-300"
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Project;

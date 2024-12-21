import { useState } from "react";

const Project = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      {/* Project Section */}
      <section id="projects" className="text-black bg-white body-font">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center text-black capitalize lg:text-4xl">
            Portfolio
          </h1>
          <p className="mt-4 text-center text-black">My Work</p>
          <div className="grid grid-cols-1 gap-3 mt-8 xl:mt-12 xl:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative overflow-hidden shadow-1xl bg-cover rounded-lg cursor-pointer group h-72"
                style={{ backgroundImage: `url(${project.image})` }}
                onClick={() => setSelectedProject(project)} // Set selected project for modal
              >
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <h2 className="text-lg font-semibold text-white">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-300">{project.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-4xl">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-red-600 text-3xl font-mono 
                   animate-bounce duration-1800 ease-linear infinite"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>

            {/* Modal Header */}
            <div className="overflow-hidden rounded-t-lg">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <h2 className="text-3xl font-semibold text-gray-800">
                {selectedProject.title}
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                {selectedProject.subtitle}
              </p>
              <p className="mt-4 text-gray-700 text-base">
                {selectedProject.description}
              </p>
              {/* Link */}
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-blue-500 hover:underline"
              >
                View Project
              </a>
              {/* Optional Additional Content */}
              {/* {selectedProject.details && (
                <ul className="mt-6 space-y-2 list-disc list-inside text-gray-600">
                  {selectedProject.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              )} */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;

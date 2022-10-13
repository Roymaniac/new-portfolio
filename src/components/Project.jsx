import { projects } from "../info/data";

const Project = () => {
  return (
    <section id="projects" className="text-gray-100 bg-black body-font">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
          Portfolio
        </h1>
        <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
          My Work
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-2">
          {projects.map((project) => (
            <a href={project.link} target="blank" key={project.image}>
              <div
                className="overflow-hidden bg-cover rounded-lg cursor-pointer h-full w-full lg:w-full lg:h-72 group"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-md bg-gray-800/60 group-hover:opacity-100">
                  <h2 className="mt-4 text-2xl font-semibold text-white capitalize">
                    {project.subtitle}
                  </h2>
                  <p className="mt-2 text-md text-gray-100">
                    {project.description}
                  </p>
                  <p className="mt-2 text-lg font-bold tracking-wider text-indigo-500 uppercase ">
                    {project.title}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;

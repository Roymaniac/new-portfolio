import { FaCheckCircle } from "react-icons/fa";
import { projects } from "../info/data";

const Project = () => {
  return (
    <section id="projects" className="text-gray-100 bg-black body-font">
      <div className="container px-3 py-10 mx-auto text-center lg:px-32">
        <div className="flex flex-col w-full mb-20">
          <FaCheckCircle className="mx-auto inline-block w-10 mb-4 text-indigo-500" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Portfolio
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Project have done and worked on
          </p>
        </div>
        <div className="mx-auto flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              target="blank"
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="project"
                  className="absolute inset-0 w-full md:h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-2 border-gray-900 bg-black opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-md">{project.description}</p>
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

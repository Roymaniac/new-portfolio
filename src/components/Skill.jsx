import { FaCheckCircle, FaMicrochip } from "react-icons/fa";
import { skills } from "../info/skill";

const Skill = () => {
  return (
    <section id="skills" className="bg-white">
      <div className="px-5 py-10 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <FaMicrochip className="w-10 inline-block mb-4 text-red-600" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-2">
            Skills &amp; Technologies Used
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here's an overview of the tools and technologies I work with.
          </p>
        </div>

        {/* Auto-Scrolling Section */}
        <div className="relative overflow-hidden">
          <div
            className="flex space-x-4 animate-scroll lg:w-max"
            style={{ display: "inline-flex" }}
          >
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="flex-shrink-0 bg-black rounded flex items-center justify-center w-60 h-20 p-4"
              >
                <FaCheckCircle className="text-red-600 w-4 h-4 mr-3" />
                <span className="title-font text-sm font-medium text-white">
                  {skill.name}
                </span>
              </div>
            ))}

            {/* Duplicate for seamless looping */}
            {skills.map((skill) => (
              <div
                key={skill.id + "-duplicate"}
                className="flex-shrink-0 bg-black rounded flex items-center justify-center w-60 h-20 p-4"
              >
                <FaCheckCircle className="text-red-600 w-4 h-4 mr-3" />
                <span className="title-font text-sm font-medium text-white">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

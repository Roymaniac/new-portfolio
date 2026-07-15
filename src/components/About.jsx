import FloatingDots from "./FloatingDots";
import { FaDownload } from "react-icons/fa";
import { resume_url } from "../info/data";
import { motion } from "framer-motion";
import { textVariant, fadeIn, staggerContainer } from "../utils/motion";

const About = () => {
  const fileUrl = resume_url[0].url;

  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.target = '_blank';
    downloadLink.href = fileUrl;
    downloadLink.download = 'joseph amolo.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <>
      <section className="hero-section flex justify-center items-center p-10 text-black overflow-hidden relative">
        <motion.div 
          className="flex-col text-center z-10"
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="flex-1 mb-5">
            <motion.h3 
              variants={textVariant(0.1)}
              className="text-6xl md:text-8xl lg:text-[140px] font-bold text-transparent mb-5 bg-clip-text bg-gradient-to-r from-gray-800 to-black stroke-black"
              style={{ WebkitTextStroke: "1px black" }}
            >
              Devroy
            </motion.h3>
            <motion.h3 
              variants={textVariant(0.3)}
              className="font-light text-red-600 text-2xl xl:text-4xl mb-10 tracking-widest"
            >
              Full Stack Developer
            </motion.h3>

            <motion.div variants={fadeIn("up", "spring", 0.5, 1)} className="flex-none mt-20 md:mt-40">
              <a 
                className="btn btn-sm border-transparent px-6 h-14 rounded-full mx-auto bg-black hover:ring-0 text-white mt-12 hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300 shadow-xl flex items-center justify-center gap-2 max-w-[200px]"
                href=" "
                onClick={(e) => { e.preventDefault(); handleDownload(); }} 
                rel="noreferrer"
              >
                Download CV
                <FaDownload
                  size={18}
                  className="animate-bounce"
                />
              </a>
            </motion.div>
          </div>
          <FloatingDots />
        </motion.div>
      </section >
    </>
  );
};

export default About;

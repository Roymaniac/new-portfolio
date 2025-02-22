import FloatingDots from "./FloatingDots";
import { FaDownload } from "react-icons/fa";
import { resume_url } from "../info/data"

const About = () => {
  const fileUrl = resume_url[0].url;

  const handleDownload = () => {

    // Create a link element
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
      <section className="hero-section flex justify-center items-center p-10 text-black">
        <div className="flex-col text-center">
          <div className="flex-1 mb-5">
            <h3 className="title mb-5">Devroy</h3>
            <h3 className="font-light text-red-600 text-xl xl:text-4xl mb-10">Full Stack Developer</h3>
            {/* <h1 className="sm:text-4xl text-3xl">
              We Craft Stunning <br />
              Digital Experiences.
            </h1> */}

            <div className="flex-none mt-40">
              <a className="btn btn-sm border-transparent px-3 h-16 rounded-xl mx-auto bg-black hover:ring-0 text-white mt-12 hover:bg-white hover:text-gray-900 transition ease-in-out duration-500"
                href=" "
                onClick={handleDownload} rel="noreferrer">
                Download CV
                <FaDownload
                  size={22}
                  style={{
                    display: "inline-block",
                    padding: "2px",
                    margin: "8px",
                    animation: "pulse 1.8s linear infinite",
                  }}
                />
              </a>
            </div>
          </div>
          <FloatingDots />
        </div>
      </section >
    </>
  );
};

export default About;

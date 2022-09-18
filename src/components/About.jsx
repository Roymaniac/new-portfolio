import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <>
      <section id="home">
        <div className="overlay"></div>
        <div className="home-content-table">
          <div className="home-content-tablecell">
            <div className="row">
              <div className="col-twelve">
                <h3 className="animate-intro">Devroy.</h3>
                <h3 className="white-h3">Full Stack Developer</h3>
                <h1 className="sm:text-4xl text-3xl animate-intro">
                  We Craft Stunning <br />
                  Digital Experiences.
                </h1>

                <div className="more animate-intro">
                  <a className="smoothscroll button stroke" href=" ">
                    Download CV
                    <FaDownload
                      size={22}
                      style={{
                        display: "inline-block",
                        padding: "2px",
                        margin: "8px",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

import { projects } from "../info/data";
import About from "../components/About";
import Project from "../components/Project";
import Skillz from "../components/Skillz";
import Contact from "../components/Contact";
import CTA from "../components/CTA";
import Profile from "../components/Profile";

export default function Home() {
  return (
    <div className="slide-container">
      <About />
      <Profile />
      <Project projects={projects} />
      <Skillz />
      <CTA />
      <Contact />
    </div>
  );
}

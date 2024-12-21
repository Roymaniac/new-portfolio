import { projects } from "../info/data";
import About from "../components/About";
import Project from "../components/Project";
import Skill from "../components/Skill";
import Contact from "../components/Contact";
import CTA from "../components/CTA";
import Profile from "../components/Profile";

export default function Home() {
  return (
    <div className="">
      <About />
      <Profile />
      <Project projects={projects} />
      <Skill />
      <CTA />
      <Contact />
    </div>
  );
}

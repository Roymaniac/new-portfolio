import About from "../components/About";
import Project from "../components/Project";
import Skillz from "../components/Skillz";
import Contact from "../components/Contact";
import CTA from "../components/CTA";
import Profile from "../components/Profile";

export default function Home() {
  return (
    <div>
      <About />
      <Profile />
      <Project />
      <Skillz />
      <CTA />
      <Contact />
    </div>
  );
}

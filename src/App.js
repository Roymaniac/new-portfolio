
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import Skillz from "./components/Skillz";
// import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CTA from "./components/CTA";

function App() {
  return (
    <main className="text-gray-400 bg-black body-font">
      <Navbar />
      <About />
      <Project />
      <Skillz />
      <CTA/>
      {/* <Blog /> */}
      <Contact />
      <Footer/>
    </main>
  );
}

export default App;

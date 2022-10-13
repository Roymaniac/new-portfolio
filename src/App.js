import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
// import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="text-gray-400 bg-black body-font">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/blogs" element={<Blogs />} /> */}
          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;

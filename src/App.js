import React, { useState, useEffect } from "react";
// Ensure you import Tailwind CSS in your project entry file
//import all components
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowLoading(false);
    }, 7500);
    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="text-center bg-black text-white font-mono">
      {showLoading ? (
        <div className="loading opacity-0 animate-fadeIn">
          {" "}
          {/* Tailwind does not directly support keyframes; you'll need custom styles or a plugin for animations. */}
          <Loading />
        </div>
      ) : (
        <div className="home opacity-100 animate-fadeOut">
          <Nav />
          <Intro />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;

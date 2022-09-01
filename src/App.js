import React, { useState, useEffect } from "react";
import "./App.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Intro } from "./components/Intro/Intro";
import { Loading } from "./components/Loading/Loading";
import { Nav } from "./components/Nav/Nav";
import { Projects } from "./components/Projects/Projects";
function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setShowLoading(false);
    }, 7500);
  });
  return (
    <div className="App">
      {showLoading && (
        <div className="loading">
          <Loading />
        </div>
      )}{" "}
      {!showLoading && (
        <div className="home">
          <Nav />
          <Intro />
          <About />
          <Projects />
          <Contact />
        </div>
      )}
    </div>
  );
}

export default App;

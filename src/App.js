import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Links from "./Components/Links/Links";
import { BrowserRouter } from "react-router-dom";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/projects";
import Contact from "./Components/Contact/Contact";

function App() {
  const [offsetY, setoffsetY] = useState(0);
  const handleScroll = () => setoffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home offsetY={offsetY} />
        <Links offsetY={offsetY} />
        <Skills offsetY={offsetY} />
        <Projects />
        <Contact />
      </BrowserRouter>
    </>
  );
}

export default App;

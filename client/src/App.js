import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import { DataProvider } from "./context/DataContext";

function App() {



  return (
    <>
      <DataProvider>
          <NavBar />
          <Home />
          <About />
          <Portfolio />
          <Experience />
          <Contact />
          <SocialLinks />
      </DataProvider>
    </>
  );
}

export default App;
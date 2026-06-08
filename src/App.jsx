import React from "react";
import "./App.css"; // Ensure current balanced CSS is imported
import Navbar from "./Navbar";
// Corrected: Import balanced components correctly
import Hero from "./Hero";
import About from "./About";
import Qualification from "./Qualification";
import Skills from "./Skills";
import MyDocuments from "./MyDocuments";
import Contact from "./Contact";

const App = () => {
  return (
    <div className="main-container">
      {/* 1. Balanced Fixed Navbar Container with Top Logo and Bottom Links stack vertically retained */}
      <nav className="navbar">
        {/* --- Top Panel: Logos stack vertically centered globally retained --- */}
        

        {/* --- Bottom Belt: Links globally centered horizontal line retained --- */}
        <div className="navbar-bottom-links">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#qualification">Qualification</a></li>
            <li><a href="#skills">Skills</a></li>
            {/* LINE 29 FIXED HERE */}
            <li><a href="#documents">MyDocuments</a></li> 
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* 2. Main Content Sections stacked vertically with balanced spacing retained */}
      <div className="content-container">
        <Hero />
        <About />
        <Qualification />
        <Skills />
        <MyDocuments />
        <Contact />
      {/* LINE 44 FIXED HERE (Changed </main> to </div>) */}
      </div> 
    </div>
  );
};

export default App;
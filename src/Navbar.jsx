import React from "react";
import "./App.css"; // Ensure current CSS is imported

const Navbar = () => {
  return (
    <nav className="navbar-container">
      {/* --- Part 1: Top Panel (For Nitin Portfolio) --- */}
      

      {/* --- Part 2: Bottom Navigation Belt (Home, About, etc.) --- */}
      {/* Humne ise un-touched rakha hai, bas margin-top add kiya hai gap ke liye */}
      <div className="nav-belt">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#qualification">Qualification</a></li>
          <li><a href="#skills">Skills</a></li>
                    <li><a href="#skills">MyDocuments</a></li>

          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import './About.css';
import NitinImg from './assets/picnitin.jpeg'; 

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-layout-wrapper">
        <div className="about-img-box">
          <img src={NitinImg} alt="Nitin Portfolio" />
        </div>

        <div className="about-text-box">
          <h3>Secure Web Development & Ethical Hacking</h3>
          <p>Maine Web Development aur CyberSecurity ka course complete kiya hai, jo mujhe ek unique edge deta hai. Main sirf features bulid nhi karta,
            balki unhe vulnerabilities se protect karna bhi meri priority hoti hai, </p>
          
          <div className="highlights-container">
            <div className="h-box">
              <h4>Development</h4>
              <p>HTML, CSS, javascript, PHP, MySQL, Node.js, React</p>
            </div>
            <div className="h-box">
              <h4>CyberSecurity</h4>
              <p>Ethical Hacking, VAPT, aur NetworkSecurity</p>
            </div>
            <div className="h-box">
              <h4>Current Focus</h4>
              <p>Building Secure Full-Stack Application</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
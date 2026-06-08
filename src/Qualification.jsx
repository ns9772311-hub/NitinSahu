import React from 'react';
import './Qualification.css';

const Qualification = () => {
  return (
    <section className="section-container" id="qualification">
      <h2 className="section-title">Qualification</h2>
      <div className="qualification-grid">

        {/* --- Academic Qualification --- */}
        <div className="qualification-item">
          <h3>Academic</h3>
          <ul className="qualification-list">
            <li>
              <strong>B.Sc. (Bachelor of Science)</strong>
              <span>Graduate / Completed</span>
            </li>
            <li>
              <strong>PGDCA</strong>
              <span>Post Graduate Diploma in Computer Applications</span>
            </li>
            <li>
              <strong>Higher Secondary Education</strong>
              <span>Science Stream (12th)</span>
            </li>
          </ul>
        </div>

        {/* --- Professional Skills/Certifications --- */}
        <div className="qualification-item">
          <h3>Professional</h3>
          <ul className="qualification-list">
            <li>
              <strong>Full-Stack Web Developer</strong>
              <span>Specializing in React.js, PHP, and MySQL Database</span>
            </li>
            <li>
              <strong>Cyber Security Student</strong>
              <span>Practical Vulnerability Assessment & Ethical Hacking</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Qualification;
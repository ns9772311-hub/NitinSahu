import React from 'react';
import './Hero.css'; // New strict CSS file for Hero

const Hero = () => {
    return (
        <section className="hero-container" id="home">
            <div className="hero-content">
                <h1 className="hero-greeting">Hi, I'm <span className="highlight">NITIN SAHU</span></h1>
                <p className="hero-description">Web Developer | Cyber security & ethical hacking</p>
                <a href="#"
                download={"Nitin_sahu_CV.pdf"}
                className="btn hero-btn"
                style={{ textDecoration: 'none', display: 'inline-block' }}>
                    Download CV
                </a>
            </div>
        </section>
    );
};

export default Hero;
import React from 'react';
import './Skills.css'; // Importing the corresponding strict CSS file

const Skills = () => {
    // Data structures for skills, grouped by category for balance
    const webSkills = [
        { name: "HTML5", percentage: "95" },
        { name: "CSS3", percentage: "90" },
        { name: "JavaScript", percentage: "85" },
        { name: "PHP", percentage: "90" },
        { name: "React.js", percentage: "80" },
        { name: "Node.js", percentage: "85" }
    ];

    // Naye Cyber Security skills advanced aur realistic tools ke sath update kar diye hain
    const cyberSkills = [
        { name: "Penetration Testing (Kali Linux & Metasploit)", percentage: "85" },
        { name: "Web Application Security (Burp Suite, SQLi, XSS)", percentage: "80" },
        { name: "Computer Forensic Investigation", percentage: "75" },
        { name: "Darknet & Deep Web Threat Intelligence", percentage: "70" }
    ];

    return (
        <section className="section-container" id="skills">
            <h2 className="section-title">Professional Skills</h2>
            
            <div className="skills-grid">
                {/* --- Group 1: Web Development retained balance from image feel --- */}
                <div className="skills-group">
                    <h3>Web Development</h3>
                    {webSkills.map((skill, index) => (
                        <div className="skill-item" key={index}>
                            <div className="skill-info">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-percentage">{skill.percentage}%</span>
                            </div>
                            {/* Visual Progress Bar retained from initial image visualization */}
                            <div className="skill-bar-wrapper">
                                <div 
                                    className="skill-bar-fill" 
                                    style={{ width: `${skill.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- Group 2: Cyber Security updated with advanced threat matrix --- */}
                <div className="skills-group">
                    <h3>Cyber Security & Hacking</h3>
                    {cyberSkills.map((skill, index) => (
                        <div className="skill-item" key={index}>
                            <div className="skill-info">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-percentage">{skill.percentage}%</span>
                            </div>
                            <div className="skill-bar-wrapper">
                                <div 
                                    className="skill-bar-fill highlight-bar" 
                                    style={{ width: `${skill.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
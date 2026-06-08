import React from 'react';
import './MyDocuments.css';

const MyDocuments = () => {
  return (
    <section id="documents" className="documents-section">
      <div className="section-title-container">
        <h2 className="section-title">MY WORK &amp; DOCUMENTS</h2>
        <div className="title-underline"></div>
      </div>

      {/* SOCIAL & PROFESSIONAL LINKS */}
      <div className="social-cards-container">
        <a 
          href="https://github.com/ns9772311-hub" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-card github-glow"
        >
          <div className="card-icon">📁</div>
          <h3>GitHub Profile</h3>
          <p>Mene jitne bhi development projects aur cybersecurity testing scripts banayi hain, sabka source code yahan hosted hai.</p>
          <span className="card-link-text">Explore Repositories →</span>
        </a>

        <a 
          href="https://linkedin.com/in/nitin-sahu-2a5885399" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-card linkedin-glow"
        >
          <div className="card-icon">💼</div>
          <h3>LinkedIn Profile</h3>
          <p>Let's connect professionally! Yahan mai web security trends, network testing insights aur apne projects share karta hoon.</p>
          <span className="card-link-text">Connect Professionally →</span>
        </a>
      </div>

      {/* PROJECTS GRID SECTION */}
      <h3 className="sub-section-title">Featured Projects</h3>
      <div className="projects-grid">
        
        {/* PROJECT 1: SMARTFIX PRO */}
        <div className="project-card large-card">
          <div className="project-header">
            <h3>📱 SmartFix Pro</h3>
            <span className="project-tag secure-tag">Highly Secure</span>
          </div>
          <span className="project-subtitle">Shop Management &amp; Device Tracking System</span>
          
          <p className="project-description">
            "Nimesh Mobile Shop" ke liye banaya gaya ek custom management system. Isme manual paperwork ko khatam karke dukan ke business ko digitally grow aur customer records ko real-time manage kiya gaya hai.
          </p>
          
          <div className="tech-stack">
            <span>HTML5</span>
            <span>Tailwind CSS</span>
            <span>JavaScript</span>
            <span>Firebase Firestore</span>
            <span>JWT</span>
          </div>

          <div className="security-features-box">
            <h4>🛡️ Core Security Architecture:</h4>
            <ul>
              <li><strong>Zero-Login Privacy:</strong> Customers bina account banaye, dukan par lage QR Code ko scan karke ya apni unique Job ID se repair status live track kar sakte hain.</li>
              <li><strong>.env Protection:</strong> Control Panel aur admin features ke saare sensitive actions JSON Web Tokens se authorized aur securely locked hain.</li>
              <li><strong>Automated Alerts:</strong> Admin panel se ek single click mein customer ke mobile par repair details aur balance due ka automatic WhatsApp message chala jata hai.</li>
            </ul>
          </div>

          <div className="project-actions">
            <a href="https://github.com/ns9772311-hub" target="_blank" rel="noopener noreferrer" className="btn btn-filled">
              Source Code (GitHub)
            </a>
            <a href="https://smartfix-pro.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Live Demo
            </a>
          </div>
        </div>

      {/* PROJECT 2: GOURI PAN PALACE (FIXED TECH STACK HERE) */}
        <div className="project-card">
          <div className="project-header">
            <h3>🛒 Gouri Pan Palace</h3>
            <span className="project-tag">E-Commerce</span>
          </div>
          <span className="project-subtitle">Local Business Digital Platform</span>
          
          <p className="project-description">
            Flipkart ke layout se inspire hokar local business ke liye banaya gaya ek dynamic e-commerce system. Isme users digital catalog browse kar sakte hain, items ko cart me manage kar sakte hain, aur orders place kar sakte hain.
          </p>
          
          <div className="tech-stack">
            <span>React.js</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB / Database</span>
            <span>CSS3</span>
          </div>

          <div className="security-features-box">
            <h4>🔒 Web Protection:</h4>
            <ul>
              <li><strong>Zero-Login Privacy:</strong> Har customer ka data unique Order ID se bilkul safe aur alag rehta hai.</li>
              <li><strong>.env Protection:</strong> Database links aur passwords ko secure variables mein chhupa kar rakha hai.</li>
              <li><strong>Rider OTP Lock:</strong> Delivery fraud rokne ke liye real-time 4-digit verification system lagaya hai.</li>
            </ul>
          </div>

          <div className="project-actions" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="https://github.com/ns9772311-hub" target="_blank" rel="noopener noreferrer" className="btn btn-filled">
                Source Code (GitHub)
              </a>
              <a href="https://gouri-frontend.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Live Store (Vercel)
              </a>
            </div>

            <div className="admin-access-links" style={{ marginTop: '5px', paddingLeft: '2px' }}>
              <span style={{ color: '#a0aec0', fontSize: '0.85rem', marginRight: '10px' }}>Secure Portals:</span>
              <a href="https://gouri-frontend.vercel.app/gouri-admin-secret" target="_blank" rel="noopener noreferrer" style={{ color: '#00f2ff', fontSize: '0.85rem', marginRight: '15px', textDecoration: 'none', fontWeight: '600' }}>
                [🔑 Admin Secret]
              </a>
              <a href="https://gouri-frontend.vercel.app/gouri-delivery-partner" target="_blank" rel="noopener noreferrer" style={{ color: '#00f2ff', fontSize: '0.85rem', textDecoration: 'none', fontWeight: '600' }}>
                [📦 Delivery Partner]
              </a>
            </div>
          </div>
        </div>

        {/* PROJECT 3: TERMINAL PORTFOLIO (LINKS COMPLETELY FIXED) */}
        <div className="project-card">
          <div className="project-header">
            <h3>💻 Terminal-Style Portfolio</h3>
            <span className="project-tag secure-tag">Hacker UI</span>
          </div>
          <span className="project-subtitle">Custom Retro Cyber Interface</span>
          
          <p className="project-description">
            A built-from-scratch command-line/terminal themed website representing my personal mission: "Shop se IT industry tak ka safar...". It symbolizes my passion for Cyber Security and lightweight interactive layouts.
          </p>
          
          <div className="tech-stack">
            <span>HTML5</span>
            <span>CSS3 (Matrix Effect)</span>
            <span>JavaScript</span>
          </div>

          <div className="security-features-box">
            <h4>⚡ Key Highlights:</h4>
            <ul>
              <li><strong>Matrix Rain Background:</strong> Pure JavaScript implementation to create smooth hacker-style terminal vibes.</li>
              <li><strong>Dynamic Typing Effect:</strong> Keeps users engaged through automated text response simulation.</li>
              <li><strong>Lightweight Design:</strong> Extreme fast loading speeds with standard vanilla styling rules.</li>
            </ul>
          </div>

          <div className="project-actions">
            {/* SOURCE CODE SEEDHE GITHUB PAR REPO LIST TAK LE JAYEGA */}
            <a href="https://github.com/ns9772311-hub?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn btn-filled">
              Source Code
            </a>
            {/* LIVE TERMINAL SEEDHE DIRECT PAGES SITE PE LE JAYEGA (NO LINKEDIN REDIRECT WARNING) */}
            <a href="https://ns9772311-hub.github.io/my-portfolio/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Live Terminal
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MyDocuments;
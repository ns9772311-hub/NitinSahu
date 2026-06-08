import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        
        <div className="contact-grid">
          {/* Left Side: Your Details */}
          <div className="contact-details">
            <p className="contact-subtext">Main naye opportunities ke liye available hoon.</p>
            <div className="personal-info">
              <p><strong>Name:</strong> Nitin Sahu</p>
              <p><strong>Email:</strong> ns9772311@gmail.com</p>
              <p><strong>Phone:</strong> +91 7999962606</p>
              <p><strong>Address:</strong> Jabalpur, MP</p>
            </div>
          </div>

          {/* Right Side: Working Form */}
          <form 
            action="https://formspree.io/f/xwvyarve"
            method="POST"
            className="contact-form-styled"
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
            <button type="submit" className="send-btn">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
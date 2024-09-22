import React from 'react';
import './styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <p>You can connect with me via the following platforms or download my resume.</p>
      
      {/* Social Media Links */}
      <div className="social-links">
        <a href="https://github.com/bhanukad610" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://linkedin.com/in/bhanuka-dissanayake" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>

      {/* Downloadable Resume */}
      <div className="resume-download">
        <a href={`${process.env.PUBLIC_URL}/docs/resume.pdf`} download>
          <button className="download-btn">Download Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
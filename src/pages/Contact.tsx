import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <p>You can connect with me via the following platforms or download my resume.</p>

      {/* Social Media Links */}
      <div className="social-links">
        <a href="https://github.com/bhanukad610" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" /> GitHub
        </a>
        <a href="https://linkedin.com/in/bhanuka-dissanayake" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" /> LinkedIn
        </a>
        <a href="mailto:bhanuka.m.dissanayake@gmail.com">
          <FaEnvelope className="social-icon" /> Email
        </a>
      </div>

      {/* Downloadable Resume */}
      <div className="resume-download">
        <a href={`${import.meta.env.BASE_URL}docs/resume.pdf`} download>
          <button className="download-btn">Download Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
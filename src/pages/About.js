import React, { useEffect, useState } from 'react';
import './styles/About.css'; // Styling file for the About page

const About = () => {
  const [content, setContent] = useState([]);

  // Fetch content from JSON file
  useEffect(() => {
    fetch('/aboutContent.json')
      .then((response) => response.json())
      .then((data) => setContent(data.paragraphs))
      .catch((error) => console.error('Error loading content:', error));
  }, []);

return (
    <section className="about">
      <div className="about-content">
        <h1>About Me</h1>

        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <a href="/projects" className="cta-button">
          Check My Projects
        </a>
      </div>
    </section>
  );
};

export default About;
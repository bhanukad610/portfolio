import { useEffect, useState } from 'react';
import './styles/About.css'; // Styling file for the About page
import type { AboutContent } from '../types';

const About = () => {
  const [content, setContent] = useState<string[]>([]);

  // Fetch content from JSON file
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}aboutContent.json`)
      .then((response) => response.json() as Promise<AboutContent>)
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
      </div>
    </section>
  );
};

export default About;
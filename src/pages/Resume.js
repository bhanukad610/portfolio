import React, { useState, useEffect } from 'react';
import './styles/Resume.css';

const Resume = () => {
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch('/experience.json')
      .then((response) => response.json())
      .then((data) => {
        setExperience(data.experience);
        setEducation(data.education);
      })
      .catch((error) => console.error('Error fetching resume data:', error));
  }, []);

  return (
    <section className="resume">
      <h1>Resume</h1>

      <div className="section">
        <h2>Experience</h2>
        {experience.map((item, index) => (
          <div key={index} className="experience-item">
            <h3>{item.title} at {item.company}</h3>
            <p className="experience-location">{item.location}</p>
            <p className="experience-date">{item.date}</p>
            <p className="experience-description">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>Education</h2>
        {education.map((item, index) => (
          <div key={index} className="education-item">
            <h3>{item.degree} in {item.major}</h3>
            <p className="education-institution">{item.institution}, {item.location}</p>
            <p className="education-date">{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resume;
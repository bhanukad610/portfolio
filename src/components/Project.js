import React from 'react';

const Project = ({ title, organization, description, technologies }) => {
  return (
    <div className="project">
      <h2>{title}</h2>
      <h4>{organization}</h4>
      <p>{description}</p>
      <div className="technologies">
        <strong>Technologies used: </strong>
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default Project;
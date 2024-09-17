import React, { useEffect, useState } from 'react';
import Project from '../components/Project';
import './styles/Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
  
    useEffect(() => {
      fetch(`${process.env.PUBLIC_URL}/projects.json`)
        .then((response) => response.json())
        .then((data) => setProjects(data.projects))
        .catch((error) => console.error('Error loading projects:', error));
    }, []);

return (
        <section className="projects">
          <div className="projects-container">
            <h1>My Projects</h1>
            {projects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                organization={project.organization}
                description={project.description}
                technologies={project.technologies}
              />
            ))}
          </div>
        </section>
      );
    };

export default Projects;
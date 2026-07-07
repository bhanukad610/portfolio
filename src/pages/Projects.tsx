import { useEffect, useState } from 'react';
import Project from '../components/Project';
import './styles/Projects.css';
import type { Project as ProjectData, ProjectsResponse } from '../types';

const Projects = () => {
    const [projects, setProjects] = useState<ProjectData[]>([]);

    useEffect(() => {
      fetch(`${import.meta.env.BASE_URL}projects.json`)
        .then((response) => response.json() as Promise<ProjectsResponse>)
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
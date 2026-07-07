export interface Project {
  title: string;
  organization: string;
  description: string;
  technologies: string[];
}

export interface ProjectsResponse {
  projects: Project[];
}

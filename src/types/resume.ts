export interface Experience {
  title: string;
  company: string;
  location: string;
  date: string;
}

export interface Education {
  degree: string;
  major: string;
  institution: string;
  location: string;
  date: string;
}

export interface ExperienceResponse {
  experience: Experience[];
  education: Education[];
}

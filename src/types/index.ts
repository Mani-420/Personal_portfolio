export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
  proficiency: number;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  images: string[]; // Array of image paths for horizontal scrolling
  technologies: string[];
  category: 'frontend' | 'backend' | 'fullstack';
  githubUrl: string;
  liveUrl?: string;
  linkedinUrl?: string;
  features: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  position?: 'left' | 'right';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  behance: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

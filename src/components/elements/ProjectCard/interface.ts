export interface ProjectCardProps {
  project: Project
}

export interface Project {
  title: string;
  description: string;
  images: string[];
  stack: string[];
  repoUrl?: string;
  docsUrl?: string;
};

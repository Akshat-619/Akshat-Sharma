export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  category: string;
  icon: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  shadowClass: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  isPresent?: boolean;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
}

export interface SocialLink {
  icon: string;
  url: string;
  label: string;
}
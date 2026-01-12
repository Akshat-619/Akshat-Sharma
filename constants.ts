import { Experience, Project, Skill } from "./types";

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  {
    name: 'HTML',
    category: 'Core',
    icon: 'html',
    colorClass: 'group-hover:text-orange-700',
    bgClass: 'bg-orange-500/5',
    borderClass: 'hover:border-orange-500/30',
    shadowClass: 'group-hover:shadow-orange-500/20'
  },
  {
    name: 'CSS',
    category: 'Styling',
    icon: 'css',
    colorClass: 'group-hover:text-blue-700',
    bgClass: 'bg-blue-500/5',
    borderClass: 'hover:border-blue-500/30',
    shadowClass: 'group-hover:shadow-blue-500/20'
  },
  {
    name: 'SCSS',
    category: 'Styling',
    icon: 'css',
    colorClass: 'group-hover:text-purple-700',
    bgClass: 'bg-purple-500/5',
    borderClass: 'hover:border-purple-500/30',
    shadowClass: 'group-hover:shadow-purple-500/20'
  },
  {
    name: 'JavaScript',
    category: 'Language',
    icon: 'javascript',
    colorClass: 'group-hover:text-yellow-700',
    bgClass: 'bg-yellow-500/5',
    borderClass: 'hover:border-yellow-500/30',
    shadowClass: 'group-hover:shadow-yellow-500/20'
  },
  {
    name: 'Bootstrap',
    category: 'Framework',
    icon: 'layers',
    colorClass: 'group-hover:text-purple-700',
    bgClass: 'bg-purple-600/5',
    borderClass: 'hover:border-purple-600/30',
    shadowClass: 'group-hover:shadow-purple-600/20'
  },
  {
    name: 'Tailwind CSS',
    category: 'Framework',
    icon: 'brush',
    colorClass: 'group-hover:text-cyan-700',
    bgClass: 'bg-cyan-500/5',
    borderClass: 'hover:border-cyan-500/30',
    shadowClass: 'group-hover:shadow-cyan-500/20'
  },
  {
    name: 'Responsive Design',
    category: 'Design',
    icon: 'devices',
    colorClass: 'group-hover:text-green-700',
    bgClass: 'bg-green-500/5',
    borderClass: 'hover:border-green-500/30',
    shadowClass: 'group-hover:shadow-green-500/20'
  },
  {
    name: 'UI Layouts',
    category: 'Design',
    icon: 'grid_view',
    colorClass: 'group-hover:text-indigo-700',
    bgClass: 'bg-indigo-500/5',
    borderClass: 'hover:border-indigo-500/30',
    shadowClass: 'group-hover:shadow-indigo-500/20'
  },
  {
    name: 'Dashboard UI',
    category: 'Design',
    icon: 'dashboard',
    colorClass: 'group-hover:text-pink-700',
    bgClass: 'bg-pink-500/5',
    borderClass: 'hover:border-pink-500/30',
    shadowClass: 'group-hover:shadow-pink-500/20'
  },
  {
    name: 'Web Interfaces',
    category: 'Design',
    icon: 'web',
    colorClass: 'group-hover:text-teal-700',
    bgClass: 'bg-teal-500/5',
    borderClass: 'hover:border-teal-500/30',
    shadowClass: 'group-hover:shadow-teal-500/20'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: 'UI Developer Intern',
    company: 'Mastersoft ERP',
    period: '2025',
    description: 'Worked on real company projects used in production, contributing to UI development, layout structure, and styling. Also developed a core internal project under the guidance of senior developers while following professional design and coding standards.',
    isPresent: true
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Metrion — Multi-Page Dashboard',
    description: 'A dashboard-style web application built with multiple pages, clean layout structure, and responsive design to manage and visualize information.',
    image: '/dist/assets/Metrion-Dashboard-1.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    demoLink: 'https://metrion-dashboard-5j94.vercel.app/',
    codeLink: 'https://github.com/Akshat-619/Metrion-Dashboard'
  },
  {
    id: 2,
    title: 'MS-Dashboard — Admin Panel',
    description: 'A compact admin dashboard created to practice UI consistency, layout systems, and data-driven components in a modern interface.',
    image: '/dist/assets/Ms-Dashboard.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoLink: 'https://dashboard-xj99.vercel.app/',
    codeLink: 'https://github.com/Akshat-619/Dashboard'
  },
  {
    id: 3,
    title: 'Growlytics — Landing Page',
    description: 'A modern landing page focused on strong visual hierarchy, conversion-oriented layout, and clean design.',
    image: '/dist/assets/Growlytics.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoLink: 'https://growlytics-five.vercel.app',
    codeLink: 'https://github.com/Akshat-619/Growlytics'
  }
];

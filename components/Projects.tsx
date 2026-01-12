import React from 'react';
import { PROJECTS } from '../constants';
import ScrollReveal from './ScrollReveal';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-background-dark to-background-light relative border-t border-border-dark overflow-hidden transition-colors duration-300">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px] animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/2 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
            <div>
              <h2 className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">My Work</h2>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-dark mb-4">Featured Projects</h2>
              <p className="text-text-muted text-lg max-w-2xl">
                Explore my latest UI development projects, showcasing responsive design, modern layouts, and clean code.
              </p>
            </div>
            <a href="https://github.com/Akshat-619" target="_blank" rel="noreferrer" className="group inline-flex items-center text-sm font-bold text-text-muted hover:text-primary transition-all duration-300 px-6 py-3 rounded-full border border-border-dark hover:border-primary/30 hover:bg-surface-lighter">
              View Github Profile
              <span className="material-symbols-outlined text-[20px] ml-1 group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </a>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 150} className="h-full">
              <div className="group relative bg-gradient-to-br from-surface-lighter to-surface-light rounded-2xl overflow-hidden border border-border-dark hover:border-primary/30 transition-all duration-500 flex flex-col h-full hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-primary/5 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm">
                    <a href={project.demoLink} className="h-12 px-6 flex items-center gap-2 bg-primary text-white rounded-full text-sm font-bold hover:bg-primary-hover transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg hover:shadow-primary/40 hover:scale-105">
                      <span className="material-symbols-outlined text-[18px]">visibility</span> Demo
                    </a>
                    <a href={project.codeLink} className="h-12 px-6 flex items-center gap-2 bg-white/90 backdrop-blur-md text-text-dark border border-gray-300 rounded-full text-sm font-bold hover:bg-white hover:border-gray-400 transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75 shadow-lg hover:shadow-gray-400/40 hover:scale-105">
                      <span className="material-symbols-outlined text-[18px]">code</span> Code
                    </a>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3 text-text-dark group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                  <p className="text-text-muted text-base mb-6 line-clamp-3 leading-relaxed">{project.description}</p>
                  
                  <div className="mt-auto flex flex-wrap gap-2 pt-6 border-t border-border-dark/50">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 text-xs font-mono rounded-full bg-surface-lighter border border-border-dark text-text-muted hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
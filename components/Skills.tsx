import React from 'react';
import { SKILLS } from '../constants';
import ScrollReveal from './ScrollReveal';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-background-dark relative border-t border-border-dark overflow-hidden transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-5 mix-blend-multiply dark:mix-blend-screen"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none animate-pulse-slow"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">My Arsenal</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">Unified Technical Mastery</h3>
            <p className="text-text-muted text-lg">
              Seamlessly bridging the gap between design and engineering with a comprehensive suite of modern technologies.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-5 gap-6 max-w-5xl mx-auto">
          {SKILLS.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={index * 50} className="h-full">
              <div 
                className={`group relative flex flex-col items-center justify-center p-6 h-full rounded-2xl bg-surface-lighter/50 border border-border-dark backdrop-blur-sm hover:bg-surface-lighter/80 skill-card-hover transition-all duration-300 cursor-default ${skill.borderClass}`}
              >
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${skill.bgClass}`}></div>
                
                <div className={`relative z-10 w-14 h-14 rounded-2xl bg-background-light/50 border border-border-dark flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md ${skill.shadowClass}`}>
                  <span className={`material-symbols-outlined text-3xl text-text-muted transition-colors ${skill.colorClass}`}>
                    {skill.icon}
                  </span>
                </div>
                
                <h4 className={`relative z-10 text-base font-bold text-text-dark transition-colors ${skill.colorClass}`}>
                  {skill.name}
                </h4>
                <p className="relative z-10 text-[10px] text-text-muted uppercase tracking-wider mt-1">
                  {skill.category}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
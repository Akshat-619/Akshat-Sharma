import React from 'react';
import { EXPERIENCE } from '../constants';
import ScrollReveal from './ScrollReveal';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-gradient-to-b from-background-light to-background-dark relative border-t border-border-dark overflow-hidden transition-colors duration-300">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">Career Path</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">Professional Journey</h3>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Building expertise through real-world projects and hands-on development experience.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative space-y-16">
          {/* Enhanced Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-border-dark to-primary/20 md:-translate-x-1/2"></div>
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-border-dark to-primary md:-translate-x-1/2 animate-pulse opacity-30"></div>

          {EXPERIENCE.map((job, index) => {
            const isLeft = index % 2 === 0;
            return (
              <ScrollReveal key={job.id} delay={index * 150} className="w-full">
                <div className="relative flex flex-col md:flex-row gap-12 items-start group">
                  {/* Enhanced Desktop Layout Alternator */}
                  <div className={`md:w-1/2 flex md:justify-end pl-20 md:pl-0 md:pr-12 ${!isLeft ? 'md:order-2 md:!justify-start md:!pl-12 md:!pr-0' : ''}`}>
                    <div className={`text-left ${isLeft ? 'md:text-right' : ''} max-w-md`}>
                      <div className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-3 border backdrop-blur-sm transition-all duration-300 ${job.isPresent ? 'bg-gradient-to-r from-primary/20 to-primary/10 text-primary border-primary/30 shadow-lg shadow-primary/20' : 'bg-surface-lighter/80 text-text-muted border-border-dark hover:border-primary/30'}`}>
                        {job.isPresent && <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>}
                        {job.period}
                      </div>
                      <h3 className="text-2xl font-bold text-text-dark group-hover:text-primary transition-all duration-300 mb-2">{job.role}</h3>
                      <p className="text-text-muted font-medium text-lg mb-2">{job.company}</p>
                      {job.isPresent && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5 animate-pulse"></span>
                          Currently Working
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Enhanced Timeline Dot */}
                  <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 md:-translate-x-1/2 mt-3 transition-all duration-500 z-20 ${job.isPresent ? 'bg-primary border-4 border-primary/20 shadow-lg shadow-primary/40 group-hover:scale-150' : 'bg-background-light border-4 border-border-dark group-hover:border-primary group-hover:scale-125'}`}>
                    {job.isPresent && (
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></div>
                    )}
                  </div>

                  {/* Enhanced Content Box */}
                  <div className={`md:w-1/2 pl-20 md:pl-12 ${!isLeft ? 'md:order-1 md:pr-12 md:pl-0 md:text-right' : ''}`}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                      <div className="relative bg-surface-dark/80 backdrop-blur-sm p-6 rounded-2xl border border-border-dark hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                        <p className="text-text-muted leading-relaxed text-base">
                          {job.description}
                        </p>
                        <div className="mt-4 pt-4 border-t border-border-dark/50">
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">UI Development</span>
                            <span className="px-3 py-1 bg-surface-lighter text-text-muted rounded-full text-xs font-medium">Production Projects</span>
                            <span className="px-3 py-1 bg-surface-lighter text-text-muted rounded-full text-xs font-medium">Professional Standards</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
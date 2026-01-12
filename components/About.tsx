import React from 'react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative border-t border-border-dark bg-background-light overflow-hidden transition-colors duration-300">
      <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-gradient-to-b from-primary/5 to-transparent blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          
          {/* Image Column */}
          <ScrollReveal>
            <div className="relative group perspective-1000">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-purple-500/20 to-pink-500/20 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition duration-700 animate-tilt"></div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border-dark bg-surface-dark shadow-xl transform transition-transform duration-500 group-hover:rotate-1">
                <img 
                  src="https://picsum.photos/seed/developer_portrait/800/1000" 
                  alt="Professional developer portrait" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700 scale-105 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-light via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/60 dark:bg-black/60 backdrop-blur-md border border-border-dark">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.3)]"></div>
                    <p className="text-sm font-mono text-text-dark">Currently coding the future</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content Column */}
          <div className="space-y-8">
            <ScrollReveal delay={200}>
              <div>
                <h2 className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">ABOUT ME</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-text-dark tracking-tight mb-6">
                  A fusion of logic and <span className="text-text-muted">visual clarity.</span>
                </h3>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="prose text-lg text-text-muted leading-relaxed space-y-6">
                <p>
                  My journey in UI development started with a curiosity about how design and code come together to shape great user experiences. Over time, this curiosity turned into a strong focus on building clean, structured, and visually consistent interfaces for real-world web applications.
                </p>
                <p>
                  I specialize in creating responsive layouts, dashboards, and modern web pages using HTML, CSS, JavaScript, Bootstrap, and Tailwind. I care deeply about spacing, alignment, and interaction, because I believe a good interface should not only look modern but also feel intuitive and easy to use.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border-dark">
                <div>
                  <span className="text-4xl font-bold text-text-dark block mb-1">3+</span>
                  <span className="text-sm text-text-muted uppercase tracking-wider font-medium">Months Industry Experience</span>
                </div>
                <div>
                  <span className="text-4xl font-bold text-text-dark block mb-1">6+</span>
                  <span className="text-sm text-text-muted uppercase tracking-wider font-medium">UI Projects Built</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';

const Hero: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40 pointer-events-none"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] animate-pulse-slow mix-blend-screen" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center max-w-5xl">
        {/* Status Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-lighter border border-border-dark backdrop-blur-sm animate-fade-in-up hover:bg-surface-dark transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-emerald-600 tracking-wide">Available for opportunities</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8 animate-[fadeInUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.1s_forwards] opacity-0 text-text-dark">
          Crafting clean and <br />
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-text-dark via-text-dark to-text-muted text-glow">
            intuitive user interfaces.
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-60" fill="none" viewBox="0 0 200 9" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.00025 6.99997C2.00025 6.99997 101.5 0.500003 198.5 3.00001" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
            </svg>
          </span>
        </h1>

        {/* Micro-line under title */}
        <p className="text-sm text-text-muted font-mono mb-8 animate-[fadeInUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.15s_forwards] opacity-0">
          UI Developer · Frontend Specialist
        </p>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-text-muted max-w-2xl mb-12 animate-[fadeInUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards] opacity-0 leading-relaxed">
          I'm <span className="text-text-dark font-medium">Akshat</span>, a UI Developer focused on building responsive, visually consistent, and user-friendly web interfaces that are easy to use and scale.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-5 animate-[fadeInUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.3s_forwards] opacity-0 w-full sm:w-auto">
          <a 
            href="#projects" 
            onClick={(e) => handleSmoothScroll(e, '#projects')}
            className="group h-14 px-8 flex items-center justify-center rounded-full bg-primary hover:bg-primary-hover text-white font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
          >
            View Projects
            <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="group h-14 px-8 flex items-center justify-center rounded-full bg-white border border-border-dark hover:bg-surface-lighter text-text-dark font-medium transition-all backdrop-blur-md hover:border-gray-300"
          >
            Contact Me
          </a>
        </div>
      </div>

          </section>
  );
};

export default Hero;
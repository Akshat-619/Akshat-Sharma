import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import ResumeModal from './ResumeModal';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Handle active section highlighting and scroll state
  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state for navbar styling
      setIsScrolled(window.scrollY > 20);

      // Active section logic
      const scrollPosition = window.scrollY + 100; // Offset to trigger a bit earlier
      
      // Default to nothing if at top
      if (window.scrollY < 50) {
        setActiveSection('');
        return;
      }

      for (const item of NAV_ITEMS) {
        const sectionId = item.href.substring(1);
        const element = document.getElementById(sectionId);
        
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.href);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, setIsScrolled]); // Add activeSection to the dependency array

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
      
      // Update URL hash manually without triggering jump
      window.history.pushState(null, '', href);
      
      setIsMobileMenuOpen(false);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', ' ');
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav shadow-sm' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-20' : 'h-24'}`}>
            
            {/* Logo */}
            <a href="#" onClick={handleLogoClick} className="flex items-center gap-3 cursor-pointer group select-none">
              <div className="relative size-10 rounded-xl bg-gradient-to-br from-primary via-blue-500 to-accent flex items-center justify-center text-white shadow-lg shadow-primary/10 overflow-hidden group-hover:shadow-primary/20 transition-shadow duration-300">
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="material-symbols-outlined text-[24px]">code</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-text-dark tracking-tight leading-none group-hover:text-primary transition-colors">Akshat Sharma</span>
                <span className="text-[10px] text-text-muted font-mono font-medium tracking-widest uppercase mt-0.5">UI Developer</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label}
                  className={`nav-link relative text-sm font-medium transition-colors py-1 cursor-pointer ${activeSection === item.href ? 'text-text-dark active' : 'text-text-muted hover:text-text-dark'}`}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsResumeOpen(true)}
                className="hidden sm:inline-flex group relative h-11 px-6 items-center justify-center rounded-full bg-primary text-white text-sm font-bold transition-all hover:bg-primary-hover overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] border-2 border-transparent"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-shine"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Download Resume
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-y-0.5 transition-transform duration-300">download</span>
                </span>
              </button>
              
              {/* Mobile Toggle */}
              <button 
                className="md:hidden p-2 rounded-lg text-text-muted hover:text-text-dark hover:bg-black/5 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-border-dark animate-fade-in-up">
            <div className="px-6 py-4 space-y-4">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label}
                  className={`block text-base font-medium transition-colors cursor-pointer ${activeSection === item.href ? 'text-primary' : 'text-text-dark hover:text-primary'}`}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
              <button 
                onClick={() => {
                  setIsResumeOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left block text-base font-medium transition-colors cursor-pointer text-primary mt-4 pt-4 border-t border-gray-100"
              >
                Download Resume
              </button>
            </div>
          </div>
        )}
      </nav>
      
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};

export default Navbar;
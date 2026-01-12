import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-background-light border-t border-border-dark">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
          <span className="material-symbols-outlined text-[24px] text-text-muted">code</span>
        </div>
        <p className="text-text-muted text-sm">&copy; 2025 Akshat Sharma — Designed & built with care.</p>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useEffect } from 'react';
import { EXPERIENCE, SKILLS } from '../constants';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDownload = () => {
    // Triggers the browser's print dialog, allowing the user to "Save as PDF"
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 print:p-0">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity print:hidden" 
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up print:h-auto print:shadow-none print:rounded-none print:w-full print:max-w-none">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white z-10 print:hidden">
            <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">description</span>
                Resume Preview
            </h2>
            <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
            >
                <span className="material-symbols-outlined">close</span>
            </button>
        </div>

        {/* Scrollable Content (The Resume) */}
        <div className="flex-1 overflow-y-auto bg-gray-50 custom-scrollbar print:overflow-visible print:bg-white" id="resume-content">
            <div className="max-w-3xl mx-auto bg-white shadow-sm p-8 md:p-12 min-h-full print:shadow-none print:p-0 print:max-w-none">
                {/* Resume Header */}
                <header className="border-b-2 border-primary pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">Akshat Sharma</h1>
                        <p className="text-xl text-primary font-medium">UI Developer</p>
                        <p className="text-gray-500 mt-2 max-w-md text-sm">
                            Building responsive, visually consistent, and user-friendly web experiences with modern technologies.
                        </p>
                    </div>
                    <div className="text-right text-sm text-gray-600 space-y-1">
                        <div className="flex items-center justify-end gap-2">
                            <span>official.akshatsharma04@gmail.com</span>
                            <span className="material-symbols-outlined text-[16px]">mail</span>
                        </div>
                        <div className="flex items-center justify-end gap-2">
                            <span>+91 75586 10318</span>
                            <span className="material-symbols-outlined text-[16px]">call</span>
                        </div>
                        <div className="flex items-center justify-end gap-2">
                            <span>Nagpur, Maharashtra</span>
                            <span className="material-symbols-outlined text-[16px]">location_on</span>
                        </div>
                    </div>
                </header>

                {/* Experience Section */}
                <section className="mb-10">
                    <h3 className="text-lg font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 pb-2 mb-6">Experience</h3>
                    <div className="space-y-8">
                        {EXPERIENCE.map((exp) => (
                            <div key={exp.id} className="break-inside-avoid">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h4 className="text-lg font-bold text-gray-800">{exp.role}</h4>
                                    <span className="text-sm font-medium text-primary bg-primary/5 px-2 py-1 rounded print:border print:border-gray-200">{exp.period}</span>
                                </div>
                                <div className="text-sm font-semibold text-gray-600 mb-2">{exp.company}</div>
                                <p className="text-gray-600 text-sm leading-relaxed text-justify">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                <section className="mb-10 break-inside-avoid">
                    <h3 className="text-lg font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 pb-2 mb-6">Technical Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {SKILLS.map((skill) => (
                            <span key={skill.name} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium border border-gray-200 print:bg-white print:border-gray-300">
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Education Section (Static) */}
                <section className="break-inside-avoid">
                    <h3 className="text-lg font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 pb-2 mb-6">Education</h3>
                    <div>
                        <div className="flex justify-between items-baseline mb-1">
                            <h4 className="text-lg font-bold text-gray-800">Bachelor of Technology in Computer Science</h4>
                            <span className="text-sm text-gray-500">2020 - 2024</span>
                        </div>
                        <div className="text-sm text-gray-600">University/College Name</div>
                        <p className="text-sm text-gray-500 mt-2">Specialized in UI Development and Modern Web Technologies.</p>
                    </div>
                </section>
            </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-gray-100 bg-white flex justify-end gap-4 z-10 print:hidden">
            <button 
                onClick={onClose}
                className="px-6 py-2 rounded-full text-sm font-bold text-gray-600 hover:bg-gray-100 transition-colors"
            >
                Close
            </button>
            <button 
                onClick={handleDownload}
                className="px-6 py-2 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all flex items-center gap-2"
            >
                <span className="material-symbols-outlined text-[18px]">download</span>
                Download PDF
            </button>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
        @media print {
            body > *:not(#root) {
                display: none;
            }
            #root > *:not(div:has(#resume-content)) {
                display: none;
            }
            /* Hide modal backdrop and other UI elements */
            .fixed.inset-0 {
                position: relative;
                z-index: auto;
            }
            .absolute.inset-0.bg-black\/60 {
                display: none;
            }
            /* Reset modal container styles for print */
            .relative.w-full.max-w-4xl {
                width: 100%;
                max-width: none;
                height: auto;
                box-shadow: none;
                border-radius: 0;
            }
            /* Ensure content is visible */
            #resume-content {
                overflow: visible !important;
                height: auto !important;
            }
        }
      `}</style>
    </div>
  );
};

export default ResumeModal;
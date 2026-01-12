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
    // Triggers browser's print dialog, allowing user to "Save as PDF"
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
      <div className="relative w-full max-w-5xl h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up print:h-auto print:shadow-none print:rounded-none print:w-full print:max-w-none border border-gray-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-white to-gray-50 z-10 print:hidden">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-white text-xl">description</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Resume Preview</h2>
              <p className="text-sm text-gray-500">UI Developer Portfolio</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-3 hover:bg-gray-100 rounded-full transition-all duration-300 text-gray-500 hover:text-gray-700 hover:scale-110"
            aria-label="Close resume"
          >
            <span className="material-symbols-outlined text-xl">close</span>
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
              <div className="space-y-6">
                {/* B.Tech */}
                <div className="mb-6">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-bold text-gray-800">B.Tech in Computer Science</h4>
                    <span className="text-sm text-gray-500">2021 - 2025</span>
                  </div>
                  <div className="text-sm text-gray-600">University/College Name</div>
                  <p className="text-sm text-gray-500 mt-2">Currently pursuing final year of B.Tech in Computer Science, building on a strong academic foundation in programming, software development, and web technologies.</p>
                </div>

                {/* Diploma */}
                <div className="mb-6">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-bold text-gray-800">Diploma in Computer Science</h4>
                    <span className="text-sm text-gray-500">2024</span>
                  </div>
                  <div className="text-sm text-gray-600">Polytechnic College Name</div>
                  <p className="text-sm text-gray-500 mt-2">Developed core technical skills and practical knowledge in computing and application development.</p>
                </div>

                {/* Higher Secondary */}
                <div className="mb-6">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-bold text-gray-800">Higher Secondary (12th Grade)</h4>
                    <span className="text-sm text-gray-500">2022</span>
                  </div>
                  <div className="text-sm text-gray-600">Laxmikant Kanojiya Jr. College, Nagpur</div>
                  <p className="text-sm text-gray-500 mt-2">Completed with 78%</p>
                </div>

                {/* Secondary School */}
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-bold text-gray-800">Secondary School (10th Grade)</h4>
                    <span className="text-sm text-gray-500">2020</span>
                  </div>
                  <div className="text-sm text-gray-600">St. Ann's English Medium School, Khaperkheda, Nagpur</div>
                  <p className="text-sm text-gray-500 mt-2">Completed with 68%</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Download Button */}
        <div className="p-6 border-t border-gray-100 bg-gradient-to-b from-gray-50 to-white">
          <div className="flex gap-4">
            <button 
              onClick={handleDownload}
              className="flex-1 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl font-bold hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3"
              aria-label="Download resume as PDF"
            >
              <span className="material-symbols-outlined text-xl">download</span>
              <span>Download Resume</span>
            </button>
            <button 
              onClick={onClose}
              className="px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              aria-label="Close resume"
            >
              <span className="material-symbols-outlined text-xl">close</span>
              <span>Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;

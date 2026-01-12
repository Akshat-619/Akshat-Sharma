import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Simulate form submission
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    // Hide message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-32 bg-background-light border-t border-border-dark relative transition-colors duration-300">
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <ScrollReveal>
          <div className="rounded-3xl p-1 bg-gradient-to-br from-border-dark via-background-light to-transparent">
            <div className="bg-surface-dark rounded-[22px] p-8 md:p-16 relative overflow-hidden shadow-2xl">
              
              {/* Background Orbs */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/3 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="grid md:grid-cols-2 gap-16 relative z-10">
                
                {/* Info Side */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-dark mb-4">Let's build something <span className="text-primary">great.</span></h2>
                    <p className="text-text-muted text-lg leading-relaxed">
                      Have a project, idea, or opportunity? I'm always open to discussing new UI projects, collaborations, and frontend roles.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <a href="mailto:official.akshatsharma04@gmail.com" className="flex items-center gap-4 text-text-dark hover:text-primary transition-all group p-4 rounded-2xl bg-background-light border border-border-dark hover:border-primary/30 hover:bg-surface-lighter">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-[24px]">mail</span>
                      </div>
                      <div>
                        <span className="block text-xs text-text-muted uppercase tracking-widest font-bold mb-1">Email Me</span>
                        <span className="text-lg font-medium">official.akshatsharma04@gmail.com</span>
                      </div>
                    </a>

                    <a href="tel:+917558610318" className="flex items-center gap-4 text-text-dark hover:text-primary transition-all group p-4 rounded-2xl bg-background-light border border-border-dark hover:border-primary/30 hover:bg-surface-lighter">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-[24px]">call</span>
                      </div>
                      <div>
                        <span className="block text-xs text-text-muted uppercase tracking-widest font-bold mb-1">Call Me</span>
                        <span className="text-lg font-medium">+91 75586 10318</span>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 text-text-dark p-4 rounded-2xl bg-transparent border border-transparent">
                      <div className="w-12 h-12 rounded-xl bg-background-light border border-border-dark flex items-center justify-center text-text-muted">
                        <span className="material-symbols-outlined text-[24px]">location_on</span>
                      </div>
                      <div>
                        <span className="block text-xs text-text-muted uppercase tracking-widest font-bold mb-1">Located in</span>
                        <span className="text-lg font-medium">Nagpur, Maharashtra</span>
                      </div>
                    </div>

                    {/* Social Icons */}
                    <div className="pt-6 border-t border-border-dark/50">
                       <p className="text-xs text-text-muted uppercase tracking-widest font-bold mb-4">Connect with me</p>
                       <div className="flex gap-4">
                          <a href="https://github.com/Akshat-619" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-background-light border border-border-dark flex items-center justify-center text-text-dark hover:text-white hover:bg-[#333] hover:border-[#333] transition-all duration-300 hover:-translate-y-1 shadow-sm">
                             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                          </a>
                          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-background-light border border-border-dark flex items-center justify-center text-text-dark hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 hover:-translate-y-1 shadow-sm">
                             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                          </a>
                          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-background-light border border-border-dark flex items-center justify-center text-text-dark hover:text-white hover:bg-black hover:border-black transition-all duration-300 hover:-translate-y-1 shadow-sm">
                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                          </a>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Form Side */}
                <form onSubmit={handleSubmit} className="space-y-5 bg-background-light p-8 rounded-2xl border border-border-dark shadow-sm relative overflow-hidden">
                  
                  {/* Success Overlay */}
                  {isSubmitted && (
                    <div className="absolute inset-0 z-10 bg-surface-lighter/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6 animate-fade-in-up">
                      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
                        <span className="material-symbols-outlined text-3xl">check_circle</span>
                      </div>
                      <h3 className="text-2xl font-bold text-text-dark mb-2">Message Sent!</h3>
                      <p className="text-text-muted max-w-xs">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold text-text-muted uppercase tracking-wider">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-surface-lighter border border-border-dark rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all placeholder-text-muted/70 shadow-sm"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold text-text-muted uppercase tracking-wider">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-surface-lighter border border-border-dark rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all placeholder-text-muted/70 shadow-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-bold text-text-muted uppercase tracking-wider">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-surface-lighter border border-border-dark rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all shadow-sm"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold text-text-muted uppercase tracking-wider">Message</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-surface-lighter border border-border-dark rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all resize-none placeholder-text-muted/70 shadow-sm"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full py-4 rounded-lg bg-primary hover:bg-primary-hover text-white font-bold transition-all shadow-lg shadow-primary/20 mt-2 flex items-center justify-center gap-2 group">
                    Send Message
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">send</span>
                  </button>
                </form>

              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
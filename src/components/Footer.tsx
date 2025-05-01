import React from 'react';
import { Github as GitHub, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between mb-8">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-white">Arnav</span>
                <span className="text-blue-400">Birla</span>
              </h2>
              <p className="text-gray-300 max-w-xs mb-4">
                Full Stack Developer building dynamic, scalable web applications with Java & MERN stack.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/username" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
                  aria-label="GitHub"
                >
                  <GitHub size={18} />
                </a>
                <a 
                  href="https://linkedin.com/in/username" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="mailto:your.email@example.com"
                  className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
                <a 
                  href="tel:+1234567890" 
                  className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
                  aria-label="Phone"
                >
                  <Phone size={18} />
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a>
                  </li>
                  <li>
                    <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
                  </li>
                  <li>
                    <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">Skills</a>
                  </li>
                  <li>
                    <a href="#education" className="text-gray-300 hover:text-blue-400 transition-colors">Education</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">More</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a>
                  </li>
                  <li>
                    <a href="#certifications" className="text-gray-300 hover:text-blue-400 transition-colors">Certifications</a>
                  </li>
                  <li>
                    <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Arnav Birla. All rights reserved.
            </p>
            <button 
              onClick={scrollToTop}
              className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
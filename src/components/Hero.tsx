import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github as GitHub, Linkedin, Mail, Phone } from 'lucide-react';
import Img from './Arnav.jpg';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-teal-500/10 to-blue-500/10 dark:from-teal-500/5 dark:to-blue-500/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium"
            >
              Full Stack Developer
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-transparent bg-clip-text"
            >
              Hi, I'm Arnav Birla
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl mb-10 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:mx-0"
            >
              Building dynamic, scalable web apps with Java & MERN stack.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              <a 
                href="#contact" 
                className="px-8 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-8 py-3 rounded-md bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-medium transition-colors"
              >
                View Projects
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1 max-w-md"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-6 scale-105 opacity-20 blur-xl"></div>
              <img 
                src={Img}
                alt="Arnav Birla"
                className="w-full rounded-2xl shadow-xl relative z-10"
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex justify-center space-x-6"
        >
          {[
            { icon: <GitHub size={20} />, url: "https://github.com/yourUsername", label: "GitHub" },
            { icon: <Linkedin size={20} />, url: "https://linkedin.com/in/yourUsername", label: "LinkedIn" },
            { icon: <Mail size={20} />, url: "mailto:your.email@example.com", label: "Email" },
            { icon: <Phone size={20} />, url: "tel:+123456789", label: "Phone" }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white transition-colors"
              aria-label={social.label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
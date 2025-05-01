import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server } from 'lucide-react';
import Img from './Arnav.jpg';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <Code size={24} />,
      title: 'Frontend Development',
      description: 'Building responsive UIs with React.js and modern CSS frameworks'
    },
    {
      icon: <Server size={24} />,
      title: 'Backend Development',
      description: 'Crafting robust APIs with Node.js and Express'
    },
    {
      icon: <Database size={24} />,
      title: 'Database Management',
      description: 'Working with SQL and NoSQL databases like MySQL and MongoDB'
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform -rotate-6 scale-105 opacity-20 blur-xl"></div>
              <img 
                src={Img} 
                alt="Arnav Birla"
                className="w-full rounded-2xl shadow-xl relative z-10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a dedicated developer focused on creating scalable and efficient web applications. 
                With a strong foundation in Java, Data Structures & Algorithms, and the MERN stack, 
                I approach each project with a commitment to clean code and optimal user experience.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Currently pursuing my B.Tech in Computer Science Engineering at Lovely Professional University, 
                I continuously enhance my skills through coursework, certifications, and self-directed projects. 
                I'm particularly interested in full-stack development that combines robust backend solutions with 
                intuitive frontend interfaces.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
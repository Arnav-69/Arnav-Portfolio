import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github as GitHub } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    title: 'Digital GOLD Website',
    description: 'A platform for buying and selling digital gold with real-time price tracking and secure transactions',
    techStack: ['React.js', 'API Integration', 'HTML/CSS'],
    githubUrl: 'https://github.com/username/digital-gold',
    liveUrl: 'https://digital-gold.example.com',
    imageUrl: 'https://images.pexels.com/photos/4386326/pexels-photo-4386326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    title: 'Blog Website',
    description: 'A full-featured blog platform with user authentication, content management, and commenting system',
    techStack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Bootstrap'],
    githubUrl: 'https://github.com/username/blog-website',
    imageUrl: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    title: 'Snake Game',
    description: 'A classic Snake game with modern twists, featuring multiple difficulty levels and score tracking',
    techStack: ['JavaScript', 'HTML Canvas', 'CSS'],
    githubUrl: 'https://github.com/username/snake-game',
    liveUrl: 'https://snake-game.example.com',
    imageUrl: 'https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    title: 'E-Commerce Clone',
    description: 'A full-stack e-commerce application with product catalog, shopping cart, and order management',
    techStack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    githubUrl: 'https://github.com/username/ecommerce-clone',
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  }
];

const Projects: React.FC = () => {
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

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 md:py-28"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <GitHub size={18} className="mr-2" />
                      <span>View Code</span>
                    </a>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
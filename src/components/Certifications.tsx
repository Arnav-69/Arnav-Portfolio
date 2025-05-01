import React, { useEffect, useRef, useState } from 'react';
import { Award, Calendar } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  url?: string;
}

const certifications: Certification[] = [
  {
    title: 'NPTEL Cloud Computing',
    issuer: 'NPTEL',
    date: '2024',
    description: 'Mastered cloud architecture, deployment models, security, and hands-on implementation with major cloud platforms.',
    url: 'https://nptel.ac.in'
  },
  {
    title: 'Data Structures & Algorithms',
    issuer: 'Coursera',
    date: '2024',
    description: 'Comprehensive understanding of DSA concepts, problem-solving techniques, and algorithm optimization strategies.',
    url: 'https://coursera.org'
  },
  {
    title: 'Web Development Bootcamp',
    issuer: 'Udemy',
    date: '2023',
    description: 'Full-stack web development with focus on MERN stack, RESTful APIs, and modern frontend frameworks.',
    url: 'https://udemy.com'
  }
];

const Certifications: React.FC = () => {
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
      id="certifications" 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div 
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="text-blue-600 dark:text-blue-400">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 border-l-4 border-blue-600 dark:border-blue-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                    <Award className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400">{cert.issuer}</p>
                  </div>
                </div>
                
                <div className="ml-12 mb-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{cert.description}</p>
                </div>
                
                {cert.url && (
                  <div className="ml-12">
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      View Certificate
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
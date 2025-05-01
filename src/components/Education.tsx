import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

interface Education {
  year: string;
  degree: string;
  institution: string;
  location: string;
  score: string;
}

const educations: Education[] = [
  {
    year: '2022 - 2026',
    degree: 'B.Tech Computer Science Engineering',
    institution: 'Lovely Professional University',
    location: 'Punjab',
    score: 'CGPA: 7.0'
  },
  {
    year: '2020 - 2022',
    degree: 'High School',
    institution: 'Shree Mahesh Public School',
    location: 'Bhilwara',
    score: 'Percentage: 72%'
  },
  {
    year: '2020',
    degree: 'Secondary School',
    institution: 'Shree Mahesh Public School',
    location: 'Bhilwara',
    score: 'Percentage: 76%'
  }
];

const Education: React.FC = () => {
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
      id="education" 
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
              Education <span className="text-blue-600 dark:text-blue-400">Timeline</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-blue-200 dark:bg-blue-900"></div>

            {educations.map((edu, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row md:items-center mb-10 md:mb-16 relative transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline circle */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center z-10">
                  <GraduationCap className="text-white" size={16} />
                </div>

                {/* Left side for odd items on desktop */}
                <div className={`flex-1 pl-16 md:pl-0 md:pr-12 ${index % 2 === 0 ? 'md:text-right' : 'md:order-last md:text-left md:pl-12'}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-2">
                      {edu.institution}, {edu.location}
                    </h4>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span>{edu.year}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{edu.score}</p>
                  </div>
                </div>

                {/* Empty div for layout on desktop */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
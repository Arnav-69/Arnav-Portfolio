import React, { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'language' | 'framework' | 'database' | 'tool';
}

const skills: Skill[] = [
  { name: 'Java', level: 90, category: 'language' },
  { name: 'Python', level: 80, category: 'language' },
  { name: 'C++', level: 75, category: 'language' },
  { name: 'JavaScript', level: 85, category: 'language' },
  { name: 'HTML/CSS', level: 85, category: 'language' },
  
  { name: 'React.js', level: 85, category: 'framework' },
  { name: 'Node.js', level: 80, category: 'framework' },
  { name: 'Express', level: 75, category: 'framework' },
  { name: 'Bootstrap', level: 80, category: 'framework' },
  
  { name: 'MySQL', level: 85, category: 'database' },
  { name: 'MongoDB', level: 80, category: 'database' },
  
  { name: 'Git', level: 85, category: 'tool' },
  { name: 'Linux', level: 75, category: 'tool' },
  { name: 'Windows', level: 90, category: 'tool' },
  { name: 'VS Code', level: 85, category: 'tool' },
];

const SkillBar: React.FC<{ skill: Skill; isVisible: boolean }> = ({ skill, isVisible }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-800 dark:text-white">{skill.name}</span>
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: '100ms'
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'language' | 'framework' | 'database' | 'tool'>('all');
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

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="py-20 md:py-28"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div 
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="text-blue-600 dark:text-blue-400">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          </div>

          <div 
            className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 delay-100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {['all', 'language', 'framework', 'database', 'tool'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}s
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {filteredSkills.map((skill, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${200 + index * 50}ms` }}
              >
                <SkillBar skill={skill} isVisible={isVisible} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
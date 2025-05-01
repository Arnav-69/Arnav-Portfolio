import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, Clock, ArrowRight } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  description: string;
  status: 'planned' | 'in-progress' | 'completed';
  type: 'learning' | 'project' | 'challenge';
}

const tasks: Task[] = [
  {
    id: 1,
    title: 'Snake Game Development',
    description: 'Create a classic Snake game with JavaScript and HTML Canvas',
    status: 'in-progress',
    type: 'project'
  },
  {
    id: 2,
    title: 'Social Media App (MERN Clone)',
    description: 'Build a social media platform with React, Node.js, Express, and MongoDB',
    status: 'planned',
    type: 'project'
  },
  {
    id: 3,
    title: 'Educational Platform for Kids',
    description: 'Develop an interactive learning platform targeting primary school children',
    status: 'planned',
    type: 'project'
  },
  {
    id: 4,
    title: 'Java Game Development',
    description: 'Create simple games using Java to strengthen OOP concepts and game design skills',
    status: 'planned',
    type: 'learning'
  }
];

const SelfTasks: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'planned' | 'in-progress' | 'completed'>('all');
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

  const filteredTasks = activeFilter === 'all' 
    ? tasks 
    : tasks.filter(task => task.status === activeFilter);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={18} className="text-green-500" />;
      case 'in-progress':
        return <Clock size={18} className="text-yellow-500" />;
      default:
        return <Clock size={18} className="text-gray-400" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      default:
        return 'Planned';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'learning':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400';
      case 'project':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400';
      case 'challenge':
        return 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <section 
      id="self-tasks" 
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
              Self-Assigned <span className="text-blue-600 dark:text-blue-400">Tasks</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Projects and learning paths I've set for myself to continuously improve my skills and build my portfolio.
            </p>
          </div>

          <div 
            className={`flex flex-wrap justify-center gap-2 mb-8 transition-all duration-700 delay-100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {['all', 'planned', 'in-progress', 'completed'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as any)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeFilter === filter 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {filteredTasks.map((task, index) => (
              <div 
                key={task.id}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-500 hover:shadow-lg ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                        {task.title}
                      </h3>
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getTypeColor(task.type)}`}>
                        {task.type.charAt(0).toUpperCase() + task.type.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center">
                      {getStatusIcon(task.status)}
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                        {getStatusText(task.status)}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {task.description}
                  </p>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <a 
                      href="#" 
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
                    >
                      <span>View details</span>
                      <ArrowRight size={16} className="ml-1" />
                    </a>
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

export default SelfTasks;
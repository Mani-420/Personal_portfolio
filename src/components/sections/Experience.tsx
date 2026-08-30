import { useState, useEffect } from 'react';
import { experiences } from '../../data/experience';
import { codingQuotes } from '../../data/quotes';
import { AnimatedElement, StaggeredContainer } from '../shared/AnimatedElement';

const Experience = () => {
  const [currentQuote, setCurrentQuote] = useState('');

  useEffect(() => {
    // Set initial quote
    setCurrentQuote(codingQuotes[Math.floor(Math.random() * codingQuotes.length)]);
    
    // Change quote every 8 seconds
    const interval = setInterval(() => {
      setCurrentQuote(codingQuotes[Math.floor(Math.random() * codingQuotes.length)]);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="experience" className="section-padding bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedElement
          animation="fade-in-up"
          duration={600}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Experience & Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey from web development and backend engineering toward scalable product systems and applied AI.
          </p>
        </AnimatedElement>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-3 lg:left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 via-secondary-600 to-primary-600 rounded-full"></div>
          
          {/* Timeline Items */}
          <StaggeredContainer staggerDelay={200} className="space-y-16">
            {experiences.map((experience, index) => (
              <AnimatedElement
                key={experience.id}
                animation="fade-in-up"
                duration={500}
                className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10"
              >
                {/* Timeline Dot */}
                <div className="absolute left-3 lg:left-1/2 -translate-x-1/2 w-5 h-5 bg-primary-600 rounded-full border-4 border-white dark:border-dark-900 z-10"></div>

                {/* Experience Card */}
                <div
                  className={`w-full max-w-lg pl-10 lg:pl-0 ${
                    index % 2 === 0
                      ? 'lg:col-start-1 lg:justify-self-end'
                      : 'lg:col-start-2 lg:justify-self-start'
                  }`}
                >
                  <div className="bg-white dark:bg-dark-800 rounded-xl shadow-xl p-6 border border-gray-200 dark:border-dark-700 hover:shadow-2xl transition-all duration-300 ease-out cursor-pointer hover:-translate-y-1">
                    {/* Position and Company */}
                    <div className={`mb-4 ${
                      index % 2 === 0 ? 'text-left lg:text-right' : 'text-left'
                    }`}>
                       <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                         {experience.title}
                       </h3>
                       <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                         {experience.company}
                       </p>
                     </div>
                     
                     {/* Period */}
                    <div className={`mb-4 ${
                      index % 2 === 0 ? 'text-left lg:text-right' : 'text-left'
                    }`}>
                       <span className="inline-block px-3 py-1.5 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full font-medium">
                         {experience.period}
                       </span>
                     </div>
                     
                     {/* Responsibilities */}
                    <div>
                      <h4 className={`text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide ${
                        index % 2 === 0 ? 'text-left lg:text-right' : 'text-left'
                      }`}>
                        Key Contributions:
                      </h4>
                      <ul className={`space-y-2 ${
                        index % 2 === 0 ? 'text-left lg:text-right' : 'text-left'
                      }`}>
                        {experience.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className={`flex items-start text-gray-600 dark:text-gray-400 text-sm ${
                            index % 2 === 0
                              ? 'justify-start space-x-3 lg:justify-end lg:space-x-reverse'
                              : 'justify-start space-x-3'
                          }`}>
                            <div className={`w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0 ${
                              index % 2 === 0 ? 'order-first lg:order-last' : 'order-first'
                            }`}></div>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </StaggeredContainer>
        </div>

        {/* Coding Quote Section */}
        <AnimatedElement
          animation="fade-in-up"
          duration={600}
          delay={800}
          className="mt-20 text-center"
        >
                     <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 border border-primary-200 dark:border-primary-800 hover:shadow-xl transition-all duration-300 ease-out hover:scale-105 cursor-pointer">
            <div className="mb-4">
              <span className="text-4xl text-primary-500">💻</span>
            </div>
            <blockquote className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 mb-4 italic">
              "{currentQuote}"
            </blockquote>
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Experience;

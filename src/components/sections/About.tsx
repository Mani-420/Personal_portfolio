import { FiCode, FiDatabase, FiMonitor, FiUsers } from 'react-icons/fi';
import { AnimatedElement, StaggeredContainer } from '../shared/AnimatedElement';

const About = () => {
  const stats = [
    {
      icon: FiCode,
      number: '11+',
      label: 'Projects Completed',
      description: 'Product & AI builds'
    },
    {
      icon: FiDatabase,
      number: '2+',
      label: 'Years Experience',
      description: 'Web development'
    },
    {
      icon: FiMonitor,
      number: '20+',
      label: 'Technologies',
      description: 'Across web & AI'
    },
    {
      icon: FiUsers,
      number: '3+',
      label: 'Scalable Systems',
      description: 'Enterprise & team work'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement
          animation="fade-in-up"
          duration={600}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"></div>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <AnimatedElement
            animation="fade-in-left"
            duration={600}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Full-Stack Engineer, Moving into AI
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I am a full-stack software engineer focused on turning product ideas into reliable, scalable systems. My work spans polished React interfaces, backend APIs, relational and document databases, secure authentication, and integration-heavy product workflows.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              At Hatzs Dimensions, I have grown from backend-focused work toward full-stack engineering using React, Next.js, Express, Fastify, and MySQL. I have also worked with integrations such as Stripe, QuickBooks, and email-building tools while contributing to larger systems including DealerIQ and Befer AI.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              My next direction is applied AI engineering. I am developing the skills to build chat and voice agents that can use tools, retrieve trusted business knowledge, automate bookings, and hand work back to people safely when needed.
            </p>

            {/* Key Highlights */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                What I Bring to the Table:
              </h4>
              <StaggeredContainer staggerDelay={80} className="space-y-3">
                {[
                  'End-to-end delivery across frontend, backend, data, and integrations',
                  'Experience contributing to scalable, shared product codebases',
                  'Secure API design, authentication, authorization, and validation',
                  'Practical work with payments, accounting, and content-tool integrations',
                  'Growing applied AI expertise in RAG, agent workflows, and voice systems',
                  'Commitment to clean, maintainable, production-minded code'
                ].map((item, index) => (
                  <AnimatedElement
                    key={index}
                    animation="fade-in-left"
                    duration={400}
                    hover={true}
                    hoverAnimation="lift"
                    className="flex items-start space-x-3 text-gray-600 dark:text-gray-400 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-all duration-200"
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </AnimatedElement>
                ))}
              </StaggeredContainer>
            </div>
          </AnimatedElement>

          {/* Right Content - Stats */}
          <AnimatedElement
            animation="fade-in-right"
            duration={600}
            delay={200}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-lg text-center border border-gray-200 dark:border-dark-600 hover:shadow-2xl transition-all duration-300 ease-out hover:scale-105 cursor-pointer hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500">
                  {stat.description}
                </div>
              </div>
            ))}
          </AnimatedElement>
        </div>

        {/* Education & Background */}
        <StaggeredContainer staggerDelay={200} className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedElement
            animation="fade-in-up"
            duration={500}
            className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-dark-600 hover:shadow-2xl transition-all duration-300 ease-out hover:scale-105 cursor-pointer hover:-translate-y-1"
          >
            <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Education
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-900 dark:text-gray-100">
                  Information Technology
                </h5>
                <p className="text-gray-600 dark:text-gray-400">
                  Student of Information Technology with a strong foundation in computer science principles and modern web technologies.
                </p>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement
            animation="fade-in-up"
            duration={500}
            className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-dark-600 hover:shadow-2xl transition-all duration-300 ease-out hover:scale-105 cursor-pointer hover:-translate-y-1"
          >
            <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Current Focus
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-900 dark:text-gray-100">
                  Applied AI Engineering
                </h5>
                <p className="text-gray-600 dark:text-gray-400">
                  Building on my software engineering foundation with conversational AI, RAG, tool-calling agents, voice workflows, guardrails, and business-system integrations.
                </p>
              </div>
            </div>
          </AnimatedElement>
        </StaggeredContainer>
      </div>
    </section>
  );
};

export default About;

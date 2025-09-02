import { FiCode, FiDatabase, FiMonitor, FiUsers } from 'react-icons/fi';
import { AnimatedElement, StaggeredContainer } from '../shared/AnimatedElement';

const About = () => {
  const stats = [
    {
      icon: FiCode,
      number: '6+',
      label: 'Projects Completed',
      description: 'Full-stack applications'
    },
    {
      icon: FiDatabase,
      number: '2+',
      label: 'Years Experience',
      description: 'Web development'
    },
    {
      icon: FiMonitor,
      number: '15+',
      label: 'Technologies',
      description: 'Mastered skills'
    },
    {
      icon: FiUsers,
      number: '100%',
      label: 'Client Satisfaction',
      description: 'Quality focused'
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
              Passionate Full Stack Developer
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I am a dedicated and passionate Full Stack Web Developer with a strong foundation in modern web technologies. 
              My journey in web development started with a curiosity to build things that make a difference, and it has evolved 
              into a passion for creating robust, scalable, and user-friendly applications.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and have extensive experience with 
              TypeScript, Next.js, and modern CSS frameworks like Tailwind CSS. My approach combines technical expertise 
              with a keen eye for user experience and performance optimization.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community. I believe in continuous learning and staying updated 
              with the latest industry trends and best practices.
            </p>

            {/* Key Highlights */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                What I Bring to the Table:
              </h4>
              <StaggeredContainer staggerDelay={80} className="space-y-3">
                {[
                  'Strong foundation in both frontend and backend development',
                  'Experience with modern JavaScript frameworks and libraries',
                  'Proficiency in database design and API development',
                  'Understanding of responsive design and user experience',
                  'Knowledge of version control and collaborative development',
                  'Commitment to writing clean, maintainable code'
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
            className="grid grid-cols-2 gap-6"
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
                  Full Stack Development
                </h5>
                <p className="text-gray-600 dark:text-gray-400">
                  Expanding skills in TypeScript and Next.js to build better, scalable web applications with modern development practices.
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

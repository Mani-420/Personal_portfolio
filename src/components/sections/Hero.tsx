import { FiDownload, FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import { contactInfo } from '../../data/contact';
import { AnimatedElement, FloatingElement } from '../shared/AnimatedElement';
import { GradientTypewriterEffect } from '../shared/TypewriterEffect';

const Hero = () => {
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/CV/Abdul_FullStack.pdf'; // Using the full stack CV
    link.download = 'Abdul_Rehman_FullStack_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Typewriter words that will cycle through
  const typewriterWords = [
    'Web Developer',
    'Backend Developer',
    'Software Engineer',
    'Node.js Developer',
    'Next.js Developer',
    'Full Stack Developer'
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <AnimatedElement
            animation="fade-in-left"
            duration={600}
            className="space-y-8"
          >
            <div className="space-y-4">
              <AnimatedElement
                animation="fade-in-up"
                duration={500}
                delay={200}
                className="text-lg text-primary-600 dark:text-primary-400 font-medium"
              >
                Hello, I'm
              </AnimatedElement>
              
              <AnimatedElement
                animation="fade-in-up"
                duration={500}
                delay={300}
                className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100"
              >
                Abdul Rehman
              </AnimatedElement>
              
              <AnimatedElement
                animation="fade-in-up"
                duration={500}
                delay={400}
                className="text-2xl md:text-3xl font-semibold"
              >
                <GradientTypewriterEffect
                  words={typewriterWords}
                  speed={80}
                  deleteSpeed={40}
                  delay={1500}
                  className="text-2xl md:text-3xl font-semibold"
                />
              </AnimatedElement>
            </div>

            <AnimatedElement
              animation="fade-in-up"
              duration={500}
              delay={500}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Passionate about building modern, responsive, and high-performance web applications. 
              Specialized in the MERN stack with expertise in React, Node.js, and modern web technologies.
            </AnimatedElement>

            {/* CTA Buttons */}
            <AnimatedElement
              animation="fade-in-up"
              duration={500}
              delay={600}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={handleDownloadCV}
                className="button-primary flex items-center justify-center space-x-2 transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg active:scale-95"
              >
                <FiDownload size={20} />
                <span>Download CV</span>
              </button>
              
              <button
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="button-outline flex items-center justify-center space-x-2 transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg active:scale-95"
              >
                <span>View Projects</span>
                <FiArrowRight size={20} />
              </button>
            </AnimatedElement>

            {/* Social Links */}
            <AnimatedElement
              animation="fade-in-up"
              duration={500}
              delay={700}
              className="flex space-x-4"
            >
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-dark-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white transition-all duration-200 ease-out hover:scale-110 hover:-translate-y-1 active:scale-95"
                aria-label="GitHub"
              >
                <FiGithub size={24} />
              </a>
              
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-dark-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white transition-all duration-200 ease-out hover:scale-110 hover:-translate-y-1 active:scale-95"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={24} />
              </a>
            </AnimatedElement>
          </AnimatedElement>

          {/* Right Content - Profile Image */}
          <AnimatedElement
            animation="fade-in-right"
            duration={600}
            delay={200}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative transition-transform duration-200 ease-out hover:scale-105">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary-200 dark:border-primary-800 shadow-2xl">
                <img
                  src="/Git_Profile.png"
                  alt="Abdul Rehman"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <FloatingElement
                speed={3}
                className="absolute -top-4 -right-4 bg-primary-600 text-white p-3 rounded-full shadow-lg"
              >
                <span className="text-sm font-medium">React</span>
              </FloatingElement>
              
              <FloatingElement
                speed={3}
                className="absolute -bottom-4 -left-4 bg-secondary-600 text-white p-3 rounded-full shadow-lg"
              >
                <span className="text-sm font-medium">Node.js</span>
              </FloatingElement>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { AnimatedElement } from '../shared/AnimatedElement';
import { socialLinks, contactInfo } from '../../data/contact';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-dark-800 border-t border-gray-200 dark:border-dark-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <AnimatedElement
            animation="fade-in-up"
            duration={500}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">Abdul Rehman</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Full Stack Web Developer passionate about creating modern,
              responsive, and high-performance web applications.
            </p>
          </AnimatedElement>

          {/* Quick Links */}
          <AnimatedElement
            animation="fade-in-up"
            duration={500}
            delay={100}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                'Home',
                'About',
                'Experience',
                'Skills',
                'Projects',
                'Contact'
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(
                        `#${item.toLowerCase()}`
                      );
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 hover:translate-x-1 transition-transform duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </AnimatedElement>

          {/* Contact & Social */}
          <AnimatedElement
            animation="fade-in-up"
            duration={500}
            delay={200}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 hover:scale-105 transition-transform duration-200"
              >
                <FiMail size={18} />
                <span>{contactInfo.email}</span>
              </a>

              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-200 dark:bg-dark-700 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-200 hover:scale-110 hover:-translate-y-1 active:scale-95 transition-transform duration-200"
                    aria-label={link.name}
                  >
                    {link.name === 'GitHub' && <FiGithub size={20} />}
                    {link.name === 'LinkedIn' && <FiLinkedin size={20} />}
                    {link.name === 'Behance' && <FiMail size={20} />}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedElement>
        </div>

        {/* Bottom Bar */}
        <AnimatedElement
          animation="fade-in-up"
          duration={500}
          delay={300}
          className="border-t border-gray-200 dark:border-dark-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} Abdul Rehman. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </AnimatedElement>
      </div>
    </footer>
  );
};

export default Footer;

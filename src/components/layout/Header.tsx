import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../hooks/useTheme';
import { AnimatedElement } from '../shared/AnimatedElement';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <AnimatedElement
      animation="fade-in-down"
      duration={300}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <AnimatedElement
            animation="scale-in"
            duration={400}
            hover={true}
            hoverAnimation="scale"
            className="text-2xl font-bold gradient-text"
          >
            <button
              onClick={() => scrollToSection('#home')}
              className="cursor-pointer"
            >
              Abdul Rehman
            </button>
          </AnimatedElement>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <AnimatedElement
                key={item.name}
                animation="fade-in-up"
                duration={300}
                hover={true}
                hoverAnimation="scale"
                className="cursor-pointer"
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              </AnimatedElement>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <AnimatedElement
              animation="scale-in"
              duration={400}
              hover={true}
              hoverAnimation="scale"
            >
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
              </button>
            </AnimatedElement>

            {/* Mobile Menu Button */}
            <AnimatedElement
              animation="scale-in"
              duration={400}
              hover={true}
              hoverAnimation="scale"
              className="md:hidden"
            >
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>
            </AnimatedElement>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700 transition-all duration-300 ${
          isMenuOpen ? 'h-auto opacity-100' : 'h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <AnimatedElement
                key={item.name}
                animation="fade-in-left"
                duration={300}
                hover={true}
                hoverAnimation="slide"
                className="cursor-pointer"
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-dark-800 rounded-md transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default Header;

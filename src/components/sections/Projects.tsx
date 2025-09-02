import { useState, useRef, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiEye, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { projects } from '../../data/projects';
import { Project } from '../../types';
import { AnimatedElement, StaggeredContainer } from '../shared/AnimatedElement';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<'frontend' | 'backend' | 'fullstack'>('fullstack');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});
  const scrollContainerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const categories = [
    { id: 'fullstack', name: 'Full Stack', icon: '🌐' },
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'backend', name: 'Backend', icon: '⚙️' }
  ];

  const filteredProjects = projects.filter(project => {
    // Fullstack projects should appear in all categories
    if (project.category === 'fullstack') return true;
    
    // Frontend and backend projects appear in their respective categories
    return project.category === activeCategory;
  });

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(prev => ({ ...prev, [project.id]: 0 }));
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const scrollToImage = (projectId: string, direction: 'left' | 'right') => {
    const container = scrollContainerRefs.current[projectId];
    if (!container) return;

    const currentIndex = currentImageIndex[projectId] || 0;
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    let newIndex;
    if (direction === 'left') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : project.images.length - 1;
    } else {
      newIndex = currentIndex < project.images.length - 1 ? currentIndex + 1 : 0;
    }

    setCurrentImageIndex(prev => ({ ...prev, [projectId]: newIndex }));

    // Smooth scroll to the new image
    const imageWidth = container.scrollWidth / project.images.length;
    container.scrollTo({
      left: newIndex * imageWidth,
      behavior: 'smooth'
    });
  };

  const handleImageScroll = (projectId: string, event: React.UIEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    const imageWidth = container.scrollWidth / projects.find(p => p.id === projectId)!.images.length;
    const currentIndex = Math.round(container.scrollLeft / imageWidth);
    setCurrentImageIndex(prev => ({ ...prev, [projectId]: currentIndex }));
  };

  // Initialize current image index for each project
  useEffect(() => {
    const initialIndexes: { [key: string]: number } = {};
    projects.forEach(project => {
      initialIndexes[project.id] = 0;
    });
    setCurrentImageIndex(initialIndexes);
  }, []);

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement
          animation="fade-in-up"
          duration={600}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            frontend design, and backend architecture. Fullstack projects appear in all categories.
            Scroll through multiple screenshots of each project to see the full scope.
          </p>
        </AnimatedElement>

        {/* Category Tabs */}
        <AnimatedElement
          animation="fade-in-up"
          duration={500}
          delay={200}
          className="flex justify-center mb-12"
        >
          <div className="bg-white dark:bg-dark-700 rounded-lg p-1 flex shadow-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as any)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ease-out hover:scale-105 active:scale-95 flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </AnimatedElement>

        {/* Help Text */}
        <AnimatedElement
          animation="fade-in-up"
          duration={500}
          delay={300}
          className="text-center mb-8"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">
            🖼️ Scroll through multiple screenshots of each project. Click the eye icon to view project details.
          </p>
        </AnimatedElement>

        {/* Projects Grid */}
        <StaggeredContainer staggerDelay={100} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-dark-700 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-dark-600 hover:shadow-2xl transition-all duration-300 ease-out hover:scale-105 cursor-pointer hover:-translate-y-1"
            >
              {/* Project Images Horizontal Scroll */}
              <div className="relative h-48 overflow-hidden">
                {/* Scroll Container */}
                <div
                  ref={(el) => scrollContainerRefs.current[project.id] = el}
                  className="flex overflow-x-auto scrollbar-hide h-full"
                  onScroll={(e) => handleImageScroll(project.id, e)}
                  style={{ scrollSnapType: 'x mandatory' }}
                >
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-full h-full"
                      style={{ scrollSnapAlign: 'start' }}
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Screenshot ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-110"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollToImage(project.id, 'left');
                      }}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 ease-out hover:scale-110 active:scale-95 z-10"
                    >
                      <FiChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollToImage(project.id, 'right');
                      }}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 ease-out hover:scale-110 active:scale-95 z-10"
                    >
                      <FiChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {(currentImageIndex[project.id] || 0) + 1} / {project.images.length}
                  </div>
                )}

                {/* Multiple Images Indicator */}
                {project.images.length > 1 && (
                  <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <span>🖼️</span>
                    <span>{project.images.length}</span>
                  </div>
                )}

                {/* View Details Button */}
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openModal(project)}
                    className="opacity-0 hover:opacity-100 bg-white dark:bg-dark-800 p-3 rounded-full shadow-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95"
                  >
                    <FiEye className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-dark-600 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-100 dark:bg-dark-600 hover:bg-gray-200 dark:hover:bg-dark-500 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg text-center text-sm font-medium transition-all duration-200 ease-out hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
                  >
                    <FiGithub size={16} />
                    <span>GitHub</span>
                  </a>
                  
                  {project.linkedinUrl && (
                    <a
                      href={project.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300 py-2 px-4 rounded-lg text-center text-sm font-medium transition-all duration-200 ease-out hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
                    >
                      <FiLinkedin size={16} />
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </StaggeredContainer>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in"
            onClick={closeModal}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-dark-700 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            >
              <div className="relative">
                {/* Modal Image Gallery */}
                <div className="relative h-64 overflow-hidden">
                  <div className="flex overflow-x-auto scrollbar-hide h-full">
                    {selectedProject.images.map((image, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 w-full h-full"
                        style={{ scrollSnapAlign: 'start' }}
                      >
                        <img
                          src={image}
                          alt={`${selectedProject.title} - Screenshot ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Modal Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={() => scrollToImage(selectedProject.id, 'left')}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200 ease-out hover:scale-110 active:scale-95 z-10"
                      >
                        <FiChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={() => scrollToImage(selectedProject.id, 'right')}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200 ease-out hover:scale-110 active:scale-95 z-10"
                      >
                        <FiChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}

                  {/* Modal Image Counter */}
                  {selectedProject.images.length > 1 && (
                    <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {(currentImageIndex[selectedProject.id] || 0) + 1} / {selectedProject.images.length}
                    </div>
                  )}

                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-white dark:bg-dark-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-dark-600 transition-all duration-200 ease-out hover:scale-110 active:scale-95"
                  >
                    <FiEye className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    {selectedProject.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                      Key Features:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 py-3 px-6 rounded-lg text-center font-medium transition-all duration-200 ease-out hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
                    >
                      <FiGithub size={18} />
                      <span>View on GitHub</span>
                    </a>
                    
                    {selectedProject.linkedinUrl && (
                      <a
                        href={selectedProject.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg text-center font-medium transition-all duration-200 ease-out hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
                      >
                        <FiLinkedin size={18} />
                        <span>View on LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

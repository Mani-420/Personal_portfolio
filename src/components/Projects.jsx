import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import landingPage from '../assets/project1.mp4';
import blogRecipe from '../assets/project2.mp4';
import todoList from '../assets/project3.mp4';

const projects = [
  {
    id: 1,
    name: 'Landing Page',
    technologies: 'MERN Stack',
    video: landingPage,
    github: 'https://github.com/Mani-420/Landing_page'
  },
  {
    id: 2,
    name: 'Blog App',
    technologies: 'MERN Stack',
    video: blogRecipe,
    github: 'https://github.com/Mani-420/Recipe-Blog'
  },
  {
    id: 3,
    name: 'Todo List',
    technologies: 'MERN Stack',
    video: todoList,
    github: 'https://github.com/Mani-420/React-JS/tree/main/10todoContext'
  }
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: false // very important: false = replay every scroll
    });
  }, []);
  return (
    <div className="text-white py-20" id="project" data-aos="fade-up">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-6xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105"
            >
              <video
                autoPlay
                loop
                muted
                className="rounded-lg mb-4 
              w-full h-48 object-cover"
              >
                <source
                  src={project.video}
                  alt={project.name}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r 
              from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

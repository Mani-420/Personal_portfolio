import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: false // very important: false = replay every scroll
    });
  }, []);

  return (
    <div className=" text-white py-20" id="about" data-aos="fade-up">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-6xl font-bold text-center mb-12 text-white">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a dedicated and passionate Full Stack Developer with a strong
              focus on building modern, responsive, and high-performance web
              applications. Skilled in both frontend and backend technologies, I
              specialize in creating seamless user experiences and efficient,
              scalable solutions. I am driven by a love for clean code,
              innovative design, and continuous learning, always striving to
              deliver impactful digital experiences that meet real-world needs.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  JavaScript & Python
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-purple-600 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-12/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  ReactJS & Redux
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-purple-600 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  NodeJS & Express
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-purple-600 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  MongoDB & SQL
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-purple-600 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-purple-500 to-purple-600"
                >
                  1+
                </h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-purple-500 to-purple-600"
                >
                  10+
                </h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-purple-500 to-purple-600"
                >
                  10+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

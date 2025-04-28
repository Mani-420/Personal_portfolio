import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Abdul Rehman</h3>
            <p className="text-gray-400">
              Full-Stack Developer based in the Pakistan, specializing in web
              and software development.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-purple-600"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 
                py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Abdul Rehman. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a
              href="https://www.linkedin.com/in/abdul-rehman-7068aa315/"
              target="about_blank"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Mani-420/"
              target="about_blank"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

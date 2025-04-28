import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-purple-600 text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline hover:text-black">
          Abdul Rehman
        </div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-black">
            Home
          </a>
          <a href="#about" className="hover:text-black">
            About Me
          </a>
          <a href="#service" className="hover:text-black">
            Services
          </a>
          <a href="#project" className="hover:text-black">
            Projects
          </a>
          <a href="#contact" className="hover:text-black">
            Contact
          </a>
        </div>
        <button
          className="bg-purple-200 text-black hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Connect Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

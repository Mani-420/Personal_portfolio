import React from 'react';
import HeroImage from '../assets/my_pic.png';

const Hero = () => {
  return (
    <div className="text-white text-center py-16">
      <img
        src={HeroImage}
        alt="myImage"
        className="mx-auto mb-8 w-52 h-52 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105"
      />

      <h1 className="text-6xl font-bold">
        I'm <span className="bg-clip-text text-purple-600">Abdul Rehman</span>,
        <br />a Full-Stack{' '}
        <span className="bg-clip-text text-purple-600">Developer</span>
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        <button
          className="bg-purple-600 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Contact With Me
        </button>
        <button
          className="bg-purple-600 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;

"use client";

import { useState } from 'react';

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-700">
          <a href="#" className="text-gray-800 hover:text-gray-700">Brand</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
          <a href="#" className="block mt-2 md:mt-0 md:ml-4 text-gray-800 hover:text-gray-700">Home</a>
          <a href="#" className="block mt-2 md:mt-0 md:ml-4 text-gray-800 hover:text-gray-700">About</a>
          <a href="#" className="block mt-2 md:mt-0 md:ml-4 text-gray-800 hover:text-gray-700">Services</a>
          <a href="#" className="block mt-2 md:mt-0 md:ml-4 text-gray-800 hover:text-gray-700">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
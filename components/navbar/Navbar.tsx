'use client'

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side logo and company name */}
        <div className="flex items-center">
          <Image className="h-8 w-8 mr-2" src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="text-white font-semibold">87-ag-Agri @ PBG - Faisalabad</span>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none hover:text-gray-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Right side links */}
        <div className={`lg:flex items-center space-x-4 ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <a href="/" className="block text-white lg:inline-block hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="block text-white lg:inline-block hover:text-gray-300">
            About
          </a>
          <a href="/gallery" className="block text-white lg:inline-block hover:text-gray-300">
            Gallery
          </a>
          <a href="/events" className="block text-white lg:inline-block hover:text-gray-300">
            Events
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <a href="/" className="block text-white py-2 px-4 hover:bg-gray-700">
            Home
          </a>
          <a href="/about" className="block text-white py-2 px-4 hover:bg-gray-700">
            About
          </a>
          <a href="/gallery" className="block text-white py-2 px-4 hover:bg-gray-700">
            Gallery
          </a>
          <a href="/events" className="block text-white py-2 px-4 hover:bg-gray-700">
            Events
          </a>
        </div>
      )}
    </nav>
  );
}

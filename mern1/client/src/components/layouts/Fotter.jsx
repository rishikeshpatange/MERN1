import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <span className="text-xl font-semibold">LEGIONEVS</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex justify-center space-x-6">
          <a href="#" className="hover:text-[#ffff6d] transition-colors duration-300">Home</a>
          <a href="#" className="hover:text-[#ffff6d] transition-colors duration-300">About</a>
          <a href="#" className="hover:text-[#ffff6d] transition-colors duration-300">Projects</a>
          <a href="#" className="hover:text-[#ffff6d] transition-colors duration-300">Contact</a>
        </nav>

        {/* Social Media Links */}
        <div className="flex justify-center md:justify-end space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffff6d] transition-colors duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffff6d] transition-colors duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffff6d] transition-colors duration-300">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 text-sm">
        &copy; {new Date().getFullYear()} Rishi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
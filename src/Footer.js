import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
  return (
    <footer class="footer bg-white-800 text-white py-4">
      <div class="max-w-7xl mx-auto flex justify-center space-x-6">
        <a href="https://www.linkedin.com/in/sathvikganti/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white">
          <FaLinkedin class="text-2xl" />
        </a>
        <a href="https://github.com/CodedHuman" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white">
          <FaGithub class="text-2xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
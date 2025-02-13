import React from 'react';

const Navigation = ({ setCurrentPage }) => {
  return (
    <nav className="bg-white py-5 shadow">
      <div className="max-w-7xl mx-auto flex justify-end space-x-12">
        <button
          onClick={() => setCurrentPage('home')}
          className="text-gray-700 hover:text-gray-900"
        >
          Home
        </button>
        <button
          onClick={() => setCurrentPage('experience')}
          className="text-gray-700 hover:text-gray-900"
        >
          Experience
        </button>
        <button
          onClick={() => setCurrentPage('projects')}
          className="text-gray-700 hover:text-gray-900"
        >
          Projects
        </button>
        <button
          onClick={() => setCurrentPage('blog')}
          className="text-gray-700 hover:text-gray-900"
        >
          Blog
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
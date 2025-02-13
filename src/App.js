import './App.css';
import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Home from './Home';

// Add placeholders for other pages
const Experience = () => <div className="page-content">Experience Page</div>;
const Projects = () => <div className="page-content">Projects Page</div>;
const Blog = () => <div className="page-content">Blog Page</div>;

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Track the active page
  const [isFading, setIsFading] = useState(false); // Track fading state

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'blog':
        return <Blog />;
      default:
        return <Home />;
    }
  };

  // Handle page switching with fade effect
  const handlePageSwitch = (page) => {
    setIsFading(true); // Start fade-out
    setTimeout(() => {
      setCurrentPage(page); // Switch page after fade-out completes
      setIsFading(false); // Start fade-in
    }, 300); // Adjust this timing for smoother transitions
  };

  return (
    <div>
      <Navigation setCurrentPage={handlePageSwitch} /> {/* Pass handler */}
      <div className={`app-body ${isFading ? 'fade-out' : 'fade-in'}`}>
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
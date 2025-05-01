import React, { useState, useEffect } from 'react';

const SimpleNavbar = () => {
  const [activeSection, setActiveSection] = useState('overview');
  
  // Handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop >= -100 && sectionTop <= 150) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize active section on load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Add extra space below navbar through CSS
  useEffect(() => {
    // Add a style tag to apply margin to the main content
    const style = document.createElement('style');
    style.textContent = `
      main {
        margin-top: 2rem !important;
      }
      
      section:first-of-type {
        padding-top: 2rem !important;
      }
      
      .section-title {
        margin-top: 2rem !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <header className="bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto py-4 flex items-center">
        <div className="px-4 flex-shrink-0 w-1/3">
          <h1 className="text-2xl font-bold text-white">
            CS1300: Accessible Components
          </h1>
        </div>
        
        <nav className="w-2/3 flex justify-end">
          <ul className="flex space-x-8 px-4">
            <li>
              <a 
                onClick={() => scrollToSection('overview')} 
                className={`text-white hover:text-blue-200 cursor-pointer transition-all ${activeSection === 'overview' ? 'border-b-2 border-white pb-1' : ''}`}
              >
                Overview
              </a>
            </li>
            <li>
              <a 
                onClick={() => scrollToSection('input-analysis')} 
                className={`text-white hover:text-blue-200 cursor-pointer transition-all ${activeSection === 'input-analysis' ? 'border-b-2 border-white pb-1' : ''}`}
              >
                Input Analysis
              </a>
            </li>
            <li>
              <a 
                onClick={() => scrollToSection('output-analysis')} 
                className={`text-white hover:text-blue-200 cursor-pointer transition-all ${activeSection === 'output-analysis' ? 'border-b-2 border-white pb-1' : ''}`}
              >
                Output Analysis
              </a>
            </li>
            <li>
              <a 
                onClick={() => scrollToSection('state-models')} 
                className={`text-white hover:text-blue-200 cursor-pointer transition-all ${activeSection === 'state-models' ? 'border-b-2 border-white pb-1' : ''}`}
              >
                State Models
              </a>
            </li>
            <li>
              <a 
                onClick={() => scrollToSection('component-redesign')} 
                className={`text-white hover:text-blue-200 cursor-pointer transition-all ${activeSection === 'component-redesign' ? 'border-b-2 border-white pb-1' : ''}`}
              >
                Redesign
              </a>
            </li>
            <li>
              <a 
                onClick={() => scrollToSection('reflection')} 
                className={`text-white hover:text-blue-200 cursor-pointer transition-all ${activeSection === 'reflection' ? 'border-b-2 border-white pb-1' : ''}`}
              >
                Reflection
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default SimpleNavbar;
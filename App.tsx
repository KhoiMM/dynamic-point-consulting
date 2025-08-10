
import React, { useState, useEffect } from 'react';
import LandingSection from './components/LandingSection';
import ServicesSection from './components/ServicesSection';
import ValueFrameworkSection from './components/ValueFrameworkSection';
import WeWorkWithSection from './components/WeWorkWithSection';
import Footer from './components/Footer';
import CFOServicesPage from './components/pages/CFOServicesPage';
import CapitalRaisingPage from './components/pages/CapitalRaisingPage';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const handleHashChange = () => {
      const hash = window.location.hash;
      setCurrentPath(hash);
      // Only scroll to the top for sub-pages (e.g., '#/services/cfo').
      // For anchor links on the main page (e.g., '#services'), we let the browser handle scrolling.
      if (hash.startsWith('#/')) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    // Initial check in case the app loads with a hash
    handleHashChange(); 

    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigateToMainSection = (sectionId: string) => {
    if (currentPath !== '' && currentPath !== '#') {
      // If on a sub-page, first navigate to main page, then scroll
      window.location.hash = sectionId;
    } else {
      // If already on main page, just scroll
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  const renderContent = () => {
    if (currentPath === '#/services/cfo') {
      return <CFOServicesPage />;
    }
    if (currentPath === '#/services/capital-raising') {
      return <CapitalRaisingPage />;
    }
    return (
      <>
        <LandingSection />
        <ServicesSection />
        <ValueFrameworkSection />
        <WeWorkWithSection />
      </>
    );
  };

  return (
    <div className={`transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'} min-h-screen flex flex-col bg-light-gray`}>
      <header className="bg-navy-blue text-white p-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); navigateToMainSection('#'); }} className="text-2xl font-montserrat font-bold focus:outline-none">Dynamic Point Consulting</a>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#landing" onClick={(e) => { e.preventDefault(); navigateToMainSection('#landing'); }} className="hover:text-burnt-orange transition-colors">Home</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); navigateToMainSection('#services'); }} className="hover:text-burnt-orange transition-colors">Services</a></li>
              <li><a href="#value-framework" onClick={(e) => { e.preventDefault(); navigateToMainSection('#value-framework'); }} className="hover:text-burnt-orange transition-colors">Our Value</a></li>
              <li><a href="#we-work-with" onClick={(e) => { e.preventDefault(); navigateToMainSection('#we-work-with'); }} className="hover:text-burnt-orange transition-colors">We Work With</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;

import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["HOW IT WORKS", "WHY WHIFFCOUNT", "FEATURES", "REVIEWS"];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold">
              <span className="text-primary">Whiff</span><span className="text-red-500">Count</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
             <a href="#" className="bg-primary text-white px-4 py-2 rounded-md text-2xl font-semibold hover:bg-opacity-90 transition-colors shadow-md">
                DOWNLOAD NOW
              </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-primary inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-opacity-90 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link}
              </a>
            ))}
             <a href="#" className="bg-primary text-white block w-full text-center mt-2 px-4 py-2 rounded-md text-2xl font-semibold hover:bg-opacity-90 transition-colors shadow-md">
                DOWNLOAD NOW
              </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

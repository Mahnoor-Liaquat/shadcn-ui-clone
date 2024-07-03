import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`w-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-lg`}>
      <div className="flex justify-between items-center p-4 md:p-0">
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className={`focus:outline-none ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
        <nav aria-label="Global">
          <ul className="flex flex-col md:flex-row items-center gap-6 p-4 text-sm">
            {[
              { name: 'Email', path: '/email' },
              { name: 'Dashboard', path: '/dashboard' },
              { name: 'Cards', path: '/cards' },
              { name: 'About', path: '/about' },
              { name: 'Playground', path: '/playground' },
              { name: 'Forms', path: '/forms' },
              { name: 'Music', path: '/music' },
              { name: 'Authentication', path: '/authentication' }
            ].map((item) => (
              <li key={item.name} className="group relative">
                <Link 
                  className={`block px-3 py-2 rounded-md ${
                    darkMode ? 'text-gray-300' : 'text-gray-500'
                  } transition duration-200 ease-in-out transform hover:text-gray-800 dark:hover:text-white hover:scale-105`}
                  to={item.path}
                >
                  {item.name}
                  <span className="absolute inset-0 bg-teal-600 opacity-0 rounded-md transition-opacity duration-200 ease-in-out group-hover:opacity-20"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

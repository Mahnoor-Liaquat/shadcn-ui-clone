import React, { useState } from 'react';
import { SiShadcnui } from "react-icons/si";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    const htmlClasses = document.documentElement.classList;
    setDarkMode(!darkMode);
    if (!darkMode) {
      htmlClasses.add('dark');
      htmlClasses.add('dark:bg-gray-900');
    } else {
      htmlClasses.remove('dark');
      htmlClasses.remove('dark:bg-gray-900');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      <header className={`bg-white dark:bg-gray-800 ${darkMode ? 'bg-gray-900' : 'bg-white'} w-full`}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              <a className="flex items-center text-teal-600 dark:text-teal-300" href="#">
                <SiShadcnui className="h-8 w-8" />
                <span className="ml-2 text-xl font-bold">Shadcn UI</span>
              </a>
              <nav aria-label="Global" className="hidden md:flex">
                <ul className="flex items-center gap-4 text-sm">
                  <li>
                    <a className="text-gray-500 dark:text-gray-300 transition hover:text-gray-500/75" href="#">Docs</a>
                  </li>
                  <li>
                    <a className="text-gray-500 dark:text-gray-300 transition hover:text-gray-500/75" href="#">Components</a>
                  </li>
                  <li>
                    <a className="text-gray-500 dark:text-gray-300 transition hover:text-gray-500/75" href="#">Themes</a>
                  </li>
                  <li>
                    <a className="text-gray-500 dark:text-gray-300 transition hover:text-gray-500/75" href="#">Examples</a>
                  </li>
                  <li>
                    <a className="text-gray-500 dark:text-gray-300 transition hover:text-gray-500/75" href="#">Blocks</a>
                  </li>
                  <li>
                    <a className="text-gray-500 dark:text-gray-300 transition hover:text-gray-500/75" href="#">Github</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <input
                type="text"
                placeholder="Search..."
                className="rounded-md bg-gray-100 dark:bg-gray-700 px-2 py-1 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition">
                <FaGithub className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition">
                <FaTwitter className="h-5 w-5" />
              </a>
              <button onClick={toggleTheme} className="rounded bg-gray-100 dark:bg-gray-700 p-2 text-gray-600 dark:text-gray-300 transition hover:text-gray-600/75 dark:hover:text-gray-300/75">
                {darkMode ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
              </button>
              <a className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow" href="#">Login</a>
              <a className="rounded-md bg-gray-100 dark:bg-gray-700 px-5 py-2.5 text-sm font-medium text-teal-600 dark:text-teal-300" href="#">Register</a>
            </div>

            <div className="block md:hidden">
              <button onClick={toggleMenu} className="rounded bg-gray-100 dark:bg-gray-700 p-2 text-gray-600 dark:text-gray-300 transition hover:text-gray-600/75 dark:hover:text-gray-300/75">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-4">
              <nav aria-label="Global">
                <ul className="flex flex-col items-center gap-4 text-sm">
                  <li>
                    <a className="text-gray-500 dark:text-gray-300 transition hover:text-gray-500/75" href="#">Docs</a>
                  </li>
                  <li>
                    <a className="text-gray-500 dark:text-gray-300 transition hover:text-gray-500/75" href="#">Components</a>
                  </li>
                  <li>
                    <a className="text-gray-500 dark:text-gray-300 transition hover:text-gray-500/75" href="#">Themes</a>
                  </li>
                  <li>
                    <a className="text-gray-500 dark:text-gray-300 transition hover:text-gray-500/75" href="#">Examples</a>
                  </li>
                  <li>
                    <a className="text-gray-500 dark:text-gray-300 transition hover:text-gray-500/75" href="#">Blocks</a>
                  </li>
                  <li>
                    <a className="text-gray-500 dark:text-gray-300 transition hover:text-gray-500/75" href="#">Github</a>
                  </li>
                  <li>
                    <input
                      type="text"
                      placeholder="Search..."
                      className="rounded-md bg-gray-100 dark:bg-gray-700 px-2 py-1 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  </li>
                  <li>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition">
                      <FaGithub className="h-5 w-5" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition">
                      <FaTwitter className="h-5 w-5" />
                    </a>
                  </li>
                  <li>
                    <button onClick={toggleTheme} className="rounded bg-gray-100 dark:bg-gray-700 p-2 text-gray-600 dark:text-gray-300 transition hover:text-gray-600/75 dark:hover:text-gray-300/75">
                      {darkMode ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
                    </button>
                  </li>
                  <li>
                    <a className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow" href="#">Login</a>
                  </li>
                  <li>
                    <a className="rounded-md bg-gray-100 dark:bg-gray-700 px-5 py-2.5 text-sm font-medium text-teal-600 dark:text-teal-300" href="#">Register</a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
 
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-4xl">
            Build your component library
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
            Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
  <a
    className="block rounded bg-red-600 px-8 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
    href="#"
  >
    Get Started
  </a>

  <a
    className="block rounded bg-white px-8 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto flex items-center"
    href="#"
  >
    <FaGithub className="h-5 w-5 mr-1" /> 
    <span>GitHub</span>
  </a>
</div>

            </div>
          </div>
      </section>
      </div>
      </header>
    </div>
 
  );
};

export default Header;

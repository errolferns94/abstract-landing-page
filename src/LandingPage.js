import React, { useState } from 'react';

function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'dark:bg-gray-800' : 'bg-white'}`}>
      <div className="relative overflow-hidden bg-gradient-to-r from-red-500 to-blue-500 p-8 rounded-lg shadow-lg">
        <header className="flex justify-between items-center mb-8">
          <div className="text-white text-xl font-bold">COMPANY LOGO</div>
          <nav className="flex space-x-4 text-white">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
          <button onClick={toggleDarkMode} className="text-white ml-4">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">ABSTRACT LANDING PAGE</h1>
          <p className="text-lg mb-4">TEMPLATE DESIGN</p>
          <p className="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">LOAD MORE</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

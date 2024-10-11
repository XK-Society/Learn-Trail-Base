import React, { useState } from 'react';
import { FaBars, FaChevronDown, FaCoins } from 'react-icons/fa'; // Hamburger and Down-arrow icons from react-icons

const CourseNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="fixed w-full bg-bgBar shadow-md p-4 flex justify-between items-center">
      {/* Left Side */}
      <div className="flex items-center">
        <FaBars size={24} className="text-white" />
      </div>

      <div className="relative">
        <button 
          className="flex items-center text-lg font-bold text-white focus:outline-none" 
          onClick={toggleDropdown}
        >
          Solana Blockchain Development 
          <FaChevronDown className="ml-2" /> 
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-bgBar border border-bg rounded-lg shadow-lg">
            <ul className="py-2 text-white">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">TBC</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">TBC</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">TBC</li>
            </ul>
          </div>
        )}
      </div>
      
      <div className="flex items-center">
        <FaCoins size={24} className="text-yellow-500" /> 
        <span className="ml-2 text-lg font-semibold text-white">100 Tokens</span>
      </div>
    </div>
  );
};

export default CourseNavbar;

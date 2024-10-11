import React, { useState } from 'react';
import { FaBars, FaChevronDown, FaCoins } from 'react-icons/fa';

const CourseNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-full bg-bgBar shadow-md p-4 flex justify-between items-center relative z-20">
      {/* Left Side */}
      <div className="flex items-center">
        <FaBars size={20} className="text-white" />
      </div>

      <div className="relative">
        <button 
          className="flex items-center text-md font-semibold focus:outline-none" 
          onClick={toggleDropdown}
        >
          Solana Development 
          <FaChevronDown className="ml-1 mt-1" /> 
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-bgBar border border-bgButton rounded-lg shadow-lg z-30">
            <ul className="py-2 text-white">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">TBC</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">TBC</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">TBC</li>
            </ul>
          </div>
        )}
      </div>
      
      <div className="flex items-center">
        <FaCoins size={20} className="text-yellow-500" /> 
        <h2 className="ml-1">100 Tokens</h2>
      </div>
    </div>
  );
};

export default CourseNavbar;

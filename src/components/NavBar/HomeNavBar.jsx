import React from 'react';
import { FaCoins } from 'react-icons/fa';
import Profile from '../../assets/learn-trail/nouns-profile.png'

const HomeNavbar = () => {
  return (
    <div className="w-full shadow-md p-2 flex justify-between items-center">
      {/* Left Side */}
      <div className="flex justify-between">
        <img
          src={Profile}
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover bg-white border-2 border-bg"
        />
      </div>
     {/* Right Side */}
      <div className="flex items-center">
        <button className="bg-bgButton text-sm ml-2 px-2 py-2 rounded hover:bg-white hover:text-bgButton">
          Connect Wallet
        </button>
        {/* <FaCoins size={20} className="text-yellow-500" /> 
        <h2 className="ml-1">100 Tokens</h2>  */}
      </div>
    </div>
  );
};

export default HomeNavbar;

// src/components/NavBar/HomeNavBar.jsx
import React from 'react';
import { FaCoins } from 'react-icons/fa';
import Profile from '../../assets/learn-trail/nouns-profile.png'
import { useWallet } from '../CoinbaseWalletProvider';

const HomeNavbar = () => {
  const { account, connectWallet, disconnectWallet } = useWallet();

  const shortenAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="w-full bg-bgBar shadow-md p-2 flex justify-between items-center">
      {/* Left Side */}
      <div className="flex justify-between items-center">
        <img
          src={Profile}
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover bg-white border-2 border-bg"
        />
        {account ? (
          <div className="flex items-center">
            <span className="text-sm ml-2 px-2 bg-white text-bgButton rounded">
              {shortenAddress(account)}
            </span>
            <button 
              onClick={disconnectWallet}
              className="bg-bgButton text-sm ml-2 px-2 rounded hover:bg-white hover:text-bgButton"
            >
              Disconnect
            </button>
          </div>
        ) : (
          <button 
            onClick={connectWallet}
            className="bg-bgButton text-sm ml-2 px-2 rounded hover:bg-white hover:text-bgButton"
          >
            Connect
          </button>
        )}
      </div>
     {/* Right Side */}
      <div className="flex items-center">
        <FaCoins size={20} className="text-yellow-500" /> 
        <h2 className="ml-1">100 Tokens</h2> 
      </div>
    </div>
  );
};

export default HomeNavbar;
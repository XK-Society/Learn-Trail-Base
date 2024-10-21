import React, { useState } from 'react';
import { FaCoins } from 'react-icons/fa';
import Profile from '../../assets/learn-trail/nouns-profile.png'
import { useWallet } from '../WalletProvider';

const HomeNavbar = () => {
  const { account, connectCoinbaseWallet, connectMetaMask, disconnectWallet } = useWallet();
  const [showWalletOptions, setShowWalletOptions] = useState(false);

  const shortenAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="w-full shadow-md p-2 flex justify-between items-center">
      {/* Left Side */}
      <div className="flex justify-between items-center">
        <img
          src={Profile}
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover bg-white border-2 border-bg"
        />
      </div>
      {/* Right Side */}
      <div className="flex items-center">
        {account ? (
          <div className="flex items-center">
            <span className="text-sm ml-2 px-2 bg-white text-bgButton rounded">
              {shortenAddress(account)}
            </span>
            <button 
              onClick={disconnectWallet}
              className="bg-bgButton text-sm ml-2 px-2 py-2 rounded hover:bg-white hover:text-bgButton"
            >
              Disconnect
            </button>
          </div>
        ) : (
          <div className="relative">
            <button 
              onClick={() => setShowWalletOptions(!showWalletOptions)}
              className="bg-bgButton text-sm ml-2 px-2 py-2 rounded hover:bg-white hover:text-bgButton"
            >
              Connect Wallet
            </button>
            {showWalletOptions && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <button 
                  onClick={() => {
                    connectCoinbaseWallet();
                    setShowWalletOptions(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Coinbase Wallet
                </button>
                <button 
                  onClick={() => {
                    connectMetaMask();
                    setShowWalletOptions(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  MetaMask
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeNavbar;
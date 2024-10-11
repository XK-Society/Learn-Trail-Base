import React from 'react';
import Logo from "../../assets/learn-trail/light-logo.png" 

const LoadingScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="flex flex-col items-center">
        <img 
          src={Logo}
          alt="logo" 
          className="w-32 h-32 mb-4 animate-spin-slow"
        />
        <p className="text-2xl font-bold text-bgBar">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;

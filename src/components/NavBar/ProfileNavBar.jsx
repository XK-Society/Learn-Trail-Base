import React from 'react';
import { FaCog } from 'react-icons/fa'; // Import the settings icon

const ProfileNavbar = () => {
  return (
    <div className="fixed flex w-full items-center justify-between p-4 bg-bgBar shadow-md">
      <h1 className="text-2xl font-bold text-center text-white flex-grow">Profile</h1>
      <button className="p-2 text-white hover:text-blue-500">
        <FaCog size={24} />
      </button>
    </div>
  );
};

export default ProfileNavbar;

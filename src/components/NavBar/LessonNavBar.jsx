import React from 'react';
import { FaArrowAltCircleLeft, FaArrowLeft, FaCog, FaHeart } from 'react-icons/fa'; // Import the settings icon
import { useNavigate } from 'react-router-dom';

const LessonNavbar = () => {
    const navigate = useNavigate();

    const handleClick = (route) => {
        navigate(route);
    };

    return (
    <div className="flex w-full items-center justify-between p-4 bg-bgBar shadow-md">
        <button className="flex justify-between">
            <FaArrowLeft onClick={()=> handleClick ('/course')} size={20} />
        </button>
      <h1 className="text-center">Solana Architecture</h1>
      <button className="flex justify-between gap-1 text-red-600">
        <FaHeart size={20} />
        <FaHeart size={20} />
        <FaHeart size={20} />
      </button>
    </div>
  );
};

export default LessonNavbar;

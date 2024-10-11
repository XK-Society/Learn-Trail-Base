import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Module = ({ title, stars, handleClick }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold text-bgBar mb-4">{title}</h1>
      <div className="flex justify-between">
        {stars.map((star, index) => (
          <div key={index} className="w-16 h-16 pb-2 bg-bgBar rounded-full shadow-lg shadow-bgBar flex items-center justify-center">
            <button 
              className={`w-16 h-16 bg-third ${star.active ? 'text-yellow-400' : 'text-white'} font-bold rounded-full flex items-center justify-center`}
              onClick={() => star.route && handleClick(star.route)}
            >
              <FaStar className="text-4xl" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const CourseList = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <div className="p-2 flex justify-center items-center">
      <div className="relative w-full max-w-md h-[calc(100vh-10rem)]">
        <div className="absolute w-full h-full flex flex-col justify-between space-y-6">

          <Module 
            title="Module 1: Introduction to Solana Blockchain" 
            stars={[
              { active: true },
              { active: true },
              { active: true }
            ]}
            handleClick={handleClick}
          />
          
          <Module 
            title="Module 2: Solana Architecture" 
            stars={[
              { active: true, route: '/lesson4' },
              { active: false },
              { active: false }
            ]}
            handleClick={handleClick}
          />
          
          <Module 
            title="Module 3: Solana Development Environment Setup" 
            stars={[
              { active: false },
              { active: false },
              { active: false }
            ]}
            handleClick={handleClick}
          />

          <Module 
            title="Module 4: Solana Smart Contracts" 
            stars={[
              { active: false },
              { active: false },
              { active: false }
            ]}
            handleClick={handleClick}
          />

        </div>
      </div>
    </div>
  );
};

export default CourseList;

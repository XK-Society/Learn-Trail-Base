import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Module = ({ title, stars, handleClick }) => {
  return (
    <div className="p-4 bg-bgBar rounded-lg shadow-md">
      <h1 className="mb-4">{title}</h1>
      <div className="flex justify-between">
        {stars.map((star, index) => (
          <div key={index} className="w-16 h-16 pb-2 bg-bgButton rounded-full shadow-lg shadow-bgButton flex items-center justify-center">
            <button 
              className={`w-16 h-16 bg-third ${star.active ? 'text-yellow-400' : 'text-white'} rounded-full flex items-center justify-center`}
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
    <div className="p-4 flex justify-center items-center">
      <div className="relative w-full max-w-md h-[calc(100vh-10rem)]">
        <div className="absolute w-full h-full flex flex-col justify-between space-y-6">

          <Module 
            title="Introduction to Solana" 
            stars={[
              { active: true },
              { active: true },
              { active: true }
            ]}
            handleClick={handleClick}
          />
          
          <Module 
            title="Solana Architecture" 
            stars={[
              { active: true, route: '/lesson4' },
              { active: false },
              { active: false }
            ]}
            handleClick={handleClick}
          />
          
          <Module 
            title="Solana Development Environment Setup" 
            stars={[
              { active: false },
              { active: false },
              { active: false }
            ]}
            handleClick={handleClick}
          />

          <Module 
            title="Solana Smart Contracts" 
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

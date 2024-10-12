import React from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ title, stars, handleClick }) => {
    return (
      <div className="px-2 pb-4 pt-1 border-dashed border-2 border-bgBox rounded-lg shadow-md">
        <h1 className="pb-1">{title}</h1>
        <div className="flex justify-between px-4">
          {stars.map((star, index) => (
            <div key={index} className="w-14 h-14 bg-bgButton rounded-full shadow-circle flex items-center justify-center">
              <button 
                className={`${star.active ? 'text-yellow-400' : 'text-white'} flex items-center justify-center`}
                onClick={() => star.route && handleClick(star.route)}
              >
                <FaStar size={28} />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Star;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PiBooksDuotone, PiChartBarDuotone, PiTrophyDuotone, PiUserCircleDashedDuotone } from 'react-icons/pi';

const TabNav = () => {
  const [activeTab, setActiveTab] = useState('home');
  const navigate = useNavigate(); 

  const handleTabClick = (tab, route) => {
    setActiveTab(tab);
    navigate(route);
  };

  return (
    <div className="w-full bg-bgBar z-50 rounded-t-xl dark:bg-bgBar">
      <div className="flex justify-around">

        <button
          onClick={() => handleTabClick('learn', '/')}
          className={`p-2 w-full flex flex-col items-center ${
            activeTab === 'learn' ? 'text-bg' : 'text-bgBox'
          }`}
        >
          <PiBooksDuotone size={24} />
          <p>Learn</p>
        </button>

        <button
          onClick={() => handleTabClick('leaderboard', '/leaderboard')}
          className={`p-2 w-full flex flex-col items-center ${
            activeTab === 'leaderboard' ? 'text-bg' : 'text-bgBox'
          }`}
        >
          <PiTrophyDuotone size={24} />
          <p>Leaderboard</p>
        </button>

        <button
          onClick={() => handleTabClick('progress', '/progress')}
          className={`p-2 w-full flex flex-col items-center ${
            activeTab === 'progress' ? 'text-bg' : 'text-bgBox'
          }`}
        >
          <PiChartBarDuotone size={24} />
          <p>Progress</p>
        </button>

        <button
          onClick={() => handleTabClick('profile', '/profile')}
          className={`p-2 w-full flex flex-col items-center ${
            activeTab === 'profile' ? 'text-bg' : 'text-bgBox'
          }`}
        >
          <PiUserCircleDashedDuotone size={24} />
          <p>Profile</p>
        </button>
      </div>
    </div>
  );
};

export default TabNav;

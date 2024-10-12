import React from 'react';
import CourseDropdown from '../Course/CourseDropdown';
import CourseListOne from '../Course/CourseList/CourseListOne';
import { useLocation } from 'react-router-dom';

const CourseNavbar = () => {
  return (
    <div className="w-full shadow-md p-4 flex justify-between items-center relative z-20">
      <div className="relative">
      <CourseDropdown />
      </div>
    </div>
  );
};

export default CourseNavbar;

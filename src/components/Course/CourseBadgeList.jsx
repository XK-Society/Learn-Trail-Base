import React from 'react';
import '../Shape/Hexagon.css';

const CourseBadgeList = ({ title, imageSrc }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-third shadow-md rounded-lg">
      {/* Left Section: Title and Progress Bar */}
      <div className="">
      {/* Hexagon Image */}
      <div className="hexagon">
        <img src={imageSrc} alt="Course Thumbnail" />
      </div>

      {/* Course Title */}
      <h2 className="text-sm font-semibold text-white text-center">{title}</h2>
        </div>
    </div>
  );
};

export default CourseBadgeList;

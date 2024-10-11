import React from 'react';
import '../Shape/Hexagon.css';

const CourseBadgeList = ({ title, imageSrc }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-bgBar shadow-md rounded-lg">
      {/* Left Section */}
      <div className="">
      <div className="hexagon">
        <img src={imageSrc} alt="Course Thumbnail" />
      </div>
      <h2 className="text-center">{title}</h2>
        </div>
    </div>
  );
};

export default CourseBadgeList;

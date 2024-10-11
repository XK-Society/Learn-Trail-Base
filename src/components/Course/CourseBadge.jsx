import React from 'react';
import CourseBadgeList from './CourseBadgeList'; 
import Badge from '../../assets/learn-trail/badge-module.png'

// Dummy data for courses
const coursesData = [
  {
    title: "Solana Module 1",
    progress: 65,
  },
];

const CourseBadge = () => {
  return (
    <div className="p-4">
        <h1 className="text-2xl pb-4 text-bgBar font-bold">Courses Badges</h1>
        <div className="grid grid-cols-3 md:grid-cols-2 gap-4">
      {coursesData.map((course, index) => (
        <CourseBadgeList
          key={index}
          title={course.title}
          imageSrc={Badge}
        />
      ))}
        </div>
    </div>
  );
};

export default CourseBadge;

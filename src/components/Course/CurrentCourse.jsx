import React from 'react';

const courses = [
  { id: 1, title: 'Solana Blockchain Development', description: 'Designed to provide a comprehensive understanding of Solana.' },
];


const CurrentCourses = () => {
  return (
    <div className="p-4 ">
      <h2 className="text-2xl text-bgBar font-bold mb-4">Current Courses</h2>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="bg-third shadow-md rounded-lg p-4">
            <h3 className="text-lg text-white font-semibold mb-2">{course.title}</h3>
            <p className="text-white text-sm mb-4">{course.description}</p>
            <button className="bg-bgBar text-white text-sm py-2 px-4 rounded hover:bg-third">
              Continue
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentCourses;

import React from 'react';

const courses = [
  { id: 1, title: 'Solana Blockchain Development', description: 'Designed to provide a comprehensive understanding of Solana.' },
];


const CurrentCourses = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Current Courses</h2>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="bg-bgBar rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
            <p className= "text-sm mb-4">{course.description}</p>
            <button className="bg-bgButton text-white text-sm py-2 px-4 rounded hover:bg-white hover:text-bgButton">
              Continue
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentCourses;

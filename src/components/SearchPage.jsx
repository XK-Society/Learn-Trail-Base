import React, { useState } from 'react'
import dummyCourses from "../Data/CoursesData"
import { FaSearch } from 'react-icons/fa';

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCourses = dummyCourses.filter(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className="p-4">
        {/* Header with Search Bar */}
        <div className="flex items-center mb-4 bg-bgBar p-2 rounded-lg shadow-md">
          <FaSearch />
          <input
            type="text"
            placeholder="Search for courses..."
            className="ml-2 flex-grow outline-none p-2 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
  
        {/* List of Dummy Courses */}
        <div className="bg-bgBar rounded-lg shadow-md p-4">
          <h1 className="mb-2">Courses</h1>
          {filteredCourses.length === 0 ? (
            <p>No courses found.</p>
          ) : (
            <ul>
              {filteredCourses.map(course => (
                <li key={course.id} className="py-2 border-b last:border-b-0">
                  {course.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };

export default SearchPage
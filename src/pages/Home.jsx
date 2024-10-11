import React from 'react'
import CurrentCourses from '../components/Course/CurrentCourse'
import Explore from '../components/Explore'

const Home = () => {
  return (
    <div className="py-6">
        <CurrentCourses />
        <Explore />
    </div>
  )
}

export default Home
import React from 'react'
import UserProfile from '../components/Profile/UserProfile'
import CourseBadge from '../components/Course/CourseBadgeList'
import CourseBadgePage from '../components/Course/CourseBadge'

const Profile = () => {
  return (
    <div>
      <UserProfile />
      <CourseBadgePage />
    </div>
  )
}

export default Profile
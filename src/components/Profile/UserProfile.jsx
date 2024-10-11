import React from 'react'
import { FaUserCircle } from 'react-icons/fa';

const UserProfile = () => {
    const username = "meowly";

    return (
      <div className="flex flex-col items-center pt-6">
        <FaUserCircle size={100} className="text-white" />
        <h1 className="text-xl font-semibold mt-2">{username}</h1>
      </div>
  )
}

export default UserProfile
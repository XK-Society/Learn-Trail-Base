import React from 'react'
import Logo from '../assets/learn-trail/logo.gif'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate(); 

    const handleClick = (route) => {
        navigate(route);
    };

  return (
    <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center space-y-6">
            <img src={Logo} alt="Logo" className="w-48 h-48"/>
            <button 
            onClick={() => handleClick('/home')}
            className="bg-bgBar hover:bg-secondary w-44 h-12 shadow-lg rounded-full text-white font-semibold">
                Connect Wallet
            </button>
        </div>
    </div>
  )
}

export default Login
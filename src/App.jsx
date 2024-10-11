import React, { useEffect, useState } from 'react';
import './App.css';
import Course from './components/Course/CourseList';
import LoadingScreen from './components/Screen/LoadingScreen';
import Home from './pages/Home';
import Login from './pages/Login';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Lesson4 from './components/Lesson/Lesson4';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/search",
          element: <Search />
        },
        {
          path: "/course",
          element: <Course />
        },
        {
          path: "/profile",
          element: <Profile />
        },
        {
          path: "/lesson4",
          element: <Lesson4 />
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/login" />, 
    },
  ]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return <RouterProvider router={router} />;
}

export default App;

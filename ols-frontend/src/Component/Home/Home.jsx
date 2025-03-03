import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center p-8 bg-white shadow-xl rounded-lg max-w-md w-full">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">Welcome to Lecture Scheduling App</h1>
      <p className="text-lg text-gray-700 mb-6">
        Schedule, manage, and update lectures easily with our intuitive platform.
      </p>
      <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300" onClick={()=>navigate('/courses')}>
        Get Started
      </button>
    </div>
  </div>
  
  )
}

export default Home
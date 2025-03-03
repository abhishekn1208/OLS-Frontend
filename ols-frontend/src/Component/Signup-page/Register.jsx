import React, { useRef } from 'react'
import axios from 'axios'

export const Register = () => {
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const roleRef = useRef(null)

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const user = {
            username : usernameRef.current.value,
            password : passwordRef.current.value,
            roleRef : roleRef.current.value
        }
       try {
        const response = await axios.post('https://ols-backend-arta.onrender.com/api/register',user)
        if(response.status===200){
            alert(response.data.message)
            
        }
       } catch (error) {
        alert(error.response.data.message)
       }
    }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">Signup Page</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="username" className="block text-gray-700 font-medium">
            <b>Username:</b>
          </label>
          <input
            type="text"
            id="username"
            placeholder="Type your username"
            ref={usernameRef}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-gray-700 font-medium">
            <b>Password:</b>
          </label>
          <input
            type="password"
            id="password"
            placeholder="Type your password"
            ref={passwordRef}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-gray-700 font-medium">
            <b>Select your role:</b>
          </label>
          <select
            id="role"
            ref={roleRef}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select your role</option>
            <option value="instructor">Instructor</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Register
        </button>
      </form>
    </div>
  </div>
  )
}

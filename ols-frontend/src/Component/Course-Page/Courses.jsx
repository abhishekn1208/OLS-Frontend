import axios from 'axios'

import React, { useEffect } from 'react'
import { fetchcourses, fetchuserrole } from '../../Redux/Action'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Courses = () => {
    const dispatch = useDispatch()
    const {isLoading,error,isError,courses,userRole} = useSelector((state)=>state.course)
  
    useEffect(()=>{
        dispatch(fetchcourses())
    },[dispatch])

    useEffect(()=>{
      const role = localStorage.getItem('role')
      if(role){
        dispatch(fetchuserrole(role))
      }
    },[dispatch])
   


    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error}</p>;
  return (
    <div className="py-8 px-4">
    <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">Courses</h2>
    {userRole === 'admin' && (
        <div className="text-center mb-8">
          <Link to="/create-course">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700" >
            Create Course
          </button>
          </Link>
        </div>
      )}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {courses.length === 0 ? (
        <h1 className="col-span-full text-center text-xl font-semibold">Nothing in the course</h1>
      ) : (
        courses.map((course) => {
          return (
            <div
              key={course.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.name}</h3>
              <p className="text-sm text-gray-600 mb-2">
                <b>Level:</b> {course.level}
              </p>
              <p className="text-sm text-gray-600">
                <b>Description:</b> {course.description}
              </p>
            </div>
          );
        })
      )}
    </div>
  </div>
  )
}

export default Courses
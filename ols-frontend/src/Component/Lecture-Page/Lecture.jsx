import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLecture } from '../../Redux/lectureAction'
import { Link } from 'react-router-dom'

const Lecture = () => {
    const {isLoading,error, isError, lecture} = useSelector((state)=>state.lecture)
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(fetchLecture())
    },[dispatch])


    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error}</p>;
  return (
    <div className="container mx-auto p-6">
        <div className="flex justify-center space-x-6 mb-8">
        <Link to="/schedule-lecture">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Schedule new lecture
          </button>
        </Link>
       
      </div>
            <h1 className="text-center text-xl font-semibold">Sechduled Lectures</h1>
            {lecture?.length === 0 ? (
                <h1 className="text-center text-xl font-semibold">No Lecture has been scheduled</h1>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {lecture.map((l, i) => (
                        <div
                            key={i}
                            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-all duration-300"
                        >
                            <h2 className="text-xl font-semibold mb-2 text-indigo-600">
                                Course Name: {l.courseId.name}
                            </h2>
                            <h3 className="text-lg font-medium mb-2 text-gray-700">
                                Instructor: {l.instructorId.name}
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">
                                <b>Date:</b> {new Date(l.date).toLocaleDateString()}
                            </p>
                            <p className="text-sm text-gray-500">
                                <b>Timing:</b> {l.time}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
  )
}

export default Lecture
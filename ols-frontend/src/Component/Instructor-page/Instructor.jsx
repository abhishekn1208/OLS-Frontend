import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchuserrole } from '../../Redux/Action'
import { fetchInstructor } from '../../Redux/instructionAction'
import { Link } from 'react-router-dom'

const Instructor = () => {
    const dispatch = useDispatch()
    const {instructor,isLoading,isError,error} = useSelector((state)=>state.instructor)
   
   
    useEffect(()=>{
        dispatch(fetchInstructor())
    },[dispatch])

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error}</p>;
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-center space-x-6 mb-8">
        <Link to="/create-instructor">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Create New Instructor
          </button>
        </Link>
       
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {instructor.length === 0 ? (
    <h1 className="col-span-full text-center text-xl font-semibold">No Instructors Available</h1>
  ) : (
    instructor.map((detail, index) => (
      <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
        <div className="p-6 flex-1"> {/* Added flex-1 to take up available space */}
          <h2 className="text-xl font-bold mb-2 text-gray-800">{detail.name}</h2>
          <p className="text-gray-600 mb-2"><b>Email:</b> {detail.email}</p>
          <p className="text-gray-600 mb-2"><b>Phone:</b> {detail.phone}</p>
          <p className="text-gray-600 mb-4"><b>Qualifications:</b> {detail.qualifications}</p>
        </div>
        <div className="p-6"> {/* Add a container for the button at the bottom */}
        <Link to={`/instructor/update-instructor/${detail._id}`} className="block">
  <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:from-blue-500 hover:to-green-400 transition-all duration-300 transform hover:scale-105 w-full">
    Update Instructor Details
  </button>
</Link>
        </div>
      </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Instructor
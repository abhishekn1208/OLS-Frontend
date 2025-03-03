import axios from 'axios'
import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ScheduleLecture = () => {
    const {courses} = useSelector((state)=>state.course)
    const {instructor} = useSelector((state)=>state.instructor)
    const navigate = useNavigate()
    const courseRef = useRef()
    const instructorRef = useRef()
    const dateRef = useRef()
    const timeRef = useRef()


    const handleScheduleLecture=async(e)=>{
        e.preventDefault()

        const lectureDetails =  {
            courseId : courseRef.current.value,
            instructorId : instructorRef.current.value,
            date : dateRef.current.value,
            time : timeRef.current.value
        }
        try {
            const token = localStorage.getItem("token")
        const response = await axios.post('https://ols-backend-arta.onrender.com/api/schedule',lectureDetails,{
            headers : {
                Authorization : `Bearer ${token}`
            }
        })

        if(response.status===200){
            alert('lecture has been Scheduled')
            navigate('/lectures')
        }
        } catch (error) {
            alert(error.response.data.message)
        }
    }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">Schedule a New Lecture</h2>

            <form onSubmit={handleScheduleLecture}>
                {/* Course Select */}
                <div className="mb-4">
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                        <b>Course :</b>
                    </label>
                    <select
                        id="course"
                        ref={courseRef}
                        className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="">Select course</option>
                        {courses.map((course) => (
                            <option key={course._id} value={course._id}>
                                {course.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Instructor Select */}
                <div className="mb-4">
                    <label htmlFor="instructor" className="block text-sm font-medium text-gray-700 mb-2">
                        <b>Instructor :</b>
                    </label>
                    <select
                        id="instructor"
                        ref={instructorRef}
                        className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="">Select instructor</option>
                        {instructor.map((i) => (
                            <option key={i._id} value={i._id}>
                                {i.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Date Input */}
                <div className="mb-4">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                        <b>Date :</b>
                    </label>
                    <input
                        type="date"
                        ref={dateRef}
                        className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Time Input */}
                <div className="mb-6">
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                        <b>Timing :</b>
                    </label>
                    <input
                        type="text"
                        placeholder="Ex- 7:15 am - 10:45 am"
                        ref={timeRef}
                        className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Schedule
                    </button>
                </div>
            </form>
        </div>
  )
}

export default ScheduleLecture
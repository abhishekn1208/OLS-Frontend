import React, { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateCourse = () => {
    const navigate = useNavigate()
    const nameRef = useRef()
    const levelRef = useRef()
    const descriptionRef = useRef()
    const dateRef = useRef()
    const imageRef = useRef()

    const handleSubmitCreateCourse=async(e)=>{
        e.preventDefault()
        const course = {
            name : nameRef.current.value,
            level : levelRef.current.value,
            description : descriptionRef.current.value,
            startDate : dateRef.current.value,
  
        }
      

        const formData = new FormData();

        // Append regular form data fields
        formData.append('name', course.name);
        formData.append('level', course.level);
        formData.append('description', course.description);
        formData.append('startDate', course.startDate);
    
        // Append image file if selected
        if (imageRef.current.files[0]) {
          formData.append('image', imageRef.current.files[0]);
        }

  
        const token = localStorage.getItem('token')
        const response = await axios.post('https://ols-backend-arta.onrender.com/api/create',formData,{
            headers : {
                Authorization : `Bearer ${token}`,
               
            }
        })
        if(response.status === 200){
            alert(response.data.message)
            navigate("/courses")
        }
    }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8 px-4">
    <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-3/4 lg:w-1/2 xl:w-1/3">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">Create New Course</h2>
        <form onSubmit={handleSubmitCreateCourse}>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                    <b>Course Name:</b>
                </label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter the course name.."
                    ref={nameRef}
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="level" className="block text-sm font-medium text-gray-600">
                    <b>Level:</b>
                </label>
                <input
                    type="text"
                    id="level"
                    placeholder="Easy, Medium, or Hard"
                    ref={levelRef}
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                    <b>Description:</b>
                </label>
                <textarea
                    id="description"
                    placeholder="Enter the course description"
                    ref={descriptionRef}
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-600">
                    <b>Start Date:</b>
                </label>
                <input
                    type="date"
                    id="startDate"
                    ref={dateRef}
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="image" className="block text-sm font-medium text-gray-600">
                    <b>Course Image:</b>
                </label>
                <input
                    type="file"
                    id="image"
                    ref={imageRef}
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mt-6">
                <button
                    type="submit"
                    className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Create Course
                </button>
            </div>
        </form>
    </div>
</div>
  )
}

export default CreateCourse
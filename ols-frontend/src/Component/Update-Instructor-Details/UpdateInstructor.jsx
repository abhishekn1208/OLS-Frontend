import axios from 'axios'
import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateInstructor = () => {
    const navigate = useNavigate()
    const {instructorId} = useParams()
    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const qualificationRef = useRef()


    const handleUpdateInstructorDetails=async(e)=>{
        e.preventDefault()
        
        const updatedDetails = {
            name : nameRef.current.value,
            email : emailRef.current.value,
            phone : phoneRef.current.value,
            qualifications : qualificationRef.current.value
        }
        
        try {
        const token = localStorage.getItem("token")
        const response = await axios.patch(`https://ols-backend-arta.onrender.com/api/update/${instructorId}`,updatedDetails,{
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
        if(response.status===200){
            alert(response.data.message)
            navigate('/instructor')
        }
       } catch (error) {
            alert(error.response.data.message)
       }
    }
  return (
    <div className="container mx-auto p-6">
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Update Instructor Details</h2>
        <form onSubmit={handleUpdateInstructorDetails} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                <input
                    type="text"
                    placeholder="Enter the name"
                    ref={nameRef}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                <input
                    type="email"
                    placeholder="Enter the email"
                    ref={emailRef}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone:</label>
                <input
                    type="text"
                    placeholder="Enter the phone"
                    ref={phoneRef}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div>
                <label htmlFor="qualifications" className="block text-sm font-medium text-gray-700">Qualifications:</label>
                <input
                    type="text"
                    placeholder="Enter the qualifications"
                    ref={qualificationRef}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div>
                <input
                    type="submit"
                    value="Update"
                    className="w-full py-3 px-6 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:from-blue-500 hover:to-green-400 transition-all duration-300"
                />
            </div>
        </form>
    </div>
</div>
  )
}

export default UpdateInstructor
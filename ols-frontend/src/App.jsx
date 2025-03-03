import { useState } from 'react'
import './App.css'
import Courses from './Component/Course-Page/Courses'
import Home from './Component/Home/Home'
import Navbar from './Component/Navbar/Navbar'
import Login from './Component/Sigin-page/Login'
import { Register } from './Component/Signup-page/Register'
import { Routes , Route} from 'react-router-dom'
import PrivateRoute from './Component/Private-Route/PrivateRoute'
import CreateCourse from './Component/create-course-page/CreateCourse'
import Instructor from './Component/Instructor-page/Instructor'
import UpdateInstructor from './Component/Update-Instructor-Details/UpdateInstructor'
import CreateInstructor from './Component/Create-Instructor/CreateInstructor'
import Lecture from './Component/Lecture-Page/Lecture'
import ScheduleLecture from './Component/Lecture-Page/ScheduleLecture'


function App() {
const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
   <>

   <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/courses' element={<PrivateRoute isAuthenticated={isAuthenticated}><Courses/></PrivateRoute>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login  setIsAuthenticated={setIsAuthenticated}/>}/>
    <Route path='/create-course' element={<CreateCourse/>}/>
    <Route path='/instructor' element={<Instructor/>}/>
    <Route path='/lectures' element={<Lecture/>}/>
    <Route path='/schedule-lecture' element={<ScheduleLecture/>}/>
    <Route path='/create-instructor' element={<CreateInstructor/>}/>
    <Route path="/instructor/update-instructor/:instructorId" element={<UpdateInstructor />} />

   </Routes>
   </>
  )
}

export default App

import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/student/Home'
import CoursesList from './pages/student/CoursesList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Loading from './components/student/Loading'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from './pages/educator/AddCourse'
import MyCourses from './pages/educator/MyCourses'
import StudentsEnroll from './pages/educator/StudentsEnroll'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        {/* we use input kyuki we want to filter courses by input  */}
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        {/* we use id kyuki we want to display details of a specific course */}
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />

        <Route path='/educator' element={<Educator />} >
          <Route path = 'educator' element ={<Dashboard />}/>
          <Route path = 'add-course' element ={<AddCourse />}/>
          <Route path = 'my-courses' element ={<MyCourses />}/>
          <Route path = 'student-enroll' element ={<StudentsEnroll />}/>


        </Route>

      </Routes>

    </div>
  )
}

export default App
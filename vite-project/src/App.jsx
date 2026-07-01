import React from 'react'
import { useMatch } from 'react-router-dom'
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
import Navbar from './components/student/Navbar'
const App = () => {
  const isEducatorRoute = useMatch('/educator/*');
  // this line means that if the current route matches the pattern '/educator/*', then isEducatorRoute will be true, otherwise it will be false. The asterisk (*) acts as a wildcard, allowing for any sub-routes under '/educator/' to also match.
  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute && <Navbar />}
      {/* this means that if the current route is not an educator route, then the Navbar component will be displayed */}
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
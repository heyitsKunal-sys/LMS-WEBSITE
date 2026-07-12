import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import SearchBar from '../../components/student/SearchBar'
import CourseCard from '../../components/student/CourseCard'
import { useParams } from 'react-router-dom'
import { assets } from '../../assets/assets'
import Footer from '../../components/student/Footer'

const CoursesList = () => {
  const { navigate, allCourses } = useContext(AppContext)
  const { input } = useParams()
  const [filteredCourse, setFilteredCourse] = useState([])
  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice()
      input ?
        setFilteredCourse(tempCourses.filter(item => item.courseTitle.toLowerCase().includes(input.toLowerCase())))
        : setFilteredCourse(tempCourses)
    }
  }, [allCourses, input])
  return (
    <>
      <div className='relative max-w-7xl mx-auto md:px-12 px-6 pt-14 pb-6 text-left'>
        <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
          <div>
            <h1 className='font-display text-3xl md:text-4xl font-bold text-white'>Course Catalog</h1>
            <p className='text-ink-300 mt-2'>
              <span className='text-brand-300 cursor-pointer hover:underline'
                onClick={() => navigate('/')}>Home</span> / <span>Course List</span> </p>
          </div>
          <SearchBar data={input} />
        </div>
        {input && <div className='inline-flex items-center gap-4 px-4 py-2 rounded-full border border-white/15 bg-white/5 mt-8 text-ink-300'>
          <p>Results for "{input}"</p>
          <img src={assets.cross_icon} alt="" className='cursor-pointer invert opacity-70' onClick={() =>
            navigate('/course-list')
          } />
        </div>
        }
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-12 gap-6'>
          {filteredCourse.length > 0
            ? filteredCourse.map((course, index) => <CourseCard key={index} course={course} />)
            : <p className='col-span-full text-center text-ink-300 py-16'>No courses matched your search — try a different keyword.</p>
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CoursesList

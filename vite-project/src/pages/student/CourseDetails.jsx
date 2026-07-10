import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/student/Loading'
import { assets } from '../../assets/assets'

const CourseDetails = () => {
  const { id } = useParams()   //using this id we can find particular course from allCourses
  const [courseData, setCourseData] = useState(null)

  const { allCourses, calculateRating } = useContext(AppContext)

  const fetchCourseData = async () => {
    const findCourse = allCourses.find(course => course._id === id)
    setCourseData(findCourse);
  }
  useEffect(() => {
    fetchCourseData()


  }, [])

  return courseData ? (
    <>
      <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start
    justify-between md:px-36 px-8 md:pt-30 pt-20 text-left'>

        <div className='absolute top-0 left-0 w-full h-section-heights  -z-1 bg-linear-to-b from-cyan-100/70'>

        </div >
        {/* left coloumns */}
        <div className='max-w-xl z-10 text-gray-600'>
          <h1 className='md:text-course-details-heading-large text-course-details-heading-small font-semibold text-gray-800'>{courseData.courseTitle}</h1>
          <p className='pt-4 md:text-base text-sm'
            dangerouslySetInnerHTML={{ __html: courseData.courseDescription }}></p>
          {/* review AND rating */}
          <div className='flex items-center space-x-2'>

            <p>{calculateRating(courseData)}</p>

            <div className='flex '>
              {[...Array(5)].map((_, i) => (
                <img className='w-3.5 h-3.5' key={i} src={i < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank} alt='' />)
              )}

            </div>
            <p className='text-blue-800'>({courseData.courseRatings.length} {courseData.courseRatings.length > 1 ? 'ratings' : 'rating'})</p>
            <p>{courseData.enrolledStudents.length}{courseData.enrolledStudents.length > 1 ? 'students' : 'student'}</p>
          </div>
        </div>





        {/* rightcoloumnsss */}
        <div></div>
      </div>
    </>
  ) : <Loading />
}

export default CourseDetails
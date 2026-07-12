import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/student/Loading'

const MyCourses = () => {
  const { currency, allCourses } = useContext(AppContext)
  const [courses, setCourses] = useState(null)

  useEffect(() => {
    if (allCourses) setCourses(allCourses)
  }, [allCourses])

  return courses ? (
    <div className='p-5 sm:p-8'>
      <h1 className='font-display text-2xl font-bold text-white'>My Courses</h1>
      <p className='text-ink-300 mt-1'>Everything you've published on Nexalearn.</p>

      <div className='card-surface rounded-2xl overflow-hidden mt-6 overflow-x-auto'>
        <table className='w-full text-left min-w-[560px]'>
          <thead className='bg-black/5 text-ink-500 text-sm'>
            <tr>
              <th className='px-5 py-3 font-medium'>Course</th>
              <th className='px-5 py-3 font-medium'>Earnings</th>
              <th className='px-5 py-3 font-medium'>Students</th>
              <th className='px-5 py-3 font-medium'>Published</th>
            </tr>
          </thead>
          <tbody className='text-sm divide-y divide-black/5'>
            {courses.map((course, index) => (
              <tr key={index} className='hover:bg-black/[0.02] transition-colors'>
                <td className='px-5 py-3 flex items-center gap-3'>
                  <img src={course.courseThumbnail} alt="" className='w-16 aspect-video rounded-lg object-cover' />
                  <span className='text-ink-900 font-medium line-clamp-2'>{course.courseTitle}</span>
                </td>
                <td className='px-5 py-3 text-ink-700'>{currency}{Math.floor(course.enrolledStudents.length * (course.coursePrice - course.discount * course.coursePrice / 100))}</td>
                <td className='px-5 py-3 text-ink-700'>{course.enrolledStudents.length}</td>
                <td className='px-5 py-3 text-ink-500'>{new Date(course.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : <Loading />
}

export default MyCourses

import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { Line } from 'rc-progress'
import Footer from '../../components/student/Footer'

const MyEnrollments = () => {
  const { allCourses, calculateCourseDuration, navigate } = useContext(AppContext)
  const [enrolledCourses, setEnrolledCourses] = useState([])

  useEffect(() => {
    if (allCourses.length > 0) {
      setEnrolledCourses(allCourses.slice(0, 5))
    }
  }, [allCourses])

  return (
    <>
      <div className='max-w-7xl mx-auto md:px-12 px-6 pt-14 pb-10 text-left'>
        <h1 className='font-display text-3xl font-bold text-white'>My Enrollments</h1>
        <p className='text-ink-300 mt-2'>Pick up right where you left off.</p>

        <div className='card-surface rounded-2xl overflow-hidden mt-8 overflow-x-auto'>
          <table className='w-full text-left min-w-[600px]'>
            <thead className='bg-black/5 text-ink-500 text-sm hidden sm:table-header-group'>
              <tr>
                <th className='px-5 py-3 font-medium'>Course</th>
                <th className='px-5 py-3 font-medium'>Duration</th>
                <th className='px-5 py-3 font-medium'>Progress</th>
                <th className='px-5 py-3 font-medium'>Status</th>
              </tr>
            </thead>
            <tbody className='text-sm divide-y divide-black/5'>
              {enrolledCourses.map((course, index) => {
                const progress = [80, 45, 100, 20, 60][index % 5]
                return (
                  <tr key={index} className='hover:bg-black/[0.02] transition-colors cursor-pointer' onClick={() => navigate('/player/' + course._id)}>
                    <td className='px-5 py-4 flex items-center gap-3'>
                      <img src={course.courseThumbnail} alt="" className='w-20 aspect-video rounded-lg object-cover' />
                      <span className='text-ink-900 font-medium line-clamp-2'>{course.courseTitle}</span>
                    </td>
                    <td className='px-5 py-4 text-ink-700'>{calculateCourseDuration(course)}</td>
                    <td className='px-5 py-4 w-40'>
                      <Line percent={progress} strokeWidth={3} strokeColor="#7c3aed" trailColor="#e5e0f5" />
                      <p className='text-xs text-ink-500 mt-1'>{progress}% complete</p>
                    </td>
                    <td className='px-5 py-4'>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${progress === 100 ? 'bg-cyan-glow/20 text-teal-700' : 'bg-brand-500/15 text-brand-700'}`}>
                        {progress === 100 ? 'Completed' : 'In Progress'}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MyEnrollments

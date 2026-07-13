import React, { useEffect, useState } from 'react'
import { dummyStudentEnrolled } from '../../assets/assets'
import Loading from '../../components/student/Loading'

const StudentsEnroll = () => {
  const [enrolledStudents, setEnrolledStudents] = useState(null)

  useEffect(() => {
    setEnrolledStudents(dummyStudentEnrolled)
  }, [])

  return enrolledStudents ? (
    <div className='p-5 sm:p-8'>
      <h1 className='font-display text-2xl font-bold text-white'>Student Enrollments</h1>
      <p className='text-ink-300 mt-1'>Everyone who has purchased one of our courses.</p>

      <div className='card-surface rounded-2xl overflow-hidden mt-6 overflow-x-auto'>
        <table className='w-full text-left min-w-[560px]'>
          <thead className='bg-black/5 text-ink-500 text-sm'>
            <tr>
              <th className='px-5 py-3 font-medium hidden sm:table-cell'>#</th>
              <th className='px-5 py-3 font-medium'>Student</th>
              <th className='px-5 py-3 font-medium'>Course</th>
              <th className='px-5 py-3 font-medium'>Enrolled On</th>
            </tr>
          </thead>
          <tbody className='text-sm divide-y divide-black/5'>
            {enrolledStudents.map((item, index) => (
              <tr key={index} className='hover:bg-black/[0.02] transition-colors'>
                <td className='px-5 py-3 text-ink-500 hidden sm:table-cell'>{index + 1}</td>
                <td className='px-5 py-3 flex items-center gap-3'>
                  <img src={item.student.imageUrl} alt="" className='w-8 h-8 rounded-full object-cover' />
                  <span className='text-ink-900 font-medium'>{item.student.name}</span>
                </td>
                <td className='px-5 py-3 text-ink-700'>{item.courseTitle}</td>
                <td className='px-5 py-3 text-ink-500'>{new Date(item.purchaseDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : <Loading />
}

export default StudentsEnroll

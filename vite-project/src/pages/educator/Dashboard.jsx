import React, { useEffect, useState } from 'react'
import { assets, dummyDashboardData } from '../../assets/assets'
import Loading from '../../components/student/Loading'

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null)

  useEffect(() => {
    setDashboardData(dummyDashboardData)
  }, [])

  return dashboardData ? (
    <div className='p-5 sm:p-8'>
      <h1 className='font-display text-2xl font-bold text-white'>Educator Dashboard</h1>
      <p className='text-ink-300 mt-1'>A snapshot of how your courses are performing.</p>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6'>
        <div className='card-surface rounded-2xl p-5 flex items-center gap-4'>
          <div className='p-3 rounded-xl bg-brand-500/15'>
            <img src={assets.patients_icon} alt="" className='w-7 h-7' />
          </div>
          <div>
            <p className='text-2xl font-bold text-ink-900'>{dashboardData.enrolledStudentsData.length}</p>
            <p className='text-ink-500 text-sm'>Total Enrollments</p>
          </div>
        </div>
        <div className='card-surface rounded-2xl p-5 flex items-center gap-4'>
          <div className='p-3 rounded-xl bg-cyan-glow/15'>
            <img src={assets.my_course_icon} alt="" className='w-7 h-7' />
          </div>
          <div>
            <p className='text-2xl font-bold text-ink-900'>{dashboardData.totalCourses}</p>
            <p className='text-ink-500 text-sm'>Published Courses</p>
          </div>
        </div>
        <div className='card-surface rounded-2xl p-5 flex items-center gap-4'>
          <div className='p-3 rounded-xl bg-accent-500/15'>
            <img src={assets.earning_icon} alt="" className='w-7 h-7' />
          </div>
          <div>
            <p className='text-2xl font-bold text-ink-900'>${dashboardData.totalEarnings.toLocaleString()}</p>
            <p className='text-ink-500 text-sm'>Total Earnings</p>
          </div>
        </div>
      </div>

      <div className='mt-8'>
        <h2 className='font-display text-lg font-semibold text-white mb-4'>Latest Enrollments</h2>
        <div className='card-surface rounded-2xl overflow-hidden'>
          <table className='w-full text-left'>
            <thead className='bg-black/5 text-ink-500 text-sm'>
              <tr>
                <th className='px-5 py-3 font-medium hidden sm:table-cell'>#</th>
                <th className='px-5 py-3 font-medium'>Student</th>
                <th className='px-5 py-3 font-medium'>Course</th>
              </tr>
            </thead>
            <tbody className='text-sm divide-y divide-black/5'>
              {dashboardData.enrolledStudentsData.map((item, index) => (
                <tr key={index} className='hover:bg-black/[0.02] transition-colors'>
                  <td className='px-5 py-3 text-ink-500 hidden sm:table-cell'>{index + 1}</td>
                  <td className='px-5 py-3 flex items-center gap-3'>
                    <img src={item.student.imageUrl} alt="" className='w-8 h-8 rounded-full object-cover' />
                    <span className='text-ink-900 font-medium truncate'>{item.student.name}</span>
                  </td>
                  <td className='px-5 py-3 text-ink-700'>{item.courseTitle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : <Loading />
}

export default Dashboard

import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const menuItems = [
  { name: 'Dashboard', path: '/educator', icon: assets.home_icon, end: true },
  { name: 'Add Course', path: '/educator/add-course', icon: assets.add_icon },
  { name: 'My Courses', path: '/educator/my-courses', icon: assets.my_course_icon },
  { name: 'Student Enrollments', path: '/educator/student-enroll', icon: assets.person_tick_icon },
]

const Sidebar = () => {
  return (
    <div className='hidden md:flex flex-col w-60 shrink-0 border-r border-white/10 min-h-[calc(100vh-64px)] py-6 bg-white/5 backdrop-blur-xl'>
      {menuItems.map((item) => (
        <NavLink
          to={item.path}
          key={item.name}
          end={item.end}
          className={({ isActive }) =>
            `flex items-center gap-3 mx-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive ? 'bg-brand-500/20 text-white border border-brand-400/40' : 'text-ink-300 hover:bg-white/5 hover:text-white'}`
          }
        >
          <img src={item.icon} alt="" className='w-5 h-5 invert opacity-80' />
          {item.name}
        </NavLink>
      ))}
    </div>
  )
}

export default Sidebar

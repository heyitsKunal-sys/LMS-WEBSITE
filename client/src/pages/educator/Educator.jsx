import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/educators/Navbar'
import Sidebar from '../../components/educators/Sidebar'
import Footer from '../../components/educators/Footer'

const Educator = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <div className='flex flex-1'>
        <Sidebar />
        <div className='flex-1 min-h-[calc(100vh-64px)]'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Educator

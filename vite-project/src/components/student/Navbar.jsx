import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
 
  const isCourseListPage = location.pathname.includes('/course-list');
    const {openSignIn, openSignUp} = useClerk()
    const {user} = useUser()
    return (
    <div className={`flex justify-between items-center px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage ? 'bg-white-100' : 'bg-white'}`}>
      <img src={assets.logo} alt="Logo" className='w-10 lg:w-20 cursor-pointer' />

      <div className='hidden md:flex items-center gap-6 text-gray-700'>
        <div className='flex items-center gap-5'>

          { user && 
          <>
            <button> Become Instructor | </button>
          <Link to='/my-enrollments'>My Enrollments</Link>
          </>
          }
          {/* we use && opeartor because we only want to display these elements if the user is logged in 
          we use <>...</> to group multiple elements 
          simply user && <> </> means if user exists, render the elements inside */}
        </div>

        {user ? <UserButton /> :
          
          
          <button onClick={() => openSignIn()} className='bg-purple-950 text-white px-5 py-2 rounded-3xl hover:bg-purple-900'>
          Create Account</button>}
          {/* here we use ternary operator because we want to display different elements based on the user's authentication status
          simply means if user exists, render UserButton, otherwise render Create Account button */}

      </div>


      {/* phone screen */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
        <div>
          { user && 
          <>
            <button> Become Instructor | </button>
          <Link to='/my-enrollments'>My Enrollments</Link>
          </>
          }
        </div>
        <button><img src={assets.user_icon} alt="User" /></button>

      </div>
    </div>
  )
  
}

export default Navbar
import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContext'

const Navbar = () => {
  const { navigate, isEducator } = useContext(AppContext)
  const [menuOpen, setMenuOpen] = useState(false)

  const isCourseListPage = location.pathname.includes('/course-list');
  const { openSignIn } = useClerk()
  const { user } = useUser()

  return (
    <div className={`sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 ${isCourseListPage ? 'bg-ink-900/90' : 'bg-ink-900/70'}`}>
      <div className='flex justify-between items-center px-4 sm:px-10 md:px-14 lg:px-20 py-3.5 max-w-[1600px] mx-auto'>

        <button onClick={() => navigate('/')} className='flex items-center gap-2 cursor-pointer'>
          <img src={assets.logo} alt="Nexalearn" className='w-8 lg:w-9' />
          <span className='font-display font-bold text-lg lg:text-xl text-white tracking-tight'>Nexalearn</span>
        </button>

        {/* desktop */}
        <div className='hidden md:flex items-center gap-7'>
          <div className='flex items-center gap-6 text-sm font-medium text-ink-300'>
            {user &&
              <>
                <button onClick={() => navigate('/educator')} className='hover:text-white transition-colors cursor-pointer'>
                  {isEducator ? 'Educator Dashboard' : 'Become an Educator'}
                </button>
                <Link to='/my-enrollments' className='hover:text-white transition-colors'>My Enrollments</Link>
              </>
            }
          </div>

          {user ? <UserButton /> :
            <button onClick={() => openSignIn()} className='btn-primary !py-2.5 !px-6 text-sm'>
              Get Started
            </button>}
        </div>

        {/* mobile */}
        <div className='md:hidden flex items-center gap-3 text-ink-300'>
          <div className='flex items-center gap-2 max-sm:text-xs font-medium'>
            {user &&
              <>
                <button onClick={() => navigate('/educator')} className='hover:text-white transition-colors'>
                  {isEducator ? 'Dashboard' : 'Teach'}
                </button>
                <Link to='/my-enrollments' className='hover:text-white transition-colors'>Enrollments</Link>
              </>
            }
          </div>
          {
            user ? <UserButton /> :
              <button onClick={() => openSignIn()}>
                <img src={assets.user_icon} alt="User" className='invert' />
              </button>
          }
        </div>

      </div>
    </div>
  )

}

export default Navbar

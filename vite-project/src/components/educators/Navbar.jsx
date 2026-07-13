import React from 'react'
import { Link } from 'react-router-dom'
import { assets, dummyEducatorData } from '../../assets/assets'
import { UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const { user } = useUser()
  const educator = dummyEducatorData

  return (
    <div className='sticky top-0 z-40 flex items-center justify-between px-4 sm:px-8 py-3.5 border-b border-white/10 bg-ink-900/80 backdrop-blur-xl'>
      <Link to='/' className='flex items-center gap-2'>
        <img src={assets.logo} alt="Nexalearn" className='w-8' />
        <span className='font-display font-bold text-lg text-white hidden sm:inline'>Nexalearn</span>
        <span className='hidden md:inline text-ink-500 text-sm font-medium ml-2 pl-2 border-l border-white/10'>Educator Studio</span>
      </Link>

      <div className='flex items-center gap-4'>
        <p className='hidden sm:block text-sm text-ink-300'>Hi, <span className='text-white font-medium'>{user ? user.fullName : educator.name}</span></p>
        {user ? <UserButton /> : <img src={user ? user.imageUrl : educator.imageUrl} alt="" className='w-9 h-9 rounded-full object-cover ring-2 ring-brand-400' />}

      </div>
    </div>
  )
}

export default Navbar

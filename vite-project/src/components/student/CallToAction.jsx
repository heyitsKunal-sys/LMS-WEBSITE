import React from 'react'
import { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { useClerk, useUser } from '@clerk/clerk-react'

const CallToAction = () => {
  const { navigate } = useContext(AppContext)
  const { user } = useUser()
  const { openSignIn } = useClerk()

  return (
    <div className='relative w-full py-20 px-6'>
      <div className='max-w-4xl mx-auto card-surface rounded-3xl px-8 py-14 sm:py-16 flex flex-col items-center text-center gap-4'>
        <h2 className='font-display text-2xl md:text-4xl text-ink-900 font-bold'>Learn anything, anytime, anywhere</h2>
        <p className='text-ink-500 text-sm sm:text-base max-w-xl'>
          One subscription, hundreds of courses, zero commutes. Start with a
          single lesson today and build momentum from there.
        </p>
        <div className='flex flex-wrap items-center justify-center font-medium gap-4 sm:gap-6 mt-4'>
          <button
            onClick={() => user ? navigate('/course-list') : openSignIn()}
            className='btn-primary'>
            Get Started
          </button>
          <button onClick={() => navigate('/course-list')} className='flex items-center gap-2 text-ink-700 hover:text-brand-600 transition-colors'>
            Browse Courses <img src={assets.arrow_icon} alt="arrow_icon" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CallToAction

import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='relative w-full mt-10 border-t border-white/10'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-start px-8 md:px-12
      justify-center gap-10 md:gap-32 py-12'>
        <div className='flex flex-col md:items-start items-center w-full'>
          <div className='flex items-center gap-2'>
            <img className='w-8 h-8' src={assets.logo} alt="logo" />
            <span className='font-display font-bold text-lg text-white'>Nexalearn</span>
          </div>
          <p className='mt-4 text-center md:text-left text-sm text-ink-300 max-w-xs'>
            A learning platform built around real projects, honest feedback, and
            instructors who are still in the trenches.
          </p>
        </div>
        <div className='flex flex-col md:items-start items-center w-full'>
          <h2 className='font-display font-semibold text-white mb-5'>Company</h2>
          <ul className='flex md:flex-col w-full justify-between gap-3 md:gap-3 text-sm text-ink-300'>
            <li><a href="#" className='hover:text-white transition-colors'>Home</a></li>
            <li><a href="#" className='hover:text-white transition-colors'>About Us</a></li>
            <li><a href="#" className='hover:text-white transition-colors'>Contact</a></li>
            <li><a href="#" className='hover:text-white transition-colors'>Privacy Policy</a></li>
          </ul>
        </div>
        <div className='hidden md:flex flex-col items-start w-full'>
          <h2 className='font-display font-semibold text-white mb-5'>Stay in the loop</h2>
          <p className='text-sm text-ink-300'>New courses, instructor spotlights and learning tips — straight to your inbox, weekly.</p>
          <div className='flex items-center pt-4 gap-2'>
            <input type="email" placeholder='Enter your email' className='border border-white/15 bg-white/5 text-white placeholder-ink-300 outline-none w-64 h-10 rounded-full px-4 text-sm focus:border-brand-400' />
            <button className='btn-primary !py-2.5 !px-5 text-sm whitespace-nowrap'>Subscribe</button>
          </div>

        </div>

      </div>
      <p className='py-5 text-center text-xs md:text-sm text-ink-300 border-t border-white/10'>© 2026 Nexalearn. All rights reserved.</p>

    </footer>
  )
}

export default Footer

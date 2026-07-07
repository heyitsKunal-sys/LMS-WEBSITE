import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-800 md:px-36 text-left w-full mt-10'>
      <div className='flex flex-col md:flex-row items-start px-8 md:px-0
      justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
        <div className='flex flex-col md:items-start items-center w-full'>
          <img className='w-10 h-10' src={assets.logo} alt="logo" />
          <p className='mt-6 text-center md:text-left text-sm text-white'> jhdfiuhuhfiuvhsiundhviuhciuhu</p>
        </div>
        <div className='flex flex-col md:items-start items-center w-full'>
          <h2 className='font-semibold text-white mb-5'>Company</h2>
          <ul className='flex md:flex-col w-full justify-between text-sm text-white md:space-y-2'>
            <li><a href="#"></a>Home</li>
            <li><a href="#"></a>About Us</li>
            <li><a href="#"></a>Contact</li>
            <li><a href="#"></a>Privacy Policy</li>
          </ul>
        </div>
        <div className='hidden md:flex flex-col items-start w-full'>
          <h2 className='font-semibold text-white mb-5'>Subscribe to our Newsletter</h2>
          <p className='text-sm text-white'>Latest news, articles, and resources sent to your inbox weekly</p>
          <div className='flex items-center pt-4 gap-2'>
            <input type="email" placeholder='Enter your email' className='border border-gray-300 text-white placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm' />
            <button className=' bg-purple-900  hover:bg-blue-800 transition-all duration-300 w-24 h-9 text-white rounded'>Subscribe</button>
          </div>

        </div>

      </div>
      <p className='py-4 text-center text-xs md:text-sm text-white'>Copyright 2026 ©  Learnify. All Right Reserved</p>

    </footer>
  )
}

export default Footer
import React from 'react'
import {assets} from '../../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-linear-to-b from-white-100 to-white'>

      <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>Welcome to Our Platform

        <span className='text-blue-900'>Shaping Futures with Designed Courses and Expert Instruction

        </span><img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0' />

      </h1>
      <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>We have best courses , excellent teachers and instructors, interactive learning experience and a
        supportive community to help you achieve your goals. Join us today and start your journey towards success
      </p>
      <p className='md:hidden text-gray-500 max-w-2xl mx-auto'>We have best courses , excellent teachers and instructors, interactive learning experience and a
        supportive community to help you achieve your goals. Join us today and start your journey towards success
      </p>
    </div>
  )
}

export default Hero
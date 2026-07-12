import React from 'react'
import { assets } from '../../assets/assets'

const Companies = () => {
  return (
    <div className='relative pt-10 sm:pt-16 px-5'>
      <p className='text-center text-sm sm:text-base text-ink-300 tracking-wide'>Our graduates now build products at</p>
      <div className='flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 mt-6 sm:mt-10 opacity-80'>
        <img src={assets.microsoft_logo} alt="Microsoft" className='w-16 sm:w-20 md:w-28 brightness-0 invert opacity-70 hover:opacity-100 transition-opacity' />
        <img src={assets.walmart_logo} alt="Walmart" className='w-16 sm:w-20 md:w-28 brightness-0 invert opacity-70 hover:opacity-100 transition-opacity' />
        <img src={assets.accenture_logo} alt="Accenture" className='w-16 sm:w-20 md:w-28 brightness-0 invert opacity-70 hover:opacity-100 transition-opacity' />
        <img src={assets.adobe_logo} alt="Adobe" className='w-16 sm:w-20 md:w-28 brightness-0 invert opacity-70 hover:opacity-100 transition-opacity' />
        <img src={assets.paypal_logo} alt="Paypal" className='w-16 sm:w-20 md:w-28 brightness-0 invert opacity-70 hover:opacity-100 transition-opacity' />
      </div>
    </div>
  )
}

export default Companies

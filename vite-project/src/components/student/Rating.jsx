import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const Rating = ({ initialRating = 0, onRate }) => {
  const [rating, setRating] = useState(initialRating)

  const handleRate = (value) => {
    setRating(value)
    onRate && onRate(value)
  }

  return (
    <div className='flex gap-1'>
      {[...Array(5)].map((_, i) => {
        const starValue = i + 1
        return (
          <img
            key={i}
            onClick={() => handleRate(starValue)}
            className='w-5 h-5 cursor-pointer'
            src={starValue <= rating ? assets.star : assets.star_blank}
            alt=""
          />
        )
      })}
    </div>
  )
}

export default Rating

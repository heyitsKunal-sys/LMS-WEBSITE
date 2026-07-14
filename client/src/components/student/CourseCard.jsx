import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'


const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext)
  return (
    <Link to={'/course/' + course._id} onClick={() => scrollTo(0, 0)}
      className='group card-surface rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-900/30 transition-all duration-300'>

      <div className='overflow-hidden'>
        <img className='w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500' src={course.courseThumbnail} alt={course.courseTitle} />
      </div>
      <div className='p-4 text-left'>

        <h3 className='text-base font-semibold text-ink-900 line-clamp-2 min-h-12'>{course.courseTitle}</h3>
        <p className='text-ink-500 text-sm mt-1'>{course.educatorName || 'Nexalearn Instructor'}</p>

        <div className='flex items-center space-x-2 mt-2'>

          <p className='text-sm font-medium text-accent-500'>{calculateRating(course)}</p>

          <div className='flex '>
            {[...Array(5)].map((_, i) => (
              <img className='w-3.5 h-3.5' key={i} src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} alt='' />)
            )}

          </div>
          <p className='text-ink-500 text-xs'>({course.courseRatings.length})</p>
        </div>
        <div className='flex items-center gap-2 mt-2'>
          <p className='text-lg font-bold text-brand-600'>{currency}{(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}</p>
          {course.discount > 0 && <p className='text-xs text-ink-300 line-through'>{currency}{course.coursePrice}</p>}
        </div>
      </div>
    </Link>
  )
}

export default CourseCard

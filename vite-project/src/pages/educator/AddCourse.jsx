import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const AddCourse = () => {
  const [courseTitle, setCourseTitle] = useState('')
  const [coursePrice, setCoursePrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [description, setDescription] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div className='p-5 sm:p-8 max-w-3xl'>
      <h1 className='font-display text-2xl font-bold text-white'>Add a New Course</h1>
      <p className='text-ink-300 mt-1'>Fill in the details below to publish a new course.</p>

      <form onSubmit={onSubmitHandler} className='card-surface rounded-2xl p-6 sm:p-8 mt-6 flex flex-col gap-5'>

        <div className='flex flex-col gap-1.5'>
          <label className='text-sm font-medium text-ink-700'>Course Title</label>
          <input
            type="text"
            value={courseTitle}
            onChange={e => setCourseTitle(e.target.value)}
            placeholder='e.g. Complete React Developer Course'
            className='border border-black/10 rounded-lg px-4 py-2.5 outline-none focus:border-brand-400 text-ink-900'
          />
        </div>

        <div className='flex flex-col gap-1.5'>
          <label className='text-sm font-medium text-ink-700'>Course Description</label>
          <textarea
            rows={6}
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder='What will students learn in this course?'
            className='border border-black/10 rounded-lg px-4 py-2.5 outline-none focus:border-brand-400 text-ink-900 resize-none'
          />
        </div>

        <div className='flex flex-col sm:flex-row gap-5'>
          <div className='flex flex-col gap-1.5 flex-1'>
            <label className='text-sm font-medium text-ink-700'>Course Price</label>
            <input
              type="number"
              value={coursePrice}
              onChange={e => setCoursePrice(e.target.value)}
              placeholder='49.99'
              className='border border-black/10 rounded-lg px-4 py-2.5 outline-none focus:border-brand-400 text-ink-900'
            />
          </div>
          <div className='flex flex-col gap-1.5 flex-1'>
            <label className='text-sm font-medium text-ink-700'>Discount %</label>
            <input
              type="number"
              value={discount}
              onChange={e => setDiscount(e.target.value)}
              placeholder='20'
              min={0}
              max={100}
              className='border border-black/10 rounded-lg px-4 py-2.5 outline-none focus:border-brand-400 text-ink-900'
            />
          </div>
        </div>

        <div className='flex flex-col gap-1.5'>
          <label className='text-sm font-medium text-ink-700'>Course Thumbnail</label>
          <label htmlFor='thumbnail' className='flex items-center gap-4 border border-dashed border-black/15 rounded-lg px-4 py-5 cursor-pointer hover:border-brand-400 transition-colors'>
            <img src={assets.file_upload_icon} alt="" className='w-8 h-8 opacity-60' />
            <span className='text-sm text-ink-500'>Click to upload, or drag and drop a PNG or JPG</span>
            <input type="file" id='thumbnail' accept='image/*' hidden />
          </label>
        </div>

        <button type="submit" className='btn-primary self-start mt-2'>Publish Course</button>
      </form>
    </div>
  )
}

export default AddCourse

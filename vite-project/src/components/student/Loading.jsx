import React from 'react'

const Loading = () => {
  return (
    <div className='min-h-[60vh] flex flex-col items-center justify-center gap-4'>
      <div className='w-12 h-12 rounded-full border-4 border-brand-500/30 border-t-brand-500 animate-spin' />
      <p className='text-ink-300 text-sm'>Loading your content…</p>
    </div>
  )
}

export default Loading

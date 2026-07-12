import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'
import YouTube from 'react-youtube'
import Loading from '../../components/student/Loading'
import Footer from '../../components/student/Footer'

const getYoutubeId = (url) => {
  if (!url) return ''
  const match = url.match(/(?:youtu\.be\/|v=)([^&]+)/)
  return match ? match[1] : ''
}

const Player = () => {
  const { courseId } = useParams()
  const { allCourses, calculateChapterTime } = useContext(AppContext)
  const [courseData, setCourseData] = useState(null)
  const [openSections, setOpenSections] = useState({ 0: true })
  const [playerData, setPlayerData] = useState(null)

  useEffect(() => {
    const course = allCourses.find(c => c._id === courseId)
    setCourseData(course)
    if (course) {
      const firstLecture = course.courseContent[0]?.chapterContent[0]
      if (firstLecture) setPlayerData(firstLecture)
    }
  }, [allCourses, courseId])

  const toggleSection = (index) => {
    setOpenSections(prev => ({ ...prev, [index]: !prev[index] }))
  }

  if (!courseData) return <Loading />

  return (
    <>
      <div className='max-w-7xl mx-auto md:px-12 px-6 pt-10 pb-6 flex md:flex-row flex-col-reverse gap-8'>

        {/* chapters */}
        <div className='md:w-96 w-full shrink-0'>
          <h2 className='font-display text-lg font-semibold text-white mb-3'>{courseData.courseTitle}</h2>
          <div className='space-y-2'>
            {courseData.courseContent.map((chapter, index) => (
              <div key={index} className='border border-white/10 bg-white/5 rounded-xl overflow-hidden'>
                <div className='flex items-center justify-between px-4 py-3 cursor-pointer' onClick={() => toggleSection(index)}>
                  <div className='flex items-center gap-2'>
                    <img src={assets.down_arrow_icon} alt="" className={`invert opacity-70 transition-transform ${openSections[index] ? 'rotate-180' : ''}`} />
                    <p className='text-sm font-medium text-white'>{chapter.chapterTitle}</p>
                  </div>
                  <p className='text-xs text-ink-500'>{chapter.chapterContent.length} lectures · {calculateChapterTime(chapter)}</p>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openSections[index] ? 'max-h-96' : 'max-h-0'}`}>
                  <ul className='pl-4 pr-4 py-2 border-t border-white/10 space-y-2'>
                    {chapter.chapterContent.map((lecture, i) => (
                      <li key={i}
                        onClick={() => setPlayerData(lecture)}
                        className={`flex items-center gap-2 text-sm py-1 cursor-pointer ${playerData?.lectureId === lecture.lectureId ? 'text-brand-300' : 'text-ink-300 hover:text-white'}`}>
                        <img src={assets.play_icon} alt="" className='w-3.5 h-3.5 invert opacity-60' />
                        <p className='truncate'>{lecture.lectureTitle}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* player */}
        <div className='flex-1'>
          <div className='rounded-2xl overflow-hidden aspect-video bg-black'>
            {playerData ? (
              <YouTube videoId={getYoutubeId(playerData.lectureUrl)} iframeClassName='w-full h-full' opts={{ width: '100%', height: '100%' }} />
            ) : (
              <img src={courseData.courseThumbnail} alt="" className='w-full h-full object-cover' />
            )}
          </div>
          {playerData && <p className='mt-4 text-white font-medium'>{playerData.lectureTitle}</p>}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Player

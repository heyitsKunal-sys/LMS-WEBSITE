import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/student/Loading'
import Footer from '../../components/student/Footer'
import { assets } from '../../assets/assets'
import humanizeDuration from 'humanize-duration'
import YouTube from 'react-youtube'

const CourseDetails = () => {
  const { id } = useParams()
  const [courseData, setCourseData] = useState(null)
  const [openSections, setOpenSections] = useState({})
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false)
  const [playerData, setPlayerData] = useState(null)

  const { allCourses, currency, calculateRating, calculateNoOfLectures, calculateCourseDuration, calculateChapterTime } = useContext(AppContext)

  const fetchCourseData = async () => {
    const findCourse = allCourses.find(course => course._id === id)
    setCourseData(findCourse);
  }

  useEffect(() => {
    fetchCourseData()
  }, [allCourses])

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev, [index]: !prev[index],
    }));
  }

  return courseData ? (
    <>
      <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start
    justify-between max-w-7xl mx-auto md:px-12 px-6 md:pt-16 pt-10 pb-16 text-left'>

        {/* left column */}
        <div className='max-w-2xl z-10 text-ink-300'>
          <p className='text-brand-300 text-xs font-semibold tracking-widest uppercase'>Course</p>
          <h1 className='md:text-course-details-heading-large text-course-details-heading-small font-display font-bold text-white mt-2'>{courseData.courseTitle}</h1>
          <p className='pt-4 md:text-base text-sm leading-7 text-ink-300 [&_h2]:text-white [&_h2]:font-display [&_h2]:font-semibold [&_h2]:text-lg [&_h2]:mt-2 [&_li]:ml-5 [&_li]:list-disc [&_ul]:mt-2 [&_ul]:space-y-1'
            dangerouslySetInnerHTML={{ __html: courseData.courseDescription }}></p>

          {/* review AND rating */}
          <div className='flex flex-wrap items-center gap-2 pt-4 pb-1 text-sm'>
            <p className='text-accent-500 font-semibold'>{calculateRating(courseData)}</p>
            <div className='flex '>
              {[...Array(5)].map((_, i) => (
                <img className='w-3.5 h-3.5' key={i} src={i < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank} alt='' />)
              )}
            </div>
            <p className='text-brand-300'>({courseData.courseRatings.length} {courseData.courseRatings.length > 1 ? 'ratings' : 'rating'})</p>
            <span className='text-ink-500'>•</span>
            <p>{courseData.enrolledStudents.length} {courseData.enrolledStudents.length > 1 ? 'students' : 'student'} enrolled</p>
          </div>
          <p className='text-sm mt-1'>Taught by <span className='text-brand-300 font-medium'>{courseData.educatorName || 'Nexalearn Instructor'}</span></p>

          <div className='pt-8'>
            <h2 className='text-xl font-display font-semibold text-white'>Course Structure</h2>
            <p className='text-sm text-ink-500 mt-1'>{calculateNoOfLectures(courseData)} lectures • {calculateCourseDuration(courseData)} total</p>
            <div className='pt-5 space-y-2'>
              {courseData.courseContent.map((chapter, index) => (
                <div key={index} className='border border-white/10 bg-white/5 rounded-xl overflow-hidden'>
                  <div className='flex items-center justify-between px-4 py-3.5 cursor-pointer select-none'
                    onClick={() => toggleSection(index)}>

                    <div className='flex items-center gap-2'>
                      <img src={assets.down_arrow_icon} alt="arrow icon" className={`invert opacity-70 transition-transform ${openSections[index] ? 'rotate-180' : ''}`} />
                      <p className='font-medium md:text-base text-sm text-white'>{chapter.chapterTitle}</p>
                    </div>
                    <p className='text-sm text-ink-500'>{chapter.chapterContent.length} lectures · {calculateChapterTime(chapter)}</p>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${openSections[index] ? 'max-h-96' : 'max-h-0'} `} >

                    <ul className='pl-4 pr-4 py-2 text-ink-300 border-t border-white/10 space-y-2'>
                      {chapter.chapterContent.map((lecture, i) => (
                        <li className='flex items-start gap-2 py-1' key={i}>
                          <img src={assets.play_icon} alt="play icon" className='w-4 h-4 mt-1 invert opacity-60' />
                          <div className='flex items-center justify-between w-full text-xs md:text-sm'>
                            <p>{lecture.lectureTitle}</p>
                            <div className='flex gap-2 items-center'>
                              {lecture.isPreviewFree && <p onClick={() => setPlayerData({
                                videoId: lecture.lectureUrl.split('/').pop()
                              })}
                                className='text-cyan-glow cursor-pointer'>Preview</p>}
                              <p className='text-ink-500'>{humanizeDuration(lecture.lectureDuration * 60 * 1000, { units: ['h', 'm'] })}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className='py-14 text-sm md:text-base'>
              <h3 className='text-xl font-display font-semibold text-white'>Course Description</h3>
              <p className='pt-3 leading-7 text-ink-300 [&_h2]:text-white [&_h2]:font-display [&_h2]:font-semibold [&_h2]:text-lg [&_h2]:mt-2 [&_li]:ml-5 [&_li]:list-disc [&_ul]:mt-2 [&_ul]:space-y-1'
                dangerouslySetInnerHTML={{ __html: courseData.courseDescription }}></p>
            </div>
          </div>
        </div>

        {/* right column — enroll card */}
        <div className='w-full md:w-[360px] shrink-0 sticky top-24 z-10'>
          <div className='card-surface rounded-2xl overflow-hidden shadow-2xl shadow-brand-900/40'>
            {
              playerData ?
                <YouTube videoId={playerData.videoId} opts={{ playerVars: { autoplay: 1 } }}
                  iframeClassName='w-full aspect-video' />
                : <img className='w-full aspect-video object-cover' src={courseData.courseThumbnail} alt={courseData.courseTitle} />
            }

            <div className='p-6'>
              <div className='flex items-center gap-2 text-accent-500 font-medium text-sm'>



                <p>Limited-time offer — enroll today</p>
                <img src={assets.time_left_clock_icon} alt="" className='w-4 h-4' />
              </div>

              <div className='flex items-baseline gap-3 pt-3'>
                <p className='text-3xl font-bold text-ink-900'>{currency}{(courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toFixed(2)}</p>
                {courseData.discount > 0 && <>
                  <p className='text-ink-300 line-through'>{currency}{courseData.coursePrice}</p>
                  <p className='text-brand-600 font-semibold'>{courseData.discount}% off</p>
                </>}
              </div>

              <div className='flex items-center gap-4 pt-4 text-sm text-ink-500'>
                <div className='flex items-center gap-1'>
                  <img src={assets.star} alt="" className='w-4 h-4' />
                  <p>{calculateRating(courseData)} rating</p>
                </div>
                <div className='flex items-center gap-1'>
                  <img src={assets.time_clock_icon} alt="" className='w-4 h-4' />
                  <p>{calculateCourseDuration(courseData)}</p>
                </div>
              </div>

              <button className='btn-primary w-full mt-6 !py-3'>{isAlreadyEnrolled ? 'Already Enrolled' : 'Enroll Now'}</button>

              <div className='pt-6'>
                <p className='text-sm font-semibold text-ink-900 mb-2'>This course includes:</p>
                <ul className='text-sm text-ink-500 space-y-2'>
                  <li className='flex items-center gap-2'><img src={assets.lesson_icon} alt="" className='w-4 h-4' /> {calculateNoOfLectures(courseData)} on-demand video lectures</li>
                  <li className='flex items-center gap-2'><img src={assets.blue_tick_icon} alt="" className='w-4 h-4' /> Full lifetime access</li>
                  <li className='flex items-center gap-2'><img src={assets.person_tick_icon} alt="" className='w-4 h-4' /> Certificate of completion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : <Loading />
}

export default CourseDetails

import React, { useRef, useState } from 'react'
import { assets } from '../../assets/assets'

const AddCourse = () => {
  const [courseTitle, setCourseTitle] = useState('')
  const [coursePrice, setCoursePrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [description, setDescription] = useState('')
  const [thumbnail, setThumbnail] = useState(null)

  const [chapters, setChapters] = useState([])
  const [showLectureModal, setShowLectureModal] = useState(false)
  const [selectedChapterId, setSelectedChapterId] = useState(null)

  const [lectureTitle, setLectureTitle] = useState("")
  const [lectureDuration, setLectureDuration] = useState("")
  const [lectureUrl, setLectureUrl] = useState("")
  const [isPreviewFree, setIsPreviewFree] = useState(false)

  const fileInputRef = useRef(null)
  const handleThumbnail = (file) => {
    if (!file) return
    setThumbnail(file)
  }

  const handleDrop = (e) => {
    e.preventDefault()

    if (e.dataTransfer.files.length > 0) {
      handleThumbnail(e.dataTransfer.files[0])
    }
  }

  const addChapter = () => {
    setChapters([
      ...chapters,
      {
        id: Date.now(),
        title: `Chapter ${chapters.length + 1}`,
        open: true,
        lectures: [],
      },
    ])
  }

  const toggleChapter = (id) => {
    setChapters((prev) =>
      prev.map((chapter) =>
        chapter.id === id
          ? { ...chapter, open: !chapter.open }
          : chapter
      )
    )
  }

  const deleteChapter = (id) => {
    setChapters((prev) =>
      prev.filter((chapter) => chapter.id !== id)
    )
  }

  const openLectureModal = (chapterId) => {
    setSelectedChapterId(chapterId)

    setLectureTitle("")
    setLectureDuration("")
    setLectureUrl("")
    setIsPreviewFree(false)

    setShowLectureModal(true)
  }

  const addLecture = () => {
    if (!lectureTitle || !lectureDuration || !lectureUrl) {
      alert("Please fill all lecture fields.")
      return
    }

    const lecture = {
      id: Date.now(),
      title: lectureTitle,
      duration: lectureDuration,
      url: lectureUrl,
      preview: isPreviewFree,
    }

    setChapters((prev) =>
      prev.map((chapter) =>
        chapter.id === selectedChapterId
          ? {
            ...chapter,
            lectures: [...chapter.lectures, lecture],
          }
          : chapter
      )
    )

    setShowLectureModal(false)
  }

  const deleteLecture = (chapterId, lectureId) => {
    setChapters((prev) =>
      prev.map((chapter) =>
        chapter.id === chapterId
          ? {
            ...chapter,
            lectures: chapter.lectures.filter(
              (lecture) => lecture.id !== lectureId
            ),
          }
          : chapter
      )
    )
  }

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

        <div className="flex flex-col gap-2">

          <label className="text-sm font-medium text-ink-700 ">
            Course Thumbnail
          </label>

          <div
            onClick={() => fileInputRef.current.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className="border-2 border-dashed border-brand-300 rounded-xl p-6 cursor-pointer hover:border-brand-600 transition"
          >

            {!thumbnail ? (

              <div className="flex flex-col items-center gap-3">

                <img
                  src={assets.file_upload_icon}
                  className="w-10 opacity-70"
                  alt=""
                />

                <p className="text-sm text-ink-500">
                  Click or Drag & Drop Image
                </p>

              </div>

            ) : (

              <div className="flex flex-col items-center gap-4">

                <img
                  src={URL.createObjectURL(thumbnail)}
                  alt=""
                  className="w-full max-h-60 rounded-lg object-cover"
                />

                <button
                  type="button"
                  className="btn-primary"
                  onClick={(e) => {
                    e.stopPropagation()
                    fileInputRef.current.click()
                  }}
                >
                  Change Image
                </button>

              </div>

            )}

          </div>

          <input
            hidden
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => handleThumbnail(e.target.files[0])}
          />

        </div>
        <div className="mt-5">

          <div className="flex justify-between items-center mb-4">

            <h2 className="text-lg font-semibold text-white">
              Course Content
            </h2>

            <button
              type="button"
              onClick={addChapter}
              className="btn-primary"
            >
              + Add Chapter
            </button>

          </div>

          <div className="space-y-3">

            {chapters.map((chapter, index) => (

              <div
                key={chapter.id}
                className="border border-white/10 rounded-xl overflow-hidden bg-white/5"
              >

                <div
                  className="flex justify-between items-center px-5 py-4 cursor-pointer"
                  onClick={() => toggleChapter(chapter.id)}
                >

                  <div>

                    <h3 className="text-white font-semibold">

                      {chapter.title}

                    </h3>

                    <p className="text-sm text-gray-400">

                      {chapter.lectures.length} Lectures

                    </p>

                  </div>

                  <div className="flex items-center gap-3">

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        deleteChapter(chapter.id)
                      }}
                      className="text-red-400 hover:text-red-500"
                    >
                      Delete
                    </button>

                    <span className="text-white text-xl">

                      {chapter.open ? "−" : "+"}

                    </span>

                  </div>

                </div>

                {chapter.open && (

                  <div className="border-t border-white/10 p-5">

                    <button
                      type="button"
                      className="btn-primary"
                      onClick={() => openLectureModal(chapter.id)}
                    >
                      + Add Lecture
                    </button>
                    <div className="mt-5 space-y-3">

                      {chapter.lectures.map((lecture) => (

                        <div
                          key={lecture.id}
                          className="bg-white/5 rounded-lg border border-white/10 p-4 flex justify-between items-center"
                        >

                          <div>

                            <h4 className="text-white font-medium">

                              {lecture.title}

                            </h4>

                            <p className="text-sm text-gray-400">

                              {lecture.duration} min

                            </p>

                            <div className="mt-1">

                              {lecture.preview ? (

                                <span className="text-green-400 text-sm font-medium">

                                  🟢 Preview

                                </span>

                              ) : (

                                <span className="text-yellow-400 text-sm font-medium">

                                  🔒 Paid

                                </span>

                              )}

                            </div>

                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              deleteLecture(chapter.id, lecture.id)
                            }
                            className="text-red-400 hover:text-red-600"
                          >

                            Delete

                          </button>

                        </div>

                      ))}

                    </div>

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

        <button type="submit" className='btn-primary self-start mt-2'>Publish Course</button>
      </form>
      {
        showLectureModal && (

          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">

            <div className="bg-[#171717] border border-purple-500/30 rounded-2xl w-[450px] p-6">

              <h2 className="text-2xl font-bold text-white mb-6">

                Add Lecture

              </h2>

              <div className="space-y-4">

                <div>

                  <label className="text-gray-300">

                    Lecture Title

                  </label>

                  <input
                    type="text"
                    value={lectureTitle}
                    onChange={(e) => setLectureTitle(e.target.value)}
                    className="w-full mt-1 rounded-lg bg-[#232323] border border-white/10 px-4 py-2 text-white outline-none focus:border-purple-500"
                  />

                </div>

                <div>

                  <label className="text-gray-300">

                    Duration (Minutes)

                  </label>

                  <input
                    type="number"
                    value={lectureDuration}
                    onChange={(e) => setLectureDuration(e.target.value)}
                    className="w-full mt-1 rounded-lg bg-[#232323] border border-white/10 px-4 py-2 text-white outline-none focus:border-purple-800"
                  />

                </div>

                <div>

                  <label className="text-gray-500">

                    Video URL

                  </label>

                  <input
                    type="text"
                    value={lectureUrl}
                    onChange={(e) => setLectureUrl(e.target.value)}
                    className="w-full mt-1 rounded-lg bg-[#232323] border border-white/10 px-4 py-2 text-white outline-none focus:border-purple-500"
                  />

                </div>

                <div className="flex items-center gap-3">

                  <input
                    type="checkbox"
                    checked={isPreviewFree}
                    onChange={(e) => setIsPreviewFree(e.target.checked)}
                  />

                  <label className="text-gray-300">

                    Free Preview

                  </label>

                </div>

                <div className="flex justify-end gap-3 pt-3">

                  <button
                    type="button"
                    onClick={() => setShowLectureModal(false)}
                    className="px-5 py-2 rounded-lg border border-white/10 text-white"
                  >

                    Cancel

                  </button>

                  <button
                    type="button"
                    onClick={addLecture}
                    className="btn-primary"
                  >

                    Add Lecture

                  </button>

                </div>

              </div>

            </div>

          </div>

        )
      }
    </div>
  )
}

export default AddCourse

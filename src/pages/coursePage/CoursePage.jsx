import React from 'react'
import Video from '../../components/videoPlay/Video'
import CourseContent from "../../components/courseContent/CourseContent"

const CoursePage = () => {
  return (
    <div>
      <div className='md:grid md:grid-cols-video-grid mx-2 h-screen'>
        <Video />
        <CourseContent />
      </div>
    </div>
  )
}

export default CoursePage
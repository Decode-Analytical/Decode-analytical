import React from 'react'
import Video from '../../components/videoPlay/Video'
import CourseContent from "../../components/courseContent/CourseContent"

const CoursePage = () => {
  return (
    <div>
      <div className='grid grid-cols-video-grid'>
        <Video />
        <CourseContent />
      </div>
    </div>
  )
}

export default CoursePage
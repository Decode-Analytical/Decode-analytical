import React, { useState } from 'react'
import Video from '../../components/videoPlay/Video'
import CourseContent from "../../components/courseContent/CourseContent"

const CoursePage = () => {
  const [fullScreen, setFullScreen] = useState(false)

  const handleFullScreen = () => {
    setFullScreen(!fullScreen)
    console.log(fullScreen)
  }
  return (
    <div>
      <div className={`md:mx-2 sm:mx-3 mt-3 h-screen ${fullScreen ? "" : "md:grid md:grid-cols-video-grid" }`}>
        <Video 
          fullScreen={fullScreen}
          handleFullScreen={handleFullScreen}
        />
        <CourseContent />
      </div>
    </div>
  )
}

export default CoursePage
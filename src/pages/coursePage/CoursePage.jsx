import React, { useState } from 'react';
import { OverView, Video, CourseContent } from '../../components/coursePage';

const CoursePage = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const [showCourseContent, setShowCourseContent] = useState("OverView");
  const handleShowCourseContent = (value) => {
    setShowCourseContent(value);
  }

  const handleFullScreen = () => {
    setFullScreen(!fullScreen);
  };

  return (
    <div className="bg-[#F5F5F5]">
      <div className={`md:mx-2 mt-3 ${fullScreen ? "" : "md:grid md:grid-cols-video-grid" }`}>
        <div>
        <Video 
          fullScreen={fullScreen}
          handleFullScreen={handleFullScreen}
        />

       <ul className={`p-5 md:flex gap-5 hidden `}>
        <li>
        <button type="button" className={`${showCourseContent == "Course Content" && "underline"}`} onClick={() => handleShowCourseContent("Course Content")}>
          Course Content
        </button>
        </li>
        <li>
        <button type="button" className={`${showCourseContent == "OverView" && "underline"}`} onClick={() => handleShowCourseContent("OverView")}>
          Overview
        </button>
        </li>
        <li>
        <button type="button" className={`${showCourseContent == "Comment" && "underline"}`} onClick={() => handleFullScreen("Comment")}>
          Comment
        </button>
        </li>
        <li>
        <button type="button" className={`${showCourseContent == "Review" && "underline"}`} onClick={() => handleFullScreen("Review")}>
          Review
        </button>
        </li>
       </ul>

        {showCourseContent === "OverView" && <OverView />}
        {showCourseContent === "Course Content" && <CourseContent />}
        {showCourseContent === "Comment" && <div>Comment</div>}
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default CoursePage;

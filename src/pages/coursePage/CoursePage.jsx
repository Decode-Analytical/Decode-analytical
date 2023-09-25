import React, { useState } from 'react';
import { OverView, Video, CourseContent } from '../../components/coursePage';
import Menu from "./Menu.png";

const CoursePage = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const [hiddenControl, setHiddenControl] = useState(false);
  const [showCourseContent, setShowCourseContent] = useState("OverView");
  const handleShowCourseContent = (value) => {
    setShowCourseContent(value);
    setHiddenControl(false);
  }

  const handleFullScreen = () => {
    setFullScreen(!fullScreen);
    setHiddenControl(false);
  };

  const handleHiddenControl = () => {
    setHiddenControl(!hiddenControl);

  }

  return (
    <div className="bg-[#F5F5F5]">
      <div className={`md:mx-2 mt-3 ${fullScreen ? "" : "md:grid md:grid-cols-video-grid" }`}>
        <div>
        <Video 
          fullScreen={fullScreen}
          handleFullScreen={handleFullScreen}
        />
        <img src={Menu} alt="" className={`block md:hidden p-5`} onClick={handleHiddenControl} />
       <ul className={`md:p-5 md:flex md:gap-5 ${hiddenControl ? " flex flex-col z-50 absolute left-5 gap-2 p-2 bg-[#808080ad] backdrop-blur-md" : "hidden"}`}>
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

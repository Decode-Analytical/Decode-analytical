import React, { useState } from 'react';
import { OverView, Video, CourseContent, Comment } from '../../components/coursePage';
import Menu from "./Menu.png";
import Close from "./Close.png";

const CoursePage = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const [hiddenControl, setHiddenControl] = useState(false);
  const [courseContent, setCourseContent] = useState(false);
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
      <div className={`md:mx-2 mt-3 ${fullScreen ? "" : "md:flex md:gap-3" }`}>
        <div className={`${fullScreen ? "" : "md:flex-1" }`}>
        <Video 
          fullScreen={fullScreen}
          handleFullScreen={handleFullScreen}
        />
        <img src={Menu} alt="" className={`block md:hidden p-5`} onClick={handleHiddenControl} />
       <ul className={`md:p-5 md:flex md:gap-5 ${hiddenControl ? " flex flex-col z-50 absolute left-5 gap-2 p-2 bg-[#808080ad] backdrop-blur-md" : "hidden"}`}>
        <li>
        <button type="button" className={`${showCourseContent == "Course Content" && "underline"} ${fullScreen ? "block" : "hidden"}`} onClick={() => handleShowCourseContent("Course Content")}>
          Course Content
        </button>
        </li>
        <li>
        <button type="button" className={`${showCourseContent == "OverView" && "underline"}`} onClick={() => handleShowCourseContent("OverView")}>
          Overview
        </button>
        </li>
        <li>
        <button type="button" className={`${showCourseContent == "Comment" && "underline"}`} onClick={() => handleShowCourseContent("Comment")}>
          Comment
        </button>
        </li>
        <li>
        <button type="button" className={`${showCourseContent == "Review" && "underline"}`} onClick={() => handleShowCourseContent("Review")}>
          Review
        </button>
        </li>
       </ul>

        {/* {showCourseContent === "Course Content" && <CourseContent />} */}
        {showCourseContent === "OverView" && <OverView />}
        {showCourseContent === "Comment" && <div><Comment /></div>}
        {showCourseContent === "Course Content" && (
        <div className="bg-white">
          <div className={`flex justify-between p-4`}>
            <h1 className="text-2xl font-bold">Course Content</h1>
            <button type="button" onClick={() => {
              setShowCourseContent(!showCourseContent)
              }}>
              <img src={showCourseContent ? Close : Menu} srcset="" />
            </button>
          </div>
          <div className={`${showCourseContent ? "flex" : "hidden" }`}>
            <CourseContent />
          </div>
        </div>
        )}
        </div>
        <div className={`bg-white  ${fullScreen ? "hidden" : "md:flex flex-col hidden"}`}>
          <div className={`flex justify-between p-4`}>
            <h1 className="text-2xl font-bold">Course Content</h1>
            <button type="button" onClick={() => {
              setShowCourseContent(!showCourseContent)
              }}>
              <img src={showCourseContent ? Close : Menu} srcset="" />
            </button>
          </div>
          <div className={`${showCourseContent ? "flex" : "hidden" }`}>
            <CourseContent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursePage;

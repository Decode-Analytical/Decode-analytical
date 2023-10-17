import React, { useState, useEffect } from "react";
import {
  OverView,
  Video,
  CourseContent,
  Comment,
} from "../../components/coursePage";
import Menu from "./Menu.png";
import Close from "./Close.png";
import { useNavigate, useParams } from "react-router-dom";
import { useGetCourseDataQuery } from "../../redux/FetchApi/GetCourseData";

// const token =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTFkMWMwMDQ1Y2NmNjEyMzY4NzRmNjEiLCJpYXQiOjE2OTcxMzc1NjgsImV4cCI6MTY5NzIyMzk2OH0.6YQtqx-ThsiTa8u8OF-4Ljl-0lrptN6XkN2nHVW7swQ";

// axios.defaults.baseURL = "https://decode-mnjh.onrender.com/api";

const CoursePage = () => {
  const param = useParams();
  const navigation = useNavigate();
  const { id } = param;
  const { isLoading, data } = useGetCourseDataQuery(id);
  console.log(data)
  const [trackVideo, setTrackVideo] = useState(localStorage.getItem("trackVideo") || 0);
  // const [courseData, setCourseData] = useState(undefined);
  // console.log(isLoading, data);

  const [fullScreen, setFullScreen] = useState(false);
  const [hiddenControl, setHiddenControl] = useState(false);
  const [showCourseContent, setShowCourseContent] = useState("OverView");
  const handleShowCourseContent = (value) => {
    setShowCourseContent(value);
    setHiddenControl(false);
  };

  const handleFullScreen = () => {
    setFullScreen(!fullScreen);
    setHiddenControl(false);
  };

  const handleHiddenControl = () => {
    setHiddenControl(!hiddenControl);
  };
  const [Trackvideo, setTrackVideo2] = useState([]);
  if (data && data.courseTitle && data.courseTitle.modules) {
    var modules = data.courseTitle.modules;
  }

  function NextVideoTraker() {
    if (data && data.courseTitle) {
      if (trackVideo === null) {
        setTrackVideo(0);
      }
      localStorage.removeItem("trackVideo")
      localStorage.removeItem("courseID")
      // console.log("Early",trackVideo)
      if (trackVideo <= modules.length) {
        setTrackVideo(trackVideo + 1);
        console.log(trackVideo)
        for (let tracker in modules) {
          // console.log(tracker)
          if (tracker == trackVideo) {
            setTrackVideo2(() => [...Trackvideo, trackVideo]);
            break;
          }
        }
      }
      return null;
    }
  }

  function Nextpplay(play) {
    if (play === true) {
      // Increment the trackVideo using the current value
      setTrackVideo((prevTrackVideo) => {
        const nextTrackVideo = prevTrackVideo + 1;
        // Store the updated value in localStorage
        console.log(trackVideo)
        localStorage.setItem("trackVideo", nextTrackVideo);
        return nextTrackVideo;
      });
      localStorage.setItem("courseID", data.courseTitle._id);
      navigation(`/Quiz/${modules[trackVideo]._id}`);
    }
  }
  
  if (isLoading) {
    return <h2>Loading ...</h2>;
  }
  if (data.courseTitle === null) {
    return <h2>Internal Server Error</h2>;
  }

  function courseUpdate(index) {
    setTrackVideo(index)
  }

  return (
    <div className="bg-[#F5F5F5]">
      <div className={`md:mx-2 mt-3 ${fullScreen ? "" : "md:flex md:gap-3"}`}>
        <div className={`${fullScreen ? "" : "md:flex-1"}`}>
          <Video
            fullScreen={fullScreen}
            handleFullScreen={handleFullScreen}
            Nextplay={Nextpplay}
            modules={data.courseTitle.modules[trackVideo]}
          />
          <img
            alt=""
            src={Menu}
            className={`block md:hidden p-5`}
            onClick={handleHiddenControl}
          />
          <ul
            className={`md:p-5 md:flex md:gap-5 ${
              hiddenControl
                ? " flex flex-col z-50 absolute left-5 gap-2 p-2 bg-[#808080ad] backdrop-blur-md"
                : "hidden"
            }`}
          >
            <li>
              <button
                type="button"
                className={`${
                  showCourseContent == "Course Content" && "underline"
                } ${fullScreen ? "block" : "md:hidden block"}`}
                onClick={() => handleShowCourseContent("Course Content")}
              >
                Course Content
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`${showCourseContent == "OverView" && "underline"}`}
                onClick={() => handleShowCourseContent("OverView")}
              >
                Overview
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`${showCourseContent == "Comment" && "underline"}`}
                onClick={() => handleShowCourseContent("Comment")}
              >
                Comment
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`${showCourseContent == "Review" && "underline"}`}
                onClick={() => handleShowCourseContent("Review")}
              >
                Review
              </button>
            </li>
          </ul>

          {/* {showCourseContent === "Course Content" && <CourseContent />} */}
          {showCourseContent === "OverView" && (
            <OverView
              des={data.courseTitle.course_description}
              lengthmodules={data.courseTitle.modules.length}
              language={data.courseTitle.course_language}
              modules={data.courseTitle.modules}
              totalRigistered={data.courseTitle.totalRegisteredByStudent}
            />
          )}
          {showCourseContent === "Comment" && (
            <div>
              <Comment />
            </div>
          )}
          {showCourseContent === "Course Content" && (
            <div className="bg-white">
              <div className={`flex justify-between p-4`}>
                <h1 className="text-2xl font-bold">Course Content</h1>
                <button
                  type="button"
                  onClick={() => {
                    setShowCourseContent(!showCourseContent);
                  }}
                >
                  <img src={showCourseContent ? Close : Menu} />
                </button>
              </div>
              <div className={`${showCourseContent ? "flex" : "hidden"}`}>
                <CourseContent
                  modules={data.courseTitle.modules}
                  watchVideo={Trackvideo}
                  courseClick={courseUpdate}
                />
              </div>
            </div>
          )}
        </div>
        <div
          className={`bg-white  ${
            fullScreen ? "hidden" : "md:flex flex-col hidden"
          }`}
        >
          <div className={`flex justify-between p-4`}>
            <h1 className="text-2xl font-bold">Course Content</h1>
            <button
              type="button"
              onClick={() => {
                setShowCourseContent(!showCourseContent);
              }}
            >
              <img src={showCourseContent ? Close : Menu} />
            </button>
          </div>
          <div className={`${showCourseContent ? "flex" : "hidden"}`}>
            <CourseContent
              modules={data.courseTitle.modules}
              watchVideo={Trackvideo}
              courseClick={courseUpdate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;

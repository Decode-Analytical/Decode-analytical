import React, { useState, useEffect } from "react";
import {
  OverView,
  Video,
  CourseContent,
  Review,
  CreateComment,
} from "../../components/coursePage";
import Menu from "./Menu.png";
import Close from "./Close.png";
import { useNavigate, useParams } from "react-router-dom";
import { useGetCourseDataQuery } from "../../redux/FetchApi/GetCourseData";
import Quiz from "../quiz /Quiz";
import { AiOutlineLoading3Quarters } from "react-icons/ai"

// const token =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTFkMWMwMDQ1Y2NmNjEyMzY4NzRmNjEiLCJpYXQiOjE2OTcxMzc1NjgsImV4cCI6MTY5NzIyMzk2OH0.6YQtqx-ThsiTa8u8OF-4Ljl-0lrptN6XkN2nHVW7swQ";

// axios.defaults.baseURL = "https://decode-mnjh.onrender.com/api";

const CoursePage = () => {
  const param = useParams();
  const [ShowQuiz, SetQuiz] = useState({
    show: false,
    id: "",
  });
  const { id } = param;
  const [comments, SetAddComments] = useState({
    comment: false,
    message: "",
  });
  
  const [trackVideo, setTrackVideo] = useState(0);
  // Retrieve the stored course ID from localStorage
  const storedCourseID = localStorage.getItem("courseID");
  const isSameCourse = storedCourseID === id;
  const { isLoading, data } = useGetCourseDataQuery(id);
  const [hasWatch, setHasWatch] = useState([]);
  const [quizResult, setQuizResult] = useState();
  let totalComment = 0
  // for (let i = 0; i < data.result.length; i++) {
  //   const element = data.result[i];
    
  // }
  // console.log(data);

  if (!isSameCourse) {
    localStorage.removeItem("trackVideo");
    localStorage.removeItem("courseID");
  }

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

  // console.log(data)
  const handleHiddenControl = () => {
    setHiddenControl(!hiddenControl);
  };
  const [Trackvideo, setTrackVideo2] = useState([]);
  if (data && data.courseTitle && data.courseTitle.modules) {
    var modules = data.courseTitle.modules;
  }

  function NextVideoTraker() {
    if (data && data.result) {
      if (trackVideo === null) {
        setTrackVideo(0);
      }
      localStorage.removeItem("trackVideo");
      localStorage.removeItem("courseID");
      // console.log("Early",trackVideo)
      if (trackVideo <= data.result.length && quizResult <= 60) {
        setTrackVideo(trackVideo + 1);
        // console.log(trackVideo);
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

  function markVideoAsWatched(mainIndex, videoId) {
    // Update the watchVideo state when a video is marked as watched
    setHasWatch((prevHasWatch) => {
      return [...prevHasWatch, mainIndex];
    });

    // Update the local storage to track video progress
    const progressKey = `videoProgress_${mainIndex}_${videoId}`;
    localStorage.setItem(progressKey, "watched");
  }

  function commentAddorNot(message) {
    SetAddComments({
      comment: true,
      message,
    });
  }

  function SeeQuiz(id) {
    if (id) {
      SetQuiz({ show: true, id });
    } else {
      SetQuiz({ show: false, id: "" });
    }
  }

  function QuizResult(number, totalQuiz) {
    let perQuiz = (number / totalQuiz) * 100;
    setQuizResult(perQuiz);
  }

  function Nextpplay(play) {
    if (play === true) {
      // Increment the trackVideo using the current value
      NextVideoTraker()
      setTrackVideo((prevTrackVideo) => {
        const nextTrackVideo = prevTrackVideo + 1;
        // Store the updated value in localStorage
        // console.log("NextTrackVideo", nextTrackVideo);
        localStorage.setItem("trackVideo", nextTrackVideo);
        return nextTrackVideo;
      });

      // Check if data and data.result are available
      if (data && data.result) {
        // Check if data.result[trackVideo] is available
        if (data.result[trackVideo]) {
          markVideoAsWatched(trackVideo, data.result[trackVideo].video[0]);

          if (data.result[trackVideo].quizzes) {

            // Update ShowQuiz without converting it into an array
            let id = data.result[trackVideo].quizzes[1];
            totalComment = data.result[trackVideo].comment_count
            SeeQuiz(id);

            // navigation(`/Quiz/${modules[trackVideo]._id}`);
          }
        }
      }
    }
  }

  if (isLoading) {
    return <h1 className="w-full h-full flex justify-center items-center"><AiOutlineLoading3Quarters rotate={90} className="animate-spin w-16" /> </h1>;
  }
  if (data.courseTitle === null) {
    return <h2>Internal Server Error</h2>;
  }

  function courseUpdate(index) {
    setTrackVideo(index);
  }

  return (
    <div className="bg-[#F5F5F5]">
      {comments.comment && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-md animate-popup">
          {comments.message}
        </div>
      )}
      <div className={`md:mx-2 mt-3 ${fullScreen ? "" : "md:flex md:gap-3"}`}>
        <div className={`${fullScreen ? "" : "md:w-3/4"}`}>
          <Video
            fullScreen={fullScreen}
            handleFullScreen={handleFullScreen}
            Nextplay={Nextpplay}
            // modules={data.courseTitle.modules[trackVideo]}
            modules={data.result[trackVideo]}
          />
          <img
            alt=""
            src={Menu}
            className={`block md:hidden p-5`}
            onClick={handleHiddenControl}
          />
          <ul
            className={`md:p-5 md:flex md:gap-[4.5rem] ${
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
                className={`${
                  showCourseContent == "OverView"
                    ? "activeCoursePageNav"
                    : "nonActiveCoursePage"
                } `}
                onClick={() => handleShowCourseContent("OverView")}
              >
                Overview
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`${
                  showCourseContent == "Comment"
                    ? "activeCoursePageNav"
                    : "nonActiveCoursePage"
                }`}
                onClick={() => handleShowCourseContent("Comment")}
              >
                Comment
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`${
                  showCourseContent == "Review"
                    ? "activeCoursePageNav"
                    : "nonActiveCoursePage"
                }`}
                onClick={() => handleShowCourseContent("Review")}
              >
                Review
              </button>
            </li>
          </ul>

          {/* {showCourseContent === "Course Content" && <CourseContent />} */}
          {/* {showCourseContent === "OverView" && (
            <OverView
              des={data.courseTitle.course_description}
              lengthmodules={data.result.length}
              language={data.courseTitle.course_language}
              modules={data.courseTitle.modules}
              totalRigistered={data.courseTitle.totalRegisteredByStudent}
            />
          )} */}
          {showCourseContent === "Comment" && (
            <CreateComment
              courseId={data.result[0].moduleId}
              comment={commentAddorNot}
            />
          )}
          {/* {showCourseContent === "Review" && <Review/>} */}
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
                  modules={data.result}
                  watchVideo={hasWatch}
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
              modules={data.result}
              watchVideo={hasWatch}
              courseClick={courseUpdate}
            />
          </div>
        </div>
      </div>
      {ShowQuiz.show && (
        <section className="fixed top-0 left-0 w-full z-50 bg-gray-300 min-h-full h-screen overflow-auto">
          <Quiz
            id={ShowQuiz.id}
            clossQuiz={SeeQuiz}
            TrackModule={trackVideo}
            Result={QuizResult}
            Comment={totalComment}
          />
        </section>
      )}
    </div>
  );
};

export default CoursePage;

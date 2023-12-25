import React, { useState } from "react";
import {
  OverView,
  Video,
  CourseContent,
  Review,
  CreateComment,
  Alert,
} from "../../components/coursePage";
import Menu from "./Menu.png";
import Close from "./Close.png";
import { useParams } from "react-router-dom";
import {
  useGetCourseDataQuery,
  useViewCourseQuizQuery,
} from "../../redux/FetchApi/GetCourseData";
import { TailSpin } from "react-loader-spinner";
import Quiz from "../quiz /Quiz";

const Course = () => {
  let param = useParams();
  let { id } = param;
  const { isLoading, isError, data } = useGetCourseDataQuery(id);
  const [coursContactisOpen, setcoursContactisOpen] = useState(false);
  const [hasWatch, setHasWatch] = useState([]);
  const [trackVideo, setTrackVideo] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);
  const [showQuiz, setShowQuiz] = useState({
    ShowQuiz: false,
    ID: "",
    alert: false,
  });
  console.log(data?.result[0]);

  // First we check that Quiz is available if so than it update the ShowQuiz useState that open the quiz
  function QuizCheck() {
    console.log("Quiz Checker is running now")
    if (data?.result[0].module[trackVideo].quizzes.length > 0) {
      let quizID = data?.result[0].module[trackVideo].quizzes[0];
      setShowQuiz({
        ShowQuiz: true,
        ID: quizID,
      });
    } else {
      CloseAlert();
    }
  }
  function CLoseQuiz() {
    setShowQuiz({
      ShowQuiz: false,
      ID: "",
      alert: false,
    });
  }
  // This is use for closing the ALert
  function CloseAlert() {
    setShowQuiz({
      ShowQuiz: false,
      ID: "",
      alert: false,
    });
    NextVideo();
  }

  // Start next Video
  function NextVideo() {
    setTrackVideo(trackVideo + 1);
  }
  function handleFullScreen() {
    setFullScreen(!fullScreen);
  }

  function courseUpdate(index) {
    setTrackVideo(index);
  }

  return (
    <section>
      {isLoading ? (
        <div className="h-screen w-full flex justify-center items-center">
          <TailSpin height="80" width="80" color="yellow" ariaLabel="Loading" />
        </div>
      ) : isError ? (
        <div className="h-screen w-full flex justify-center items-center">
          <h2 className="text-xl text-red-400 font-bold">
            Please Sign In Again
          </h2>
        </div>
      ) : (
        <div className="bg-white">
          <div
            className={`md:mx-2 mt-3 ${fullScreen ? "" : "md:flex md:gap-3"}`}
          >
            <div className={`${fullScreen ? "" : "md:w-3/4"}`}>
              <Video
                Nextplay={QuizCheck}
                modules={data?.result[0].module[trackVideo]}
                fullScreen={fullScreen}
                handleFullScreen={handleFullScreen}
              />
            </div>
            <div className={`${fullScreen ? "w-full" : "md:w-2/6"}`}>
              <div className={`flex justify-between p-4`}>
                <h1 className="text-2xl font-bold">Course Content</h1>
                <button
                  type="button"
                  onClick={() => {
                    setcoursContactisOpen(!coursContactisOpen);
                  }}
                >
                  <img
                    src={!coursContactisOpen ? Close : Menu}
                    alt="Toggle Menu"
                  />
                </button>
              </div>
              <aside className={`${!coursContactisOpen ? "flex" : "hidden"}`}>
                <CourseContent
                  modules={data?.result[0].module}
                  watchVideo={hasWatch}
                  courseClick={courseUpdate}
                />
              </aside>
            </div>
          </div>
        </div>
      )}
      {showQuiz.ShowQuiz && (
        <div className="h-screen w-full z-50 fixed bg-white/50 top-0">
          <Quiz
            id={showQuiz.ID}
            TrackModule={trackVideo}
            closeQuiz={CLoseQuiz}
          />
        </div>
      )}
      {showQuiz.alert && (
        <div className="h-screen fixed top-0 z-50 w-full flex justify-center items-center">
          <Alert Next={CloseAlert} />
        </div>
      )}
    </section>
  );
};

export default Course;

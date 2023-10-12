import React, { useState, useEffect } from "react";
import {
  OverView,
  Video,
  CourseContent,
  Comment,
} from "../../components/coursePage";
import Menu from "./Menu.png";
import Close from "./Close.png";
import { useParams } from "react-router-dom";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTFkMWMwMDQ1Y2NmNjEyMzY4NzRmNjEiLCJpYXQiOjE2OTcwMzcxMjMsImV4cCI6MTY5NzEyMzUyM30.VNTEB8QnYkpp1tSiPB8aYWVawkIuUCQNQlg0P0tcxyE";

const CoursePage = () => {
  const param = useParams();
  const [courseData, setCourseData] = useState({});
  // console.log(param.id);

  useEffect(() => {
    async function FetchCourseData() {
      try {
        const fetchCourse = await fetch(
          `https://decode-mnjh.onrender.com/api/student/studentViewCourse/${param.id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log(fetchCourse)

        if (fetchCourse.ok) {
          const courseData = await fetchCourse.json();
          setCourseData(courseData);
          console.log(courseData);
        } else {
          // Handle the error or failed response here
          console.error("Failed to fetch course data.");
        }
      } catch (error) {
        // Handle network errors or other exceptions here
        console.error("An error occurred:", error);
      }
    }

    FetchCourseData();
  }, []);

  const [fullScreen, setFullScreen] = useState(false);
  const [hiddenControl, setHiddenControl] = useState(false);
  const [courseContent, setCourseContent] = useState(false);
  const [showCourseContent, setShowCourseContent] = useState("OverView");

  let CourseOverview;
  if (courseData.courseTitle) {
    let moduules = courseData.courseTitle.modules;
    let videoTime = 0;
    function convertDurationToMinutes(duration) {
      console.log(duration)
      if(duration == undefined) return undefined
      const parts = duration.split(" ");
      let totalMinutes = 0;

      for (const part of parts) {
        const [value, unit] = part.split(/hr|min/).map((str) => str.trim());

        if (unit === "hr") {
          totalMinutes += parseInt(value, 10) * 60;
        } else if (unit === "min") {
          totalMinutes += parseInt(value, 10);
        }
      }

      return totalMinutes;
    }
    // const durationString = "1hr 20min";
    // const totalMinutes = convertDurationToMinutes(durationString);
    // console.log(totalMinutes); // Output: 80

    for (let i = 0; i < moduules.length; i++) {
      console.log(moduules.module_duration)
      videoTime += convertDurationToMinutes(moduules.module_duration);
    }
    console.log(moduules.length);
    CourseOverview = {
      title: courseData.course_title,
      description: courseData.course_description,
      language: courseData.course_language,
      modules: moduules.length,
    };
  }
  // console.log(video.)
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

  return (
    <div className="bg-[#F5F5F5]">
      <div className={`md:mx-2 mt-3 ${fullScreen ? "" : "md:flex md:gap-3"}`}>
        <div className={`${fullScreen ? "" : "md:flex-1"}`}>
          <Video fullScreen={fullScreen} handleFullScreen={handleFullScreen} />
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
                } ${fullScreen ? "block" : "hidden"}`}
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
          {showCourseContent === "OverView" && <OverView />}
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
                <CourseContent />
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
            <CourseContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;

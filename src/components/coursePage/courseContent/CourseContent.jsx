import React, { useState, useEffect } from "react";
import { LuPlayCircle } from "react-icons/lu";

const CourseContent = ({ modules, watchVideo, courseClick }) => {
  const [videoProgress, setVideoProgress] = useState({});
  const [openCourseIndices, setOpenCourseIndices] = useState([]);

  useEffect(() => {
    // Load video-watching progress from local storage
    const progressData = {};
    modules.forEach((module, mainIndex) => {
      module.video.forEach((video) => {
        const progressKey = `videoProgress_${mainIndex}_${video._id}`;
        const progress = localStorage.getItem(progressKey);
        if (progress === "watched") {
          progressData[progressKey] = true;
        }
      });
    });
    setVideoProgress(progressData);
  }, [modules]);

  const handleToggleCourseContent = (index) => {
    // Use setOpenCourseIndices to toggle module open/close
    if (openCourseIndices.includes(index)) {
      setOpenCourseIndices(openCourseIndices.filter((i) => i !== index));
    } else {
      setOpenCourseIndices([...openCourseIndices, index]);
    }
    console.log(index);
  };

  function MakeCheck(index) {
    return watchVideo.includes(index);
  }

  return (
    <ul className="bg-white w-full">
      {modules.map((item, mainIndex) => {
        return (
          <li key={item._id}>
            <div>
              <div className="text-lg font-bold w-full items-center flex gap-2 justify-between border-2 p-4">
                <div className="flex gap-2 font-bold items-center">
                  <h3 className="text-base">{mainIndex + 1.0}</h3>
                  <h3>{item.module_title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => handleToggleCourseContent(mainIndex)} // Call the toggle function
                >
                  {openCourseIndices.includes(mainIndex) ? ( // Check if the module is open
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 inline-block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 inline-block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <ul>
                {item.video.map((video) => (
                  <li
                    key={mainIndex}
                    className={`${
                      openCourseIndices.includes(mainIndex) ? "hidden" : "flex"
                    } flex-col p-5 gap-5 ml-4`}
                  >
                    <button
                      type="button"
                      className="flex flex-col"
                      onClick={() => courseClick(mainIndex)}
                    >
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          name="Done"
                          checked={MakeCheck(mainIndex)}
                          onChange={() =>
                            markVideoAsWatched(mainIndex, video._id)
                          }
                        />
                        <h2 className="text-sm text-left">{video.originalname}</h2>
                      </div>
                    </button>
                    <div className="flex gap-2 items-center">
                      <LuPlayCircle size={20} />
                      <h2>Modules {mainIndex} Quiz</h2>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CourseContent;

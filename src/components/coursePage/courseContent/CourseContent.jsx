import React, { useState, useEffect } from "react";
import { LuPlayCircle } from "react-icons/lu";

const CourseContent = ({ modules, watchVideo, courseClick, markVideoAsWatched }) => {
  const [openCourseIndices, setOpenCourseIndices] = useState([]);

  const handleToggleCourseContent = (index) => {
    if (openCourseIndices.includes(index)) {
      setOpenCourseIndices(openCourseIndices.filter((i) => i !== index));
    } else {
      setOpenCourseIndices([...openCourseIndices, index]);
    }
  }

  function MakeCheck(mainIndex) {
    return watchVideo && watchVideo.includes(mainIndex);
  }

  return (
    <ul className="bg-white w-full">
      {modules.map((item, mainIndex) => {
        return (
          <li key={mainIndex}>
            <div>
              <div className="text-lg font-bold w-full items-center flex gap-2 justify-between border-2 p-4">
                <div className="flex gap-2 font-bold items-center">
                  <h3 className="text-base">{mainIndex + 1.0}</h3>
                  <h3>{item.module_title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => handleToggleCourseContent(mainIndex)}
                >
                  {openCourseIndices.includes(mainIndex) ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 inline-block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 inline-block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
              </div>
              <ul>
                {item.video.map((video, index) => (
                  <li
                    key={index}
                    className={`${
                      openCourseIndices.includes(mainIndex) ? "hidden" : "flex"
                    } flex-col p-5 gap-5 ml-4`}
                  >
                    <button
                      type="button"
                      className="flex flex-col"
                      onClick={() => courseClick(mainIndex)}
                    >
                      <div className="flex gap-2 items-center">
                        <input
                          type="checkbox"
                          name="Done"
                          className="w-6 h-3"
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

import React, { useState } from 'react';

const CourseContent = () => {
  const [openCourseIndices, setOpenCourseIndices] = useState([]);

  const courseContent = [
    {
      "Introduction to UI UX. A Introduction design": {
        "why Learning UI/UX is a superPower 100%": "5:56",
        "Lets learn the design principle": "7:00",
        "Draw those frames and fix your margin": "3:56"
      }
    },
    {
      "Introduction to UI UX. A Introduction design": {
        "why Learning UI/UX is a superPower 100%": "5:56",
        "Lets learn the design principle": "7:00",
        "Draw those frames and fix your margin": "3:56"
      }
    },
    {
      "Introduction to UI UX. A complete design": {
        "why Learning UI/UX is a superPower 100%": "5:56",
        "Lets learn the design principle": "7:00",
        "Draw those frames and fix your margin": "3:56"
      }
    }
  ];

  const handleToggleCourseContent = (index) => {
    if (openCourseIndices.includes(index)) {
      setOpenCourseIndices(openCourseIndices.filter((i) => i !== index));
    } else {
      setOpenCourseIndices([...openCourseIndices, index]);
    }
  };

  return (
    <ul className="bg-white">
      {courseContent.map((item, mainIndex) => {
        const courseTitle = Object.keys(item)[0];
        const isCourseOpen = openCourseIndices.includes(mainIndex);

        return (
          <li key={mainIndex}>
            <div>
              <div className="text-lg font-bold w-full items-center flex gap-2 justify-between border-2 p-4">
                <div className="flex gap-2 font-bold items-center">
                  <h3 className="text-base ">{mainIndex + 1.0}</h3>
                  <h3 className="">{courseTitle}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    handleToggleCourseContent(mainIndex);
                  }}
                >
                  {isCourseOpen ? (
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
              {isCourseOpen && (
                <div>
                  {Object.keys(item[courseTitle]).map((key, index) => (
                    <div
                      key={index}
                      className={`flex justify-between p-4 ${
                        index === Object.keys(item[courseTitle]).length - 1
                          ? ''
                          : 'border-b-2'
                      }`}
                    >
                      <div className="flex gap-2">
                        <input type="checkbox" name="DOne" />
                        <div>{index + 1}. {key}</div>
                      </div>
                      <div>{item[courseTitle][key]}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CourseContent;

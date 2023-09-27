import React, { useState } from 'react'

const CourseContent = () => {
  const [showCourseContent, setShowCourseContent] = useState(false);
  const courseContent = [
    {
      "Introduction to UI UX. A Introduction design": {
        "why Learning UI/UX is a superPower 100%": "5:56",
        "Lets learn the design principle": "7:00",
        "Draw those frames and fix your margin": "3:56"
      }
    }, {
      "Introduction to UI UX. A complete design": {
        "why Learning UI/UX is a superPower 100%": "5:56",
        "Lets learn the design principle": "7:00",
        "Draw those frames and fix your margin": "3:56"
      }
    }
  ]
  return (
    <ul className="bg-white">
      {courseContent.map((item, mainIndex) => {
        return (
          <li key={mainIndex}>
            {Object.keys(item).map((key, index) => {
              return (
                <div key={index}>
                  <div >
                    <div className="text-xl font-bold flex gap-1">
                      <h3>{mainIndex + 1.0}</h3>
                      <h3>{key}</h3></div>
                    </div>
                  {showCourseContent && 
                     Object.keys(item[key]).map((key, index) => {
                      return (
                        <div key={index} className="flex justify-between">
                          <div>{key}</div>
                          <div>{item[key]}</div>
                        </div>
                      )
                    })
                  }
                </div>
              )
            })}
          </li>
        )
      })}
    </ul>
  )
}
export default CourseContent
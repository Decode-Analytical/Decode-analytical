// import React from 'react'

// import PremiumHero from '../../components/coursesComponents/premium/PremiumHero'
// import CourseOverview from '../../components/coursesComponents/premium/CourseOverview'
// import WhatToLearn from '../../components/coursesComponents/premium/WhatToLearn'
// import AlsoLike from '../../components/coursesComponents/premium/AlsoLike'

// import { useLocation } from 'react-router-dom';

// export default function premiumCourses() {
//   const location = useLocation();
//   // const { course_title, course_description, course_image } = location.state;
//   const courseData = location.state;
//   return (
//     <>
//         <PremiumHero
//          course_title={courseData.course_title}
//          course_image={courseData.course_image}
//          isPaid_course={courseData.isPaid_course}
//          isPrice_course={courseData.isPrice_course}
//          />

//         <CourseOverview
//           course_description={courseData.course_description}
//           modules= {courseData.modules || []}
//         />

//         <WhatToLearn />
//         <AlsoLike />
//     </>
//   )
// }

// CourseDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGI1NmVmMzUxZTgzNGM1NmI4ZTg1MDkiLCJpYXQiOjE3MTU2MDk0ODUsImV4cCI6MTcxNTY5NTg4NX0.h_QWfMvfjZ8Gn8J98Z7ggiH_zkl6PNmIIftcdo0bvUs";
const API_URL = "http://localhost:3980/api/course/getCoursesById/";
function CourseDetail() {
  const [course, setCourse] = useState(null);
  const { _id } = useParams();

  useEffect(() => {
    const fetchCourseById = async () => {
      try {
        const response = await fetch(`${API_URL}${_id}`);

        if (response.ok) {
          const data = await response.json();
          setCourse(data.course);
        } else {
          console.error("Failed to fetch courses:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourseById();
  }, [_id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      {/* Render other course details */}
    </div>
  );
}

export default CourseDetail;

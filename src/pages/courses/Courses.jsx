import React, {useEffect, useState} from 'react';
import CourseHero from '../../components/CourseHero/Coursehero';
import CoursesCard from '../../components/CourseHero/CoursesCard';
import pattern from '../../assets/courses Images/Courses.jpeg';
import FreeCourses from '../../components/CourseHero/FreeCourses';
import course1 from '../../assets/courses Images/no_curve_analytics.jpeg';
import course2 from '../../assets/courses Images/2.jpeg';
import course3 from '../../assets/courses Images/3.jpeg';

const url = "https://decode-mnjh.onrender.com/api/student/studentViewCourse/652ead8ac5206982e7affb93"
export default function Courses() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(url,  {
      method: 'GET',
      headers: {
          'Authorization': 'Bearer '
      }
    })
      const data = await response.json()
      setRes(data);
    }

    getData()
    console.log(res)
  
  }, [])
  
  const courseDetails = {
    courses: [
      {
        "modules": [],
        "_id": "64d3968ea60416ae4ac31eda",
        "userId": "64b56ef351e834c56b8e8509",
        "title": "Flutter Development",
        "description": "Building Mobile and Web Applications with Flutter",
        "nameOfSubject": [],
        "price": 90000,
        "comments": [],
        "likeAndDislikeUsers": [],
        "comment_count": 0,
        "like_count": 0,
        "dislike_count": 0,
        "createdAt": "2023-08-09T13:37:18.111Z",
        "updatedAt": "2023-08-09T13:37:18.111Z"
      },
      {
        "modules": [],
        "_id": "64d3f4d3dc0f8df156fed343",
        "userId": "64b56ef351e834c56b8e8509",
        "title": "Data Engineerings",
        "description": "Data",
        "nameOfSubject": [],
        "price": 20000,
        "comments": [],
        "likeAndDislikeUsers": [],
        "comment_count": 0,
        "like_count": 0,
        "dislike_count": 0,
        "createdAt": "2023-08-09T20:19:31.854Z",
        "updatedAt": "2023-08-09T20:19:31.854Z"
      },
      {
        "modules": [],
        "_id": "64d3fcc224b3d0dc4b87047d",
        "userId": "64b56ef351e834c56b8e8509",
        "title": "Node Js",
        "description": "This course allows you to get started with backend engineering",
        "nameOfSubject": [],
        "price": 20000,
        "comments": [],
        "likeAndDislikeUsers": [],
        "comment_count": 0,
        "like_count": 0,
        "dislike_count": 0,
        "createdAt": "2023-08-09T20:53:22.665Z",
        "updatedAt": "2023-08-09T20:53:22.665Z"
      }
    ]
  }
    return (
      <>
      <div className='mx-auto font-montserrat z-10'>
          <CourseHero />
          <section className="mx-auto items-center grid grid-cols-1 pt-20 pb-14 overflow-hidden md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-center ml-11">
          {courseDetails.courses.map((details, index) => {
            return <CoursesCard key={index + 1} {...details} />;
          })}
          <br />
          <br />
        </section>
        <div className='text-center items-center p-3'>
        <button className='p-[1rem] rounded-md border-[2px] font-bold'>View More Courses</button>
        </div>
        <section className='cart-bg px-[5%] pt-20 h-64 my-20 font-montserrat'>
             {/*  BACKGROUND IMAGE IMPORTED FROM APP.CSS */}
             
                    <p className="text-white text-4xl md:text-6xl">
                       Try Free Courses
                    </p>
        {/* <section className="mx-auto items-center grid grid-cols-1 pt-10 pb-14 overflow-hidden md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-center ml-11">
        <pre>{JSON.stringify(res, null, 2)}</pre>
        {freeCourses.map((details, index) => {
            return <FreeCourses key={index + 1} {...details} />;
          })}
        </section> */}
        </section>
        </div>
      </>
    )
  }
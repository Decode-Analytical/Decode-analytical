import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import CourseHero from '../../components/CourseHero/Coursehero';
import CoursesCard from '../../components/CourseHero/CoursesCard';

const courseURL = 'https://decode-mnjh.onrender.com/api/course/viewAllCourses';
const apiKey = import.meta.env.VITE_ACCESS_TOKEN;
const token = apiKey;

export default function Courses() {
  const [courses, setCourses] = useState([]); 

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(courseURL, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        const data = await response.json();
        console.log(data.courses)


        if (data.courses) {
          setCourses(data.courses);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCourses();
  }, [token]);

  return (
    <>
      <section className='mx-auto font-montserrat z-10'>
        <CourseHero />
        <div className="mx-auto items-center grid grid-cols-1 pt-20 pb-14 overflow-hidden md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-center">
          {courses.map((details, index) => { // Use the 'courses' state here
            return <CoursesCard key={index + 1} {...details} />;
          })}
          <br />
          <br />
        </div>
        <div className='text-center items-center p-3'>
          <button className='p-[1rem] rounded-md border-[2px] font-bold'>View More Courses</button>
        </div>

        
        <section className='cart-bg px-[5%] pt-20 h-64 my-20 font-montserrat'>
          <p className="text-white text-4xl md:text-6xl">Try Free Courses</p>
          {/* Add code for free courses here */}
        </section>
      </section>
    </>
  );
}

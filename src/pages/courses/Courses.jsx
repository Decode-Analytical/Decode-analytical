import React, { useEffect, useState, useContext } from 'react';
import Axios from 'axios';
import CoursesCard from '../../components/CourseHero/CoursesCard';

const courseURL = 'https://server-eight-beige.vercel.app/api/course/viewAllCourses';

import { AuthContext } from '../../context/AuthContext';


export default function Courses() {
  const { token } = useContext(AuthContext);

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
          {courses.length === 0 ? (
            <div className="text-center font-montserrat font-bold text-3xl mx-auto mt-[4rem]">
            <h3>No Courses To Show</h3>
          </div>
          ):(
        <div className="mx-auto items-center grid grid-cols-1 pt-20 pb-14 overflow-hidden md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-center">
            
        {courses.map((details, index) => { // Use the 'courses' state here
            return <CoursesCard key={index + 1} {...details} />;
          })}
          <br />
          <br />
        </div>
          )}
        {/* <div className='text-center items-center p-3'>
          <button className='p-[1rem] rounded-md border-[2px] font-bold'>View More Courses</button>
        </div> */}

        
        {/* <section className='cart-bg px-[5%] pt-20 h-64 my-20 font-montserrat'>
          <p className="text-white text-4xl md:text-6xl">Try Free Courses</p>
          Add code for free courses here
        </section> */}
      </section>
    </>
  );
}

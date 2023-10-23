import React, {useEffect, useState} from 'react';
import CourseHero from '../../components/CourseHero/Coursehero';
import CoursesCard from '../../components/CourseHero/CoursesCard';
import pattern from '../../assets/courses Images/Courses.jpeg';
import FreeCourses from '../../components/CourseHero/FreeCourses';
import course1 from '../../assets/courses Images/no_curve_analytics.jpeg';
import course2 from '../../assets/courses Images/2.jpeg';
import course3 from '../../assets/courses Images/3.jpeg';

const url = "https://decode-mnjh.onrender.com/api/course/viewAllCourses"
export default function Courses() {
  const [res, setRes] = useState([]);
  async function getData() {
    const response = await fetch(url,  {
    method: 'GET',
    headers: {
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM0Y2Y1N2ZjNGFkZTY2NDUwN2IwYWMiLCJpYXQiOjE2OTgwNTY1NTMsImV4cCI6MTY5ODE0Mjk1M30.5iKusBIwW5vF50h0I5K0J9YGlZDubboL--YhUhE2noI"
    }
  })
  const data = await response.json();
  setRes(data.courses);
  }

  useEffect(() => {

    getData()
  
  }, [])
    return (
      <>
      <div className='mx-auto font-montserrat z-10'>
          <CourseHero />
          <section className="mx-auto items-center grid grid-cols-1 pt-20 pb-14 overflow-hidden md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-center ml-11">
          {res.map((details, index) => {
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
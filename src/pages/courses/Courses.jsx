import React, {useEffect, useState} from 'react';
import CourseHero from '../../components/CourseHero/Coursehero';
import CoursesCard from '../../components/CourseHero/CoursesCard';



const url = "https://decode-mnjh.onrender.com/api/course/viewAllCourses"
export default function Courses() {
  const [res, setRes] = useState([]);
  async function getData() {
    const response = await fetch(url,  {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
    }
  })
  const data = await response.json();
  setRes(data.courses);
  }

  // async function getCourses() {
  //   const response = await fetch("https://decode-mnjh.onrender.com/api/course/viewAllCourses?isPaid_course=paid",  {
  //   method: 'GET',
  //   headers: {
  //       'Authorization': `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
  //   }
  // })
  // const data = await response.json();
  // setRes(data.courses);
  // }

  useEffect(() => {
    
    getData();
  
  }, [])
    return (
      <>
      <div className='mx-auto font-montserrat z-10'>
          <CourseHero />
          <section className="mx-auto items-center grid grid-cols-1 pt-20 pb-14 overflow-hidden md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-center">
          {res.map((details, index) => {
              return <CoursesCard key={index + 1} {...details} />;
          })}
          <br />
          <br />
        </section>
        
        {/* <button onClick={() => getCourses()}>Get Free Courses</button> */}
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
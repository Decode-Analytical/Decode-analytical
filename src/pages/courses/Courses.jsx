import React from 'react';
import CourseHero from '../../components/CourseHero/Coursehero';
import CoursesCard from '../../components/CourseHero/CoursesCard';
import pattern from '../../assets/courses Images/Courses.jpeg'

export default function Courses() {
  const courseDetails = [
    {
      image: pattern,
      title: "Graphics Design",
  level: "Beginner",
  time: "2hrs 30m",
  priceBefore: "45000",
  priceNow: "15000"
    },
    {
      image: pattern,
      title: "Graphics Design",
  level: "Beginner",
  time: "2hrs 30m",
  priceBefore: "45000",
  priceNow: "15000"
    }, {
      image: pattern,
      title: "Graphics Design",
  level: "Beginner",
  time: "2hrs 30m",
  priceBefore: "45000",
  priceNow: "15000"
    },
    {
      image: pattern,
      title: "Graphics Design",
  level: "Beginner",
  time: "2hrs 30m",
  priceBefore: "45000",
  priceNow: "15000"
    },
    {
      image: pattern,
      title: "Graphics Design",
  level: "Beginner",
  time: "2hrs 30m",
  priceBefore: "45000",
  priceNow: "15000"
    },
    {
      image: pattern,
      title: "Graphics Design",
  level: "Beginner",
  time: "2hrs 30m",
  priceBefore: "45000",
  priceNow: "15000"
    }
  ]
    return (
      <>
      <div className='mx-auto font-montserrat z-10'>
          <CourseHero />
          <section className="mx-auto items-center grid grid-cols-1 pt-20 pb-14 overflow-hidden md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-center ml-11">
          {courseDetails.map((details, index) => {
            return <CoursesCard key={index + 1} {...details} />;
          })}
          <br />
          <br />
        </section>
        <div className='text-center items-center p-3'>
        <button className='p-[1rem] rounded-md border-[2px] font-bold'>View More Courses</button>
        </div>
        </div>
      </>
    )
  }
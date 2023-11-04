import React from 'react'
import Courses from './Courses'
import { Link } from 'react-router-dom'

export default function Course() {
  return (
    <section className="py-14 bg px-[10%] text-[20px] text-center">
    <h5 className="font-bold text-[24px] text-white py-4 ">
      EXPLORE COURSES
    </h5>
    <p className="text-amber-400 bigFont">
      Empower Your Journey: Invest in Knowledge Today!
    </p>
    <p className="mb-10 text-white text-lg center py-4">
      We promise to embark you on a transformative career journey in tech
      with our comprehensive courses. Acquire cutting-edge skills, open
      doors to innovation, and shape a thriving future in the tech
      industry.
    </p>
    <Courses />

    {/* // This button links to coursepage */}
<<<<<<< HEAD
    <Link to=""><button className="text-sm hover:text-purple-600 hover:bg-zinc-200 bg-white border border-purple-950 mt-5 p-1">
      View all courses
    </button></Link>
=======
    
>>>>>>> AdminHomePage
  </section>
  )
}

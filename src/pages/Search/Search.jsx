import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CoursesCard from "../../components/CourseHero/CoursesCard";
import CourseHero from "../../components/CourseHero/Coursehero";

export default function Search() {
    let { term } = useParams();
    console.log(term)
    const [courses, setCourse] = useState([])
    useEffect(() => {
        const res = async () => {
        try {
            const response = await fetch(`https://decode-mnjh.onrender.com/api/course/search/${term}`, {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
                }
            })
            let data = await response.json()
            console.log("Courses: ", data)
            if(data.course) {
                setCourse(data.course)
            }
        } catch(e) {
            console.error(e)
        }
    }
    res()
    }, []);
    return (
        <>
        <section className="z-10 cart-bg p-[3rem] lg:p-[8rem] text-white bg-cover w-100% font-montserrat whitespace-break-spaces">
        <h1 className="font-extrabold text-6xl pb-11">Courses</h1>
        <p className="text-2xl">Empower Your Digital Journey With Us</p>
        <div className="flex text-center left-[20px] text-black mt-4 max-w-[50rem]">
          <div className="dropdown relative inline-block">
            <button className="addbtn bg-white p-[20px] rounded-s-md ">
              All
            </button>
            <div className="dropdown-content hidden absolute bg-[#f1f1f1] min-w-[160px] shadow-md z-10">
              <a
                className="text-black px-[12px] py-[16px] no-underline block hover:bg-[#ddd]"
                href="#"
              >
                Category 1
              </a>
              <a
                className="text-black px-[12px] py-[16px] no-underline block hover:bg-[#ddd]"
                href="#"
              >
                Category 2
              </a>
              <a
                className="text-black px-[12px] py-[16px] no-underline block hover:bg-[#ddd]"
                href="#"
              >
                Category 3
              </a>
            </div>
          </div>
          <form onSubmit={(e) => {e.preventDefault(); location.href = `/Search/${searchItem}`}} className="w-full">
          <input
            placeholder="Search All Courses"
            onChange={e => {setTerm(e.target.value)}}
            className="bg-white p-[20px] w-full outline-none border-none"
          />
          </form>
        </div>
        <div className="flex justify-start gap-3 py-[2rem] text-black">
          <Link to = '/freeCourses'>
            <button className="p-[10px] px-[20px] rounded-full bg-white">Free</button>
          </Link>

          <Link to = '/premiumCourses'>
            <button className="p-[10px] px-[20px] rounded-full bg-white">Premium</button>
          </Link>
          
          <Link to=''>
            <button className="p-[10px] rounded-full bg-white">All Courses</button>
          </Link>
        </div>
      </section>
      <h5 className="p-[2rem] text-right">
          Showing results for: <span className="font-bold">{term}</span>
        </h5>
        <div className="mx-auto items-center grid grid-cols-1 pt-20 pb-14 overflow-hidden md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-center">
      {courses.map((details, index) => { // Use the 'courses' state here
            return <CoursesCard key={index + 1} {...details} />;
          })}
          <br />
          <br />
        </div>
        </>
    )
}
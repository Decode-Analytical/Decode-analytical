import React from "react";

import { Link } from "react-router-dom";

export default function CourseHero() {
  let searchItem = "Graphics Design";
  return (
    <>
      <section className="z-10 cart-bg p-[3rem] lg:p-[8rem] text-white bg-cover w-100% font-montserrat whitespace-break-spaces">
        <h1 className="font-extrabold text-6xl pb-11">Courses</h1>
        <p className="text-2xl">Empower Your Digital Journey With Us</p>
        <div className="flex text-center left-[20px] text-black mt-4 max-w-[50rem] rounded-md">
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
          <input
            placeholder="Search All Courses"
            className="bg-white p-[20px] w-full outline-none rounded-e-md border-none"
          />
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
      <section className="course-items font-montserrat">
        <h5 className="p-[2rem] text-right">
          Showing results for: <span className="font-bold">{searchItem}</span>
        </h5>
        <div className="mx-auto px-[2rem]">
          <h2 className="font-extrabold text-5xl p-[2rem]">
            Find Trending Courses
          </h2>
          <p className="font-normal px-[2rem]">
            Break into tech with any of the courses we have specially created
            for you
          </p>
        </div>
      </section>
    </>
  );
}

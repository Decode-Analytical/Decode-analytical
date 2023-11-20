import React from "react";
import "../courseCard/card.css";
import { BsClockHistory } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { Link } from 'react-router-dom'
import Ellipse from "../../assets/courses Images/Ellipse.png";
const searchTerm = '';
const courseURL = 'https://decode-mnjh.onrender.com/api/course/viewAllCourses';
const apiKey = import.meta.env.VITE_ACCESS_TOKEN;
const token = apiKey;
export default function CoursesCard(props) {
  let stars = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z"
        fill="#FFD748"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z"
        fill="#FFD748"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z"
        fill="#FFD748"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z"
        fill="#FFD748"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z"
        fill="#FFD748"
      />
    </svg>,
  ];
  const {
    course_title,
    course_image,
    course_description,
    time,
    isPrice_course,
    isPaid_course,
    _id
  } = props;
  return (
    <div className="w-full p-4">
      <div className="max-w-[50rem] w-[20rem] max-h-[50rem] md:w-[20rem] lg:w-[25rem] bg-white p-4 rounded-3xl overflow-hidden border-[2px] border-neutral-400 mx-auto h-[35rem]">
        <div className="relative">
          <img
            className="w-[100%] object-center rounded-xl rounded-b-none absolute -z-1"
            src={course_image[0].path}
            alt={course_title}
          />
        </div>
        <div className="flex flex-col items-start justify-end h-full relative z-10 ">
          <div className="bg-white w-full mb-[1rem] p-2">
            <div className="font-bold text-xl mb-3 ">{course_title}</div>
            <div className="font-normal mb-1 ">{course_description}</div>
            <div className="flex py-3">
              <img src={Ellipse} alt="" />
              &nbsp; <span className="py-1 pr-2">By: Mac Kinglsey</span>
            </div>
            <p className="flex pt-[1rem]">
              {/* STARS FOR RATINGS WILL BE HERE */}
              {stars.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
              <p>&nbsp;5.0</p>
            </p>

            <div className=" flex justify-between py-[1rem]">
              <p className=" flex items-center">
                <BsClockHistory />
                &nbsp;2hrs 30m
              </p>
              <p className=" flex space-x-2 items-center">
                <BsGraphUpArrow /> <span>beginner</span>
              </p>
            </div>
            {isPaid_course === "free" ? (
              <div className=" flex justify-between">
                <a
                  href={`/premiumCourses/${_id}`}
                  className="text-blue-900 font-bold px-2 mr-5 py-2 rounded-md"
                >
                  View Course {">"}
                </a>
                <p className=" px-5 mr-5 py-2">FREE</p>
              </div>
            ) : (
              <div className=" flex justify-between">
                <button className=" border-[2px] border-black hover:bg-gray-400 px-5 mr-5 py-2 rounded-md">
                <a
                  href={`/PremiumCourses/${_id}`}
                  className="text-blue-900 font-bold px-2 mr-5 py-2 rounded-md"
                >
                  {isPrice_course}
                  </a>
                </button>
                <p className=" line-through px-5 mr-5 py-2">100,000 NGN</p>
              </div>
            )}
                  {/* <div className=" flex justify-between py-[1rem]">
                    <p className=" flex items-center">
                        <BsClockHistory />&nbsp;2hrs 30m
                    </p>
                    <p className=" flex space-x-2 items-center">
                      <BsGraphUpArrow /> <span>beginner</span> 
                    </p>
                  </div> */}

                  {/* {isPrice_course === 0 ? (
                    <Link
                    to={`/premiumCourses/${_id}`}
                    state = {{
                      course_title,
                      course_description,
                      course_image,
                      // Include other properties as needed
                    }}
                    className="border-[2px] border-black hover.bg-gray-400 px-5 py-2 rounded-md">
                    Free
                  </Link>
                  ) : (
                    <div className=" flex justify-between">
                      <button className="border-[2px] border-black hover:bg-gray-400 px-5 mr-5 py-2 rounded-md">
                        Price: {isPrice_course} NGN
                      </button>
                    </div>
                  )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
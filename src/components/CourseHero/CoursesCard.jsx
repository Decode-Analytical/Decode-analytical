import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


import '../courseCard/card.css';
import {BsClockHistory} from "react-icons/bs";
import {BsGraphUpArrow} from "react-icons/bs";
import Ellipse from "../../assets/courses Images/Ellipse.png";

const courseURL = 'https://decode-mnjh.onrender.com/api/course/viewAllCourses';
const apiKey = import.meta.env.VITE_API_KEY;
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
    const { course_title, course_description, course_image, isPrice_course, _id} = props

    const [courses, setCourses] = useState([]); 

    useEffect(() => {
      const fetchCourses = async () => {
        try {
          const response = await axios.get(courseURL, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          if (response.data && response.data.courses) {
            setCourses(response.data.courses);
            console.log(response.data);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchCourses();
    }, [token]);
    return (
      <div className="w-full p-4">
        <div className="max-w-[25rem] bg-white p-4 rounded-3xl overflow-hidden border-[2px] border-neutral-400 mx-auto h-[30rem]">
          <div className='relative'>
          <img className="w-full max-h-[19rem] object-cover rounded-xl rounded-b-none absolute -z-1" src={course_image[0].path} alt={course_title} />
          </div>
          <div className="flex flex-col items-start justify-end h-full relative z-10 ">
            <div className='bg-white w-full mb-[1rem]'>
              <div className="font-bold text-xl mb-1 py-[10px]">{course_title}</div>
                <div className="font-normal mb-1 py-[10px]">{course_description}</div>
                  <div className='flex'>
                    <img src={Ellipse} alt="" />&nbsp; <span className='py-1 pr-2'>By: Mac Kinglsey</span>
                  </div>
                  <div className="flex pt-[1rem]">
                    {/* STARS FOR RATINGS WILL BE HERE */}
                    {stars.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                    <p>&nbsp;5.0</p>
                  </div>

                  <div className=" flex justify-between py-[1rem]">
                    <p className=" flex items-center">
                        <BsClockHistory />&nbsp;2hrs 30m
                    </p>
                    <p className=" flex space-x-2 items-center">
                      <BsGraphUpArrow /> <span>beginner</span> 
                    </p>
                  </div>

                  {isPrice_course === 0 ? (
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
                        Price: {courses.isPrice_course} NGN
                      </button>
                    </div>
                  )}
          </div>
        </div>
      </div>
    </div>
    )
}
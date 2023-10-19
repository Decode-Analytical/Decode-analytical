import React from 'react'
import pattern from '../../assets/courses Images/pattern.png'
import Ellipse from '../../assets/courses Images/Ellipse.png'
import coursebg from '../../assets/courses Images/no_curve_analytics.jpeg';
import course2 from '../../assets/courses Images/2.jpeg'
import course3 from '../../assets/courses Images/3.jpeg'
import CoursesCard from './CoursesCard';
import {BsClockHistory} from "react-icons/bs"
import {BsGraphUpArrow} from "react-icons/bs"

  
export default function CartDetails(props) {
  const { title, level, time, image } = props
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
  </svg>
  ]
   
  return (
    <>
       
                {/* Just For Development Purposes, Real Values would be iterated over*/}
                
                <div className="w-full p-4">
      <div className="max-w-[25rem] bg-white p-4 rounded-3xl overflow-hidden border-[2px] border-neutral-400 mx-auto h-[30rem]">
        <div className='relative'>
        <img className="w-full max-h-[19rem] object-cover rounded-xl rounded-b-none absolute -z-1" src={image} alt="Graphics Design" />
        </div>
        <div className="flex flex-col items-start justify-end h-full relative z-10 ">
          <div className='bg-white w-full mb-[1rem]'>
          <div className="font-bold text-xl mb-2 py-[20px]">{title}</div>
          <div className='flex'>
                            <img src={Ellipse} alt="" />&nbsp; <span className='py-1 pr-2'>By: Mac Kinglsey</span>
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
                                    <BsClockHistory />&nbsp;{time}
                                </p>
                                <p className=" flex space-x-2 items-center">
                                    <BsGraphUpArrow /> <span>{level}</span> 
                                </p>
                            </div>

                            <div className=" flex justify-between">
                                <a href="#" className="text-blue-900 font-bold px-2 mr-5 py-2 rounded-md">
                                    View Course {">"}
                                </a>
                                <p className=" px-5 mr-5 py-2">
                                    FREE
                                </p>
                            </div>
                        
    
          </div>
        </div>
      </div>
      
    </div>
        
   
          
          
          
    </>
  )
}

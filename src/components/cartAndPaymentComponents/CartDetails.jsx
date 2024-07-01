import React from 'react'
import pattern from '../../assets/courses Images/pattern.png'
import Ellipse from '../../assets/courses Images/Ellipse.png'
import {BsClockHistory} from "react-icons/bs"
import {BsGraphUpArrow} from "react-icons/bs"

export default function CartDetails() {
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
  return (
    <>
        <section>
            <div className=" px-[5%] pt-20 cart-bg h-64 my-20 font-montserrat"> {/*  BACKGROUND IMAGE IMPORTED FROM APP.CSS */}
                <div className=" text-white">
                    <p className=" text-4xl md:text-6xl mb-10">
                        You may also be  <span className=" text-[#FFCD05]"> interested </span> in
                    </p>
                </div>   

                <div className=" md:flex justify-between">
                    <div className=" border-white border-[10px] rounded-md">
                        <img src={pattern} alt="" className='w-full' />    

                        <div className=" p-4 space-y-4">
                            <p className=" font-bold">
                                Data Analytics 
                            </p>
                            <div className='flex'>
                            <img src={Ellipse} alt="" />&nbsp; <span className='py-1'>By: Mac Kinglsey</span>
                            </div>
                            <p className="flex">
                                {/* STARS FOR RATINGS WILL BE HERE */}
                                {stars.map((item, index) => (
                                    <div key={index}>{item}</div>
                                ))}
                                <p>&nbsp;5.0</p>
                            </p>

                            <div className=" flex justify-between">
                                <p className=" flex items-center">
                                    <BsClockHistory />&nbsp;2hrs 30m
                                </p>
                                <p className=" flex space-x-2 items-center">
                                    <BsGraphUpArrow /> <span>beginner</span> 
                                </p>
                            </div>

                            <div className=" inline-flex">
                                <button className=" border-[2px] border-black hover:bg-gray-400 px-5 mr-5 py-2 rounded-md">
                                    15,000
                                </button>
                                <p className=" line-through px-5 mr-5 py-2">
                                    45,000 NGN
                                </p>
                            </div>
                        </div>
                    </div>    
                    <hr className="border mb-2"/>
                    {/* JUST FOR DEVELOPMENT PURPOSES, WILL BE CLEARED AND MAPPED THROUGH WHEN COURSES ARE AVAILABLE  */}

                    <div className=" border-white border-[10px] rounded-md">
                        <img src={pattern} alt=""  className='w-full'/>    

                        <div className=" p-4 space-y-4">
                            <p className=" font-bold">
                                Data Analytics 
                            </p>
                            <div className='flex'>
                            <img src={Ellipse} alt="" />&nbsp; <span className='py-1'>By: Mac Kinglsey</span>
                            </div>
                            <p className="flex">
                                {/* STARS FOR RATINGS WILL BE HERE */}
                                {stars.map((item, index) => (
                                    <div key={index}>{item}</div>
                                ))}
                                <p>&nbsp;5.0</p>
                            </p>

                            <div className=" flex justify-between">
                                <p className=" flex items-center">
                                    <BsClockHistory />&nbsp;2hrs 30m
                                </p>
                                <p className=" flex space-x-2 items-center">
                                    <BsGraphUpArrow /> <span>beginner</span> 
                                </p>
                            </div>

                            <div className=" inline-flex">
                                <button className=" border-[2px] border-black hover:bg-gray-400 px-5 mr-5 py-2 rounded-md">
                                    15,000
                                </button>
                                <p className=" line-through px-5 mr-5 py-2">
                                    45,000 NGN
                                </p>
                            </div>
                        </div>
                    </div>    
                    <hr className="border mb-2"/> 
                                 
                    <div className=" border-white border-[10px] rounded-lg">
                        <img src={pattern} alt="" className='w-full'/>    

                        <div className=" p-4 space-y-4">
                            <p className=" font-bold">
                                Data Analytics 
                            </p>
                            <div className='flex'>
                            <img src={Ellipse} alt="" />&nbsp; <span className='py-1'>By: Mac Kinglsey</span>
                            </div>
                            <p className="flex">
                                {/* STARS FOR RATINGS WILL BE HERE */}
                                {stars.map((item, index) => (
                                    <div key={index}>{item}</div>
                                ))}
                                <p>&nbsp;5.0</p>
                            </p>

                            <div className=" flex justify-between">
                                <p className=" flex items-center">
                                    <BsClockHistory />&nbsp;2hrs 30m
                                </p>
                                <p className=" flex space-x-2 items-center">
                                    <BsGraphUpArrow /> <span>beginner</span> 
                                </p>
                            </div>

                            <div className=" inline-flex">
                                <button className=" border-[2px] border-black hover:bg-gray-400 px-5 mr-5 py-2 rounded-md">
                                    15,000
                                </button>
                                <p className=" line-through px-5 mr-5 py-2">
                                    45,000 NGN
                                </p>
                            </div>
                        </div>
                    </div>    
                </div>          
            </div>
        </section>
    </>
  )
}

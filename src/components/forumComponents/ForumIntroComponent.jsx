import React from 'react'

import {BsArrowDownUp} from "react-icons/bs"
import {BsBoxArrowUpRight} from "react-icons/bs"
import Rectangle370 from '../../assets/forum imgs/Rectangle370.png'


export default function ForumIntroComponent() {
  return (
    <>
        <section className=' mx-[5%] md:flex justify-between my-20'>
            <div className=" min-w-[60%]">
              <div className=" flex justify-between">
                <input type="sesrch" placeholder='Search'  className='border border-gray-400 w-[90%] md:w-[95%] rounded-md p-1'/>

                <button className=' border border-gray-600 px-2 rounded-sm hover:bg-[#040E53] hover:text-white'>
                  <BsArrowDownUp />
                </button>
              </div>



                {/* EACH COURSES DISCUSSION FORUM */}
              <div className=" mt-10">
                <div className=" flex items-center shadow-lg py-2">
                  <img src={Rectangle370} alt="" className=' max-w-[150px]'/>

                  <div className=" ml-2">
                    <p className="">
                      Early Design and its Principles
                    </p>
                    <a href="" className=' text-blue-900 text-xs'>
                      Go to course discussion forum
                    </a>
                  </div>
                </div>


                  {/* CODES TO BE CLEARED AS IT IS JUST FOR DEVELOPMENT PURPOSE */}
                <div className=" flex items-center shadow-lg py-2 mt-10">
                  <img src={Rectangle370} alt="" className=' max-w-[150px]'/>

                  <div className=" ml-2">
                    <p className="">
                      Web Development and its Principles
                    </p>
                    <a href="" className=' text-blue-900 text-xs'>
                      Go to course discussion forum
                    </a>
                  </div>
                </div>

                <div className=" flex items-center shadow-lg py-2 mt-10">
                  <img src={Rectangle370} alt="" className=' max-w-[150px]'/>

                  <div className=" ml-2">
                    <p className="">
                      Early JavaScript and its Principles
                    </p>
                    <a href="" className=' text-blue-900 text-xs'>
                      Go to course discussion forum
                    </a>
                  </div>
                </div>

                <div className=" flex items-center shadow-lg py-2 mt-10">
                  <img src={Rectangle370} alt="" className=' max-w-[150px]'/>

                  <div className=" ml-2">
                    <p className="">
                      Ethical Hacking and its Principles
                    </p>
                    <a href="" className=' text-blue-900 text-xs'>
                      Go to course discussion forum
                    </a>
                  </div>
                </div>

                <div className=" flex items-center shadow-lg py-2 mt-10">
                  <img src={Rectangle370} alt="" className=' max-w-[150px]'/>

                  <div className=" ml-2">
                    <p className="">
                      Python Basics and its Principles
                    </p>
                    <a href="" className=' text-blue-900 text-xs'>
                      Go to course discussion forum
                    </a>
                  </div>
                </div>
              </div>
            </div>




                {/* ================================================= */}
            {/* THE DESCRIPTION DIV */}

            <div className=" md:max-w-[30%] shadow-lg space-y-10 mt-10 md:mt-0">
              <div className="space-y-4">
                <p className=" text-xl md:text-2xl">
                  Introduction
                </p>

                <p className=" text-sm">
                  Use this forum as a space to connect with your classmates
                </p>

                <a href="" className=" inline-flex items-center text-blue-900 text-xs">
                  Learn more about our forum
                  <span className=' ml-2 font-extrabold'>
                    <BsBoxArrowUpRight />
                  </span>
                </a>
              </div>

                    {/* <=====================================> */}
              <div className="space-y-4">
                <p className=" text-xl md:text-2xl">
                  Description
                </p>

                <p className=" text-sm">
                  Welcome to the forum! Ask questions, debate ideas, and find classmates who share your goals. Browse each course discussion forum and join other classmates in the thread to be an active participant.
                </p>

                <a href="" className=" inline-flex items-center text-blue-900 text-xs">
                  Forum regulations
                  <span className=' ml-2 font-extrabold'>
                    <BsBoxArrowUpRight />
                  </span>
                </a>
              </div>



                {/* <===============================================> */}
              <div className=" space-y-4">
                <p className=" text-xl md:text-2xl">
                  Frequently Asked Questions (FAQs)
                </p>

                <p className=" text-sm">
                  Welcome to the forum! Ask questions, debate ideas, and find classmates who share your goals. Browse each course discussion forum and join other classmates in the thread to be an active participant.
                </p>

                <a href="" className=" inline-flex items-center text-blue-900 text-xs">
                  Learn more about our forum
                  <span className=' ml-2 font-extrabold'>
                    <BsBoxArrowUpRight />
                  </span>
                </a>
              </div>
            </div>
        </section>
    </>
  )
}

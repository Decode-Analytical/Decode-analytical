import React from 'react'
import { Link } from 'react-router-dom'


import {BsClockHistory} from "react-icons/bs"
import {BsCart3} from "react-icons/bs"
import {BsStack} from "react-icons/bs"
import {BsFillPeopleFill} from "react-icons/bs"
import {BsAward} from "react-icons/bs"
import {BsFillRssFill} from "react-icons/bs"


export default function FreeHero() {
  return (
    <>
        <section>
            <div className=" mt-10 p-10 md:p-16 free-bg bg-cover bg-no-repeat bg-center md:h-[550px]"> {/*  BACKGROUND IMAGE IMPORTED FROM APP.CSS */}
                <div className=" md:max-w-[95%] m-auto">
                    <Link to='/premiumCourses'>
                        <button className=' bg-[#D9DBE5] rounded-xl px-4 md:mt-24'>
                            Premium
                        </button>
                    </Link>

                    <div className=" text-white text-3xl md:text-6xl font-bold mt-1 ">
                        Data Analytics
                    </div>

                    <div className=" text-white">
                        <div className=" mt-5 max-w-[485px] md:flex justify-between">
                            <p className=" flex items-center space-x-2">
                                <BsStack /> <span>14 Courses</span>
                            </p>

                            <p className="flex items-center space-x-2">
                                <BsClockHistory /> <span>2:50 hours to complete</span>
                            </p>
                        </div>

                        <div className=" mt-5 max-w-[500px] md:flex justify-between">
                            <p className="flex items-center space-x-2">
                                <BsFillRssFill /> <span>Learn online at your own pace</span>
                            </p>

                            <p className="flex items-center space-x-2">
                                <BsAward /> <span>Certificate of Completion</span>
                            </p>
                        </div>

                        <div className=" mt-5">
                            <p className="flex items-center space-x-2">
                                <BsFillPeopleFill /> <span>248  Students enrolled</span>
                            </p>

                            <button className=' px-2 mt-3 bg-yellow-500 text-black flex items-center'>
                                Add to Cart 
                                <div className=' ml-5'><BsCart3 /></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

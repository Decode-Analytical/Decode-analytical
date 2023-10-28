import React from 'react'
import { Link } from 'react-router-dom'

import {BsClockHistory} from "react-icons/bs"
import {BsStack} from "react-icons/bs"
import {BsFillPeopleFill} from "react-icons/bs"
import {BsAward} from "react-icons/bs"
import {BsFillRssFill} from "react-icons/bs"

export default async function PremiumHero() {
  return (
    <>
        <section>
            <div className="bg-img bg-cover bg-no-repeat bg-center  md:h-[550px] mt-10 p-10"> {/*  BACKGROUND IMAGE IMPORTED FROM APP.CSS */}
                <div className=" md:max-w-[95%] m-auto">
                    <Link to='/freeCourses'>
                        <button className=' bg-[#D9DBE5] rounded-xl px-6 md:mt-24'>
                            Free
                        </button>
                    </Link>

                    <div className=" text-white text-3xl md:text-6xl font-bold mt-1">
                        Data Analytics
                    </div>

                    <div className=" text-white">
                        <div className=" mt-5 max-w-[485px] md:flex justify-between">
                            <p className=" flex items-center space-x-2">
                                <BsStack /> <span>14 Courses</span>
                            </p>

                            <p className=" flex space-x-2 items-center">
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

                            <button className=' px-2 mt-3 bg-yellow-500 text-black'>
                                Enrol Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <img src={"https://picsum.photos/200/300"}/>
        </section>
    </>
  )
}

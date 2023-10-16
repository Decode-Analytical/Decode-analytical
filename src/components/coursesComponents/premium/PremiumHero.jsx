import React from 'react'
import { Link } from 'react-router-dom'

import {BsClockHistory} from "react-icons/bs"

export default function PremiumHero() {
  return (
    <>
        <section>
            <div className=" bg-img bg-cover bg-no-repeat bg-center  md:h-[550px] mt-10 p-10"> {/*  BACKGROUND IMAGE IMPORTED FROM APP.CSS */}
                <div className=" md:max-w-[70%] m-auto">
                    <Link to='/freeCourses'>
                        <button className=' bg-white rounded-xl px-2 md:mt-24'>
                            Free
                        </button>
                    </Link>

                    <div className=" text-white text-3xl md:text-6xl font-bold mt-1">
                        Data Analytics
                    </div>

                    <div className=" text-white">
                        <div className=" mt-5 max-w-[400px] md:flex justify-between">
                            <p className="">
                                14 Courses
                            </p>

                            <p className=" flex space-x-2 items-center">
                                <BsClockHistory /> <span>2:50 hours to complete</span>
                            </p>
                        </div>

                        <div className=" mt-5 max-w-[400px] md:flex justify-between">
                            <p className="">
                                Learn online at your own pace
                            </p>

                            <p className="">
                                Certificate of Completion
                            </p>
                        </div>

                        <div className=" mt-5">
                            <p className="">
                                248  Students enrolled
                            </p>

                            <button className=' px-2 mt-3 bg-yellow-500 text-black'>
                                Enrol Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

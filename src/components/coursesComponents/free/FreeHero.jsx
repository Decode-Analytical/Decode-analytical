import React from 'react'
import { Link } from 'react-router-dom'


import {BsClockHistory} from "react-icons/bs"
import {BsCart3} from "react-icons/bs"


export default function FreeHero() {
  return (
    <>
        <section>
            <div className=" mt-10 p-10 md:p-16 free-bg bg-cover bg-no-repeat bg-center md:h-[400px]">
                <div className=" md:max-w-[70%] m-auto">
                    <Link to='/premiumCourses'>
                        <button className=' bg-white rounded-xl px-2'>
                            Premium
                        </button>
                    </Link>

                    <div className=" text-white text-3xl mt-1">
                        Data Analytics
                    </div>

                    <div className=" text-white">
                        <div className=" mt-5 max-w-[400px] md:flex justify-between">
                            <p className="">
                                14 Courses
                            </p>

                            <p className="flex items-center space-x-2">
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

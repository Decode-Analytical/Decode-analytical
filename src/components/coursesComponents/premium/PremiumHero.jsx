import React from 'react'
import { Link } from 'react-router-dom'

export default function PremiumHero() {
  return (
    <>
        <section>
            <div className=" bg-img bg-cover bg-no-repeat bg-center  md:h-[400px] mt-10 p-10">
                <div className=" md:max-w-[70%] m-auto">
                    <Link to='/freeCourses'>
                        <button className=' bg-white rounded-xl px-2'>
                            Free
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

                            <p className="">
                                2:50 hours to complelte
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

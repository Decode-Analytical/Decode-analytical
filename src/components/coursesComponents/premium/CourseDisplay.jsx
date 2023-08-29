import React from 'react'

import buyCourse from '../../../assets/courses Images/buyCourse.png'
import buyCourse2 from '../../../assets/courses Images/buyCourse2.png'
import Ellipse from '../../../assets/courses Images/Ellipse.png'

export default function courseDisplay() {
  return (
    <>
        <section>
            <div className=" w-[90%] m-auto pb-20">
                <div className=" mt-10">
                    <p className="text-2xl font-bold">
                        Find trending courses
                    </p>

                    <p className="text-[.7rem] mt-2">
                        Break into tech with any of the courses we have specially created for you
                    </p>
                </div>


                <div className="mt-10 md:flex justify-between">
                    <div className=" shadow-2xl pb-10 rounded-xl md:max-w-[30%]">
                        <img src={buyCourse} alt="" className=''/>

                        <p className=" mt-3">
                            Data Analytics 
                        </p>

                        <div className=" flex items-center mt-2">
                            <img src={Ellipse} alt="" /> 
                            <p className=" ml-3">
                                by Jane Doe
                            </p>
                        </div>

                        <div className="">
                            {/* RATING STARS WILL BE HERE INSIDE THE DIV */}
                        </div>

                        <div className="flex justify-between w-[80%] mt-5">
                            <p className="">
                                2h 30m
                            </p>

                            <p className="">
                                Beginner
                            </p>
                        </div>

                        <div className=" flex justify-between w-[70%] mt-5 items-center">
                            <button className='border pl-1 pr-1 border-black hover:bg-slate-500'>
                                15,000
                            </button>

                            <p className=" line-through">
                                45,000 NGN
                            </p>
                        </div>
                    </div>

                    
                    {/* THIS DOWN HERE WILL BE CLEARED WHEN WE HAVE ACCESS TO THE APIs THE CODE WILL BE CLEARED*/}


                    <div className="mt-20 md:mt-0 shadow-2xl pb-10 rounded-xl md:max-w-[30%]">
                        <img src={buyCourse2} alt="" className=''/>

                        <p className=" mt-3">
                            Data Analytics 
                        </p>

                        <div className=" flex items-center mt-2">
                            <img src={Ellipse} alt="" /> 
                            <p className=" ml-3">
                                by Jane Doe
                            </p>
                        </div>

                        <div className="">
                            {/* RATING STARS WILL BE HERE INSIDE THE DIV */}
                        </div>

                        <div className="flex justify-between w-[80%] mt-5">
                            <p className="">
                                2h 30m
                            </p>

                            <p className="">
                                Beginner
                            </p>
                        </div>

                        <div className=" flex justify-between w-[70%] mt-5 items-center">
                            <button className='border p-1 border-black'>
                                15,000
                            </button>

                            <p className=" line-through">
                                45,000 NGN
                            </p>
                        </div>
                    </div>




                    <div className="mt-20 md:mt-0 shadow-2xl pb-10 rounded-xl md:max-w-[30%]">
                        <img src={buyCourse} alt="" className=''/>

                        <p className=" mt-3">
                            Data Analytics 
                        </p>

                        <div className=" flex items-center mt-2">
                            <img src={Ellipse} alt="" /> 
                            <p className=" ml-3">
                                by Jane Doe
                            </p>
                        </div>

                        <div className="">
                            {/* RATING STARS WILL BE HERE INSIDE THE DIV */}
                        </div>

                        <div className="flex justify-between w-[80%] mt-5">
                            <p className="">
                                2h 30m
                            </p>

                            <p className="">
                                Beginner
                            </p>
                        </div>

                        <div className=" flex justify-between w-[70%] mt-5 items-center">
                            <button className='border p-1 border-black'>
                                15,000
                            </button>

                            <p className=" line-through">
                                45,000 NGN
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

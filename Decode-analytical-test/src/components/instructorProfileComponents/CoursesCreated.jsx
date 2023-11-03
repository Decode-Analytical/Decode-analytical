import React from 'react'

import purchaseImg from '../../assets/purchases/purchaseImg.png'
import Ellipse2 from '../../assets/purchases/Ellipse2.png'


import {BsStar} from "react-icons/bs"


export default function CoursesCreated() {
  return (
    <>
        <section>
            <div className=" pb-20">
                <div className=" flex justify-between mt-28 mb-16">
                    <p className=" text-2xl font-bold">
                        Courses Created
                    </p>

                    <button className=' text-lg' >
                        see all
                    </button>
                </div>



                    

                        {/* COURSE CRAETED BY COURSE CREATORS CARDS */}
                <div className=" max-w-[1080px] m-auto md:flex justify-between">
                    <div className=" space-y-4 shadow-2xl pb-8 px-3 rounded-lg md:max-w-[220px]">
                        <img src={purchaseImg} alt="" className=' w-full ' />

                        <p className=" font-bold">
                            Early design and it's principle
                        </p>

                        <div className=" flex space-x-3 items-center text-xs">
                            <BsStar />

                            <p className="">
                                4/5
                            </p>

                            <p className="">
                                (124 verified ratings)
                            </p>
                        </div>

                        <div className=" flex items-center">
                            <img src={Ellipse2} alt="" className=' w-10 mr-3'/>
                            <p className="text-xs">
                                by Victoria Olayode
                            </p>
                        </div>
                    </div>


                            {/* CODES FROM HERE WILL BE CLEARED AFTER PRODUCTION */}
                    <div className=" space-y-4 shadow-2xl pb-8 px-3 rounded-lg mt-20 md:mt-0 md:max-w-[220px]">
                        <img src={purchaseImg} alt="" className=' w-full ' />

                        <p className=" font-bold">
                            Early design and it's principle
                        </p>

                        <div className=" flex space-x-3 items-center text-xs">
                            <BsStar />

                            <p className="">
                                4/5
                            </p>

                            <p className="">
                                (124 verified ratings)
                            </p>
                        </div>

                        <div className=" flex items-center">
                            <img src={Ellipse2} alt="" className=' w-10 mr-3'/>
                            <p className="text-xs">
                                by Victoria Olayode
                            </p>
                        </div>
                    </div>


                    <div className=" space-y-4 shadow-2xl pb-8 px-3 rounded-lg mt-20 md:mt-0 md:max-w-[220px]">
                        <img src={purchaseImg} alt="" className=' w-full ' />

                        <p className=" font-bold">
                            Early design and it's principle
                        </p>

                        <div className=" flex space-x-3 items-center text-xs">
                            <BsStar />

                            <p className="">
                                4/5
                            </p>

                            <p className="">
                                (124 verified ratings)
                            </p>
                        </div>

                        <div className=" flex items-center">
                            <img src={Ellipse2} alt="" className=' w-10 mr-3'/>
                            <p className="text-xs">
                                by Victoria Olayode
                            </p>
                        </div>
                    </div>

                    <div className=" space-y-4 shadow-2xl pb-8 px-3 rounded-lg mt-20 md:mt-0 md:max-w-[220px]">
                        <img src={purchaseImg} alt="" className=' w-full ' />

                        <p className=" font-bold">
                            Early design and it's principle
                        </p>

                        <div className=" flex space-x-3 items-center text-xs">
                            <BsStar />

                            <p className="">
                                4/5
                            </p>

                            <p className="">
                                (124 verified ratings)
                            </p>
                        </div>

                        <div className=" flex items-center">
                            <img src={Ellipse2} alt="" className=' w-10 mr-3'/>
                            <p className="text-xs">
                                by Victoria Olayode
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

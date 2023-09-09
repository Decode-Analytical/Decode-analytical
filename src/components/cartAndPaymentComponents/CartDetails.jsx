import React from 'react'
import pattern from '../../assets/courses Images/pattern.png'
import Ellipse from '../../assets/courses Images/Ellipse.png'

export default function CartDetails() {
  return (
    <>
        <section>
            <div className=" px-[5%] pt-20 cart-bg h-64 my-20">
                <div className=" text-white">
                    <p className=" text-4xl">
                        You may also be  <span className=" text-[#FFCD05]"> interested </span> in
                    </p>
                </div>   

                <div className=" md:flex justify-between">
                    <div className=" border-white border-8 rounded-md">
                        <img src={pattern} alt="" />    

                        <div className=" p-4">
                            <p className=" font-bold">
                                Data Analytics 
                            </p>

                            <img src={Ellipse} alt="" />

                            <p className="">
                                {/* STARS FOR RATINGS WILL BE HERE */}
                            </p>

                            <div className=" flex justify-between">
                                <p className="">
                                    2h 30m
                                </p>
                                <p className="">
                                    beginner
                                </p>
                            </div>

                            <div className=" inline-flex">
                                <button className=" border border-black hover:bg-gray-400 px-2 mr-5">
                                    15,000
                                </button>
                                <p className=" line-through">
                                    45,000 NGN
                                </p>
                            </div>
                        </div>
                    </div>    


                    {/* JUST FOR DEVELOPMENT PURPOSES, WILL BE CLEARED AND MAPPED THROUGH WHEN COURSES ARE AVAILABLE  */}

                    <div className=" border-white border-8 rounded-md">
                        <img src={pattern} alt="" />    

                        <div className=" p-4">
                            <p className="">
                                Data Analytics 
                            </p>

                            <img src={Ellipse} alt="" />

                            <p className="">
                                {/* STARS FOR RATINGS WILL BE HERE */}
                            </p>

                            <div className=" flex justify-between">
                                <p className="">
                                    2h 30m
                                </p>
                                <p className="">
                                    beginner
                                </p>
                            </div>

                            <div className=" inline-flex">
                                <button className=" border border-black hover:bg-gray-400 px-2 mr-5">
                                    15,000
                                </button>
                                <p className=" line-through">
                                    45,000 NGN
                                </p>
                            </div>
                        </div>
                    </div> 


                    <div className=" border-white border-8 rounded-md">
                        <img src={pattern} alt="" />    

                        <div className=" p-4">
                            <p className="">
                                Data Analytics 
                            </p>

                            <img src={Ellipse} alt="" />

                            <p className="">
                                {/* STARS FOR RATINGS WILL BE HERE */}
                            </p>

                            <div className=" flex justify-between">
                                <p className="">
                                    2h 30m
                                </p>
                                <p className="">
                                    beginner
                                </p>
                            </div>

                            <div className=" inline-flex">
                                <button className=" border border-black hover:bg-gray-400 px-2 mr-5">
                                    15,000
                                </button>
                                <p className=" line-through">
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

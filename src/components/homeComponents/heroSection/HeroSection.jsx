import React from 'react'
import Frame1 from "../heroSection/Frame1.png"

export default function HeroSection() {
  return (
    <>
        <section>
            <div className=" mt-10 md:flex justify-between md:flex-row-reverse space-y-5 items-center">
            <div className=" max-w-[400px]">
                <img src={Frame1} alt="" />
              </div>


              <div className="text-center max-w-[400px]">
                <p className=" text-3xl md:text-5xl text-[#01051D] ">
                  ... welcome to decode learning management system ...
                </p>

                <p className=" mt-5">
                  Decode LMS is a learning management system that gives you all the tools required in your tech journey. It is comprised of the most resourceful materials one would ever think of. Have the  best experience from us.
                </p>

                <button className=' bg-[#020625] text-white py-1 px-4 mt-5'>
                  Get Started
                </button>
              </div>
            </div>
        </section>
    </>
  )
}

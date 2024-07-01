import React from 'react'
import feature2 from '../../../assets/Images/feature2.png'

export default function WhatToLearn() {
  return (
    <>
        <section className='mx-[5%]'>
            <div className='max-w-[700px] m-auto'>
                <div className=" mt-20 md:flex justify-between items-center">
                    <img src={feature2} alt="" />

                    <div className="">
                        <p className=" mt-10 text-2xl font-bold">
                            What will you learn?
                        </p>

                        <p className=" text-xs mt-4">
                            React Native
                        </p>

                        <p className=" text-xs mt-4">
                            HTML 5, CCS & Javascript
                        </p>

                        <p className=" text-xs mt-4">
                            Build 3 Portfolio Projects
                        </p>

                        <p className=" text-xs mt-4">
                            Build 3 Portfolio Projects
                        </p>

                        <div className="">
                            <button className='bg-yellow-500 w-28 mt-5 rounded-md'>
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

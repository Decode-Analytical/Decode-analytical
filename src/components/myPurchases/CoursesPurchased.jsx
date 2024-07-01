import React from 'react'


import purchased from '../../assets/purchases/purchased.png'

export default function CoursesPurchased() {
  return (
    <>
        <section>
            <div className="">
                <div className=" mt-20">
                    <img src={purchased} alt="" className=' w-60 m-auto'/>

                    <div className=" w-96 m-auto text-center  mt-5">
                        <p className=" text-2xl text-grey">
                            You haven’t purchased any course yet.
                        </p>

                        <p className=" text-xs text-gray">
                            Purchase a course to earn a certifiate now!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

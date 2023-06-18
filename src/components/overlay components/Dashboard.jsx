import React from 'react'

export default function Dashboard() {
  return (
    <>
        <section>
            <div className=" mx-5">
                <div className="my-20">
                    <p className="text-center text-2xl font-bold">
                        Welcome back James.!!!
                    </p>
                </div>

                <div className=" border-2 border-gray-500 rounded-sm max-w-[800px] m-auto my-10 py-10 px-10">

                    <div className="">
                        <p className=" my-5 text-3xl font-bold">
                            Intoduction to UI/UX. A complete  guide
                        </p>
                    </div>

                    <div className="flex justify-between my-10">
                        <div className=" sm:w-[300px] sm:flex justify-between  space-y-2 sm:space-y-0">
                            <p className="">
                                Level 1
                            </p>

                            <p className="">
                                Time: 5hrs duration 
                            </p>
                        </div>

                        <p className=" text-3xl font-bold">
                            24%
                        </p>
                    </div>

                    <div className="">
                        {/* DIV FOR PROGRESSS BAR */}
                    </div>

                    <div className="">
                        <button className='bg-[#040E53] px-5 text-xs md:text-xl text-white md:px-10 py-3 rounded-md'>
                            Keep making progress
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

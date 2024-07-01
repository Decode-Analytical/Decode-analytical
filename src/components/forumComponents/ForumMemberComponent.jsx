import React from 'react'

import Ellipse2 from '../../assets/forum imgs/Ellipse2.png'

export default function ForumMemberComponent() {
  return (
    <>
        <section className=' md:min-w-[30%] md:border md:p-5'>
            <div className=''>
                <div className=" mt-20 md:mt-0">
                    <div className="">
                        <p className=" text-2xl text-[#303030]">
                            Forum members
                        </p>

                        <p className=" mt-3">
                            students [in progress <span className=' text-[#ADA204]'>(2,102)</span>]
                        </p>
                    </div>


                        {/* CODES WILL BE CLEARED AS WE WILL MAP THROUG */}
                    <div className=" flex justify-between mt-5">
                        <div className="">
                            <img src={Ellipse2} alt="" className='w-10 cursor-pointer'/>
                            <p className="">
                                Jane Doe
                            </p>
                        </div>
                        <div className="">
                            <img src={Ellipse2} alt=""  className='w-10'/>
                            <p className="">
                                Jane Doe
                            </p>
                        </div>
                        <div className="">
                            <img src={Ellipse2} alt=""  className='w-10'/>
                            <p className="">
                                Jane Doe
                            </p>
                        </div>
                    </div>

                    <div className=" flex justify-between mt-5">
                        <div className="">
                            <img src={Ellipse2} alt="" className='w-10'/>
                            <p className="">
                                Jane Doe
                            </p>
                        </div>
                        <div className="">
                            <img src={Ellipse2} alt=""  className='w-10'/>
                            <p className="">
                                Jane Doe
                            </p>
                        </div>
                        <div className="">
                            <img src={Ellipse2} alt=""  className='w-10'/>
                            <p className="">
                                Jane Doe
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" mt-5 ">
                    <button className=' px-2 border border-gray-600 rounded-md'>
                        more
                    </button>
                </div>
            </div>


            <div className=' mt-40'>
                <div className=" my-16">
                    <div className="">
                        <p className=" mt-3">
                            students [completed <span className=' text-[#ADA204]'>(5,003)</span>]
                        </p>
                    </div>


                    <div className=" flex justify-between mt-5">
                        <div className="">
                            <img src={Ellipse2} alt="" className='w-10'/>
                            <p className="">
                                Jane Doe
                            </p>
                        </div>
                        <div className="">
                            <img src={Ellipse2} alt=""  className='w-10'/>
                            <p className="">
                                Jane Doe
                            </p>
                        </div>
                        <div className="">
                            <img src={Ellipse2} alt=""  className='w-10'/>
                            <p className="">
                                Jane Doe
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

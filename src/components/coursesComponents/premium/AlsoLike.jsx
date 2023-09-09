import React from 'react'

import pattern from '../../../assets/courses Images/pattern.png'
import pattern2 from '../../../assets/courses Images/pattern2.png'
import pattern3 from '../../../assets/courses Images/pattern3.png'
import Ellipse from '../../../assets/courses Images/Ellipse.png'

export default function AlsoLike() {
  return (
    <fragment className=''>
        <section className=" mx-[5%] mt-20 mb-20">
            
            <div className="max-w-[1100px] m-auto">
                <h2 className=" text-3xl">
                    You might also like
                </h2>
            </div>


            <div className="max-w-[1100px] m-auto md:flex justify-between">
                <div >
                    <div className=" mt-5 pb-5 shadow-2xl md:max-w-[80%]">
                        <div className="">
                            <img src={pattern} alt="" />

                            <p className=" font-bold mt-2 mx-3">
                                Data Analytics
                            </p>

                            <div className=" mt-2 flex items-center mx-3">
                                <img src={Ellipse} alt="" />
                                <p className=" ml-3">
                                    by Jane Doe
                                </p>
                            </div>

                            <p className="mx-3">
                                {/* STARS RATING WILL COME HERE */}
                                Rating:
                            </p>

                            <div className=" mt-3 flex justify-between mx-3">
                                <p className="">
                                    2h 30m
                                </p>

                                <p className="">
                                    Beginners
                                </p>
                            </div>

                            <div className=" mt-2 flex justify-between mx-3">
                                <button>
                                    View Course
                                </button>

                                <p className="">
                                    Free
                                </p>
                            </div>
                        </div>
                    </div>
                </div>



                    {/*TO BE DELETED.... TO BE GENERATED WHEN THERE IS APIs */}
                <div >
                    <div className=" mt-20 pb-5 md:mt-5 shadow-2xl md:max-w-[80%]">
                        <div className="">
                            <img src={pattern2} alt="" />

                            <p className=" font-bold mt-2 mx-3">
                                Data Analytics
                            </p>

                            <div className=" mt-2 flex items-center mx-3">
                                <img src={Ellipse} alt="" />
                                <p className=" ml-3">
                                    by Jane Doe
                                </p>
                            </div>

                            <p className="mx-3">
                                {/* STARS RATING WILL COME HERE */}
                                Rating:
                            </p>

                            <div className=" mt-3 flex justify-between mx-3">
                                <p className="">
                                    2h 30m
                                </p>

                                <p className="">
                                    Beginners
                                </p>
                            </div>

                            <div className=" mt-2 flex justify-between mx-3">
                                <button>
                                    View Course
                                </button>

                                <p className="">
                                    Free
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div >
                    <div className=" mt-20 pb-5 md:mt-5 shadow-2xl md:max-w-[80%]">
                        <div className="">
                            <img src={pattern3} alt="" />

                            <p className=" font-bold mt-2 mx-3">
                                Data Analytics
                            </p>

                            <div className=" mt-2 flex items-center mx-3">
                                <img src={Ellipse} alt="" />
                                <p className=" ml-3">
                                    by Jane Doe
                                </p>
                            </div>

                            <p className="mx-3">
                                {/* STARS RATING WILL COME HERE */}
                                Rating:
                            </p>

                            <div className=" mt-3 flex justify-between mx-3">
                                <p className="">
                                    2h 30m
                                </p>

                                <p className="">
                                    Beginners
                                </p>
                            </div>

                            <div className=" mt-2 flex justify-between mx-3">
                                <button>
                                    View Course
                                </button>

                                <p className="">
                                    Free
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </fragment>
  )
}

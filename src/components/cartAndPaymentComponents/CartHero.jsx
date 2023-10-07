import React from 'react'


 import courseSelected from '../../assets/Images/courseSelected.png'
 import customersImage from '../../assets/Images/customersImage.png'
 import {BsCart3} from "react-icons/bs"
 import {BsClockHistory} from "react-icons/bs"


export default function CartHero() {
  return (
    <>
        <section className=' mt-20 shadow-xl mx-[5%]  py-10'>
          <div className=" max-w-[900px] m-auto">
            
              <div className="">
                <div className="">
                  <p className=" text-3xl font-bold">
                    Shopping Cart 
                  </p>

                  <p className=" text-xl my-5">
                    {/* Number Of Courses Selected will be IN HERE */}1 Course
                  </p>
                </div>

              <div className=" lg:flex justify-between "> {/* WRAPPER TO FLEX THE DESKTOP VIEW  */}
                <div className=" md:flex justify-between items-center">
                  <div className="">
                    <img src={courseSelected} alt="" className=''/>
                  </div>


                  <div className=" space-y-2 mx-2">
                    <p className="">
                      Data Analytics 
                    </p>

                    <div className=" inline-flex items-center">
                      <img src={customersImage} alt="" />
                      <p className=" ml-5">
                        By: Lionel Messi
                      </p>
                    </div>

                    <p className="">
                      {/* RATING STARS WILL BE HERE */}
                    </p>

                    <div className=" flex justify-between">
                      <p className=" flex items-center">
                        <BsClockHistory />2hrs 30m
                      </p>

                      <p className=" ">
                        Beginner 
                      </p>
                    </div>

                    <div className=" inline-flex">
                      <button className=' border border-black px-2 hover:bg-gray-400 hover:font-extrabold'>
                        15,000
                      </button>

                      <p className=" line-through ml-9">
                        45,000
                      </p>
                    </div>
                  </div>
                </div>


                

              {/* ========================================= */}
              <div className=" hidden md:block">
                <p className="">
                  Remove and <br />
                  <span className="">
                    save for later
                  </span> <br />
                  <span className=" font-bold">
                    45,000 NGN 
                  </span> <br />
                  <span className=" line-through">
                    95,000
                  </span>
                </p>
              </div>


              {/* =========================================== */}
              {/* THE CART TOTAL AND CHECKOUT BUTTON */}
              <div className=" mt-10 md:mt-0">
                <div className=" ">
                  <p className=" font-semibold">
                    Total:
                  </p> 

                  <p className=" my-3 text-xl font-extrabold">
                    45,000 NGN
                  </p> 
                  <p className=" line-through">
                    95,000 NGN
                  </p> 
                  <p className=" my-3">
                    75% off
                  </p>
                </div>

                <button className=" mt-5 bg-yellow-500 hover:bg-yellow-300 font-bold rounded-sm border border-gray-600 px-2 flex items-center">
                  Checkout
                  <div className=" ml-5">
                    <BsCart3 />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

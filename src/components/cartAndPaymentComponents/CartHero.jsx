import React from 'react'

 import navBar from '../homeComponents/navbar/NavBar'
 import courseSelected from '../../assets/Images/courseSelected.png'
 import customersImage from '../../assets/Images/customersImage.png'
 import {BsCart3} from "react-icons/bs"
 import {BsClockHistory} from "react-icons/bs"

 export default function CartHero() {
  let stars = [<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z" fill="#FFD748"/>
</svg>, <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z" fill="#FFD748"/>
</svg>, <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z" fill="#FFD748"/>
</svg>, <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z" fill="#FFD748"/>
</svg>, <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z" fill="#FFD748"/>
</svg>]
  return (
    <>
    <navBar/>
        <section className=' mt-20 shadow-xl mx-[5%] font-montserrat py-10'>
          <div className=" max-w-[1080px] m-auto">
            
              <div className="">
                <div className="">
                  <p className=" text-3xl md:text-4xl font-bold md:font-extrabold">
                    Shopping Cart 
                  </p>

                  <p className=" text-xl my-5">
                    {/* Number Of Courses Selected will be IN HERE */}1 Course
                  </p>
                </div>

              <div className=" lg:flex justify-between "> {/* WRAPPER TO FLEX THE DESKTOP VIEW  */}
                <div className=" md:flex justify-between items-center border space-x-10 p-3 rounded-2xl border-[#e7e7e7]">
                  <div className="relative">
                    <img src={courseSelected} alt="" className='rounded-s-lg'/>
                    <div className="absolute top-0 bg-white left-0 m-2 text-black p-2 rounded-full text-[10px] font-bold">
    2500 <span className="font-normal">already enrolled!</span>
  </div>
                  </div>


                  <div className=" space-y-5 mx-2">
                    <p className="">
                      Data Analytics 
                    </p>

                    <div className=" inline-flex items-center">
                      <img src={customersImage} alt="" />
                      <p className=" ml-5">
                        By: Lionel Messi
                      </p>
                    </div>

                    <p className='flex'>
                      {/* RATING STARS WILL BE HERE */}
                      {stars.map((item, index) => (
                        <div key={index}>{item}</div>
                      ))}
                      &nbsp;<span>5.0(25)</span>
                    </p>

                    <div className=" flex justify-between font-[20px] text-sm font-400">
                      <p className=" flex items-center">
                        <BsClockHistory />&nbsp;2hrs 30m 
                      </p>

                      <p className=" ">
                        Beginner 
                      </p>
                    </div>

                    <div className=" inline-flex">
                      <button className=' border px-4 py-2 font-bold rounded-md border-black hover:bg-gray-400 hover:font-extrabold'>
                        15,000
                      </button>

                      <p className=" line-through px-4 py-2 font-bold ml-9">
                        45,000 NGN
                      </p>
                    </div>
                  </div>
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
                  <p className=" text-[#030B42] line-through font-bold">
                    95,000 NGN
                  </p> 
                  <p className=" my-3 text-[#030B42]">
                    75% off
                  </p>
                </div>

                <button className=" mt-5 p-3 bg-[#FFCD05] hover:bg-yellow-300 font-bold rounded-lg  px-10 flex items-center">
                  Checkout
                  <div className=" ml-5">
                    <BsCart3 />
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className=" space-x-10 mt-5">
            <button className="">
              Remove
            </button>

            <button className="">
              Save for later
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

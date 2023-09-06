import React from 'react'
import freeImage from '../../../assets/courses Images/Rectangle.png'
import buyCourseImage from '../../../assets/courses Images/data.jpg'
import person from '../../../assets/courses Images/Ellipse.png';
import {BiTimeFive} from 'react-icons/bi'
import {HiOutlineChartBar} from "react-icons/hi"
import {GrPrevious, GrNext} from 'react-icons/gr'
const Freecourses = () => {
  return (
    <main className='flex flex-col ' >
        <div className='h-[458px] '>
        <img src={freeImage}/>
        </div>
        <div className=" flex flex-col text-white absolute p-24 gap-4" >
            <p className="font-black text-5xl tracking-tight">Try Free Courses </p>
            <p className="text-xl font-medium tracking-tight">Break into tech with any of the courses we have specially created for you</p> 
          </div>
          {/* mapping throug the free couses */}
          <section className="grid  grid-cols-3 gap-7 px-24 mt-[-15rem]">
          <div className="w-94 min-h-0 rounded-3xl border border-slate-300 border-solid p-2.5 group relative cursor-pointer bg-white">
              <div className="relative" >
                <div className="">
                <img className="rounded-t-2xl h-60 w-full transition duration-500 object-cover" src={buyCourseImage}/>
                </div>
             
              <p className="absolute top-6 left-4 bg-white py-2 px-4 rounded-full text-xs"> <span className="font-black  ">2,452 </span>already enrolled!</p>
              <p className="inset-y-1/2 inset-x-1/4 ml-9 w-full font-black text-xs absolute invisible group-hover:visible text-white "> PREVIEW COURSE</p>
              </div>
              <div className="px-2.5 flex flex-col h-36 justify-around">
                <p className="text-xl font-black pt-5 transition duration-500">Data Analytics</p>
                <div className="flex row-auto items-center gap-2">
                  <img src={person} className="w-8 h-8 rounded-full "/>
                  <p className="text-sm ">by Mac Kingsley</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex">
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    </div>
                    <p className="text-sm">4.50 (24)</p>
                </div>
                
              </div>
              <div className="flex row-auto justify-between px-3 mt-3">
                  <div className="flex row-auto font-medium items-center gap-3" >
                    <BiTimeFive/>
                    <p className="text-xl ">2h 32m</p>
                  </div>
                  <div className="flex row-auto items-center gap-3" >
                    <HiOutlineChartBar/>
                    <p className="text-xl">Beginner</p>
                  </div>
                </div>
                <div className="flex border-b py-3 px-4 relative">
                  <div className="flex row-auto items-center gap-5  absolute group-hover:invisible w-full">
                  <p className=" py-2 px-8 text-ms font-black border-solid border border-black rounded-md">15,000</p>
                  <del className=" font-black ">45,000 NGN</del>  
                  <a  href='' className=" hover:bg-blue-950 hover:text-white transition-all text-xs font-semibold py-3 absolute invisible group-hover:visible border bg-amber-400 px-32 duration-500"> Learn More</a>
                  </div>
                  <div className=" self-end border-b mt-9  border-gray-500 "> </div>
                </div>
            </div>
            {/* ending of mapping throug the free couses */}

            {/* placeholder which should be deleted  */}
            <div className="w-94 min-h-0 rounded-3xl border border-slate-300 border-solid p-2.5 group relative cursor-pointer bg-white">
              <div className="relative" >
                <div className="">
                <img className="rounded-t-2xl h-60 w-full transition duration-500 object-cover" src={buyCourseImage}/>
                </div>
             
              <p className="absolute top-6 left-4 bg-white py-2 px-4 rounded-full text-xs"> <span className="font-black  ">2,452 </span>already enrolled!</p>
              <p className="inset-y-1/2 inset-x-1/4 ml-9 w-full font-black text-xs absolute invisible group-hover:visible text-white "> PREVIEW COURSE</p>
              </div>
              <div className="px-2.5 flex flex-col h-36 justify-around">
                <p className="text-xl font-black pt-5 transition duration-500">Data Analytics</p>
                <div className="flex row-auto items-center gap-2">
                  <img src={person} className="w-8 h-8 rounded-full "/>
                  <p className="text-sm ">by Mac Kingsley</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex">
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    </div>
                    <p className="text-sm">4.50 (24)</p>
                </div>
                
              </div>
              <div className="flex row-auto justify-between px-3 mt-3">
                  <div className="flex row-auto font-medium items-center gap-3" >
                    <BiTimeFive/>
                    <p className="text-xl ">2h 32m</p>
                  </div>
                  <div className="flex row-auto items-center gap-3" >
                    <HiOutlineChartBar/>
                    <p className="text-xl">Beginner</p>
                  </div>
                </div>
                <div className="flex border-b py-3 px-4 relative">
                  <div className="flex row-auto items-center gap-5  absolute group-hover:invisible w-full">
                  <p className=" py-2 px-8 text-ms font-black border-solid border border-black rounded-md">15,000</p>
                  <del className=" font-black ">45,000 NGN</del>  
                  <a  href='' className=" hover:bg-blue-950 hover:text-white transition-all text-xs font-semibold py-3 absolute invisible group-hover:visible border bg-amber-400 px-32 duration-500"> Learn More</a>
                  </div>
                  <div className=" self-end border-b mt-9  border-gray-500 "> </div>
                </div>
            </div>
            <div className="w-94 min-h-0 rounded-3xl border border-slate-300 border-solid p-2.5 group relative cursor-pointer bg-white">
              <div className="relative" >
                <div className="">
                <img className="rounded-t-2xl h-60 w-full transition duration-500 object-cover" src={buyCourseImage}/>
                </div>
             
              <p className="absolute top-6 left-4 bg-white py-2 px-4 rounded-full text-xs"> <span className="font-black  ">2,452 </span>already enrolled!</p>
              <p className="inset-y-1/2 inset-x-1/4 ml-9 w-full font-black text-xs absolute invisible group-hover:visible text-white "> PREVIEW COURSE</p>
              </div>
              <div className="px-2.5 flex flex-col h-36 justify-around">
                <p className="text-xl font-black pt-5 transition duration-500">Data Analytics</p>
                <div className="flex row-auto items-center gap-2">
                  <img src={person} className="w-8 h-8 rounded-full "/>
                  <p className="text-sm ">by Mac Kingsley</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex">
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    </div>
                    <p className="text-sm">4.50 (24)</p>
                </div>
                
              </div>
              <div className="flex row-auto justify-between px-3 mt-3">
                  <div className="flex row-auto font-medium items-center gap-3" >
                    <BiTimeFive/>
                    <p className="text-xl ">2h 32m</p>
                  </div>
                  <div className="flex row-auto items-center gap-3" >
                    <HiOutlineChartBar/>
                    <p className="text-xl">Beginner</p>
                  </div>
                </div>
                <div className="flex border-b py-3 px-4 relative">
                  <div className="flex row-auto items-center gap-5  absolute group-hover:invisible w-full">
                  <p className=" py-2 px-8 text-ms font-black border-solid border border-black rounded-md">15,000</p>
                  <del className=" font-black ">45,000 NGN</del>  
                  <a  href='' className=" hover:bg-blue-950 hover:text-white transition-all text-xs font-semibold py-3 absolute invisible group-hover:visible border bg-amber-400 px-32 duration-500"> Learn More</a>
                  </div>
                  <div className=" self-end border-b mt-9  border-gray-500 "> </div>
                </div>
            </div>
            <div className="w-94 min-h-0 rounded-3xl border border-slate-300 border-solid p-2.5 group relative cursor-pointer bg-white">
              <div className="relative" >
                <div className="">
                <img className="rounded-t-2xl h-60 w-full transition duration-500 object-cover" src={buyCourseImage}/>
                </div>
             
              <p className="absolute top-6 left-4 bg-white py-2 px-4 rounded-full text-xs"> <span className="font-black  ">2,452 </span>already enrolled!</p>
              <p className="inset-y-1/2 inset-x-1/4 ml-9 w-full font-black text-xs absolute invisible group-hover:visible text-white "> PREVIEW COURSE</p>
              </div>
              <div className="px-2.5 flex flex-col h-36 justify-around">
                <p className="text-xl font-black pt-5 transition duration-500">Data Analytics</p>
                <div className="flex row-auto items-center gap-2">
                  <img src={person} className="w-8 h-8 rounded-full "/>
                  <p className="text-sm ">by Mac Kingsley</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex">
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    </div>
                    <p className="text-sm">4.50 (24)</p>
                </div>
                
              </div>
              <div className="flex row-auto justify-between px-3 mt-3">
                  <div className="flex row-auto font-medium items-center gap-3" >
                    <BiTimeFive/>
                    <p className="text-xl ">2h 32m</p>
                  </div>
                  <div className="flex row-auto items-center gap-3" >
                    <HiOutlineChartBar/>
                    <p className="text-xl">Beginner</p>
                  </div>
                </div>
                <div className="flex border-b py-3 px-4 relative">
                  <div className="flex row-auto items-center gap-5  absolute group-hover:invisible w-full">
                  <p className=" py-2 px-8 text-ms font-black border-solid border border-black rounded-md">15,000</p>
                  <del className=" font-black ">45,000 NGN</del>  
                  <a  href='' className=" hover:bg-blue-950 hover:text-white transition-all text-xs font-semibold py-3 absolute invisible group-hover:visible border bg-amber-400 px-32 duration-500"> Learn More</a>
                  </div>
                  <div className=" self-end border-b mt-9  border-gray-500 "> </div>
                </div>
            </div>
            <div className="w-94 min-h-0 rounded-3xl border border-slate-300 border-solid p-2.5 group relative cursor-pointer bg-white">
              <div className="relative" >
                <div className="">
                <img className="rounded-t-2xl h-60 w-full transition duration-500 object-cover" src={buyCourseImage}/>
                </div>
             
              <p className="absolute top-6 left-4 bg-white py-2 px-4 rounded-full text-xs"> <span className="font-black  ">2,452 </span>already enrolled!</p>
              <p className="inset-y-1/2 inset-x-1/4 ml-9 w-full font-black text-xs absolute invisible group-hover:visible text-white "> PREVIEW COURSE</p>
              </div>
              <div className="px-2.5 flex flex-col h-36 justify-around">
                <p className="text-xl font-black pt-5 transition duration-500">Data Analytics</p>
                <div className="flex row-auto items-center gap-2">
                  <img src={person} className="w-8 h-8 rounded-full "/>
                  <p className="text-sm ">by Mac Kingsley</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex">
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    </div>
                    <p className="text-sm">4.50 (24)</p>
                </div>
                
              </div>
              <div className="flex row-auto justify-between px-3 mt-3">
                  <div className="flex row-auto font-medium items-center gap-3" >
                    <BiTimeFive/>
                    <p className="text-xl ">2h 32m</p>
                  </div>
                  <div className="flex row-auto items-center gap-3" >
                    <HiOutlineChartBar/>
                    <p className="text-xl">Beginner</p>
                  </div>
                </div>
                <div className="flex border-b py-3 px-4 relative">
                  <div className="flex row-auto items-center gap-5  absolute group-hover:invisible w-full">
                  <p className=" py-2 px-8 text-ms font-black border-solid border border-black rounded-md">15,000</p>
                  <del className=" font-black ">45,000 NGN</del>  
                  <a  href='' className=" hover:bg-blue-950 hover:text-white transition-all text-xs font-semibold py-3 absolute invisible group-hover:visible border bg-amber-400 px-32 duration-500"> Learn More</a>
                  </div>
                  <div className=" self-end border-b mt-9  border-gray-500 "> </div>
                </div>
            </div>
            <div className="w-94 min-h-0 rounded-3xl border border-slate-300 border-solid p-2.5 group relative cursor-pointer bg-white">
              <div className="relative" >
                <div className="">
                <img className="rounded-t-2xl h-60 w-full transition duration-500 object-cover" src={buyCourseImage}/>
                </div>
             
              <p className="absolute top-6 left-4 bg-white py-2 px-4 rounded-full text-xs"> <span className="font-black  ">2,452 </span>already enrolled!</p>
              <p className="inset-y-1/2 inset-x-1/4 ml-9 w-full font-black text-xs absolute invisible group-hover:visible text-white "> PREVIEW COURSE</p>
              </div>
              <div className="px-2.5 flex flex-col h-36 justify-around">
                <p className="text-xl font-black pt-5 transition duration-500">Data Analytics</p>
                <div className="flex row-auto items-center gap-2">
                  <img src={person} className="w-8 h-8 rounded-full "/>
                  <p className="text-sm ">by Mac Kingsley</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex">
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    </div>
                    <p className="text-sm">4.50 (24)</p>
                </div>
                
              </div>
              <div className="flex row-auto justify-between px-3 mt-3">
                  <div className="flex row-auto font-medium items-center gap-3" >
                    <BiTimeFive/>
                    <p className="text-xl ">2h 32m</p>
                  </div>
                  <div className="flex row-auto items-center gap-3" >
                    <HiOutlineChartBar/>
                    <p className="text-xl">Beginner</p>
                  </div>
                </div>
                <div className="flex border-b py-3 px-4 relative">
                  <div className="flex row-auto items-center gap-5  absolute group-hover:invisible w-full">
                  <p className=" py-2 px-8 text-ms font-black border-solid border border-black rounded-md">15,000</p>
                  <del className=" font-black ">45,000 NGN</del>  
                  <a  href='' className=" hover:bg-blue-950 hover:text-white transition-all text-xs font-semibold py-3 absolute invisible group-hover:visible border bg-amber-400 px-32 duration-500"> Learn More</a>
                  </div>
                  <div className=" self-end border-b mt-9  border-gray-500 "> </div>
                </div>
            </div>
            
            {/* ending of placeholder which should be deleted */}
          </section>
          <div className="flex justify-center items-center py-10 ">
          <button className=" rounded border border-black font-black text-xs text-black py-2 px-4 hover:bg-blue-950 hover:text-white" >View all courses</button>
          </div>
          <div className='flex justify-between border-2 items-center border-slate-300 mx-16 my-10 p-4 font-black text-sm rounded-lg'>
            <p className=''>pages<span className='px-1.5'>1</span> of <span className='pl-1.5'>4</span></p>
<div className='flex gap-4'>
    <button className='border-2 border-slate-300 p-2 rounded-md hover:bg-slate-300'><GrPrevious/></button>
    <button className='border-2 border-slate-300 p-2 rounded-md hover:bg-slate-300'><GrNext/></button>
</div>
          </div>

    </main>
  )
}

export default Freecourses
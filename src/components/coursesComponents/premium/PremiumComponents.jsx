import React from "react";
import { FiSearch } from "react-icons/fi";
import {BiTimeFive} from 'react-icons/bi'
import {HiOutlineChartBar} from "react-icons/hi"

import buyCourseImage from '../../../assets/courses Images/buyCourse.png';
import person from '../../../assets/courses Images/Ellipse.png';
export default function PremiumComponents() {
  return (
    <>
      <main>
        <div className="bg-img mt-20 text-white bg-cover bg-no-repeat bg-center h-64 md:h-[557px] flex flex-col justify-center">
          <div class="w-[797px] h-[255px] border-solid  pl-64 gap-6 ">
            <h2 class="font-bold text-6xl text-white pt-8 pb-4">Courses</h2>
            <p class=" font-medium text-xl pb-4 pt-4">
              Empower Your Digital Journey with Us
            </p>
            <form className=" w-[676px] h-12 gap-6 rounded flex bg-white justify-between border-none outline-0 items-center">
              <select
                id="courseOption"
                name="courses"
                className="text-black h-11 w-28 p-3 font-black outline-0 "
              >
                <option value="All" className="text-black text-sm font-black">
                  All
                </option>
                <option
                  value="Coding"
                  className="text-black text-sm font-black"
                >
                  Coding
                </option>
                <option value="Data" className="text-black text-sm font-black">
                  Data
                </option>
                <option
                  value="Finance"
                  className="text-black text-sm font-black"
                >
                  Finance
                </option>
              </select>
              <input
                type="text"
                className="h-6 w-[522px] font-normal text-sm text-gray-600  outline-0 border-l border-gray-600 border-solid pl-2"
                placeholder="Search all categories "
              ></input>
              <button type="submit" className="bg-white pr-4">
                <FiSearch className="text-gray-600 w-5 h-5" />
              </button>
            </form>
          </div>
          <div className="gap-4 flex text-black font-semibold text-sm pl-64 ">
            <button className="bg-white rounded-3xl py-1.5 px-3 hover:translate-y-1 transition-all duration-75">
              Free
            </button>
            <button className="bg-white rounded-3xl py-1.5 px-3 hover:translate-y-1 transition-all duration-75">
              Paid
            </button>
            <button className="bg-white rounded-3xl py-1.5 px-3.5 hover:translate-y-1 transition-all duration-75">
              AllLevels
            </button>
          </div>
          <div className="ml-3 rounded-full border-white border-2 border-solid  text-white w-12 h-12 flex items-center justify-center ">
            <svg
              class="w-3 h-3 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
              />
            </svg>
          </div>
        </div>
        <div className="bg-white p-24 flex flex-col " >
        <div className=" flex flex-col text-black gap-1.5 justify-between h-32" >
           <p className="self-end text-sm font-normal"> Showing results for <span className="font-black text-black">Graphics Design</span></p>
            <p className="font-black text-5xl tracking-tight">Find trending courses </p>
            <p className="text-xl font-medium tracking-tight">Break into tech with any of the courses we have specially created for you</p> 
          </div>
          <section className="grid grid-rows-3 grid-cols-3 gap-7 mt-8">
          
          <div className="w-96 h-[32rem] rounded-3xl border border-slate-300 border-solid p-2.5 group relative">
              <div className="relative" >
              <img className="rounded-t-2xl h-60 w-full " src={buyCourseImage}/>
              <p className="absolute top-6 left-4 bg-white py-2 px-4 rounded-full text-xs"> <span className="font-black  ">2,452 </span>already enrolled!</p>
              </div>
              <div className="px-2.5 flex flex-col h-36 justify-around">
                <p className="text-xl font-black pt-5 ">Data Analytics</p>
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
                  <a  href='' className=" hover:bg-blue-950 hover:text-white transition-all text-xs font-semibold py-3 absolute invisible group-hover:visible border bg-amber-400 px-32"> Learn More</a>
                  </div>
                 
                  <div className=" self-end border-b mt-9  border-gray-500 "> </div>
                </div>
            </div>
            <div className="w-96 h-[31rem] rounded-3xl border border-slate-300 border-solid p-2.5 group relative">
              <div className="relative" >
              <img className="rounded-t-2xl h-60 w-full " src={buyCourseImage}/>
              <p className="absolute top-6 left-4 bg-white py-2 px-4 rounded-full text-xs"> <span className="font-black  ">2,452 </span>already enrolled!</p>
              </div>
              <div className="px-2.5 flex flex-col h-36 justify-around">
                <p className="text-xl font-black pt-5 ">Data Analytics</p>
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
                  <a  href='' className=" hover:bg-blue-950 hover:text-white transition-all text-xs font-semibold py-3 absolute invisible group-hover:visible border bg-amber-400 px-32"> Learn More</a>
                  </div>
                 
                  <div className=" self-end border-b mt-9  border-gray-500 "> </div>
                </div>
            </div>
            <div className="w-96 h-[32rem] rounded-3xl border border-slate-300 border-solid p-2.5 group relative">
              <div className="relative" >
              <img className="rounded-t-2xl h-60 w-full " src={buyCourseImage}/>
              <p className="absolute top-6 left-4 bg-white py-2 px-4 rounded-full text-xs"> <span className="font-black  ">2,452 </span>already enrolled!</p>
              </div>
              <div className="px-2.5 flex flex-col h-36 justify-around">
                <p className="text-xl font-black pt-5 ">Data Analytics</p>
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
                  <a  href='' className=" hover:bg-blue-950 hover:text-white transition-all text-xs font-semibold py-3 absolute invisible group-hover:visible border bg-amber-400 px-32"> Learn More</a>
                  </div>
                 
                  <div className=" self-end border-b mt-9  border-gray-500 "> </div>
                </div>
            </div>
            <div className="w-96 h-[32rem] rounded-3xl border border-slate-300 border-solid p-2.5 group relative">
              <div className="relative" >
              <img className="rounded-t-2xl h-60 w-full " src={buyCourseImage}/>
              <p className="absolute top-6 left-4 bg-white py-2 px-4 rounded-full text-xs"> <span className="font-black  ">2,452 </span>already enrolled!</p>
              </div>
              <div className="px-2.5 flex flex-col h-36 justify-around">
                <p className="text-xl font-black pt-5 ">Data Analytics</p>
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
                  <a  href='' className=" hover:bg-blue-950 hover:text-white transition-all text-xs font-semibold py-3 absolute invisible group-hover:visible border bg-amber-400 px-32"> Learn More</a>
                  </div>
                 
                  <div className=" self-end border-b mt-9  border-gray-500 "> </div>
                </div>
            </div>
            <div className="w-96 h-[32rem] rounded-3xl border border-slate-300 border-solid p-2.5 group relative">
              <div className="relative" >
              <img className="rounded-t-2xl h-60 w-full " src={buyCourseImage}/>
              <p className="absolute top-6 left-4 bg-white py-2 px-4 rounded-full text-xs"> <span className="font-black  ">2,452 </span>already enrolled!</p>
              </div>
              <div className="px-2.5 flex flex-col h-36 justify-around">
                <p className="text-xl font-black pt-5 ">Data Analytics</p>
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
                  <a  href='' className=" hover:bg-blue-950 hover:text-white transition-all text-xs font-semibold py-3 absolute invisible group-hover:visible border bg-amber-400 px-32"> Learn More</a>
                  </div>
                 
                  <div className=" self-end border-b mt-9  border-gray-500 "> </div>
                </div>
            </div>
            <div className="w-96 h-[32rem] rounded-3xl border border-slate-300 border-solid p-2.5 group relative">
              <div className="relative" >
              <img className="rounded-t-2xl h-60 w-full " src={buyCourseImage}/>
              <p className="absolute top-6 left-4 bg-white py-2 px-4 rounded-full text-xs"> <span className="font-black  ">2,452 </span>already enrolled!</p>
              </div>
              <div className="px-2.5 flex flex-col h-36 justify-around">
                <p className="text-xl font-black pt-5 ">Data Analytics</p>
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
                  <a  href='' className=" hover:bg-blue-950 hover:text-white transition-all text-xs font-semibold py-3 absolute invisible group-hover:visible border bg-amber-400 px-32"> Learn More</a>
                  </div>
                 
                  <div className=" self-end border-b mt-9  border-gray-500 "> </div>
                </div>
            </div>
            <div className="w-96 h-[32rem] rounded-3xl border border-slate-300 border-solid p-2.5 group relative">
              <div className="relative" >
              <img className="rounded-t-2xl h-60 w-full " src={buyCourseImage}/>
              <p className="absolute top-6 left-4 bg-white py-2 px-4 rounded-full text-xs"> <span className="font-black  ">2,452 </span>already enrolled!</p>
              </div>
              <div className="px-2.5 flex flex-col h-36 justify-around">
                <p className="text-xl font-black pt-5 ">Data Analytics</p>
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
                  <a  href='' className=" hover:bg-blue-950 hover:text-white transition-all text-xs font-semibold py-3 absolute invisible group-hover:visible border bg-amber-400 px-32"> Learn More</a>
                  </div>
                 
                  <div className=" self-end border-b mt-9  border-gray-500 "> </div>
                </div>
            </div>
            <div className="w-96 h-[32rem] rounded-3xl border border-slate-300 border-solid p-2.5 group relative">
              <div className="relative" >
              <img className="rounded-t-2xl h-60 w-full " src={buyCourseImage}/>
              <p className="absolute top-6 left-4 bg-white py-2 px-4 rounded-full text-xs"> <span className="font-black  ">2,452 </span>already enrolled!</p>
              </div>
              <div className="px-2.5 flex flex-col h-36 justify-around">
                <p className="text-xl font-black pt-5 ">Data Analytics</p>
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
                  <a  href='' className=" hover:bg-blue-950 hover:text-white transition-all text-xs font-semibold py-3 absolute invisible group-hover:visible border bg-amber-400 px-32"> Learn More</a>
                  </div>
                 
                  <div className=" self-end border-b mt-9  border-gray-500 "> </div>
                </div>
            </div>
            <div className="w-96 h-[32rem] rounded-3xl border border-slate-300 border-solid p-2.5 group relative">
              <div className="relative" >
              <img className="rounded-t-2xl h-60 w-full " src={buyCourseImage}/>
              <p className="absolute top-6 left-4 bg-white py-2 px-4 rounded-full text-xs"> <span className="font-black  ">2,452 </span>already enrolled!</p>
              </div>
              <div className="px-2.5 flex flex-col h-36 justify-around">
                <p className="text-xl font-black pt-5 ">Data Analytics</p>
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
                  <a  href='' className=" hover:bg-blue-950 hover:text-white transition-all text-xs font-semibold py-3 absolute invisible group-hover:visible border bg-amber-400 px-32"> Learn More</a>
                  </div>
                 
                  <div className=" self-end border-b mt-9  border-gray-500 "> </div>
                </div>
            </div>
            <div className="w-96 h-[32rem] rounded-3xl border border-slate-300 border-solid p-2.5 group relative">
              <div className="relative" >
              <img className="rounded-t-2xl h-60 w-full " src={buyCourseImage}/>
              <p className="absolute top-6 left-4 bg-white py-2 px-4 rounded-full text-xs"> <span className="font-black  ">2,452 </span>already enrolled!</p>
              </div>
              <div className="px-2.5 flex flex-col h-36 justify-around">
                <p className="text-xl font-black pt-5 ">Data Analytics</p>
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
                  <a  href='' className=" hover:bg-blue-950 hover:text-white transition-all text-xs font-semibold py-3 absolute invisible group-hover:visible border bg-amber-400 px-32"> Learn More</a>
                  </div>
                 
                  <div className=" self-end border-b mt-9  border-gray-500 "> </div>
                </div>
            </div>
            <div className="w-96 h-[32rem] rounded-3xl border border-slate-300 border-solid p-2.5 group relative">
              <div className="relative" >
              <img className="rounded-t-2xl h-60 w-full " src={buyCourseImage}/>
              <p className="absolute top-6 left-4 bg-white py-2 px-4 rounded-full text-xs"> <span className="font-black  ">2,452 </span>already enrolled!</p>
              </div>
              <div className="px-2.5 flex flex-col h-36 justify-around">
                <p className="text-xl font-black pt-5 ">Data Analytics</p>
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
                  <a  href='' className=" hover:bg-blue-950 hover:text-white transition-all text-xs font-semibold py-3 absolute invisible group-hover:visible border bg-amber-400 px-32"> Learn More</a>
                  </div>
                 
                  <div className=" self-end border-b mt-9  border-gray-500 "> </div>
                </div>
            </div>
            <div className="w-96 h-[32rem] rounded-3xl border border-slate-300 border-solid p-2.5 group relative">
              <div className="relative" >
              <img className="rounded-t-2xl h-60 w-full " src={buyCourseImage}/>
              <p className="absolute top-6 left-4 bg-white py-2 px-4 rounded-full text-xs"> <span className="font-black  ">2,452 </span>already enrolled!</p>
              </div>
              <div className="px-2.5 flex flex-col h-36 justify-around">
                <p className="text-xl font-black pt-5 ">Data Analytics</p>
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
                  <a  href='' className=" hover:bg-blue-950 hover:text-white transition-all text-xs font-semibold py-3 absolute invisible group-hover:visible border bg-amber-400 px-32"> Learn More</a>
                  </div>
                 
                  <div className=" self-end border-b mt-9  border-gray-500 "> </div>
                </div>
            </div>
            <div className="w-96 h-[32rem] rounded-3xl border border-slate-300 border-solid p-2.5 group relative">
              <div className="relative" >
              <img className="rounded-t-2xl h-60 w-full " src={buyCourseImage}/>
              <p className="absolute top-6 left-4 bg-white py-2 px-4 rounded-full text-xs"> <span className="font-black  ">2,452 </span>already enrolled!</p>
              </div>
              <div className="px-2.5 flex flex-col h-36 justify-around">
                <p className="text-xl font-black pt-5 ">Data Analytics</p>
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
                  <a  href='' className=" hover:bg-blue-950 hover:text-white transition-all text-xs font-semibold py-3 absolute invisible group-hover:visible border bg-amber-400 px-32"> Learn More</a>
                  </div>
                 
                  <div className=" self-end border-b mt-9  border-gray-500 "> </div>
                </div>
            </div>
          </section>
        
        </div>
      </main>
      {/* <section>
            <div className=""> */}
      {/* BG-IMG CLASS IMPORTED FROM APP.CSS */}
      {/* <div className="bg-img mt-20 text-white bg-cover bg-no-repeat bg-center h-64 md:h-[400px] " >
                    <div className=" w-3/4 m-auto pt-4">
                        <p className="mt-5 text-2xl ">
                            Courses 
                        </p>

                        <p className="text-sm mb-5 mt-2">
                            Empower your digital journey
                        </p>

                        <form action="/search" method="get">
                            <input type="text" placeholder='search' name='courses' className='p-1 w-full  rounded-xl md:w-1/2'/>
                        </form>

                        <div className=" mt-3 flex justify-between w-[150px]">
                            <button className=" text-sm bg-white text-black p-1 rounded-2xl hover:bg-slate-300 ">Free</button>
                            <button className="text-sm bg-white text-black p-1 rounded-2xl hover:bg-slate-300">Paid</button>
                            <button className="text-sm bg-white text-black p-1 rounded-2xl hover:bg-slate-300">All level</button>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
    </>
  );
}

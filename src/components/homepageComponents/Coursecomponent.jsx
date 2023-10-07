import React from 'react'
import Rating from '../Rating'
import track from "../../assets/homepageImages/track.jpg";
import picOne from "../../assets/homepageImages/pics1.png";
import {  FaChartBar, FaClock } from "react-icons/fa";

export default function Coursecomponent() {
  return (
    <div className="bg-white border border-zinc-300 rounded-lg p-3 text-left my-5">
    <img src={track} className="center w-[100%]" />
    <p className="font-bold py-4">Data Analysis</p>
    <div className="flex flex-wrap items-center">
      <img src={picOne} width={30} />
      <p className="ms-2 text-sm text-zinc-500">by Mac Kingsley</p>
    </div>
    <div className="flex flex-wrap items-center">
      <Rating rate={5} />
      <p className="text-sm mt-3 ms-3">4.50 (24)</p>
    </div>
    <div className="flex justify-between py-4 text-zinc-500 text-base">
      <div className="flex flex-wrap items-center">
        <FaClock className='icon' />
        <p className="ms-3">2hrs 30mins</p>
      </div>
      <div className="flex flex-wrap items-center">
        <FaChartBar className='icon' />
        <p className="ms-3">Beginner</p>
      </div>
    </div>
    <div className="flex flex-wrap justify-between py-4">
      <button className="text-purple-900 text-sm font-bold">
        View Course
      </button>
      <p className="text-purple-400 text-sm">Free</p>
    </div>
  </div>
  )
}

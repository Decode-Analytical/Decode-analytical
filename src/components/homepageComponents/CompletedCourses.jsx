import React from "react";
import courseImage from "../../assets/studentDashboard/Content.png";
import profilePic from "../../assets/studentDashboard/Profile.png";
import {FaStar, FaStarOfLife } from "react-icons/fa";
import Rating from "../Rating";

export default function CompletedCourses() {
  return (
    <div className="px-3 border border-zinc-400 shadow-xl center">
      <img src={courseImage} alt="computer" />
      <p className="text-grey text-[16px] font-semibold">
        Early Design and its Principle
      </p>
      
      <div className="flex flex-wrap items-center text-gray font-[13px] my-3">
        <FaStar className="text-yellow-500" />
        <p className="mx-3">4/5</p>
        <p>(124 verified ratings)</p>
      </div>
      <div className="flex flex-wrap items-center text-gray font-[13px] mb-10">
        <img src={profilePic} className="w-7 me-5" alt="instructorPicture" />
        <p>by Victoria Olayjojde</p>
      </div>
    </div>
  );
}

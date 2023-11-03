import React from "react";
import courseImage from "../../assets/studentDashboard/Content.png";
import profilePic from "../../assets/studentDashboard/Profile.png";
import { FaChartLine, FaClock, FaStar } from "react-icons/fa";
import Rating from "../Rating";

export default function CompletedCourses() {
  return (
    <div className="px-3 border border-lightGrey">
      <img src={courseImage} alt="computer" />
      <p className="text-grey text-[16px] font-semibold">
        Early Design and its Principle
      </p>
<div>
    <div className="flex flex-wrap justify-between">
    <div className="flex flex-wrap items-center">
        <FaClock />
        <p>00h 00m left</p>
    </div>
    <p className="font-bold">100% Complete</p>
    </div>
   
</div>
      <div className="flex flex-wrap items-center text-gray font-[13px] mb-10">
        <img src={profilePic} className="w-7 me-5" alt="studentPicture" />
        <p>by Victoria Olayode</p>
      </div>
      <div className="flex flex-wrap items-center text-gray font-[13px] my-3">
      <Rating rate={4} />
        <p className="mx-3">4/5</p>
        <p>(124 verified ratings)</p>
      </div>
      <div className="flex flex-wrap items-center">
        <FaChartLine />

        <p>Intermediate</p>
      </div>
    </div>
  );
}

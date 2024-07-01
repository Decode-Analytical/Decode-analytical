import React from "react";
import { FaFile, FaFolder, FaPeopleCarry } from "react-icons/fa";
import picFour from "../../assets/homepageImages/pics4.png";

export default function Values() {
    
  return (
    <div className="grid sm:grid-cols-2 items-center gap-6 py-28 px-[10%] lg:mt-20 valueDiv">
      <div>
        <h5 className="font-bold text-[25px] py-4 bigText text-center midFont">
          OUR CORE LEARNING VALUES
        </h5>
        <div className="flex items-start">
          <div className="mt-3 me-3 bg-zinc-200 p-2">
            <FaFolder className="text-purple-900" />
          </div>

          <div>
            <h6 className="font-bold text-[18px] py-2">
              Structured Learning Content
            </h6>
            <p className="text-sm mb-10">
              Explore structured learning content on Decode Analytical's
              platform. Access organized courses, quizzes, and resources. Enjoy
              enhanced understanding, progress tracking, and flexible learning
              at your pace for meaningful knowledge acquisition.
            </p>
          </div>
        </div>
        <div className="flex items-start mt-3">
          <div className="mt-3 me-3 bg-zinc-200 p-2">
            <FaFile className="text-purple-900" />
          </div>
          <div>
            <h6 className="font-bold text-[18px] py-2">
              Skills and Value Oriented
            </h6>
            <p className="text-sm mb-10">
              Decode Analytical offers skills and value-oriented courses.
              Acquire practical expertise, align with industry demands, and
              enhance employability. Gain tangible skills for real-world success
              in a dynamic learning environment.
            </p>
          </div>
        </div>
        <div className="flex items-start mt-3">
          <div className="mt-3 me-3 bg-zinc-200 p-2">
            <FaPeopleCarry className="text-purple-900" />
          </div>
          <div>
            <h6 className="font-bold text-[18px] py-2">
              Professional And Quality Instructors
            </h6>
            <p className="text-sm mb-10">
              Learn from professional instructors on Decode Analytical. Benefit
              from their expertise, industry insights, and quality teaching.
              Gain practical skills and knowledge for personal and professional
              growth.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <img src={picFour} width={400} className="self-end" />
      </div>
    </div>
  );
}

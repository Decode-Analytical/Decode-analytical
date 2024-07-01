import React from "react";
import { MdOutlineArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";

const CourseTileGroup = ({ data, date }) => {
  return (
    <div className="mt-7">
      <p className="mb-5 font-semibold text-sm">{date}</p>
      {data.map(({ courseImg, title, text }, index) => (
        <div key={index} className="flex items-start gap-x-3 my-2">
          <div>
            <img src={courseImg} className="w-16" alt="" />
          </div>
          <div>
            <h2 className="font-semibold">{title}</h2>
            <p className="text-[11px]">{text} sold</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const CourseCard = ({ title, sub, to, courseData }) => {
  return (
    <div className="bg-shadow rounded-md p-5 flex-1">
      <div className="">
        <div className="flex justify-between">
          <h2 className="font-bold text-xl mb-1">{title}</h2>
          <select
            className="w-[110px] rounded-lg bg-white text-sm"
            name=""
            id=""
          >
            <option value="weekly">This Week</option>
            <option value="monthly">This Month</option>
          </select>
        </div>
        <p>{sub}</p>
      </div>
      <div className="h-[250px] overflow-scroll my-4">
        <div className="">
          {courseData.map(({ date, data }, index) => (
            <CourseTileGroup key={index} date={date} data={data} />
          ))}
        </div>
      </div>

      <Link className="font-semibold flex items-center gap-3 mt-10" to={to}>
        VIEW DETAILS
        <MdOutlineArrowForward className="text-xl" />
      </Link>
    </div>
  );
};

export default CourseCard;

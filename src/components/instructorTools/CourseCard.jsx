import React from "react";
import DetailsCard from "./DetailsCard";

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
    <DetailsCard title={title} sub={sub} to={to} minW={"419"}>
      <div className="h-[250px] overflow-scroll my-4">
        <div className="">
          {courseData.map(({ date, data }, index) => (
            <CourseTileGroup key={index} date={date} data={data} />
          ))}
        </div>
      </div>
    </DetailsCard>
  );
};

export default CourseCard;

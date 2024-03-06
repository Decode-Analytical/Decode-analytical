import React from "react";

const CourseTile = ({ courseImg, title, text }) => {
  return (
    <div className="flex items-start gap-x-3">
      <div>
        <img
          src={courseImg}
          className="w-[83px] h-[63px] rounded-lg object-cover"
          alt=""
        />
      </div>
      <div>
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-sm font-light">{text} sold</p>
      </div>
    </div>
  );
};

export default CourseTile;

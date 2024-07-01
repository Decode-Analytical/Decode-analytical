import React from "react";

const CourseTile = ({ courseImg, title, text }) => {
  return (
    <div className="flex items-start gap-x-3 my-2 p-3 rounded-lg bg-gray1">
      <div>
        <img src={courseImg} className="w-[90px]" alt="" />
      </div>
      <div>
        <h2 className="font-semibold">{title}</h2>
        <p className="text-[11px]">{text} sold</p>
      </div>
    </div>
  );
};

const TopPerformances = ({ data }) => {
  return (
    <div className="bg-shadow mt-20 rounded-md p-5 flex-1">
      <h2 className="font-bold text-xl mb-1">Top Performances</h2>
      <p>See best selling courses performances</p>
      <div className="h-[550px] overflow-scroll my-4">
        <div className="">
          {data.map(({ courseImg, title, text }, index) => (
            <CourseTile
              key={index}
              courseImg={courseImg}
              title={title}
              text={text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPerformances;

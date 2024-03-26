import React from "react";
import CountUp from "react-countup";

const StatsCard = ({ minW, title, count, className }) => {
  return (
    <div
      className={`bg-shadow rounded-md flex-1 px-5 py-10  min-w-[${minW}px] ${className}`}
    >
      <div className="flex flex-col justify-between gap-4">
        <p className="text-lg">{title}</p>
        <h1 className="font-bold">
          {<CountUp start={0} end={count} duration={2} separator="," />}
        </h1>
      </div>
    </div>
  );
};

export default StatsCard;

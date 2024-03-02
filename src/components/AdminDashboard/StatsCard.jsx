import React from "react";

const StatsCard = ({ minW, title, count }) => {
  return (
    <div className={`bg-shadow rounded-md px-5 py-10 flex-1 min-w-[${minW}px]`}>
      <div className="flex flex-col justify-between gap-4">
        <p className="text-lg">{title}</p>
        <h1 className="font-bold">{count}</h1>
      </div>
    </div>
  );
};

export default StatsCard;

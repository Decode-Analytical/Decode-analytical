import React from "react";

const ChartHeader = () => {
  return (
    <div className="mb-16">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl ">Sales Analytics</h2>
        <div className="flex gap-6">
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 rounded-full bg-blue1" />
            <p>Purchases</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 rounded-full bg-gray2" />
            <p>Views</p>
          </div>
          <select
            className="w-[110px] px-1 rounded-lg bg-white text-sm"
            name=""
            id=""
          >
            <option value="weekly">This Week</option>
            <option value="monthly">This Month</option>
          </select>
        </div>
      </div>
      <p className="text-2xl my-2 ">Sales analysis for courses</p>
      <select
        className="w-[210px] py-2 px-1 rounded-lg bg-white text-sm"
        name=""
        id=""
      >
        <option value="mental">Mental Growth Hack</option>
        {/* <option value="monthly">This Month</option> */}
      </select>
    </div>
  );
};

export default ChartHeader;

import React from "react";

const SalesStats = ({ heading, sub, count, title, customClass }) => {
  return (
    <div
      className={`bg-shadow flex flex-col items-center rounded-md sm:w-fit flex-1 p-5  ${customClass} justify-center`}
    >
      <div className="px-5 w-full">
        <div className="flex flex-col-reverse justify-between gap-4">
          <h2 className="font-bold text-xl text-center mb-1">{heading}</h2>
          <div className="flex flex-col sm2:flex-row justify-center items-center gap-3">
            <div>
              <p className="text-[10px]">From</p>
              <input
                type="date"
                className="px-2 rounded-lg h-5 w-[105px] text-[10px] bg-transparent"
              />
            </div>
            <div>
              <p className="text-[10px]">To</p>
              <input
                type="date"
                className="px-2 rounded-lg h-5 w-[105px] text-[10px] bg-transparent"
              />
            </div>
          </div>
        </div>
        <p className="text-center">{sub}</p>
        <div className="flex flex-col justify-between gap-4">
          <p className="text-lg text-center">{title}</p>
          <h1 className="font-bold text-2xl md:text-3xl text-center">
            {count}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SalesStats;

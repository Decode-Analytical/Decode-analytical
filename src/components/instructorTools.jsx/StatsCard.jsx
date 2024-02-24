import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowForward } from "react-icons/md";

const StatsCard = ({ title, sub, count, earning, to }) => {
  return (
    <div className="bg-shadow rounded-md p-5 flex-1">
      <div className="flex justify-between gap-4">
        <h2 className="font-bold text-xl mb-1">{title}</h2>
        <select className="w-[110px] rounded-lg bg-white text-sm" name="" id="">
          <option value="weekly">This Week</option>
          <option value="monthly">This Month</option>
        </select>
      </div>
      <p className="">{sub}</p>
      <h1 className="font-bold text-3xl mt-6 mb-4">{count}</h1>
      <p className="text-green-500">{earning}</p>
      <Link className="font-semibold flex items-center gap-3 mt-10" to={to}>
        VIEW DETAILS
        <MdOutlineArrowForward className="text-xl" />
      </Link>
    </div>
  );
};

export default StatsCard;

import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  // Legend,
  // Rectangle,
  ResponsiveContainer,
  // Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AnalyticsBarchart = ({ data, title, sub, legend1, legend2 }) => {
  return (
    <>
      <div className="mb-16">
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl ">{title}</h2>
          <div className="flex gap-6">
            <div className="flex gap-2 items-center">
              <div className="w-4 h-4 rounded-full bg-blue1" />
              <p>{legend1 || "Purchases"}</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-4 h-4 rounded-full bg-gray2" />
              <p>{legend2 || "Views"}</p>
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
        <p className="text-2xl my-2 ">{sub}</p>
        <select
          className="w-[210px] py-2 px-1 rounded-lg bg-white text-sm"
          name=""
          id=""
        >
          <option value="mental">Mental Growth Hack</option>
          {/* <option value="monthly">This Month</option> */}
        </select>
      </div>

      <ResponsiveContainer width="100%" height="60%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="course" />
          <YAxis />
          {/* <Tooltip />
          <Legend /> */}
          <Bar dataKey="purchases" stackId="a" fill="#040E53" />
          <Bar dataKey="views" stackId="a" fill="#D2D6F2" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default AnalyticsBarchart;

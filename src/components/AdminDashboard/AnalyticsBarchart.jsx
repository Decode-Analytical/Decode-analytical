import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  // Legend,
  // Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  useFetchMonthlyAnalytics,
  useFetchWeeklyAnalytics,
} from "../../hooks/useFetchAdmin";
import PageLoader from "../loader/PageLoader";

const AnalyticsBarchart = ({ data, title, sub, legend1, legend2 }) => {
  const [date, setdate] = useState("weekly");

  const {
    fetchData: fetchWeeklyAnalytics,
    data: weekly,
    isLoading: isLoadingWeekly,
  } = useFetchWeeklyAnalytics();
  const {
    fetchData: fetchMonthlyAnalytics,
    data: monthly,
    isLoading: isLoadingMonthly,
  } = useFetchMonthlyAnalytics();

  useEffect(() => {
    fetchWeeklyAnalytics();
    fetchMonthlyAnalytics();
  }, []);

  const weeklyData = weekly?.salesAnalytics;
  const monthlyData = monthly?.salesAnalytics;

  const handleDateChange = (e) => {
    setdate(e.target.value);
  };

  if (isLoadingWeekly || isLoadingMonthly) {
    return <PageLoader />;
  }

  return (
    <>
      <div className="mb-16">
        <div className="flex flex-col-reverse gap-3 md:flex-row justify-between mr-5">
          <h2 className="font-bold text-2xl ">{title}</h2>
          <div className="flex md:gap-6">
            <div className="flex">
              {/* <div className="flex gap-2 items-center">
              <div className="w-4 h-4 rounded-full bg-blue1" />
              <p>{legend1 || "Purchases"}</p>
              </div>
              <div className="flex gap-2 items-center">
              <div className="w-4 h-4 rounded-full bg-gray2" />
              <p>{legend2 || "Views"}</p>
            </div> */}
            </div>
            <select
              className="w-[110px] px-1 rounded-md bg-white text-sm"
              name=""
              id=""
              onChange={handleDateChange}
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
      {/* <div className="px-4"> */}
      <div className="overflow-x-auto">
        <div className="w-[600px] h-[350px] md:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              // data={data}
              data={date === "weekly?" ? weeklyData : monthlyData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={date === "weekly?" ? "week" : "month"} />
              <YAxis />
              {/* <Tooltip /> */}
              {/* <Legend /> */}
              <Bar dataKey="totalSales" stackId="a" fill="#040E53" />
              {/* <Bar dataKey="views" stackId="a" fill="#D2D6F2" /> */}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default AnalyticsBarchart;

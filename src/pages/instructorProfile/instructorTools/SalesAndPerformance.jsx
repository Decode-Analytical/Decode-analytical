import React from "react";
import Layout from "../../../components/Layout";
import StatsCard from "../../../components/instructorTools.jsx/StatsCard";
import {
  CourseCardData,
  PerformanceCardData,
  StatCardData,
} from "../../../utils/Constants";
import CourseCard from "../../../components/instructorTools.jsx/CourseCard";
import TopPerformances from "../../../components/instructorTools.jsx/TopPerformances";

const SalesAndPerformance = () => {
  return (
    <div>
      <Layout>
        <h2 className="font-bold text-2xl mb-12">Sales And Performance</h2>
        <div className="flex items-center justify-between gap-6 w-full">
          {StatCardData.map(({ title, sub, count, earning, to }, index) => (
            <StatsCard
              key={index}
              title={title}
              sub={sub}
              count={count}
              earning={earning}
              to={to}
            />
          ))}
        </div>
        <div className="mt-20 flex justify-between gap-14">
          <CourseCard
            title={"Original Course Sales"}
            sub={"See analysis for courses"}
            to={"/InstrucructorProfile/tools/sales/sales-history"}
            courseData={CourseCardData}
          />
          <CourseCard
            title={"Live Session Sales"}
            sub={"See analysis for live lessons"}
            to={"/InstrucructorProfile/tools/sales/sales-history"}
            courseData={CourseCardData}
          />
        </div>
        <div>
          <TopPerformances data={PerformanceCardData} />
        </div>
      </Layout>
    </div>
  );
};

export default SalesAndPerformance;

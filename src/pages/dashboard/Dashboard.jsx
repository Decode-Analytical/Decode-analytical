import React from "react";
import ProfileLayout from "../../components/ProfileLayout";
import StatsCard from "../../components/AdminDashboard/StatsCard";
import { AnalyticsData, DashStatsData } from "../../utils/Constants";
import AnalyticsBarchart from "../../components/AdminDashboard/AnalyticsBarchart";

const Dashboard = () => {
  return (
    <ProfileLayout title={"Dashboard"}>
      <h2 className="font-bold mb-20 text-2xl">Welcome back, Gabriella</h2>

      <div className="flex flex-1 gap-8 flex-wrap">
        {DashStatsData.map(({ title, count }) => (
          <StatsCard minW={"200"} title={title} count={count} />
        ))}
      </div>
      <div className="h-[700px] mt-16 bg-shadow rounded-md px-[80px] py-10">
        <AnalyticsBarchart
          data={AnalyticsData}
          title={"Sales Analytics"}
          sub={"Sales analysis for courses"}
        />
      </div>
      <div className="h-10"></div>
      <div className="h-[700px] mt-16 bg-shadow rounded-md px-[80px] py-10">
        <AnalyticsBarchart
          data={AnalyticsData}
          title={"Sales Analytics"}
          sub={"Sales analysis for courses"}
        />
      </div>
    </ProfileLayout>
  );
};

export default Dashboard;

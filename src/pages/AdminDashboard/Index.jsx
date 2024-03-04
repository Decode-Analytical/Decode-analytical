import React from "react";
import StatsCard from "../../components/AdminDashboard/StatsCard";
import AnalyticsBarchart from "../../components/AdminDashboard/AnalyticsBarchart";
import ProfileLayout from "../../components/ProfileLayout";
import { AnalyticsData, DashStatsData } from "../../utils/Constants";

const AdminDashboard = () => {
  const authUser = JSON.parse(localStorage.getItem("user")).user;

  return (
    <ProfileLayout title={"Dashboard"}>
      <h2 className="font-bold mb-20 text-2xl">
        Welcome back, {authUser.firstName}
      </h2>

      <div className="flex flex-1 gap-8 flex-wrap">
        {DashStatsData.map(({ title, count }, index) => (
          <StatsCard key={index} minW={"200"} title={title} count={count} />
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

export default AdminDashboard;

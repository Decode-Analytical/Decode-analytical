import React, { useState, useEffect } from "react";
import StatsCard from "../../components/AdminDashboard/StatsCard";
import AnalyticsBarchart from "../../components/AdminDashboard/AnalyticsBarchart";
import ProfileLayout from "../../components/ProfileLayout";
import { AnalyticsData, DashStatsData } from "../../utils/Constants";
import {
  useFetchAllRegStudents,
  useFetchCourseVisit,
  useFetchCoursesCreated,
  useFetchReviews,
} from "../../hooks/useFetchAdmin";

const AdminDashboard = ({ className }) => {
  const authUser = JSON.parse(localStorage.getItem("user")).user;

  const { fetchAllRegStudents, allRegStudents, isLoading, error } =
    useFetchAllRegStudents();
  const {
    fetchCourseVisit,
    courseVisit,
    isLoading: courseVisitIsloading,
    error: courseVisitError,
  } = useFetchCourseVisit();

  const {
    fetchCoursesCreated,
    coursesCreated,
    isLoading: courseCreatedIsloading,
    error: courseCreatedError,
  } = useFetchCoursesCreated();

  const {
    fetchReviews,
    reviews,
    isLoading: reviewsIsloading,
    error: reviewsError,
  } = useFetchReviews();

  useEffect(() => {
    fetchAllRegStudents();
    fetchCourseVisit();
    fetchCoursesCreated();
    fetchReviews();
  }, []);

  return (
    <ProfileLayout title={"Dashboard"}>
      <h2 className="font-bold mb-14 text-2xl">
        Welcome back, {authUser.firstName}
      </h2>

      <div className="flex flex-1 flex-wrap gap-8">
        <div className="flex flex-1 flex-wrap gap-8 w-full">
          <StatsCard
            minW={"200"}
            title="Total Students"
            count={allRegStudents}
          />
          <StatsCard
            minW={"200"}
            title="Daily Course Visit"
            count={courseVisit}
          />
        </div>
        <div className="flex flex-1 flex-wrap gap-8 w-full">
          <StatsCard
            minW={"200"}
            title="Courses Created"
            count={coursesCreated}
          />
          <StatsCard minW={"200"} title="Reviews" count={reviews} />
        </div>
      </div>
      <div className="h-[800px] mt-16 bg-shadow rounded-md px-3 lg:px-[80px] py-10 overflow-x-auto">
        <div className="w-[700px] py-11">
          <AnalyticsBarchart
            data={AnalyticsData}
            title={"Sales Analytics"}
            sub={"Sales analysis for courses"}
          />
        </div>
      </div>
      {/* <div className="h-[700px] mt-16 bg-shadow rounded-md px-3 lg:px-[80px] py-10">
        <AnalyticsBarchart
          data={AnalyticsData}
          title={"Sales Analytics"}
          sub={"Sales analysis for courses"}
        />
      </div> */}
    </ProfileLayout>
  );
};

export default AdminDashboard;

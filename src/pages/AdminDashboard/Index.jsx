import React, { useEffect } from "react";
import StatsCard from "../../components/AdminDashboard/StatsCard";
import AnalyticsBarchart from "../../components/AdminDashboard/AnalyticsBarchart";
import ProfileLayout from "../../components/ProfileLayout";
import { AnalyticsData } from "../../utils/Constants";
import {
  useFetchAdminCourses,
  useFetchAllRegStudents,
  useFetchCourseVisit,
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
    fetchReviews,
    reviews,
    isLoading: reviewsIsloading,
    error: reviewsError,
  } = useFetchReviews();

  const {
    fetchCourses,
    courses,
    isLoading: adminCoursesLoading,
    error: adminCoursesError,
  } = useFetchAdminCourses();

  useEffect(() => {
    fetchAllRegStudents();
    fetchCourseVisit();
    fetchCourses();
    fetchReviews();
  }, []);

  return (
    <ProfileLayout title={"Dashboard"}>
      <h2 className="font-bold mb-14 text-2xl">
        Welcome back, {authUser?.firstName}
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
            count={courses?.length}
          />
          <StatsCard minW={"200"} title="Reviews" count={reviews} />
        </div>
      </div>
      <div className="h-[700px] mt-16 bg-shadow rounded-md px-3 lg:px-[80px] pt-10 overflow-x-auto">
        <div className="w-[700px] md:w-full mx-4 h-[600px] pt-11">
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

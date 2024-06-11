import React, { useContext, useEffect, useMemo } from "react";
import StatsCard from "../../components/AdminDashboard/StatsCard";
import AnalyticsBarchart from "../../components/AdminDashboard/AnalyticsBarchart";
// import ProfileLayout from "../../components/layout/AdminProfileLayout";
import { AnalyticsData } from "../../utils/Constants";
import {
  useFetchAdminCourses,
  useFetchCourseVisit,
  useFetchRegStudents,
  useFetchReviews,
} from "../../hooks/useFetchAdmin";
// import { UserProfileContext } from "../../context/UserProfileContext";
import PageLoader from "../../components/loader/PageLoader";
import { AuthContext } from "../../context/AuthContext";

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);

  const userProfile = user?.user;

  const {
    fetchData: fetchRegStudents,
    data: regStudents,
    isLoading: regStudentsLoading,
    // error: regStudentsError,
  } = useFetchRegStudents();
  const {
    fetchData: fetchCourseVisit,
    data: courseVisit,
    isLoading: courseVisitLoading,
    // error: courseVisitError,
  } = useFetchCourseVisit();
  const {
    fetchData: fetchCourses,
    data: courses,
    isLoading: coursesLoading,
    // error: coursesError,
  } = useFetchAdminCourses();
  const {
    fetchData: fetchReviews,
    data: reviews,
    isLoading: reviewsLoading,
    // error: reviewsError,
  } = useFetchReviews();

  useEffect(() => {
    fetchRegStudents();
    fetchCourseVisit();
    fetchCourses();
    fetchReviews();
  }, []);

  const regStudentsData = regStudents?.count;
  const courseVisitData = courseVisit?.visitCount;
  const coursesLength = courses?.courses?.length;
  const reviewsLength = reviews?.reviews?.length;

  if (
    regStudentsLoading ||
    courseVisitLoading ||
    coursesLoading ||
    reviewsLoading
  ) {
    return <PageLoader />;
  }

  return (
    <>
      <h2 className="font-bold mb-3 md:mb-14 text-xl md:text-2xl">
        Welcome back, {userProfile?.firstName}
      </h2>
      <div className="flex flex-1 flex-wrap gap-8">
        <div className="flex flex-1 flex-wrap gap-8 w-full">
          <StatsCard
            minW={"200"}
            title="Total Students"
            count={regStudentsData}
          />
          <StatsCard
            minW={"200"}
            title="Daily Course Visit"
            count={courseVisitData}
          />
        </div>
        <div className="flex flex-1 flex-wrap gap-8 w-full">
          <StatsCard
            minW={"200"}
            title="Courses Created"
            count={coursesLength}
          />
          <StatsCard minW={"200"} title="Reviews" count={reviewsLength} />
        </div>
      </div>
      <div className="h-[700px] mt-16 bg-shadow rounded-md px-3 lg:px-[80px] pt-10">
        <div className="md:w-full mx-4 pt-2 md:pt-11">
          <AnalyticsBarchart
            data={AnalyticsData}
            title={"Sales Analytics"}
            sub={"Sales analysis for courses"}
          />
        </div>
      </div>
      <div className="h-[700px] mt-16 bg-shadow rounded-md px-3 lg:px-[80px] pt-10">
        <div className="md:w-full mx-4 pt-2 md:pt-11">
          <AnalyticsBarchart
            data={AnalyticsData}
            title={"Best Selling Course"}
            sub={"See analysis for your best selling course"}
          />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;

import React, { useEffect } from "react";
import ProfileLayout from "../../../components/ProfileLayout";
import CourseCard from "../../../components/adminTools/CourseCard";
import SalesStats from "../../../components/adminTools/SalesStats";
import TopPerformances from "../../../components/adminTools/TopPerformances";
import { currencyFormatter } from "../../../utils/functn";
import { Heading } from "../../../components/Heading";
import { useFetchAdminCourses } from "../../../hooks/useFetchAdminCourses";
import { useFetchAdminSessions } from "../../../hooks/useFetchAdminSession";

const SalesAndPerformance = () => {
  const { fetchCourses, courses, isLoading, error } = useFetchAdminCourses();

  const {
    fetchSessions,
    sessions,
    isLoading: sessionLoading,
    error: sessionError,
  } = useFetchAdminSessions();

  useEffect(() => {
    fetchCourses();
    fetchSessions();
  }, []);

  const totalRevenue = courses
    ?.map((item) => item.isPrice_course * item.totalRegisteredByStudent)
    .reduce((a, b) => a + b, 0);

  const purchases = courses
    .map((i) => i.totalRegisteredByStudent)
    .reduce((a, b) => a + b, 0);

  return (
    <div>
      <ProfileLayout>
        <Heading title={"Sales And Performance"} />
        <div className="flex flex-wrap items-center justify-between gap-6 w-full">
          <SalesStats
            heading={"Total Revenue"}
            // title={title}
            sub={"See all earnings over time"}
            count={currencyFormatter(totalRevenue)}
            // earning={earning}
            // to={to}
          />

          <SalesStats
            heading={"Sales"}
            // title={title}
            sub={"See all periodical sales"}
            count={"₦234"}
            // earning={earning}
            // to={to}
          />

          <SalesStats
            heading={"Purchases"}
            // title={title}
            sub={"See numbers of purchases"}
            count={purchases}
            // earning={earning}
            // to={to}
          />
        </div>
        <div className="mt-20 flex flex-wrap justify-between gap-14">
          <CourseCard
            heading={"Original Course Sales"}
            sub={"See analysis for courses"}
            to={"/admin-dashboard/tools/sales-performance/sales-history"}
            courseData={courses}
            isLoading={isLoading}
            error={error}
          />
          <CourseCard
            heading={"Live Session Sales"}
            sub={"See analysis for live lessons"}
            to={"/admin-dashboard/tools/sales-performance/sales-history"}
            courseData={sessions}
            isLoading={sessionLoading}
            error={sessionError}
          />
        </div>
        <div>
          <TopPerformances isLoading={isLoading} data={courses} />
        </div>
      </ProfileLayout>
    </div>
  );
};

export default SalesAndPerformance;

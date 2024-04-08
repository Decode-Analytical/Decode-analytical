import React, { useEffect } from "react";
import ProfileLayout from "../../../components/layout/AdminProfileLayout";
import CourseCard from "../../../components/adminTools/CourseCard";
import SalesStats from "../../../components/adminTools/SalesStats";
import TopPerformances from "../../../components/adminTools/TopPerformances";
import { currencyFormatter } from "../../../utils/functn";
import { Heading } from "../../../components/Heading";
import {
  useFetchAdminCourses,
  useFetchAdminSessions,
} from "../../../hooks/useFetchAdmin";
import SessionCard from "../../../components/adminTools/SessionCard";
import CountUp from "react-countup";

const SalesAndPerformance = () => {
  const {
    fetchData: fetchCourses,
    data: courses,
    isLoading: coursesLoading,
    error: coursesError,
  } = useFetchAdminCourses();

  const {
    fetchData: fetchSessions,
    data: session,
    isLoading: sessionsLoading,
    error: sessionsError,
  } = useFetchAdminSessions();

  useEffect(() => {
    fetchCourses();
    fetchSessions();
  }, []);

  const coursesData = courses?.courses;
  const sessionsData = session?.meeting;

  const totalRevenue = coursesData
    ?.map((item) => item.isPrice_course * item.totalRegisteredByStudent)
    .reduce((a, b) => a + b, 0);

  const purchases = coursesData
    ?.map((i) => i.totalRegisteredByStudent)
    .reduce((a, b) => a + b, 0);

  return (
    <div>
      <ProfileLayout>
        <Heading title={"Sales And Performance"} />
        <div className="flex flex-col sm:flex-row flex-wrap items-stretch justify-between gap-6 w-full">
          <SalesStats
            customClass={"min-w-[250px]"}
            heading={"Total Revenue"}
            sub={"See all earnings over time"}
            count={
              <CountUp
                start={0}
                end={totalRevenue}
                duration={2}
                separator=","
                formattingFn={currencyFormatter}
              />
            }
          />

          <SalesStats
            customClass={"min-w-[250px]"}
            heading={"Purchases"}
            sub={"See numbers of purchases"}
            count={
              <CountUp start={0} end={purchases} duration={2} separator="," />
            }
          />

          <SalesStats
            customClass={"min-w-[250px]"}
            heading={"Sales"}
            sub={"See all periodical sales"}
            count={<CountUp start={0} end={123} duration={2} separator="," />}
          />
        </div>
        <div className="mt-20 flex flex-col sm:flex-row flex-wrap justify-between gap-8 lg:gap-14">
          <CourseCard
            heading={"Original Course Sales"}
            sub={"See analysis for courses"}
            to={"/admin-dashboard/tools/sales-performance/sales-history"}
            courseData={coursesData}
            isLoading={coursesLoading}
            error={coursesError}
            viewDetails
          />
          <SessionCard
            heading={"Live Session Sales"}
            sub={"See analysis for live lessons"}
            to={"/admin-dashboard/tools/sales-performance/sales-history"}
            courseData={sessionsData}
            isLoading={sessionsLoading}
            error={sessionsError}
            viewDetails
          />
        </div>
        <div>
          <TopPerformances
            isLoading={coursesLoading}
            data={coursesData}
            error={coursesError}
          />
        </div>
      </ProfileLayout>
    </div>
  );
};

export default SalesAndPerformance;

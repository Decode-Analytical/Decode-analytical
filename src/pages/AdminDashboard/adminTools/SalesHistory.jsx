import React, { useEffect } from "react";
import ProfileLayout from "../../../components/layout/AdminProfileLayout";
// import CourseSalesTable from "../../../components/adminTools/CourseSalesTable";
import { Heading } from "../../../components/Heading";
import Tab from "../../../components/Tab";
import {
  useFetchAdminCourses,
  useFetchAdminSessions,
} from "../../../hooks/useFetchAdmin";
import LiveSalesTable from "../../../components/adminTools/LiveSalesTable";
import CourseSalesTable from "../../../components/adminTools/CourseSalesTable";

const SalesHistory = () => {
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

  return (
    <ProfileLayout px={"4"}>
      <Heading title={"Sales History"} ml={"4"} />
      <Tab
        title1={"Original Course"}
        child1={
          <div className="overflow-x-auto">
            <div className="w-[800px] md:w-full">
              <CourseSalesTable
                data={coursesData}
                isLoading={coursesLoading}
                error={coursesError}
              />
            </div>
          </div>
        }
        title2={"Live Session"}
        child2={
          <div className="overflow-x-auto">
            <div className="w-[800px] md:w-full">
              <LiveSalesTable
                data={sessionsData}
                isLoading={sessionsLoading}
                error={sessionsError}
              />
            </div>
          </div>
        }
      />
    </ProfileLayout>
  );
};

export default SalesHistory;

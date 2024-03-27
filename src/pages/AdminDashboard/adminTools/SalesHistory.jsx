import React, { useEffect } from "react";
import ProfileLayout from "../../../components/ProfileLayout";
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

  return (
    <ProfileLayout px={"4"}>
      <Heading title={"Sales History"} ml={"4"} />
      <Tab
        title1={"Original Course"}
        child1={
          <div className="overflow-x-auto">
            <div className="w-[800px] md:w-full">
              <CourseSalesTable
                data={courses}
                isLoading={isLoading}
                error={error}
              />
            </div>
          </div>
        }
        title2={"Live Session"}
        child2={
          <div className="overflow-x-auto">
            <div className="w-[800px] md:w-full">
              <LiveSalesTable
                data={sessions}
                isLoading={sessionLoading}
                error={sessionError}
              />
            </div>
          </div>
        }
      />
    </ProfileLayout>
  );
};

export default SalesHistory;

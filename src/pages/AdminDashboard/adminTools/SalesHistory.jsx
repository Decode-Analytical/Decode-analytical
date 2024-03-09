import React, { useEffect } from "react";
import ProfileLayout from "../../../components/ProfileLayout";
import SalesTable from "../../../components/adminTools/SalesTable";
import { Heading } from "../../../components/Heading";
import Tab from "../../../components/Tab";
import { useFetchAdminCourses } from "../../../hooks/useFetchAdminCourses";
import { useFetchAdminSessions } from "../../../hooks/useFetchAdminSession";

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
          <SalesTable data={courses} isLoading={isLoading} error={error} />
        }
        title2={"Live Session"}
        child2={
          <SalesTable
            data={sessions}
            isLoading={sessionLoading}
            error={sessionError}
          />
        }
      />
    </ProfileLayout>
  );
};

export default SalesHistory;

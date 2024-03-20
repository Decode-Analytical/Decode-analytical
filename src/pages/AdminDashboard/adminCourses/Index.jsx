import React, { useState, useEffect } from "react";
import ProfileLayout from "../../../components/ProfileLayout";
import { IoIosAdd } from "react-icons/io";
import StatsCard from "../../../components/AdminDashboard/StatsCard";
import CourseBanner from "../../../components/adminCourses/CourseBanner";
import { CompletedCourses, OngoingCourses } from "../../../utils/Constants";
import Button from "../../../components/Button";
import { useFetchCourseVisit, useFetchCoursesCreated } from "../../../hooks/useFetchAdmin";

const AdminCourses = () => {
  const { fetchCourseVisit, 
    courseVisit, 
    isLoading: courseVisitIsloading, 
    error: courseVisitError } = useFetchCourseVisit();

    const { fetchCoursesCreated, 
      coursesCreated, 
      isLoading: courseCreatedIsloading, 
      error: courseCreatedError } = useFetchCoursesCreated();

    useEffect(() => {
     fetchCourseVisit()
     fetchCoursesCreated()
    }, [])
    
  return (
    <ProfileLayout title={"Courses"}>
      <div className="flex justify-end">
        <Button leftIcon={<IoIosAdd className="font-extrabold text-xl" />}>
          New Course
        </Button>
      </div>
      <div className="flex gap-20 mt-[65px] ">
        <StatsCard title={"Courses Created"} count={coursesCreated} />
        <StatsCard title={"Daily Course Visit"} count={courseVisit} />
      </div>
      <div className="my-[45px]">
        <h2 className="font-bold text-2xl">Ongoing</h2>
        {OngoingCourses.map(({ id, courseImg, title, progress, level }) => (
          <CourseBanner
            title={title}
            key={id}
            img={courseImg}
            progress={progress}
            level={level}
            ongoing
          />
        ))}
      </div>
      <div>
        <h2 className="font-bold text-2xl">Completed</h2>
        {CompletedCourses.map(({ id, courseImg, title, progress, level }) => (
          <CourseBanner
            title={title}
            key={id}
            img={courseImg}
            progress={progress}
            level={level}
            completed
          />
        ))}
      </div>
    </ProfileLayout>
  );
};

export default AdminCourses;

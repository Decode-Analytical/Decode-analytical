import React, { useState, useEffect } from "react";
import ProfileLayout from "../../../components/ProfileLayout";
import { IoIosAdd } from "react-icons/io";
import StatsCard from "../../../components/AdminDashboard/StatsCard";
import CourseBanner from "../../../components/adminCourses/CourseBanner";
import { CompletedCourses, OngoingCourses } from "../../../utils/Constants";
import Button from "../../../components/Button";
import {
  useFetchAdminCourses,
  useFetchCourseVisit,
} from "../../../hooks/useFetchAdmin";
import BannerSkeleton from "../../../components/adminCourses/BannerSkeleton";
import { Link } from "react-router-dom";

const AdminCourses = () => {
  const {
    fetchCourseVisit,
    courseVisit,
    isLoading: courseVisitIsloading,
    error: courseVisitError,
  } = useFetchCourseVisit();

  const { fetchCourses, courses, isLoading, error } = useFetchAdminCourses();

  useEffect(() => {
    fetchCourseVisit();
    fetchCourses();
  }, []);

  return (
    <ProfileLayout title={"Courses"}>
      <div className="flex justify-end">
        <Link
          className="flex items-center py-3 px-4 rounded-lg font-extrabold gap-2 bg-blue1 text-white"
          to={"/admin-dashboard/courses/create-new-course"}
        >
          <div className="flex gap-2 items-center">
            <IoIosAdd className="font-extrabold text-2xl" />
            <p>New Course</p>
          </div>
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row gap-7 lg:gap-20 mt-[65px] ">
        <StatsCard title={"Courses Created"} count={courses?.length} />
        <StatsCard title={"Daily Course Visit"} count={courseVisit} />
      </div>
      <div className="my-[45px]">
        <h2 className="font-bold text-2xl">Ongoing</h2>
        {isLoading ? (
          <>
            <BannerSkeleton />
            <BannerSkeleton />
            {/* <BannerSkeleton /> */}
          </>
        ) : (
          <div>
            {courses
              .filter((item) => item.isUploadedCompleted === false)
              .map((item, i) => (
                <CourseBanner
                  title={item?.course_title}
                  key={item?._id}
                  img={item?.course_image[0]?.path}
                  progress={50}
                  level={item?.course_level}
                  ongoing
                />
              ))}
          </div>
        )}
      </div>
      <div>
        <h2 className="font-bold text-2xl">Completed</h2>
        {isLoading ? (
          <>
            <BannerSkeleton />
            <BannerSkeleton />
            <BannerSkeleton />
          </>
        ) : (
          <div>
            {courses
              .filter((item) => item.isUploadedCompleted === true)
              .map((item) => (
                <CourseBanner
                  title={item?.course_title}
                  key={item?._id}
                  img={item?.course_image[0]?.path}
                  progress={100}
                  level={item?.course_level}
                  completed
                />
              ))}
          </div>
        )}
      </div>
    </ProfileLayout>
  );
};

export default AdminCourses;

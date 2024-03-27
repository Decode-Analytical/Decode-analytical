import React, { useEffect } from "react";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import StatsCard from "../../../components/AdminDashboard/StatsCard";
import DataErrMsg from "../../../components/DataErrMsg";
import NoDataMsg from "../../../components/NoDataMsg";
import ProfileLayout from "../../../components/layout/AdminProfileLayout";
import BannerSkeleton from "../../../components/adminCourses/BannerSkeleton";
import CourseBanner from "../../../components/adminCourses/CourseBanner";
import {
  useFetchAdminCourses,
  useFetchCourseVisit,
} from "../../../hooks/useFetchAdmin";

const AdminCourses = () => {
  const { fetchCourseVisit, courseVisit } = useFetchCourseVisit();

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
          </>
        ) : error ? (
          <DataErrMsg />
        ) : courses.length < 1 ? (
          <NoDataMsg />
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
        ) : error ? (
          <DataErrMsg />
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

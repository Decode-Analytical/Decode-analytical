import React, { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import StatsCard from "../../../components/AdminDashboard/StatsCard";
import DataErrMsg from "../../../components/DataErrMsg";
import NoDataMsg from "../../../components/NoDataMsg";
import CourseBanner from "../../../components/adminCourses/CourseBanner";
// import ProfileLayout from "../../../components/layout/AdminProfileLayout";
import {
  useFetchAdminCourses,
  useFetchCourseVisit,
} from "../../../hooks/useFetchAdmin";
import axios from "axios";
import { ErrorToast, SuccessToast } from "../../../utils/toast";

import urls from "../../../utils/Url";
import DeleteModal from "../../../components/adminCourses/DeleteModal";
import PageLoader from "../../../components/loader/PageLoader";

const AdminCourses = () => {
  const [deleteCoursePopup, setDeleteCoursePopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState();

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
    error: coursesError,
  } = useFetchAdminCourses();

  useEffect(() => {
    fetchCourseVisit();
    fetchCourses();
  }, []);

  const courseVisitData = courseVisit?.visitCount;
  const coursesData = courses?.courses;

  const handleCourseDelete = async () => {
    setDeleteCoursePopup(true);
    setLoading(true);
    const token = JSON.parse(localStorage.getItem("user")).token;
    try {
      const response = await axios.delete(urls.adminDeleteCourseById(id), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!id) {
        return;
      }
      if (response.status === 200 || response.status === 201) {
        SuccessToast("Course deleted successfully");
        fetchCourses();
        closePopup();
      }
    } catch (error) {
      ErrorToast("An error occurred while deleting the course");
    } finally {
      setLoading(false);
    }
  };

  // Receive ID from CourseBanner
  const handlePopup = (id) => {
    setDeleteCoursePopup(true);
    setId(id); // Set ID to state
  };

  const closePopup = () => {
    setDeleteCoursePopup(false);
  };

  if (courseVisitLoading || coursesLoading) {
    return <PageLoader />;
  }

  return (
    <>
      {deleteCoursePopup && (
        <DeleteModal
          closePopup={closePopup}
          handleCourseDelete={handleCourseDelete}
          loading={loading}
          text={
            "Are you sure you want to remove this course? You cannot undo this action."
          }
        />
      )}
      <div className="flex justify-end">
        <Link
          className="flex items-center py-2 md:py-3 px-4 rounded-lg font-semibold md:font-extrabold gap-2 bg-blue1 text-white"
          to={"/admin-dashboard/courses/create-new-course"}
        >
          <div className="flex gap-2 items-center">
            <IoIosAdd className="font-extrabold text-2xl" />
            <p>New Course</p>
          </div>
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row gap-7 lg:gap-20 mt-[45px] md:mt-[65px] ">
        <StatsCard title={"Courses Created"} count={coursesData?.length} />
        <StatsCard title={"Daily Course Visit"} count={courseVisitData} />
      </div>
      <div className="my-[45px]">
        <h2 className="font-bold text-2xl">Ongoing</h2>
        {coursesData?.length < 1 ? (
          <NoDataMsg />
        ) : (
          <div>
            {coursesData
              ?.filter((item) => item.isUploadedCompleted === false)
              .map((item) => (
                <CourseBanner
                  title={item?.course_title}
                  key={item?._id}
                  img={item?.course_image[0]?.path}
                  progress={50}
                  level={item?.course_level}
                  id={item?._id}
                  handlePopup={handlePopup}
                  ongoing
                />
              ))}
          </div>
        )}
      </div>
      <div>
        <h2 className="font-bold text-2xl">Completed</h2>
        {coursesError ? (
          <DataErrMsg />
        ) : (
          <div>
            {coursesData
              ?.filter((item) => item.isUploadedCompleted === true)
              .map((item) => (
                <CourseBanner
                  title={item?.course_title}
                  key={item?._id}
                  img={item?.course_image[0]?.path}
                  progress={100}
                  level={item?.course_level}
                  id={item?._id}
                  completed
                  handlePopup={handlePopup}
                />
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AdminCourses;

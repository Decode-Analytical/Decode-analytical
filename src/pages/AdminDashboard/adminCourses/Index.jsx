import React, { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import StatsCard from "../../../components/AdminDashboard/StatsCard";
import DataErrMsg from "../../../components/DataErrMsg";
import NoDataMsg from "../../../components/NoDataMsg";
import CourseBanner from "../../../components/adminCourses/CourseBanner";
import ProfileLayout from "../../../components/layout/AdminProfileLayout";
import {
  useFetchAdminCourses,
  useFetchCourseVisit,
} from "../../../hooks/useFetchAdmin";
import ModalContainer from "../../../components/modal/ModalContainer";
import axios from "axios";
import { IoWarning } from "react-icons/io5";
import { ErrorToast, SuccessToast } from "../../../utils/toast";
import LoadingSpinner from "../../../components/LoadingSpinner";
import urls from "../../../utils/Url";

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

  return (
    <ProfileLayout
      title={"Courses"}
      isLoading={coursesLoading || courseVisitLoading}
    >
      {deleteCoursePopup && (
        <ModalContainer>
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex justify-between border-b-[1px] pb-4">
                <h3 className="font-semibold text-xl">Warning</h3>
                <IoWarning className="text-red-700 text-2xl" />
              </div>
              <div className="mt-4">
                <p>
                  Are you sure you want to remove this course? You cannot undo
                  this
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <button
                className="border px-4 py-2 rounded-lg"
                onClick={closePopup}
              >
                Cancel
              </button>
              <button
                className="bg-red-700 text-white1 px-4 py-2 rounded-lg"
                onClick={handleCourseDelete}
                disabled={loading}
              >
                {loading ? (
                  <div className="w-[66px]">
                    <LoadingSpinner color={"white"} />
                  </div>
                ) : (
                  "Remove"
                )}
              </button>
            </div>
          </div>
        </ModalContainer>
      )}
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
    </ProfileLayout>
  );
};

export default AdminCourses;

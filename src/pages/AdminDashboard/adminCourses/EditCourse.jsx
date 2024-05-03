import React, { useEffect } from "react";
import ProfileLayout from "../../../components/layout/AdminProfileLayout";
import Button from "../../../components/Button";
import { useFetchCourseById } from "../../../hooks/useFetchAdmin";
import { useParams } from "react-router-dom";
// import { Heading } from "../../../components/Heading";
import { FiEdit } from "react-icons/fi";
import ToggleBtn from "../../../components/ToggleBtn";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../components/LoadingSpinner";

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    fetchData: fetchCourse,
    data: course,
    isLoading: courseLoading,
    error: courseError,
  } = useFetchCourseById(id);

  useEffect(() => {
    fetchCourse();
  }, []);

  const courseData = course?.course;

  return (
    <ProfileLayout>
      {/* <Heading mb="mb-2" /> */}
      {courseLoading ? (
        <div className="grid place-items-center w-full h-[70vh]">
          <LoadingSpinner />
        </div>
      ) : courseError ? (
        <div className="grid place-items-center w-full h-[70vh]">
          <p>{courseError}</p>
        </div>
      ) : (
        <div>
          <div className="flex w-full justify-center mb-6">
            <img
              src={courseData?.course_image[0]?.path}
              className="w-full h-[400px] object-cover rounded-lg object-center"
              alt={courseData?.course_title}
            />
          </div>
          <h2 className="text-2xl font-semibold mb-6">
            {courseData?.course_title}
          </h2>
          <div className="flex justify-between w-full mb-5">
            <p className="font-semibold">About Course</p>

            <FiEdit
              onClick={() => navigate("/admin-dashboard/courses")}
              className="cursor-pointer text-xl"
            />
          </div>
          <div className="mb-16">{courseData?.course_description}</div>
          <div className="flex gap-4 mb-12">
            <p>Enable Enrollment for this Course</p>
            <ToggleBtn />
          </div>
          <div className="w-full flex justify-center">
            <Button
              type={"submit"}
              className={"w-full md:w-1/2 text-lg"}
              py={"py-5"}
            >
              {/* {loading ? (
          <LoadingSpinner color={"white"} />
        ) : ( */}
              Recreate Course
              {/* )} */}
            </Button>
          </div>
        </div>
      )}
    </ProfileLayout>
  );
};

export default EditCourse;

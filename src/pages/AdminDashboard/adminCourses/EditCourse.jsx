import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../../components/Button";
import { Heading } from "../../../components/Heading";
import ToggleBtn from "../../../components/ToggleBtn";
// import ProfileLayout from "../../../components/layout/AdminProfileLayout";
import { useFetchCourseById } from "../../../hooks/useFetchAdmin";

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
    <>
      <Heading mb="mb-2" />
      {courseError ? (
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
          <p className="font-semibold mb-5">About Course</p>

          <div className="mb-16">{courseData?.course_description}</div>
          <div className="flex gap-4 mb-12">
            <p>Enable Enrollment for this Course</p>
            <ToggleBtn />
          </div>
          <div className="w-full flex justify-center">
            <Button
              onClick={() =>
                navigate(`/admin-dashboard/courses/${id}/course-details`)
              }
              className={"w-full md:w-1/2 text-lg"}
              py={"py-5"}
            >
              Go to edit course module
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default EditCourse;

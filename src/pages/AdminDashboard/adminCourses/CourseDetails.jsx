import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Heading } from "../../../components/Heading";
// import ToggleBtn from "../../../components/ToggleBtn";
// import ProfileLayout from "../../../components/layout/AdminProfileLayout";
import { useFetchCourseById } from "../../../hooks/useFetchAdmin";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { Button, LinkButton } from "../../../components/Button";
import ToggleBtn from "../../../components/ToggleBtn";
import PageLoader from "../../../components/loader/PageLoader";

const Btn = ({ Icon, text, danger, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1 ${danger ? "text-[#E81515]" : ""}`}
    >
      <Icon />
      <div>{text}</div>
    </button>
  );
};

const CourseDetails = () => {
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

  if (courseLoading) {
    return <PageLoader />;
  }

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
          <div className="flex justify-between w-full mb-5">
            <p className="font-semibold">About Course</p>
          </div>
          <div className="mb-16">{courseData?.course_description}</div>
          <p className="font-semibold mb-5">Course Modules</p>
          {courseData?.modules?.map((module) => (
            <div key={module._id} className="flex justify-between mb-6">
              <Link to={``} className="font-bold">
                {module.module_title}
              </Link>
              <div className="flex gap-3">
                <Btn
                  Icon={FiEdit}
                  text={"Change"}
                  onClick={() => navigate(`/admin-dashboard/courses/${id}`)}
                />
                <Btn danger Icon={RiDeleteBinLine} text={"Remove"} />
              </div>
            </div>
          ))}
          <div className="flex justify-end mt-16">
            <LinkButton
              to={`/admin-dashboard/courses/create-new-course/create-video-module/${id}`}
              leftIcon={<GoPlus />}
            >
              Add More
            </LinkButton>
          </div>
          <div className="flex gap-4  mt-24">
            <p>Enable Enrollment for this Course</p>
            <ToggleBtn />
          </div>
          <div className=" flex justify-center mt-10">
            <LinkButton
              className="w-full"
              variant="link"
              to="/admin-dashboard/courses"
              py={"py-5"}
              //   px={"px-10"}
            >
              Complete my course
            </LinkButton>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseDetails;

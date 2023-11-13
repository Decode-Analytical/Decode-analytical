import React, { useState } from "react";
import { useAuthContext } from "../../../hooks/authContext";
import CourseInfo from "./CourseInfo";
import CoverImage from "./CoverImage";
// import { useNewMeetingMutation } from "../../../redux/Meeting/Meeting";

function CourseForm({ navigate }) {
  const { user } = useAuthContext();
  const baseURL = import.meta.env.VITE_BASE_URL
  // console.log(user)
  const [isLoading, setIsLoading] = useState(false);
  
  const [error, setError] = useState(null);

  const [courseData, setCourseData] = useState({
    isPaid_course: "free",
    course_title: "",
    course_description: "",
    isPrice_course: "",
    skill: "Basic",
    course_language: "English",
    instructor: "",
    course_image: null,
    category: "Programming",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(name)
    setCourseData({ ...courseData, [name]: value });
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    setCourseData({ ...courseData, course_image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const formData = new FormData();
    formData.set("isPaid_course", courseData.isPaid_course);
    formData.set("course_title", courseData.course_title);
    formData.set("course_description", courseData.course_description);
    formData.set("isPrice_course", courseData.isPrice_course);
    formData.set("skill", courseData.skill);
    formData.set("instructor", courseData.instructor);
    formData.set("course_language", courseData.course_language);
    formData.set("category", courseData.category);
    if (courseData.course_image) {
      formData.set("course_image", courseData.course_image);
    }

    try {
      const response = await fetch(
        `${baseURL}course/registeredCourse`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data)
        const res = data.newCourse;
        const id = res._id;
        setIsLoading(false);
        setError(null); // Clear any previous error

        navigate(`/newmodule/${id}`);
      } else {
        const errorData = await response.json();
        setError(errorData.message);
        setIsLoading(false);
      }
    } catch (error) {
      setError("Network error occurred.");
      setIsLoading(false);
      console.error("Network error:", error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-200 p-7 shadow-md grid sm:grid-cols-2 gap-10 my-10"
    >
      <CourseInfo
        courseData={courseData}
        handleInputChange={handleInputChange}
      />
      <CoverImage
        courseData={courseData}
        handleCoverImageChange={handleCoverImageChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
      />
    </form>
  );
}

export default CourseForm;

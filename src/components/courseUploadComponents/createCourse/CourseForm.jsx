import React, { useState } from "react";
import { useAuthContext } from "../../../hooks/authContext";
import CourseInfo from "./CourseInfo";
import CoverImage from "./CoverImage";

function CourseForm({ navigate }) {
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [courseData, setCourseData] = useState({
    name: "",
    course_title: "",
    course_description: "",
    price: "",
    skill: "Basic",
    course_language: "",
    instructor: "",
    coverImage: null,
    category: "Programming",
  });

  const [courseId, setCourseId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    setCourseData({ ...courseData, coverImage: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const formData = new FormData();
    formData.set("name", courseData.name);
    formData.set("course_title", courseData.course_title);
    formData.set("course_description", courseData.course_description);
    formData.set("price", courseData.price);
    formData.set("skill", courseData.skill);
    formData.set("instructor", courseData.instructor);
    formData.set("course_language", courseData.course_language);
    formData.set("category", courseData.category);
    if (courseData.coverImage) {
      formData.set("coverImage", courseData.coverImage);
    }

    try {
      const response = await fetch(
        "https://decode-mnjh.onrender.com/api/course/registeredCourse",
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
        setCourseId(data.courseId);
        setIsLoading(false);
        setError(null); // Clear any previous error

        // Use a functional update to ensure you're using the latest courseId value
        navigate((prevCourseId) => `/newmodule/${prevCourseId || data.id}`);
      } else {
        const errorData = await response.json();
        setError(errorData.message);
        setIsLoading(false);
      }
    } catch (error) {
      setError("Network error occurred.");
      setIsLoading(false);
    
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
